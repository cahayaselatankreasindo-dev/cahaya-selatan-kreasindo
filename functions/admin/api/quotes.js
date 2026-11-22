import { requireAdmin } from '../../_lib/admin-auth.js';

const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }
});

export async function onRequestGet({ request, env }) {
  const auth = await requireAdmin(request, env);
  if (!auth.ok) return auth.response;
  if (!env.DB) return json({ ok: false, message: 'Database dashboard belum terhubung.' }, 503);

  const url = new URL(request.url);
  const status = url.searchParams.get('status') || 'all';
  const query = (url.searchParams.get('q') || '').trim().slice(0, 120);
  const page = Math.max(1, Math.min(1000, Number.parseInt(url.searchParams.get('page') || '1', 10) || 1));
  const limit = 30;
  const where = [];
  const params = [];
  const allowedStatuses = ['new', 'contacted', 'quoted', 'won', 'lost', 'archived'];
  if (status !== 'all' && allowedStatuses.includes(status)) {
    where.push('status = ?');
    params.push(status);
  }
  if (query) {
    where.push('(contact_name LIKE ? OR contact_phone LIKE ? OR contact_email LIKE ? OR company LIKE ? OR product_name LIKE ?)');
    const like = '%' + query + '%';
    params.push(like, like, like, like, like);
  }
  const whereSql = where.length ? ' WHERE ' + where.join(' AND ') : '';
  try {
    const totalRow = await env.DB.prepare('SELECT COUNT(*) AS total FROM quote_requests' + whereSql).bind(...params).first();
    const result = await env.DB.prepare(`SELECT id, created_at, updated_at, status, contact_name, contact_phone, contact_email, company,
      product_slug, product_name, service_name, size, quantity, material, finishing, location, deadline, notes,
      reference_name, reference_mime, reference_size, source_url
      FROM quote_requests${whereSql} ORDER BY datetime(created_at) DESC LIMIT ? OFFSET ?`)
      .bind(...params, limit, (page - 1) * limit).all();
    const counts = await env.DB.prepare('SELECT status, COUNT(*) AS count FROM quote_requests GROUP BY status').all();
    return json({
      ok: true,
      email: auth.email,
      page,
      limit,
      total: Number(totalRow?.total || 0),
      pages: Math.max(1, Math.ceil(Number(totalRow?.total || 0) / limit)),
      counts: counts.results || [],
      leads: result.results || []
    });
  } catch (error) {
    console.error('admin list query failed', error);
    return json({ ok: false, message: 'Data permintaan penawaran gagal dibaca.' }, 500);
  }
}