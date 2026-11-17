const JSON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store, max-age=0',
  'X-Content-Type-Options': 'nosniff',
};

export function jsonResponse(payload, status = 200, headers = {}) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { ...JSON_HEADERS, ...headers },
  });
}

export function isSameOrigin(request) {
  const origin = request.headers.get('Origin');
  if (!origin) return false;
  try {
    return origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}

export function getAllowedCorsHeaders(request, env) {
  const origin = request.headers.get('Origin') || '';
  const allowed = String(env.CSK_CRM_ALLOWED_ORIGINS || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  if (!origin || !allowed.includes(origin)) return null;

  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin',
  };
}

export function isValidAppsScriptUrl(value) {
  try {
    const url = new URL(String(value || ''));
    return url.protocol === 'https:' &&
      url.hostname === 'script.google.com' &&
      /^\/macros\/s\/[^/]+\/exec\/?$/.test(url.pathname);
  } catch {
    return false;
  }
}

export async function postToAppsScript(url, payload) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    body: JSON.stringify(payload),
  });

  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error('APPS_SCRIPT_INVALID_RESPONSE');
  }

  if (!response.ok || !data || data.status !== 'success') {
    throw new Error('APPS_SCRIPT_REQUEST_FAILED');
  }
  return data;
}

export async function verifyTurnstile(token, request, env, expectedAction) {
  const secret = String(env.CSK_TURNSTILE_SECRET_KEY || '');
  if (secret.length < 20) return { ok: false, code: 'TURNSTILE_NOT_CONFIGURED' };
  if (!token || String(token).length > 4096) return { ok: false, code: 'TURNSTILE_REQUIRED' };

  const body = new URLSearchParams({
    secret,
    response: String(token),
  });
  const remoteIp = request.headers.get('CF-Connecting-IP');
  if (remoteIp) body.set('remoteip', remoteIp);

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });
    if (!response.ok) return { ok: false, code: 'TURNSTILE_UNAVAILABLE' };

    const result = await response.json();
    const hostname = new URL(request.url).hostname;
    if (!result.success) return { ok: false, code: 'TURNSTILE_FAILED' };
    if (result.hostname && result.hostname !== hostname) return { ok: false, code: 'TURNSTILE_HOST_MISMATCH' };
    if (result.action && result.action !== expectedAction) return { ok: false, code: 'TURNSTILE_ACTION_MISMATCH' };
    return { ok: true };
  } catch {
    return { ok: false, code: 'TURNSTILE_UNAVAILABLE' };
  }
}

function cleanText(value, max, field) {
  const text = String(value ?? '').trim();
  if (text.length > max) throw new Error('INVALID_' + field.toUpperCase());
  return text;
}

function safeHttpsUrl(value, field) {
  const text = cleanText(value, 1000, field);
  if (!text) return '';
  let url;
  try {
    url = new URL(text);
  } catch {
    throw new Error('INVALID_' + field.toUpperCase());
  }
  if (url.protocol !== 'https:' || !url.hostname || url.username || url.password) {
    throw new Error('INVALID_' + field.toUpperCase());
  }
  return url.href;
}

function safeClickId(value, field) {
  const text = cleanText(value, 200, field);
  if (text && !/^[A-Za-z0-9._~-]+$/.test(text)) throw new Error('INVALID_' + field.toUpperCase());
  return text;
}

export function normalizeLead(input) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('INVALID_LEAD');

  const submissionId = cleanText(input.submissionId, 100, 'submissionId');
  if (!/^[A-Za-z0-9_-]{16,100}$/.test(submissionId)) throw new Error('INVALID_SUBMISSION_ID');

  const name = cleanText(input.name, 160, 'name');
  const pic = cleanText(input.pic, 160, 'pic');
  const picTitle = cleanText(input.picTitle, 120, 'picTitle');
  const phone = cleanText(input.phone, 24, 'phone');
  const email = cleanText(input.email, 180, 'email');
  const projectType = cleanText(input.projectType, 120, 'projectType');
  const industry = cleanText(input.industry, 120, 'industry');
  const website = safeHttpsUrl(input.website, 'website');
  const dimensions = cleanText(input.dimensions, 300, 'dimensions');
  const location = cleanText(input.location, 180, 'location');
  const deadline = cleanText(input.deadline, 10, 'deadline');
  const notes = cleanText(input.notes, 1500, 'notes');

  if (name.length < 2) throw new Error('INVALID_NAME');
  if (pic.length < 2) throw new Error('INVALID_PIC');
  if (!/^\+?[0-9][0-9 ()-]{7,19}$/.test(phone)) throw new Error('INVALID_PHONE');
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('INVALID_EMAIL');
  if (!projectType) throw new Error('PROJECT_TYPE_REQUIRED');

  const quantityText = input.quantity === '' || input.quantity == null
    ? ''
    : String(input.quantity).trim();
  const quantity = quantityText === '' ? '' : Number(quantityText);
  if (quantity !== '' && (!Number.isSafeInteger(quantity) || quantity < 1 || quantity > 1000000)) {
    throw new Error('INVALID_QUANTITY');
  }

  if (deadline) {
    const parsed = new Date(deadline + 'T00:00:00Z');
    if (!/^\d{4}-\d{2}-\d{2}$/.test(deadline) ||
        Number.isNaN(parsed.getTime()) ||
        parsed.toISOString().slice(0, 10) !== deadline) {
      throw new Error('INVALID_DEADLINE');
    }
  }

  const designLinksInput = Array.isArray(input.designLinks) ? input.designLinks : [];
  if (designLinksInput.length > 5) throw new Error('TOO_MANY_DESIGN_LINKS');
  const designLinks = designLinksInput.map((value) => safeHttpsUrl(value, 'designLink'));

  const utmSource = cleanText(input.utmSource, 120, 'utmSource');
  const utmMedium = cleanText(input.utmMedium, 120, 'utmMedium');
  const utmCampaign = cleanText(input.utmCampaign, 180, 'utmCampaign');
  const utmTerm = cleanText(input.utmTerm, 180, 'utmTerm');
  const utmContent = cleanText(input.utmContent, 180, 'utmContent');
  const landingPage = cleanText(input.landingPage, 300, 'landingPage');
  const referrerHost = cleanText(input.referrerHost, 180, 'referrerHost').toLowerCase();

  if (landingPage && (!landingPage.startsWith('/') || landingPage.includes('?') || landingPage.includes('#'))) {
    throw new Error('INVALID_LANDING_PAGE');
  }
  if (referrerHost && !/^[a-z0-9.-]+$/.test(referrerHost)) throw new Error('INVALID_REFERRER_HOST');

  const allBriefFields = Boolean(dimensions && quantity !== '' && location && deadline);
  return {
    submissionId,
    name,
    pic,
    picTitle,
    phone,
    email,
    website,
    industry,
    intakeType: allBriefFields ? 'project_brief' : 'quick_contact',
    projectType,
    dimensions,
    quantity,
    location,
    deadline,
    notes,
    designLinks,
    utmSource,
    utmMedium,
    utmCampaign,
    utmTerm,
    utmContent,
    landingPage,
    referrerHost,
    gclid: safeClickId(input.gclid, 'gclid'),
    gbraid: safeClickId(input.gbraid, 'gbraid'),
    wbraid: safeClickId(input.wbraid, 'wbraid'),
    fbclid: safeClickId(input.fbclid, 'fbclid'),
    ttclid: safeClickId(input.ttclid, 'ttclid'),
    msclkid: safeClickId(input.msclkid, 'msclkid'),
  };
}

export function safeFileName(value) {
  const cleaned = String(value || 'referensi')
    .normalize('NFKC')
    .replace(/[\\/\u0000-\u001F\u007F]/g, '_')
    .replace(/^\.+/, '')
    .trim()
    .slice(0, 180);
  return cleaned || 'referensi';
}

export function extensionForContentType(contentType) {
  return ({
    'application/pdf': 'pdf',
    'image/jpeg': 'jpg',
    'image/png': 'png',
  })[String(contentType || '').toLowerCase()] || '';
}
