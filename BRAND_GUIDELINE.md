# BRAND GUIDELINE — CAHAYA SELATAN KREASINDO

> Source of truth identitas visual website CSK. Jangan membuat identitas brand baru.
> Jangan mengganti warna, typography, tagline, atau karakter visual yang ditentukan di sini.

## Brand Identity

**Brand:** Cahaya Selatan Kreasindo
**Singkatan:** CSK

**Tagline:**

> Kami Membangun Apa yang Membuat Brand Terlihat.

**Deskripsi:**
Cahaya Selatan Kreasindo adalah mitra kreatif dan produksi yang menghadirkan solusi visual dan fisik untuk brand. Dari konsep hingga eksekusi, kami membangun pengalaman ruang, tampilan, dan identitas yang kuat dan berkesan.

**Brand Keywords:**

* Strong
* Creative
* Precise
* Together

**Core Services:**

* Design
* Fabrication
* Installation

CSK adalah bisnis B2B yang menangani berbagai kebutuhan advertising production, visual merchandising, booth pameran, rak display, signage, neon box, custom production, branding, event, retail, dan kebutuhan fisik brand.

Jangan mempersempit positioning CSK hanya menjadi bisnis booth, signage, atau satu kategori produk.

---

# COLOR SYSTEM

Gunakan warna berikut sebagai warna resmi brand.

| Nama           | HEX       | Peran                            |
| -------------- | --------- | -------------------------------- |
| Obsidian Black | `#0B0B0B` | Authority, Strength, Leadership  |
| Warm White     | `#F8F7F4` | Clean, Modern, Balanced          |
| Warm Amber     | `#FF8A3D` | Energy, Creativity, Visibility   |
| Slate Gray     | `#4B4B4B` | Professional, Versatile, Support |

CSS variables resmi:

```css
:root {
  --color-black: #0B0B0B;
  --color-white: #F8F7F4;
  --color-amber: #FF8A3D;
  --color-gray: #4B4B4B;
}
```

## Color Usage

### Obsidian Black — `#0B0B0B`

Gunakan untuk:

* dark sections
* navbar
* header
* footer
* heading utama
* background premium/strong
* elemen yang membutuhkan authority

### Warm White — `#F8F7F4`

Gunakan untuk:

* background terang
* section utama
* area content
* teks di atas background gelap

### Warm Amber — `#FF8A3D`

Gunakan sebagai:

* primary CTA
* CTA hover
* accent
* highlight
* garis dekoratif
* visual "cahaya"
* elemen yang membutuhkan visibility

Jangan menggunakan amber secara berlebihan sampai menghilangkan kesan premium.

### Slate Gray — `#4B4B4B`

Gunakan untuk:

* secondary text
* supporting information
* border
* metadata
* elemen netral

---

# TYPOGRAPHY

Font utama:

**Montserrat**

Gunakan Montserrat sebagai typography utama website.

CSS:

```css
--font-heading: 'Montserrat', sans-serif;
--font-weight-heading: 700;

--font-body: 'Montserrat', sans-serif;
--font-weight-body: 400;
```

## Typography hierarchy

### Heading

Montserrat Bold / 700

Digunakan untuk:

* Hero headline
* H1
* H2
* H3
* section heading

### Body

Montserrat Regular / 400

Digunakan untuk:

* paragraph
* service description
* portfolio description
* supporting information

### Button

Montserrat dengan weight yang cukup kuat untuk readability.

Jangan memperkenalkan font tambahan tanpa instruksi eksplisit.

---

# LOGO SYSTEM

Logo memiliki beberapa penggunaan resmi:

### Primary — Black

Logo utama untuk background terang.

### On Dark

Logo untuk background gelap/Obsidian Black.

### Icon Only

Hanya simbol heksagon "GSK".

Digunakan untuk:

* favicon
* app icon
* compact branding
* social profile bila diperlukan

### Horizontal

Logo + wordmark dalam posisi horizontal.

Digunakan terutama untuk:

* navbar
* header
* area dengan ruang vertikal terbatas

Jangan mengubah proporsi logo.

Jangan melakukan:

* stretching
* distortion
* rotation
* recoloring sembarangan
* penambahan outline
* shadow yang tidak ditentukan
* gradient baru
* efek visual yang mengubah karakter logo

---

# BRAND ELEMENTS

Karakter visual CSK dibangun dari:

* Lines
* Shapes
* Textures
* Light
* Structure

Motif khas:

**garis diagonal Warm Amber yang menyerupai cahaya pada background gelap.**

Elemen ini dapat digunakan sebagai:

* decorative divider
* hero decoration
* section transition
* background accent
* visual highlight

Namun jangan membuatnya terlalu dominan sehingga mengganggu readability.

---

# BRAND PHILOSOPHY

**The Light in Every Detail**

Filosofi ini diterjemahkan secara visual melalui:

* cahaya
* garis
* struktur
* presisi
* kontras hitam dan amber
* komposisi yang kuat
* detail yang terkontrol

Website harus terasa:

**Strong + Creative + Precise + Together**

Bukan:

* playful berlebihan
* template startup generik
* terlalu ramai
* terlalu banyak gradient
* terlalu banyak rounded card
* terlalu banyak animasi

---

# WEBSITE VISUAL DIRECTION

Website harus memiliki karakter:

**Strong B2B Creative Production**

Visual harus menggabungkan:

* authority
* craftsmanship
* production capability
* creativity
* precision
* modernity

Website harus memberikan kesan bahwa CSK mampu:

**mendesain → memproduksi → memasang**

bukan hanya menjual jasa desain.

---

# WEBSITE APPLICATION

## Navbar

Prioritaskan:

* logo horizontal
* typography Montserrat
* navigasi sederhana
* CTA menggunakan Warm Amber

Navbar harus terlihat profesional dan tidak terlalu ramai.

## Hero

Gunakan kontras:

Obsidian Black + Warm White + Warm Amber.

Hero harus memperkuat pesan:

> Kami Membangun Apa yang Membuat Brand Terlihat.

Gunakan imagery project nyata sebagai elemen utama jika tersedia.

Jangan membuat hero terasa seperti website agency digital generik.

## Services

Tampilkan kemampuan CSK secara jelas.

Gunakan:

* typography kuat
* spacing yang rapi
* iconography sederhana
* accent amber secara terkontrol

## Portfolio

Portfolio harus menjadi bukti kemampuan produksi.

Prioritaskan visual project nyata.

Jangan membuat portfolio terlihat seperti katalog template.

## CTA

CTA utama menggunakan:

`#FF8A3D`

CTA harus terlihat jelas tetapi tetap konsisten dengan karakter premium B2B.

## Footer

Gunakan:

`#0B0B0B`

dengan typography yang jelas dan accent Warm Amber seperlunya.

---

# DESIGN TOKENS

Gunakan token berikut sebagai dasar implementasi.

```css
:root {
  /* Brand Colors */
  --color-black: #0B0B0B;
  --color-white: #F8F7F4;
  --color-amber: #FF8A3D;
  --color-gray: #4B4B4B;

  /* Typography */
  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Montserrat', sans-serif;

  --font-weight-heading: 700;
  --font-weight-body: 400;
}
```

Jika project menggunakan Tailwind, mapping warna tersebut ke Tailwind tanpa mengubah nilai HEX.

---

# DESIGN RULES FOR AI CODING AGENTS

Aturan ini wajib diikuti ketika melakukan perubahan UI website CSK.

1. Jangan mengganti warna brand.
2. Jangan membuat warna random.
3. Jangan mengganti Montserrat.
4. Jangan mengubah logo tanpa instruksi eksplisit.
5. Jangan membuat logo baru.
6. Jangan mengubah proporsi logo.
7. Jangan menggunakan gradient secara sembarangan.
8. Jangan menggunakan shadow secara berlebihan.
9. Jangan menggunakan rounded card secara berlebihan.
10. Jangan membuat UI terlihat seperti template SaaS generik.
11. Jangan menggunakan terlalu banyak warna.
12. Gunakan Warm Amber sebagai accent, bukan sebagai background utama seluruh website.
13. Gunakan Obsidian Black untuk menciptakan authority dan contrast.
14. Gunakan Warm White untuk menjaga readability dan balance.
15. Gunakan imagery project nyata sebanyak mungkin.
16. Pertahankan karakter B2B.
17. Prioritaskan visual hierarchy.
18. Prioritaskan readability.
19. Pertahankan konsistensi desktop dan mobile.
20. Gunakan design tokens sebelum membuat nilai CSS baru.

Jika membutuhkan keputusan desain yang tidak tercantum dalam guideline ini, pilih solusi yang paling dekat dengan prinsip:

**Strong · Creative · Precise · Together**

---

# IMPLEMENTATION PRIORITY

Ketika memperbaiki atau mengembangkan website, gunakan urutan prioritas:

1. Brand consistency
2. Content hierarchy
3. B2B credibility
4. Project imagery
5. Readability
6. Conversion / CTA
7. Animation
8. Decorative effects

Jangan mengorbankan hierarchy, readability, atau credibility hanya demi efek visual.

---

# IMPORTANT

Sebelum melakukan perubahan apa pun:

1. Inspect struktur repository.
2. Cari implementasi logo yang sudah ada.
3. Cari CSS variables yang sudah ada.
4. Cari konfigurasi Tailwind.
5. Cari typography yang sudah digunakan.
6. Identifikasi komponen UI yang sudah ada.

Jangan melakukan redesign total hanya berdasarkan guideline ini.

Gunakan guideline ini untuk memastikan implementasi website konsisten dengan identitas CSK.

Jika ada konflik antara implementasi lama dan guideline ini, jelaskan konflik tersebut terlebih dahulu sebelum mengubah bagian yang berisiko.

Jangan menghapus fitur yang sudah ada.

Jangan melakukan commit atau push kecuali diminta secara eksplisit.
