# SEO-STRATEGY.md - Cahaya Selatan Kreasindo

> CURRENT IMPLEMENTATION = fakta dari kode. Tanpa data volume/ranking (tidak ada di repo).

## Current SEO Status (CONFIRMED)

Halaman: `/`, `/tentang`, `/layanan`, `/layanan/:slug` -6, `/portofolio`,
`/area-layanan`, `/kontak`, `/apa-itu-posm`, `/kebijakan-privasi`, `/syarat-ketentuan`.
Setiap halaman punya title + description sendiri.

## Existing SEO Implementation (CONFIRMED)

- Canonical per halaman; OG `1200x630` + Twitter `summary_large_image` (`public/og-image.jpg`).
- `LocalBusiness` JSON-LD: nama, tagline, telepon, email, alamat Serpong lengkap,
  area 6 kota, jam Mo-Sa. `BreadcrumbList` di halaman ber-crumb. `FAQPage` di tiap `[slug]`.
- `@astrojs/sitemap` ? `/sitemap-index.xml`; `/robots.txt` allow-all + pointer sitemap.
- `/llms.txt` berisi ringkasan situs + layanan + produk + area + portfolio (untuk AI/crawler).
- `lang="id"`, alt deskriptif, satu H1 per halaman, URL keyword (`/layanan/rak-display-gondola`).

## Missing SEO Implementation

- Tagline/JSON-LD/footer "Event Booth & Exhibition Specialist" menyempit ke booth.
- `og-image.jpg` masih palet biru lama (generator `scripts/og-image.mjs` juga).
- Tanpa `404.astro`; tanpa keyword research; tanpa analytics/Search Console di repo.

## Recommended Site Architecture for SEO

Pertahankan yang ada (sudah hub + 6 child + panduan + portofolio + area + legal).
Jangan tambah halaman demi keyword tanpa konten berguna.

## Recommended Service Page Strategy

Satu slug = satu kata kunci utama (sudah benar di 6 slug). Setiap child wajib:
intro menjawab intent, 3 grup item, FAQ 4 (schema aktif), galeri sampel, CTA WA
berkonteks, link silang ke layanan lain. Pola ini sudah dipakai `[slug].astro` - pertahankan.

## Keyword Research Requirements (RESEARCH REQUIRED)

Belum dilakukan. Saat riset: kelompokkan per intent (booth/rak/signage/POSM/VM/sewa),
petakan ke 6 slug yang ada, catat volume+kesulitan, baru putuskan halaman baru.
Jangan buat halaman baru sebelum data ada.

## Local SEO Strategy

Fondasi ada (alamat, jam, 6 kota `areaServed`, halaman `/area-layanan`, `/kontak` + peta
embed). Rekomendasi: samakan NAP dengan profil bisnis, minta review klien, pertimbangkan
`GeoCoordinates` di schema bila koordinat pasti.

## Technical SEO Checklist

- [x] Title/description unik, canonical, sitemap, robots, llms.txt
- [x] Schema LocalBusiness/Breadcrumb/FAQ
- [ ] Validasi Rich Results setelah ubah schema/meta
- [ ] Perbarui `site:` bila domain berubah (feed canonical/sitemap/OG/`@id`)
- [ ] Kompres 183 file (berat ? LCP/CLS mobile)
- [ ] 404 kustom + audit link internal mati

## Content Strategy

Konten = `site.js` (sumber tunggal). Copy Indonesia informal-profesional, klaim konkret
(material/ukuran/jumlah), tanpa superlatif tanpa bukti. FAQ = jawaban atas pertanyaan
penawaran nyata (harga, minimum, kirim, desain, pasang).

## Internal Linking Strategy

Hub `/layanan` ? 6 child ? silang antar-child ("Layanan lainnya"); kategori portfolio
? halaman layanan; area ? kontak; CTA final ? WhatsApp berkonteks. Pola ini sudah
jalan - jangan putus saat edit.

## Future Keyword Research Tasks (RESEARCH REQUIRED)

1. Kumpulkan seed keyword per 6 slug + `/apa-itu-posm`.
2. Ambil volume, kesulitan, intent; pilih 1 primer + 2 sekunder per halaman.
3. Tulis ke file ini (tabel), lalu selaraskan title/description/H1.
