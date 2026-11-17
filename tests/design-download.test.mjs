import test from 'node:test';
import assert from 'node:assert/strict';
import { onRequestOptions, onRequestPost } from '../functions/api/design-download.js';

const appsScriptUrl = 'https://script.google.com/macros/s/deployment-id/exec';
const allowedOrigin = 'https://cahayaselatankreasindo-dev.github.io';
const key = 'incoming/csk-submission-1234567890/12345678-1234-1234-1234-123456789abc.pdf';
const env = {
  CSK_APPS_SCRIPT_URL: appsScriptUrl,
  CSK_CRM_ALLOWED_ORIGINS: allowedOrigin,
  CSK_DESIGN_FILES: {
    async get(requestedKey) {
      assert.equal(requestedKey, key);
      return {
        body: new Blob(['%PDF-1.7 private test']),
        customMetadata: { originalName: 'brief proyek.pdf' },
        httpMetadata: { contentType: 'application/pdf' },
      };
    },
  },
};

function request(origin = allowedOrigin) {
  return new Request('https://cahayaselatankreasindo.my.id/api/design-download', {
    method: 'POST',
    headers: { Origin: origin, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      sessionId: 'S'.repeat(43),
      leadId: 'WEB-1234567890ABCDEF1234',
      key,
    }),
  });
}

test('private design download requires CRM authorization before reading R2', async () => {
  const originalFetch = globalThis.fetch;
  let authorizedPayload;
  globalThis.fetch = async (url, options) => {
    assert.equal(String(url), appsScriptUrl);
    authorizedPayload = JSON.parse(options.body);
    return new Response(JSON.stringify({ status: 'success', authorized: true }), { status: 200 });
  };
  try {
    const response = await onRequestPost({ request: request(), env });
    assert.equal(response.status, 200);
    assert.equal(response.headers.get('Access-Control-Allow-Origin'), allowedOrigin);
    assert.match(response.headers.get('Content-Disposition'), /brief%20proyek\.pdf/);
    assert.equal(await response.text(), '%PDF-1.7 private test');
    assert.equal(authorizedPayload.action, 'authorize_design_download');
    assert.equal(authorizedPayload.key, key);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('private design download rejects an unapproved CRM origin', async () => {
  const originalFetch = globalThis.fetch;
  let called = false;
  globalThis.fetch = async () => { called = true; throw new Error('must not be called'); };
  try {
    const response = await onRequestPost({ request: request('https://attacker.example'), env });
    assert.equal(response.status, 403);
    assert.equal(called, false);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('private design download denies access when Apps Script rejects authorization', async () => {
  const originalFetch = globalThis.fetch;
  let bucketRead = false;
  const protectedEnv = {
    ...env,
    CSK_DESIGN_FILES: { async get() { bucketRead = true; return null; } },
  };
  globalThis.fetch = async () => new Response(JSON.stringify({
    status: 'success',
    authorized: false,
  }), { status: 200 });
  try {
    const response = await onRequestPost({ request: request(), env: protectedEnv });
    assert.equal(response.status, 403);
    assert.equal(bucketRead, false);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('private design download preflight returns only the configured CRM origin', async () => {
  const response = await onRequestOptions({
    request: new Request('https://cahayaselatankreasindo.my.id/api/design-download', {
      method: 'OPTIONS',
      headers: { Origin: allowedOrigin },
    }),
    env,
  });
  assert.equal(response.status, 204);
  assert.equal(response.headers.get('Access-Control-Allow-Origin'), allowedOrigin);
});
