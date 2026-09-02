// Regenerate public/og-image.jpg (1200x630 social card) from the logo.
// Run: node scripts/og-image.mjs
import sharp from 'sharp';
import { site } from '../src/site.js';

const W = 1200, H = 630;
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

const bg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="wash" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f0f8ff"/><stop offset="1" stop-color="#ffffff"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#wash)"/>
  <rect x="52" y="149" width="376" height="332" rx="28" fill="#ffffff" stroke="#dbeefe" stroke-width="2"/>
  <rect x="0" y="${H - 14}" width="${W}" height="14" fill="#3494e6"/>
  <g font-family="Liberation Sans, DejaVu Sans, sans-serif" fill="#1c426c">
    <text x="470" y="238" font-size="56" font-weight="bold">Stand Event &amp;</text>
    <text x="470" y="304" font-size="56" font-weight="bold">Booth Pameran</text>
    <text x="470" y="366" font-size="29" fill="#2176c4">Rak display · Neon box · Signage · Booth</text>
    <text x="470" y="466" font-size="27" fill="#475569">${esc(site.city)}, melayani Jabodetabek</text>
    <text x="470" y="512" font-size="27" fill="#475569">WhatsApp ${esc(site.waDisplay)}</text>
  </g>
</svg>`);

const logo = await sharp('public/img/logo.webp').resize(340).png().toBuffer();

await sharp(bg)
  .composite([{ input: logo, left: 70, top: (H - 288) / 2 | 0 }])
  .jpeg({ quality: 88 })
  .toFile('public/og-image.jpg');

console.log('wrote public/og-image.jpg');
