# SEO-STRATEGY.md - Cahaya Selatan Kreasindo

> CURRENT IMPLEMENTATION = fakta dari kode. Tanpa data volume/ranking (tidak ada di repo).

## Current SEO Status (CONFIRMED)

Halaman: `/`, `/tentang`, `/layanan`, `/layanan/:slug` -6, `/portofolio`,
`/area-layanan`, `/kontak`, `/apa-itu-posm`, `/kebijakan-privasi`, `/syarat-ketentuan`.
Setiap halaman punya title + description sendiri.

## Existing SEO Implementation (CONFIRMED)

- Canonical per halaman; OG `1200x630` + Twitter `summary_large_image` (`public/og-image.webp`).
- `LocalBusiness` JSON-LD: nama, tagline, telepon, email, alamat Serpong lengkap,
  area layanan, jam operasional, dan tautan profil. `BreadcrumbList` di halaman ber-crumb.
  Halaman layanan memakai `Service` dan `FAQPage` JSON-LD.
- `@astrojs/sitemap` ? `/sitemap-index.xml`; `/robots.txt` allow-all + pointer sitemap.
- `/llms.txt` berisi ringkasan situs + layanan + produk + area + portfolio (untuk AI/crawler).
- `lang="id"`, alt deskriptif, satu H1 per halaman, URL keyword (`/layanan/rak-display-gondola`).

## Outstanding SEO Work (CONFIRMED)

- Riset keyword formal per layanan belum terdokumentasi dengan volume, intent, dan tingkat persaingan.
- Validasi Rich Results di Google dan evaluasi data Search Console perlu dilakukan setelah perubahan metadata.
- Pemantauan performa organik dan konversi perlu ditinjau berkala; GA4 sudah terpasang, tetapi data aktual tidak disimpan di repo.
- Konten legal tidak perlu dipanjangkan hanya untuk memenuhi ambang jumlah kata dari alat audit.


## GrowMyWebsite On-Page Audit (2026-11-10)

Audit dilakukan pada 15 URL publik utama. Cakupan alat adalah 12 pemeriksaan on-page (termasuk title, description, heading, viewport, HTTPS, canonical, Open Graph, bahasa, alt, schema, dan kedalaman konten); skor bukan prediksi ranking Google.

Baseline hasil:
- Homepage 92/100; layanan 88/100; halaman layanan individual 92/100; portofolio 96/100.
- Kontak 88/100; tentang 92/100; area layanan 96/100; panduan POSM 92/100.
- Kebijakan privasi 92/100; syarat & ketentuan 100/100.

Tindak lanjut pada branch SEO:
- Memadatkan title agar panjang total setelah suffix nama perusahaan berada pada rentang 30–60 karakter.
- Memadatkan meta description ke rentang 70–160 karakter tanpa menghilangkan maksud pencarian dan lokasi layanan.
- Memperjelas konten halaman layanan, tentang, area layanan, dan kontak dengan informasi yang relevan bagi calon klien.
- Mempertahankan halaman legal sesuai tujuan informasinya; tidak menambah teks kosong hanya untuk melewati ambang 600 kata yang digunakan alat audit.

Catatan: hasil audit ulang setelah perubahan memerlukan preview build yang dapat diakses publik. Jangan menyatakan skor baru atau peningkatan ranking sebelum halaman hasil perubahan benar-benar terbit dan dipindai ulang.

## Recommended Site Architecture for SEO

Pertahankan yang ada (sudah hub + 6 child + panduan + portofolio + area + legal).
Jangan tambah halaman demi keyword tanpa konten berguna.

## Recommended Service Page Strategy

Satu slug = satu kata kunci utama (sudah benar di 6 slug). Setiap child wajib:
intro menjawab intent, 3 grup item, FAQ 4 (schema aktif), galeri sampel, CTA WA
berkonteks, link silang ke layanan lain. Pola ini sudah dipakai `[slug].astro` - pertahankan.

## Keyword Research Requirements (RESEARCH REQUIRED)

Belum dilakukan. Saat riset: kelompokkan per intent (booth/rak/signage/POSM/VM/peralatan-event),
petakan ke 6 slug yang ada, catat volume+kesulitan, baru putuskan halaman baru.
Jangan buat halaman baru sebelum data ada.

## Local SEO Strategy

Fondasi ada (alamat, jam, 6 kota `areaServed`, halaman `/area-layanan`, `/kontak` + peta
embed). Rekomendasi: samakan NAP dengan profil bisnis, minta review klien, pertimbangkan
`GeoCoordinates` di schema bila koordinat pasti.

## Technical SEO Checklist

- [x] Title/description unik, canonical, sitemap, robots, llms.txt
- [x] Schema LocalBusiness/Breadcrumb/Service/FAQ
- [x] 404 kustom tersedia
- [x] Kompresi aset gambar besar dan pemindahan video staging dari folder publik (lihat CHANGELOG)
- [ ] Validasi Rich Results setelah perubahan schema/meta
- [ ] Riset keyword formal dan pemetaan intent per layanan
- [ ] Tinjau Search Console, indeksasi, kueri, dan konversi organik
- [ ] Audit link internal mati dan sisa aset publik

## Content Strategy

Konten = `site.js` (sumber tunggal). Copy Indonesia informal-profesional, klaim konkret
(material/ukuran/jumlah), tanpa superlatif tanpa bukti. FAQ = jawaban atas pertanyaan
penawaran nyata (harga, minimum, kirim, desain, pasang).

## Internal Linking Strategy

Hub `/layanan` ? 6 child ? silang antar-child ("Layanan lainnya"); kategori portfolio
? halaman layanan; area ? kontak; CTA final ? WhatsApp berkonteks. Pola ini sudah
jalan - jangan putus saat edit.

## Keyword Cluster: Partner / Vendor (RESEARCH NOTE)

Cluster baru menargetkan **EO, agensi, dan arsitek** yang mencari vendor produksi
(fabrikasi) di Jakarta — bukan end client. Kata kunci dipetakan ke 6 halaman layanan
yang sudah ada (section "Spesifikasi & Material" + meta description), tanpa halaman baru.

| Slug | Keyword utama | Keyword pendukung |
|---|---|---|
| `booth-pameran` | vendor fabrikasi booth jakarta | vendor produksi event jakarta |
| `posm-display` | posm manufacturer indonesia | display manufacturer jakarta |
| `rak-display-gondola` | display manufacturer jakarta | rak display custom manufacturer |
| `neon-box-signage` | signage & neon box jakarta | neon box manufacturer jakarta |
| `visual-merchandising` | fit out contractor jakarta | in-store branding contractor |
| `peralatan-event` | jual peralatan event jakarta | peralatan event custom tangerang |

Catatan: cluster ini sengaja tidak mengejar volume besar di head term; ia mengisi intent
"vendor produksi" di ekor. Pertahankan 1-2 kata kunci teknis per halaman, jangan stuffing.

## Future Keyword Research Tasks (RESEARCH REQUIRED)

1. Kumpulkan seed keyword per 6 slug + `/apa-itu-posm`.
2. Ambil volume, kesulitan, intent; pilih 1 primer + 2 sekunder per halaman.
3. Tulis ke file ini (tabel), lalu selaraskan title/description/H1.
