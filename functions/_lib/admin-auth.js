const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }
});

function decodeBase64Url(value) {
  const normalized = value.replace(/-/g, '+').replace(/_/g, '/');
  const padded = normalized + '='.repeat((4 - normalized.length % 4) % 4);
  return Uint8Array.from(atob(padded), (char) => char.charCodeAt(0));
}

function decodeJson(value) {
  return JSON.parse(new TextDecoder().decode(decodeBase64Url(value)));
}

function unauthorized(message = 'Akses admin diperlukan.') {
  return { ok: false, response: json({ ok: false, message }, 401) };
}

export async function requireAdmin(request, env) {
  if (!env.ACCESS_TEAM_DOMAIN || !env.ACCESS_AUD || !env.ACCESS_ALLOWED_EMAILS) {
    return { ok: false, response: json({ ok: false, message: 'Cloudflare Access untuk dashboard belum dikonfigurasi.' }, 503) };
  }
  const token = request.headers.get('Cf-Access-Jwt-Assertion');
  if (!token) return unauthorized();
  const parts = token.split('.');
  if (parts.length !== 3) return unauthorized('Sesi admin tidak valid.');

  try {
    const header = decodeJson(parts[0]);
    const claims = decodeJson(parts[1]);
    if (header.alg !== 'RS256' || !header.kid) return unauthorized('Algoritma token tidak diizinkan.');

    const team = env.ACCESS_TEAM_DOMAIN.startsWith('https://') ? new URL(env.ACCESS_TEAM_DOMAIN).origin : new URL('https://' + env.ACCESS_TEAM_DOMAIN).origin;
    const issuer = team.replace(/\/$/, '');
    const now = Math.floor(Date.now() / 1000);
    if (claims.iss !== issuer || !Number.isFinite(claims.exp) || claims.exp <= now || (claims.nbf && claims.nbf > now + 30)) {
      return unauthorized('Token admin kedaluwarsa atau issuer tidak cocok.');
    }
    const audiences = Array.isArray(claims.aud) ? claims.aud : [claims.aud];
    if (!audiences.includes(env.ACCESS_AUD)) return unauthorized('Audience token tidak cocok.');

    const jwksResponse = await fetch(issuer + '/cdn-cgi/access/certs', { cf: { cacheTtl: 300, cacheEverything: true } });
    if (!jwksResponse.ok) return unauthorized('Kunci verifikasi Cloudflare Access tidak dapat diambil.');
    const jwks = await jwksResponse.json();
    const jwk = (jwks.keys || []).find((key) => key.kid === header.kid && key.kty === 'RSA');
    if (!jwk) return unauthorized('Kunci token tidak dikenal.');
    const publicKey = await crypto.subtle.importKey('jwk', jwk, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['verify']);
    const verified = await crypto.subtle.verify(
      { name: 'RSASSA-PKCS1-v1_5' },
      publicKey,
      decodeBase64Url(parts[2]),
      new TextEncoder().encode(parts[0] + '.' + parts[1])
    );
    if (!verified) return unauthorized('Tanda tangan token tidak valid.');

    const email = String(claims.email || '').toLowerCase();
    const allowed = env.ACCESS_ALLOWED_EMAILS.split(',').map((item) => item.trim().toLowerCase()).filter(Boolean);
    if (!email || !allowed.includes(email)) return unauthorized('Akun ini tidak memiliki akses dashboard.');
    return { ok: true, email };
  } catch (error) {
    console.error('Access JWT validation failed', error);
    return unauthorized('Sesi admin tidak dapat diverifikasi.');
  }
}