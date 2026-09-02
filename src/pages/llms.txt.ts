import type { APIRoute } from 'astro';
import { site, areas, services, products, portfolio } from '../site.js';

const pages = [
  ['/', 'Beranda', 'Ringkasan layanan booth pameran, rak display custom, neon box, dan signage.'],
  ['/tentang/', 'Tentang Kami', 'Profil workshop di Serpong, Tangerang Selatan. Satu tim dari desain sampai instalasi.'],
  ['/layanan/', 'Layanan', 'Rak display custom, gondola supermarket, neon box, huruf timbul, papan nama, booth pameran, sewa peralatan event.'],
  ['/portofolio/', 'Portofolio', 'Dokumentasi pekerjaan booth pameran, rak display ritel, neon box, dan signage.'],
  ['/area-layanan/', 'Area Layanan', 'Cakupan Tangerang Selatan, Tangerang, Jakarta, Depok, Bogor, Bekasi.'],
  ['/kontak/', 'Kontak', `WhatsApp ${site.waDisplay}, email ${site.email}, alamat workshop, dan jam operasional.`],
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

${services.map((s) => `- ${s.title}: ${s.body}`).join('\n')}

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
