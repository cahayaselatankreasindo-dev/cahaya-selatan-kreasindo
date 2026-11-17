import {
  extensionForContentType,
  isSameOrigin,
  jsonResponse,
  normalizeLead,
  postToAppsScript,
  safeFileName,
  verifyTurnstile,
} from '../_shared.js';

const MAX_FILES = 5;
const MAX_FILE_BYTES = 15 * 1024 * 1024;
const MAX_TOTAL_FILE_BYTES = 30 * 1024 * 1024;

async function hasExpectedFileSignature(file, extension) {
  const bytes = new Uint8Array(await file.slice(0, 8).arrayBuffer());
  if (extension === 'pdf') return String.fromCharCode(...bytes.slice(0, 5)) === '%PDF-';
  if (extension === 'jpg') return bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
  if (extension === 'png') return bytes.length >= 8 &&
    bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47 &&
    bytes[4] === 0x0d && bytes[5] === 0x0a && bytes[6] === 0x1a && bytes[7] === 0x0a;
  return false;
}

export async function onRequestPost({ request, env }) {
  if (!isSameOrigin(request)) return jsonResponse({ ok: false, code: 'ORIGIN_NOT_ALLOWED' }, 403);

  const appsScriptUrl = String(env.CSK_APPS_SCRIPT_URL || '');
  const intakeSecret = String(env.CSK_PUBLIC_INTAKE_SECRET || '');
  if (!/^https:\/\/script\.google\.com\/macros\/s\/[^/]+\/exec\/?$/.test(appsScriptUrl) || intakeSecret.length < 32) {
    return jsonResponse({ ok: false, code: 'FORM_NOT_CONFIGURED' }, 503);
  }

  const contentType = request.headers.get('Content-Type') || '';
  if (!contentType.toLowerCase().startsWith('multipart/form-data')) {
    return jsonResponse({ ok: false, code: 'MULTIPART_REQUIRED' }, 415);
  }

  const contentLength = Number(request.headers.get('Content-Length') || 0);
  if (contentLength > MAX_TOTAL_FILE_BYTES + 256 * 1024) {
    return jsonResponse({ ok: false, code: 'REQUEST_TOO_LARGE' }, 413);
  }

  let form;
  try {
    form = await request.formData();
  } catch {
    return jsonResponse({ ok: false, code: 'INVALID_FORM_DATA' }, 400);
  }

  // Honeypot: return a neutral success to bots without writing to the CRM.
  if (String(form.get('companyFax') || '').trim()) {
    return jsonResponse({ ok: true, accepted: true });
  }

  let rawLead;
  try {
    rawLead = JSON.parse(String(form.get('lead') || '{}'));
  } catch {
    return jsonResponse({ ok: false, code: 'INVALID_LEAD_PAYLOAD' }, 400);
  }

  let lead;
  try {
    lead = normalizeLead(rawLead);
  } catch (error) {
    return jsonResponse({ ok: false, code: String(error.message || 'INVALID_LEAD') }, 400);
  }

  const challenge = await verifyTurnstile(
    String(form.get('cf-turnstile-response') || ''),
    request,
    env,
    'csk_lead_intake',
  );
  if (!challenge.ok) {
    const status = challenge.code === 'TURNSTILE_NOT_CONFIGURED' || challenge.code === 'TURNSTILE_UNAVAILABLE' ? 503 : 400;
    return jsonResponse({ ok: false, code: challenge.code }, status);
  }

  const files = form.getAll('designFiles')
    .filter((file) => file && typeof file !== 'string' && typeof file.arrayBuffer === 'function' && file.size > 0);

  if (files.length > MAX_FILES) return jsonResponse({ ok: false, code: 'TOO_MANY_FILES' }, 400);
  const totalBytes = files.reduce((sum, file) => sum + Number(file.size || 0), 0);
  if (totalBytes > MAX_TOTAL_FILE_BYTES) return jsonResponse({ ok: false, code: 'FILES_TOO_LARGE' }, 413);

  if (files.length && !env.CSK_DESIGN_FILES) {
    return jsonResponse({ ok: false, code: 'FILE_STORAGE_NOT_CONFIGURED' }, 503);
  }

  const uploadedKeys = [];
  const designFiles = [];

  try {
    for (const file of files) {
      const extension = extensionForContentType(file.type);
      if (!extension || file.size > MAX_FILE_BYTES ||
          !(await hasExpectedFileSignature(file, extension))) {
        throw new Error('INVALID_FILE_TYPE_OR_SIZE');
      }

      const key = `incoming/${lead.submissionId}/${crypto.randomUUID()}.${extension}`;
      const originalName = safeFileName(file.name);
      await env.CSK_DESIGN_FILES.put(key, await file.arrayBuffer(), {
        httpMetadata: {
          contentType: file.type,
          cacheControl: 'private, no-store',
        },
        customMetadata: {
          submissionId: lead.submissionId,
          originalName,
          uploadedAt: new Date().toISOString(),
        },
      });
      uploadedKeys.push(key);
      designFiles.push({
        key,
        name: originalName,
        contentType: file.type,
        size: file.size,
      });
    }

    lead.designFiles = designFiles;
    const result = await postToAppsScript(appsScriptUrl, {
      action: 'public_lead_intake',
      secret: intakeSecret,
      lead,
    });

    // A retry with the same submission ID is idempotent. Remove the new
    // duplicate uploads; the original Lead retains its original file keys.
    if (result.duplicate && uploadedKeys.length) {
      await env.CSK_DESIGN_FILES.delete(uploadedKeys);
    }

    return jsonResponse({
      ok: true,
      duplicate: Boolean(result.duplicate),
      leadId: result.id || null,
    }, result.duplicate ? 200 : 201);
  } catch (error) {
    if (uploadedKeys.length && env.CSK_DESIGN_FILES) {
      try {
        await env.CSK_DESIGN_FILES.delete(uploadedKeys);
      } catch {
        // An orphan may remain if R2 cleanup is unavailable; do not mask the
        // original failure or expose storage details to the public response.
      }
    }

    const code = String(error && error.message || '');
    if (code === 'INVALID_FILE_TYPE_OR_SIZE') {
      return jsonResponse({ ok: false, code }, 400);
    }
    return jsonResponse({ ok: false, code: 'SUBMISSION_FAILED' }, 502);
  }
}
