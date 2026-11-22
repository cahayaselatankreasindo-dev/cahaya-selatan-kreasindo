const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }
});

const clean = (value, max = 500) => String(value ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max);

async function hashIp(ip, secret) {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const signature = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(ip));
  return Array.from(new Uint8Array(signature), (byte) => byte.toString(16).padStart(2, '0')).join('');
}

export async function onRequestPost({ request, env }) {
  const origin = request.headers.get('Origin');
  const requestOrigin = new URL(request.url).origin;
  if (origin && origin !== requestOrigin) return json({ ok: false, message: 'Origin tidak diizinkan.' }, 403);
  if (!request.headers.get('content-type')?.toLowerCase().includes('application/json')) return json({ ok: false, message: 'Format permintaan tidak didukung.' }, 415);
  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > 20_000) return json({ ok: false, message: 'Data permintaan terlalu besar.' }, 413);
  if (!env.DB || !env.QUOTE_RATE_LIMIT_SECRET) return json({ ok: false, message: 'Sistem penawaran belum siap.' }, 503);

  let body;
  try { body = await request.json(); } catch { return json({ ok: false, message: 'Data formulir tidak valid.' }, 400); }
  if (clean(body.website, 200)) return new Response(null, { status: 204 });
  const startedAt = Number(body.formStartedAt || 0);
  if (!Number.isFinite(startedAt) || startedAt <= 0 || Date.now() - startedAt < 1200 || Date.now() - startedAt > 86_400_000) {
    return json({ ok: false, message: 'Mohon muat ulang halaman dan coba kembali.' }, 400);
  }
  if (body.consent !== true) return json({ ok: false, message: 'Persetujuan penggunaan data diperlukan.' }, 400);

  const contactName = clean(body.contactName, 120);
  const contactPhone = clean(body.contactPhone, 24).replace(/[\s()-]/g, '');
  const contactEmail = clean(body.contactEmail, 160).toLowerCase();
  const productName = clean(body.productName, 160);
  const productSlug = clean(body.productSlug, 100);
  const serviceName = clean(body.serviceName, 160);
  if (!contactName || !/^\+?\d{8,16}$/.test(contactPhone) || !productName) return json({ ok: false, message: 'Nama, nomor WhatsApp, dan produk wajib diisi dengan benar.' }, 400);
  if (contactEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)) return json({ ok: false, message: 'Format email tidak valid.' }, 400);
  if (productSlug && !/^[a-z0-9-]+$/.test(productSlug)) return json({ ok: false, message: 'Identitas produk tidak valid.' }, 400);

  const reference = body.reference && typeof body.reference === 'object' ? body.reference : null;
  const referenceName = reference ? clean(reference.name, 180) : null;
  const referenceMime = reference ? clean(reference.mime, 100) : null;
  const referenceSize = reference ? Number(reference.size) : null;
  if (reference && (!referenceName || !Number.isFinite(referenceSize) || referenceSize < 0 || referenceSize > 10 * 1024 * 1024 || !/^(image\/(jpeg|png|webp|gif)|application\/pdf)$/i.test(referenceMime))) {
    return json({ ok: false, message: 'File referensi harus berupa JPG, PNG, WebP, GIF, atau PDF maksimal 10 MB.' }, 400);
  }

  const ip = request.headers.get('CF-Connecting-IP');
  if (ip) {
    const ipHash = await hashIp(ip, env.QUOTE_RATE_LIMIT_SECRET);
    const day = new Date().toISOString().slice(0, 10);
    const rate = await env.DB.prepare(`INSERT INTO quote_rate_limits (ip_hash, window_day, request_count)
      VALUES (?, ?, 1)
      ON CONFLICT(ip_hash, window_day) DO UPDATE SET request_count = request_count + 1
      RETURNING request_count`).bind(ipHash, day).first();
    if (Number(rate?.request_count || 0) > 10) return json({ ok: false, message: 'Batas pengiriman harian tercapai. Silakan hubungi CSK melalui WhatsApp.' }, 429);
  }

  const id = crypto.randomUUID();
  const now = new Date().toISOString();
  let sourceUrl = '';
  try {
    const candidate = new URL(clean(body.sourceUrl, 1000));
    if (candidate.origin === requestOrigin) sourceUrl = candidate.origin + candidate.pathname;
  } catch { /* Keep source URL empty when it is invalid. */ }

  const insertQuote = env.DB.prepare(`INSERT INTO quote_requests (
    id, status, contact_name, contact_phone, contact_email, company, product_slug, product_name,
    service_name, size, quantity, material, finishing, location, deadline, notes,
    reference_name, reference_mime, reference_size, source_url, source_ip_hash, consent_at
  ) VALUES (?, 'new', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`).bind(
    id, contactName, contactPhone, contactEmail || null, clean(body.company, 160) || null,
    productSlug || null, productName, serviceName || null, clean(body.size, 120) || null,
    clean(body.quantity, 60) || null, clean(body.material, 100) || null, clean(body.finishing, 100) || null,
    clean(body.location, 160) || null, clean(body.deadline, 100) || null, clean(body.notes, 2000) || null,
    referenceName, referenceMime, referenceSize, sourceUrl || null, ip ? await hashIp(ip, env.QUOTE_RATE_LIMIT_SECRET) : null, now
  );
  const history = env.DB.prepare(`INSERT INTO quote_status_history (id, quote_id, from_status, to_status, changed_by, note)
    VALUES (?, ?, NULL, 'new', 'system', 'Permintaan dibuat melalui formulir website')`).bind(crypto.randomUUID(), id);
  try {
    await env.DB.batch([insertQuote, history]);
  } catch (error) {
    console.error('quote insert failed', error);
    return json({ ok: false, message: 'Permintaan belum dapat disimpan. Silakan lanjutkan melalui WhatsApp.' }, 500);
  }
  return json({ ok: true, id, createdAt: now }, 201);
}