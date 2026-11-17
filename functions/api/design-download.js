import {
  getAllowedCorsHeaders,
  isValidAppsScriptUrl,
  jsonResponse,
  postToAppsScript,
  safeFileName,
} from '../_shared.js';

const LEAD_ID_PATTERN = /^WEB-[A-Z0-9]{10,30}$/;
const FILE_KEY_PATTERN = /^incoming\/[A-Za-z0-9_-]{16,100}\/[0-9a-f-]{36}\.(pdf|jpg|png)$/i;

function corsError(payload, status, cors) {
  return jsonResponse(payload, status, cors || {});
}

export async function onRequestOptions({ request, env }) {
  const cors = getAllowedCorsHeaders(request, env);
  if (!cors) return new Response(null, { status: 403 });
  return new Response(null, { status: 204, headers: cors });
}

export async function onRequestPost({ request, env }) {
  const cors = getAllowedCorsHeaders(request, env);
  if (!cors) return corsError({ ok: false, code: 'ORIGIN_NOT_ALLOWED' }, 403);

  if (!isValidAppsScriptUrl(env.CSK_APPS_SCRIPT_URL) || !env.CSK_DESIGN_FILES) {
    return corsError({ ok: false, code: 'DOWNLOAD_NOT_CONFIGURED' }, 503, cors);
  }

  const contentLength = Number(request.headers.get('Content-Length') || 0);
  if (contentLength > 16 * 1024) return corsError({ ok: false, code: 'REQUEST_TOO_LARGE' }, 413, cors);

  let payload;
  try {
    payload = await request.json();
  } catch {
    return corsError({ ok: false, code: 'INVALID_REQUEST' }, 400, cors);
  }

  const sessionId = String(payload.sessionId || '');
  const leadId = String(payload.leadId || '');
  const key = String(payload.key || '');
  if (sessionId.length < 20 || sessionId.length > 200 ||
      !LEAD_ID_PATTERN.test(leadId) || !FILE_KEY_PATTERN.test(key)) {
    return corsError({ ok: false, code: 'INVALID_FILE_REFERENCE' }, 400, cors);
  }

  try {
    // Apps Script validates the active Business OS session and confirms that
    // this exact R2 key belongs to the requested Lead before R2 is read.
    const authorization = await postToAppsScript(env.CSK_APPS_SCRIPT_URL, {
      action: 'authorize_design_download',
      sessionId,
      leadId,
      key,
    });
    if (!authorization.authorized) {
      return corsError({ ok: false, code: 'DOWNLOAD_NOT_AUTHORIZED' }, 403, cors);
    }

    const object = await env.CSK_DESIGN_FILES.get(key);
    if (!object) return corsError({ ok: false, code: 'FILE_NOT_FOUND' }, 404, cors);

    const filename = safeFileName(object.customMetadata?.originalName || 'referensi');
    const contentType = object.httpMetadata?.contentType || 'application/octet-stream';
    const headers = {
      ...cors,
      'Content-Type': contentType,
      'Content-Disposition': `attachment; filename="referensi"; filename*=UTF-8''${encodeURIComponent(filename)}`,
      'Cache-Control': 'private, no-store, max-age=0',
      'X-Content-Type-Options': 'nosniff',
    };
    return new Response(object.body, { status: 200, headers });
  } catch {
    return corsError({ ok: false, code: 'DOWNLOAD_NOT_AUTHORIZED' }, 403, cors);
  }
}
