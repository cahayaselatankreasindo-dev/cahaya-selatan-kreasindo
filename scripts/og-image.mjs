// Regenerate public/og-image.webp (1200x630 social card) with CSK palette.
// Run: node scripts/og-image.mjs
import sharp from 'sharp';
import { site } from '../src/site.js';

const W = 1200, H = 630;
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
// Montserrat loaded from public/fonts via system path — use generic fallback for safety
const FONT = 'Montserrat, Liberation Sans, DejaVu Sans, sans-serif';

const bg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="#0B0B0B"/>
  <rect x="0" y="${H - 10}" width="${W}" height="10" fill="#FF8A3D"/>
  <rect x="52" y="175" width="300" height="280" rx="20" fill="#F8F7F4" opacity="0.06"/>
  <g font-family="${FONT}">
    <text x="430" y="248" font-size="54" font-weight="700" fill="#F8F7F4">${esc(site.name)}</text>
    <text x="430" y="310" font-size="30" font-weight="400" fill="#FF8A3D">${esc(site.tagline)}</text>
    <text x="430" y="380" font-size="24" fill="#F8F7F4" opacity="0.8">Rak display · Neon box · Booth · Signage · POSM</text>
    <text x="430" y="470" font-size="24" fill="#F8F7F4" opacity="0.6">${esc(site.city)}, melayani Jabodetabek</text>
    <text x="430" y="516" font-size="24" fill="#F8F7F4" opacity="0.6">WhatsApp ${esc(site.waDisplay)}</text>
  </g>
</svg>`);

const logo = await sharp('public/img/logo-horizontal.svg', { density: 300 })
  .resize(280, null, { fit: 'inside' })
  .png()
  .toBuffer();

await sharp(bg)
  .composite([{ input: logo, left: 80, top: (H - 280) / 2 | 0 }])
  .webp({ quality: 90 })
  .toFile('public/og-image.webp');

console.log('wrote public/og-image.webp');
