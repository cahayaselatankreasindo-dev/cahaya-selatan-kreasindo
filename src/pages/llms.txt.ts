import type { APIRoute } from 'astro';
import { site, areas, products, portfolio, serviceDetails } from '../site.js';

const pages = [
  ['/', 'Beranda', 'Ringkasan layanan POSM dan POP display, product glorifier, rak display, booth, signage, digital printing, dan large-format graphics.'],
  ['/tentang/', 'Tentang Kami', 'Profil workshop di Serpong, Tangerang Selatan. Satu tim dari desain sampai instalasi.'],
  ['/layanan/', 'Layanan', 'POSM dan POP display, product glorifier, acrylic display, rak gondola, booth, event & venue branding, neon box, signage, digital printing, large-format graphics, visual merchandising, dan peralatan event.'],
  ['/portofolio/', 'Portofolio', 'Dokumentasi pekerjaan booth pameran, POSM, retail display, akrilik, signage, dan produksi custom.'],
  ['/area-layanan/', 'Area Layanan', 'Cakupan Tangerang Selatan, Tangerang, Jakarta, Depok, Bogor, Bekasi.'],
  ['/kontak/', 'Kontak', `WhatsApp ${site.waDisplay}, email ${site.email}, alamat workshop, dan jam operasional.`],
  ['/apa-itu-posm/', 'Apa itu POSM', 'Panduan POSM: floor display, counter display, product glorifier, illuminated display, materi rak, retail graphics, dan pilihan material.'],
  ['/kebijakan-privasi/', 'Kebijakan Privasi', 'Data yang kami terima lewat WhatsApp dan email, tujuan penggunaan, penyimpanan, dan hak Anda.'],
  ['/syarat-ketentuan/', 'Syarat & Ketentuan', 'Penawaran, pembayaran, revisi desain, jadwal, pengiriman, instalasi, garansi, dan pembatalan.'],
];

export const GET: APIRoute = ({ site: base }) => {
  const url = (path: string) => new URL(path, base).href;

  const body = `# ${site.name}

> ${site.tagline}. Workshop di ${site.city}, ${site.region}, melayani Jabodetabek. Mengerjakan sendiri dari desain, produksi, sampai pemasangan di lokasi.

Kontak: WhatsApp ${site.waDisplay} | ${site.email} | Instagram & Threads @${site.ig}
Alamat: ${site.address}
Jam operasional: ${site.hours.map((h) => `${h.days} ${h.time}`).join(' | ')}

## Halaman

${pages.map(([path, title, desc]) => `- [${title}](${url(path)}): ${desc}`).join('\n')}

## Layanan

${serviceDetails.map((s) => `- [${s.title}](${url(`/layanan/${s.slug}/`)}): ${s.description}`).join('\n')}

## Produk

${products.map((p) => `- ${p.group}: ${p.items.join(', ')}`).join('\n')}

## Area layanan

${areas.map((a) => `- ${a.name}: ${a.detail}`).join('\n')}

## Portofolio

${portfolio.map((p) => `- ${p.title} (${p.cat})`).join('\n')}

## Optional

- [Sitemap](${url('/sitemap-index.xml')})
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
