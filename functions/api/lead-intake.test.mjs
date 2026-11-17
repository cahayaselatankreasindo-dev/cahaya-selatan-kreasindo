import test from 'node:test';
import assert from 'node:assert/strict';
import { onRequestPost } from './lead-intake.js';

const appsScriptUrl = 'https://script.google.com/macros/s/deployment-id/exec';
const env = {
  CSK_APPS_SCRIPT_URL: appsScriptUrl,
  CSK_PUBLIC_INTAKE_SECRET: 's'.repeat(48),
  CSK_TURNSTILE_SECRET_KEY: 'turnstile-secret-value',
};

function makeLead() {
  return {
    submissionId: 'csk-submission-1234567890',
    name: 'PT Contoh Indonesia',
    pic: 'Budi Santoso',
    phone: '081234567890',
    projectType: 'Rak display custom',
    designLinks: [],
    landingPage: '/permintaan-penawaran/',
  };
}

function makeRequest({ lead = makeLead(), origin = 'https://csk.test', honeypot = '', files = [] } = {}) {
  const form = new FormData();
  form.set('lead', JSON.stringify(lead));
  form.set('cf-turnstile-response', 'valid-turnstile-token');
  form.set('companyFax', honeypot);
  for (const file of files) form.append('designFiles', file.blob, file.name);
  return new Request('https://csk.test/api/lead-intake', {
    method: 'POST',
    headers: { Origin: origin },
    body: form,
  });
}

test('lead intake verifies Turnstile and proxies a create-only payload to Apps Script', async () => {
  const originalFetch = globalThis.fetch;
  let sentPayload;
  globalThis.fetch = async (url, options) => {
    if (String(url).includes('challenges.cloudflare.com')) {
      return new Response(JSON.stringify({
        success: true,
        hostname: 'csk.test',
        action: 'csk_lead_intake',
      }), { status: 200 });
    }
    if (String(url) === appsScriptUrl) {
      sentPayload = JSON.parse(options.body);
      return new Response(JSON.stringify({
        status: 'success',
        duplicate: false,
        id: 'WEB-1234567890ABCDEF1234',
      }), { status: 200 });
    }
    throw new Error('Unexpected fetch target');
  };

  try {
    const response = await onRequestPost({ request: makeRequest(), env });
    const payload = await response.json();
    assert.equal(response.status, 201);
    assert.equal(payload.ok, true);
    assert.equal(payload.leadId, 'WEB-1234567890ABCDEF1234');
    assert.equal(sentPayload.action, 'public_lead_intake');
    assert.equal(sentPayload.secret, env.CSK_PUBLIC_INTAKE_SECRET);
    assert.equal(sentPayload.lead.source, undefined);
    assert.equal(sentPayload.lead.status, undefined);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('lead intake rejects cross-origin submissions before calling third parties', async () => {
  const originalFetch = globalThis.fetch;
  let called = false;
  globalThis.fetch = async () => { called = true; throw new Error('must not be called'); };
  try {
    const response = await onRequestPost({
      request: makeRequest({ origin: 'https://attacker.example' }),
      env,
    });
    assert.equal(response.status, 403);
    assert.equal(called, false);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('honeypot submissions return neutral success without a CRM write', async () => {
  const originalFetch = globalThis.fetch;
  let called = false;
  globalThis.fetch = async () => { called = true; throw new Error('must not be called'); };
  try {
    const response = await onRequestPost({
      request: makeRequest({ honeypot: 'bot-filled-this' }),
      env,
    });
    assert.equal(response.status, 200);
    assert.equal((await response.json()).accepted, true);
    assert.equal(called, false);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('lead intake rejects a file whose MIME type does not match its signature', async () => {
  const originalFetch = globalThis.fetch;
  let crmCalled = false;
  globalThis.fetch = async (url) => {
    if (String(url).includes('challenges.cloudflare.com')) {
      return new Response(JSON.stringify({
        success: true,
        hostname: 'csk.test',
        action: 'csk_lead_intake',
      }), { status: 200 });
    }
    crmCalled = true;
    throw new Error('CRM must not be called for an invalid file');
  };
  const fakeBucket = {
    async put() { throw new Error('R2 must not receive invalid content'); },
    async delete() {},
  };
  try {
    const request = makeRequest({
      files: [{
        name: 'fake.pdf',
        blob: new Blob(['<html>not a PDF</html>'], { type: 'application/pdf' }),
      }],
    });
    const response = await onRequestPost({
      request,
      env: { ...env, CSK_DESIGN_FILES: fakeBucket },
    });
    assert.equal(response.status, 400);
    assert.equal((await response.json()).code, 'INVALID_FILE_TYPE_OR_SIZE');
    assert.equal(crmCalled, false);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
