export const site = {
  name: 'Cahaya Selatan Kreasindo',
  tagline: 'Production Partner untuk Brand dan Bisnis',
  wa: '628888533488',
  waDisplay: '0888-8533-488',
  email: 'halo@cahayaselatankreasindo.my.id',
  ig: 'cahayaselatankreasindo',
  address:
    'Jl. Doel Silem No. 45, Rawa Mekar Jaya, Serpong, Tangerang Selatan, Banten, Indonesia',
  street: 'Jl. Doel Silem No. 45, Rawa Mekar Jaya, Serpong',
  city: 'Tangerang Selatan',
  region: 'Banten',
  postalCode: '15310',
  country: 'ID',
  hours: [
    { days: 'Senin – Jumat', time: '08.00 – 17.00 WIB', schema: ['Mo', 'Tu', 'We', 'Th', 'Fr'], open: '08:00', close: '17:00' },
    { days: 'Sabtu', time: '08.00 – 15.00 WIB', schema: ['Sa'], open: '08:00', close: '15:00' },
  ],
};

export const areas = [
  {
    name: 'Tangerang Selatan',
    detail:
      'Workshop kami di Serpong, jadi Serpong, BSD, Pamulang, Ciputat, dan Bintaro adalah area harian kami. Survei lokasi dan pemasangan bisa dijadwalkan di hari yang sama.',
  },
  {
    name: 'Tangerang & Kabupaten Tangerang',
    detail:
      'Karawaci, Cikupa, Balaraja, dan sekitarnya. Pengiriman rak display dan neon box menggunakan armada sendiri.',
  },
  {
    name: 'Jakarta',
    detail:
      'Booth pameran di JCC, JIExpo Kemayoran, ICE BSD, dan aktivasi di mall Jakarta Selatan maupun Jakarta Pusat. Termasuk bongkar pasang di luar jam operasional mall.',
  },
  {
    name: 'Depok, Bogor & Bekasi',
    detail:
      'Rak display ritel dan signage toko untuk area Jabodetabek timur dan selatan. Biaya kirim dihitung per proyek.',
  },
];

export const waLink = (msg = 'Halo, saya ingin konsultasi kebutuhan display & booth.') =>
  `https://wa.me/${site.wa}?text=${encodeURIComponent(msg)}`;

export const products = [
  { group: 'Event & Pameran', items: ['Booth pameran custom & modular', 'Booth aktivasi brand dan mall', 'Registration counter & mini counter', 'Backdrop & photo booth', 'Interactive photo point', 'Gate entrance / arch', 'Panggung display & podium', 'Display produk di dalam booth', 'Branding area dan venue graphics'] },
  { group: 'POSM & Display Promosi', items: ['Floor-standing display / FSDU', 'Countertop & tabletop display', 'Endcap display', 'Sidekick / clip-strip display', 'Dump bin & pallet display', 'Standee & character standee', 'Wobbler, shelf talker & shelf stopper', 'Shelf strip / price rail', 'Hanging mobile / dangler', 'Tent card & header panel'] },
  { group: 'Glorifier & Product Showcase', items: ['Product glorifier (LED / non-LED)', 'Illuminated tabletop display', 'Backlit & multi-sided display', 'Product pedestal / plinth', 'Product riser & tiered riser', 'Launch podium / product launch display', 'Acrylic dome / protective showcase', 'Mannequin & product stage', 'Mini product showcase cabinet'] },
  { group: 'Acrylic Display & Counter Accessories', items: ['Acrylic product stand / riser', 'Brochure & leaflet holder', 'Menu holder & tent card', 'Name card holder', 'Take-one box / leaflet dispenser', 'Price tag & information holder', 'Acrylic box / cover display', 'Counter organizer & tray'] },
  { group: 'Rak Display & Gondola', items: ['Gondola supermarket single & double', 'Gondola branding & endcap', 'Rak display toko / product bay', 'Dress-up gondola & header panel', 'Shelf divider, pusher & stopper', 'Pegboard / slatwall accessories', 'Sidekick & clip-strip fixture', 'Ambalan akrilik, kaca & kayu'] },
  { group: 'Neon Box, Signage & Graphics', items: ['Neon box & light box', 'Huruf timbul LED', 'Papan nama & totem', 'Wayfinding & directional signage', 'Window graphics / etalase', 'Wall graphics / wall wrap', 'Floor graphics / floor decal', 'Branding panel & backlit graphics'] },
  { group: 'Digital Printing & Large-Format Graphics', items: ['Stiker dan vinyl printing', 'Banner & poster', 'Backlit film / Duratrans', 'Window graphics / etalase', 'Wall graphics / wall wrap', 'Floor graphics / floor decal', 'Panel branding & event backdrop graphics', 'Cutting sticker / contour cut'] },
  { group: 'In-Store Branding & Campaign Kits', items: ['Window display & retail display zone', 'Store build-up & brand zone', 'Dekorasi promosi dan musiman', 'Campaign kit per outlet', 'Packing dan labeling per lokasi', 'Distribusi serta instalasi sesuai lingkup proyek'] },
  { group: 'Material & Finishing Custom', items: ['Akrilik bening, susu & warna', 'PVC board & foamboard', 'Karton duplex & corrugated', 'Multipleks, MDF & HMR', 'Besi, hollow & metal finishing', 'Kombinasi akrilik, kayu, metal, grafis & LED'] },
  { group: 'Peralatan Event untuk Dijual', items: ['Kursi', 'Meja', 'Tenda', 'Stand booth'] },
];

export const portfolio = [
  { img: 'booth-512-slow-move-bazaar', title: 'Booth Custom Channel 512 di Slow Move Bazaar', cat: 'Booth & Pameran', featured: true },
  { img: 'slow-move-bazaar-booth-detail', title: 'Detail Booth Channel 512 & Area Display di Slow Move Bazaar', cat: 'Booth & Pameran' },
  { img: 'slow-move-bazaar-event-activity', title: 'Aktivitas Pengunjung di Booth Channel 512 — Slow Move Bazaar', cat: 'Booth & Pameran' },
  { img: 'slow-move-bazaar-installation', title: 'Proses Instalasi Booth Channel 512 di Slow Move Bazaar', cat: 'Booth & Pameran' },
  { img: 'slow-move-bazaar-setup', title: 'Persiapan Booth Channel 512 Sebelum Slow Move Bazaar', cat: 'Booth & Pameran' },
  { img: 'slow-move-bazaar-signage', title: 'Detail Signage 512 pada Booth Slow Move Bazaar', cat: 'Booth & Pameran' },
  { img: 'booth-pameran-custom-jakarta-jasa-tirta', title: 'Booth Pameran Jasa Tirta II di Pameran KIP 2025 — Hotel Bidakara, Jakarta', cat: 'Booth & Pameran' },
  { img: 'detail-booth-pameran-jasa-tirta', title: 'Detail Booth Pameran Jasa Tirta II — Pameran KIP 2025, Hotel Bidakara', cat: 'Booth & Pameran' },
  { img: 'mini-counter-booth-custom-beco', title: 'Mini Counter Beco untuk Event Pameran di Jakarta', cat: 'Booth & Pameran', featured: true },
  { img: 'display-akrilik-custom-line-friends', title: 'Display Akrilik Koleksi Line Friends untuk Aktivasi Brand di Jakarta', cat: 'Booth & Pameran' },

  { img: 'gondola-supermarket-custom-potens', title: 'Produksi & Pemasangan Rak Gondola Supermarket Potens di Tangerang', cat: 'Rak Display', featured: true },
  { img: 'rak-display-custom-nutricell-pet-care', title: 'Rak Display Nutricell Pet Care untuk Supermarket di Jabodetabek', cat: 'Rak Display' },
  { img: 'rak-display-custom-bioxsine', title: 'Rak Display Bioxsine Custom untuk Retail di Tangerang Selatan', cat: 'Rak Display' },
  { img: 'floor-display-custom-evo-pet-food', title: 'Floor Display Evo Pet Food untuk Minimarket di Tangerang Selatan', cat: 'Rak Display', featured: true },
  { img: 'rak-display-custom-halowell', title: 'Rak Display Halowell untuk Toko Kecantikan di Jakarta', cat: 'Rak Display' },

  { img: 'neon-box-custom-jnt-cargo-tangerang', title: 'Neon Box J&T Cargo untuk Kantor Ekspedisi di Tangerang', cat: 'Neon Box & Signage' },
  { img: 'huruf-timbul-akrilik-gorisa', title: 'Huruf Timbul Akrilik & Signage Gorisa untuk Toko di Tangerang Selatan', cat: 'Neon Box & Signage', featured: true },
  { img: 'papan-nama-custom-sarwaga-yoga', title: 'Papan Nama Custom Sarwaga Yoga untuk Studio di Serpong', cat: 'Neon Box & Signage' },
  { img: 'signage-toko-custom-zakku', title: 'Signage Area Toko Zakku untuk Cafe di Jabodetabek', cat: 'Neon Box & Signage', featured: true },

  { img: 'finishing-rak-display-workshop-serpong', title: 'Finishing Rak Display di Workshop CSK Serpong', cat: 'Proses Produksi', featured: true },
  { img: 'quality-check-rak-display-custom', title: 'Quality Check Rak Display Sebelum Kirim ke Klien', cat: 'Proses Produksi', featured: true },
  { img: 'standee-custom-potens-siap-kirim', title: 'Standee Custom Potens Siap Kirim ke Tangerang', cat: 'Proses Produksi', featured: true },

  { img: 'booth-pameran-custom-perfetto-jakarta', title: 'Booth Pameran Custom Perfetto untuk Event di Jakarta', cat: 'Booth & Pameran' },
  { img: 'booth-pameran-custom-sosrait', title: 'Booth Pameran Custom Sosrait untuk Event di Jakarta', cat: 'Booth & Pameran' },
  { img: 'booth-aktivasi-mall-tema-golden-farm-jakarta', title: 'Booth Aktivasi Mall Golden Farm di Jakarta', cat: 'Booth & Pameran' },
  { img: 'gate-entrance-custom-le-minerale', title: 'Gate Entrance Custom Le Minerale untuk Aktivasi Brand', cat: 'Booth & Pameran' },

  { img: 'nomor-meja-akrilik-custom-teh-pucuk', title: 'Nomor Meja Akrilik Custom Teh Pucuk untuk Cafe di Tangerang', cat: 'POSM' },
  { img: 'display-light-box-custom-kredivo', title: 'Display Light Box Custom Kredivo untuk activation di Jakarta', cat: 'POSM' },

  { img: 'dress-up-gondola-supermarket-gentle-gen', title: 'Dress-up Gondola Supermarket Gentle Gen di Jabodetabek', cat: 'Rak Display' },
  { img: 'floor-display-custom-kilau-nipis', title: 'Floor Display Custom Kilau Nipis untuk Supermarket di Tangerang', cat: 'Rak Display' },
  { img: 'promotional-display-custom-bioxine', title: 'Promotional Display Custom Bioxsine untuk Retail di Jakarta', cat: 'Rak Display' },
  { img: 'promotional-display-custom-bioxine-before', title: 'Promotional Display Bioxsine — Sebelum Pemasangan', cat: 'Rak Display' },
  { img: 'promotional-display-custom-bioxine-detail', title: 'Promotional Display Bioxsine — Detail Finishing', cat: 'Rak Display' },
  { img: 'mockup-dummy-custom-bioxine', title: 'Mockup Dummy Custom Bioxsine untuk Presentasi Klien', cat: 'Rak Display' },
  { img: 'rak-display-custom-chistotel', title: 'Rak Display Custom Chistotel untuk Spa & Salon di Tangerang', cat: 'Rak Display' },
  { img: 'rak-display-custom-chistotel-detail', title: 'Rak Display Chistotel — Detail Produksi', cat: 'Rak Display' },
  { img: 'rak-display-custom-grivy', title: 'Rak Display Custom Grivy untuk Retail di BSD City', cat: 'Rak Display' },
  { img: 'rak-asongan-custom-garuda', title: 'Rak Asongan Custom Garuda untuk Bengkel di Tangerang', cat: 'Rak Display' },
  { img: 'rak-mini-display-meja-custom-happy-cat', title: 'Rak Mini Display Meja Custom Happy Cat untuk Pet Shop', cat: 'Rak Display' },
  { img: 'rak-mini-display-custom-well-better-sleep', title: 'Rak Mini Display Well Better Sleep untuk Promo di Jakarta', cat: 'Rak Display' },
  { img: 'rak-display-activation-custom-healthcare', title: 'Rak Display Activation Custom Healthcare untuk Event di JCC Jakarta', cat: 'Rak Display' },

  { img: 'neon-box-bulat-custom-jnt-sarwaga-yoga', title: 'Neon Box Bulat Custom JNT Sarwaga Yoga untuk Studio di Tangerang', cat: 'Neon Box & Signage' },
  { img: 'neon-box-custom-relis', title: 'Neon Box Custom Relis untuk Clinic di Jakarta', cat: 'Neon Box & Signage' },
  { img: 'huruf-timbul-custom-kavo-house-instalasi', title: 'Huruf Timbul Kavo House — Proses Instalasi di Tangerang', cat: 'Neon Box & Signage' },
  { img: 'huruf-timbul-custom-kavo-house-terpasang', title: 'Huruf Timbul Kavo House — Hasil Terpasang di Tangerang', cat: 'Neon Box & Signage' },
];

export const portfolioCats = [...new Set(portfolio.map((p) => p.cat))];

// Halaman anak /layanan/<slug>. Satu entri = satu halaman = satu kata kunci utama.
export const serviceDetails = [
  {
    slug: 'posm-display',
    icon: 'rak',
    nav: 'POSM & Display Promosi',
    title: 'Jasa Pembuatan POSM & Display Promosi',
    metaTitle: 'Jasa Pembuatan POSM (Point of Sale Material)',
    description:
      'Produksi POSM dan POP display custom di Tangerang Selatan: floor display, counter display, product glorifier, display LED, standee, materi rak, dan acrylic display. Desain serta fabrikasi mengikuti spesifikasi produk dan kebutuhan outlet; pengiriman dan instalasi dibahas per proyek.',
    lead:
      'CSK mengembangkan POSM dan POP display untuk area rak, meja kasir, zona promosi, serta peluncuran produk—mulai dari counter display dan floor display sampai product glorifier, display berlampu, dan materi komunikasi rak.',
    intro: [
      'Lingkup POSM mencakup display meja dan lantai, product glorifier, display berlampu, materi komunikasi rak, standee, serta grafis kampanye. Bentuk dan material dipilih berdasarkan ukuran produk, lokasi penempatan, beban, serta durasi pemakaian.',
      'Untuk kebutuhan beberapa outlet, spesifikasi dan finishing dapat dijadikan satu acuan produksi. Packing per lokasi, distribusi, dan instalasi dibahas sesuai jumlah cabang serta lingkup proyek.',
    ],
    items: {
      title: 'Jenis POSM yang kami produksi',
      groups: [
        { name: 'Counter, Floor & Retail Display', list: ['Countertop / tabletop display', 'Floor-standing display / FSDU', 'Endcap display', 'Mini counter', 'Sidekick / clip-strip display', 'Dump bin & pallet display', 'Tier display bertingkat'] },
        { name: 'Product Glorifier & Launch Display', list: ['Product glorifier LED atau non-LED', 'Illuminated tabletop display', 'Backlit display', 'Product pedestal / plinth', 'Product riser bertingkat', 'Launch podium', 'Acrylic dome / cover showcase', 'Display multi-sisi'] },
        { name: 'Materi Komunikasi Rak', list: ['Wobbler', 'Shelf talker', 'Shelf stopper', 'Shelf strip / price rail', 'Hanging mobile / dangler', 'Header panel rak', 'Divider & pusher rak'] },
        { name: 'Acrylic Display & Sales Accessories', list: ['Acrylic product stand / riser', 'Brochure & leaflet holder', 'Take-one box', 'Menu holder & tent card', 'Name card holder', 'Price tag holder', 'Acrylic box / cover display'] },
        { name: 'Graphics & Campaign Kit', list: ['Standee & character standee', 'Window graphics', 'Wall graphics', 'Floor graphics / decal', 'Panel branding promosi', 'Campaign kit dan packing per outlet'] },
        { name: 'Material & Finishing', list: ['Akrilik bening, susu & warna', 'Karton duplex & corrugated', 'PVC board & foamboard', 'Multipleks, MDF / HMR', 'Besi & hollow', 'Grafis cetak, LED & kombinasi material'] },
      ],
    },
    faq: [
      { q: 'Apa bedanya POSM dengan POP display?', a: 'Dua istilah ini dipakai bergantian di lapangan. POP (Point of Purchase) menekankan titik pembelian, POSM (Point of Sale Material) menekankan materialnya. Untuk pemesanan, keduanya kami perlakukan sama — yang menentukan harga adalah material, ukuran, dan jumlahnya.' },
      { q: 'Berapa jumlah minimum pemesanan POSM?', a: 'Tidak ada minimum baku. Satu unit display akrilik untuk satu outlet bisa kami kerjakan, begitu juga ratusan unit untuk roll-out nasional. Harga per unit tentu lebih ringan pada jumlah besar karena biaya setup dan cetakan terbagi.' },
      { q: 'Bisakah POSM dikirim ke luar Jabodetabek?', a: 'Bisa. Produksi tetap di workshop kami, pengiriman menggunakan ekspedisi dengan packing kayu atau karton berlapis sesuai jenis barang. Yang terbatas pada Jabodetabek adalah layanan pemasangan oleh tim kami sendiri.' },
      { q: 'Apakah bisa sekalian dibuatkan desainnya?', a: 'Bisa. Kirim logo, panduan warna brand, dan foto produk — kami buatkan gambar kerja lengkap dengan ukuran untuk Anda setujui sebelum produksi berjalan.' },
    ],
    scope: [
      'Diskusi kebutuhan POSM dan channel placement (supermarket, minimarket, toko).',
      'Desain menyesuaikan brand guideline atau buat dari nol.',
      'Produksi display meja/lantai, glorifier, acrylic display, materi rak, dan grafis kampanye sesuai spesifikasi yang disetujui.',
      'Pemeriksaan ukuran, konstruksi, finishing, fungsi pencahayaan bila ada, dan kelengkapan unit.',
      'Packing, pelabelan per lokasi, pengiriman, serta instalasi sesuai ruang lingkup penawaran.',
    ],
    areas: [
      { name: 'Jakarta', detail: 'Distribusi POSM ke supermarket, minimarket, dan toko retail wilayah Jakarta.' },
      { name: 'Tangerang Selatan', detail: 'Workshop kami di Serpong. Produksi cepat, pengiriman langsung.' },
      { name: 'Jabodetabek', detail: 'Bogor, Depok, Bekasi, Tangerang. Biaya kirim per proyek.' },
    ],
    proof: {
      stat: 'Lebih dari 6 tahun',
      text: 'Produksi POSM custom untuk brand FMCG, kosmetik, dan retail di Indonesia. Klien kami termasuk Nutricell, Hanasui, dan lainnya.',
    },
    cat: 'POSM',
    waMsg: 'Halo CSK, saya ingin minta penawaran POSM / POP display.\n\nBrand: \nJenis display (counter / floor / glorifier / graphics): \nUkuran produk dan display: \nJumlah unit / outlet: \nKebutuhan LED atau cover: \nLokasi pengiriman / instalasi: \nTarget waktu: ',
    images: ['display-akrilik-custom-line-friends', 'nomor-meja-akrilik-custom-teh-pucuk', 'display-light-box-custom-kredivo'],
    assetImage: '/assets/display-akrilik-custom/akrilik-kosmetik-produk-kecantikan-golden.webp',
  },
  {
    slug: 'glorifier-product-display',
    icon: 'rak',
    nav: 'Glorifier & Product Display',
    title: 'Jasa Pembuatan Product Glorifier & Display Produk Custom',
    metaTitle: 'Jasa Product Glorifier & Display Produk Custom | CSK',
    description:
      'Jasa pembuatan product glorifier dan display produk custom di Tangerang Selatan. Pilihan tabletop display, product pedestal, acrylic showcase, display LED atau non-LED, dan backlit display sesuai spesifikasi produk serta kebutuhan retail.',
    lead:
      'Product glorifier menempatkan satu produk unggulan sebagai pusat perhatian. CSK mengembangkan display meja, pedestal, showcase, dan display berlampu berdasarkan ukuran produk, identitas brand, serta lokasi penempatannya.',
    intro: [
      'Glorifier dapat dibuat sebagai display meja, podium produk, pedestal, atau showcase dengan elemen akrilik, panel grafis, dan pencahayaan. Bentuk akhirnya mengikuti karakter produk serta cara pelanggan melihatnya di toko atau area promosi.',
      'Sebelum produksi, ukuran dan berat produk, titik penempatan, kebutuhan akses listrik, durasi pemakaian, serta metode pengiriman perlu ditinjau. Integrasi LED, cover, dan konstruksi khusus mengikuti kelayakan teknis dan persetujuan gambar kerja.',
    ],
    heroAlt: 'Display akrilik custom Line Friends sebagai contoh pekerjaan display produk CSK',
    samplesTitle: 'Contoh display produk terkait',
    sampleNote:
      'Foto berikut adalah dokumentasi display akrilik, light box, dan floor display yang pernah dikerjakan CSK. Foto-foto ini merupakan contoh pekerjaan display terkait, bukan studi kasus product glorifier khusus.',
    items: {
      title: 'Jenis Glorifier & Product Display',
      groups: [
        { name: 'Product Glorifier & Launch Display', list: ['Product glorifier LED atau non-LED', 'Tabletop glorifier', 'Illuminated product display', 'Backlit display', 'Product launch podium', 'Display multi-sisi'] },
        { name: 'Pedestal & Product Showcase', list: ['Product pedestal / plinth', 'Acrylic product riser', 'Tiered product riser', 'Acrylic dome / cover showcase', 'Mini product showcase cabinet', 'Mannequin & product stage'] },
        { name: 'Countertop Display', list: ['Countertop / tabletop display', 'Display meja kasir', 'Acrylic product stand', 'Display box dan tray produk', 'Product information holder', 'Display kombinasi material'] },
        { name: 'Material & Detail', list: ['Akrilik bening, susu & warna', 'MDF / HMR dan plywood', 'Besi, hollow & metal finishing', 'Panel grafis dan branding', 'LED dan backlit sesuai desain', 'Kombinasi akrilik, kayu, metal & grafis'] },
      ],
    },
    faq: [
      { q: 'Apa itu product glorifier?', a: 'Product glorifier adalah display yang dirancang untuk menonjolkan satu produk atau lini produk unggulan. Bentuknya dapat berupa pedestal, display meja, showcase, atau unit dengan pencahayaan dan panel branding.' },
      { q: 'Apakah glorifier bisa menggunakan LED?', a: 'Bisa dirancang dengan LED atau tanpa pencahayaan. Penempatan lampu, power supply, jalur kabel, ventilasi, dan akses listrik perlu disesuaikan dengan bentuk display serta kondisi lokasi.' },
      { q: 'Apakah display dapat dibuat dari akrilik, kayu, dan metal sekaligus?', a: 'Kombinasi material dapat dipertimbangkan jika mendukung fungsi dan tampilan. Pemilihan material akhir mengikuti ukuran, berat produk, bentang konstruksi, finishing, dan durasi pemakaian.' },
      { q: 'Apa yang perlu disiapkan untuk meminta penawaran?', a: 'Siapkan foto dan dimensi produk, berat produk, ukuran area penempatan, referensi bentuk, jumlah unit, lokasi, kebutuhan LED atau cover, serta target waktu. Artwork atau brand guideline akan membantu proses desain.' },
      { q: 'Apakah CSK menerima pesanan satu unit atau banyak outlet?', a: 'Jumlah dan metode produksi ditinjau berdasarkan desain, material, kebutuhan prototipe, serta biaya setup. Untuk beberapa outlet, packing dan distribusi per lokasi dapat dibahas dalam satu lingkup proyek.' },
    ],
    scope: [
      'Diskusi fungsi display, ukuran dan berat produk, serta titik penempatan.',
      'Pengembangan konsep, gambar kerja, dan sampel/prototipe bila disepakati.',
      'Pemilihan material, finishing, grafis, dan sistem LED bila diperlukan.',
      'Fabrikasi serta pemeriksaan dimensi, stabilitas, finishing, dan fungsi.',
      'Packing, pengiriman, dan instalasi sesuai lokasi serta ruang lingkup penawaran.',
    ],
    areas: [
      { name: 'Jakarta', detail: 'Konsultasi produksi dan kebutuhan display produk untuk toko, showroom, mall, serta area promosi di Jakarta.' },
      { name: 'Tangerang Selatan', detail: 'Workshop CSK berada di Serpong, Tangerang Selatan; pembahasan spesifikasi dan jadwal produksi dilakukan melalui tim CSK.' },
      { name: 'Jabodetabek', detail: 'Pengiriman dan instalasi dapat direncanakan untuk Bogor, Depok, Bekasi, dan Tangerang sesuai lingkup proyek.' },
    ],
    cat: 'POSM & Product Display',
    waMsg: 'Halo CSK, saya ingin konsultasi product glorifier / display produk.\n\nBrand dan jenis produk: \nDimensi serta berat produk: \nJenis display (glorifier / pedestal / tabletop / LED): \nUkuran area penempatan: \nJumlah unit / outlet: \nLokasi pengiriman / instalasi: \nTarget waktu: \nReferensi desain: ',
    images: ['display-akrilik-custom-line-friends', 'display-light-box-custom-kredivo', 'floor-display-custom-evo-pet-food', 'promotional-display-custom-bioxine', 'mini-counter-booth-custom-beco'],
    assetImage: '/assets/display-akrilik-custom/akrilik-kosmetik-produk-kecantikan-golden.webp',
  },
  {
    slug: 'rak-display-gondola',
    icon: 'rak',
    nav: 'Rak Display & Gondola',
    title: 'Rak Display Custom & Gondola Supermarket',
    metaTitle: 'Jasa Pembuatan Rak Display Custom & Gondola',
    description:
      'Display manufacturer Jakarta untuk rak display custom dan gondola supermarket di Tangerang Selatan. Ukuran menyesuaikan lokasi, finishing rapi, dikirim dan dirakit oleh tim sendiri.',
    lead:
      'Kami membuat rak display dan gondola berdasarkan ukuran ruang, jenis produk, serta kebutuhan branding toko atau supermarket.',
    intro: [
      'Pengerjaan mencakup rak toko, gondola supermarket, gondola branding, dan rak khusus produk untuk area retail.',
      'Rak dirakit dan diperiksa di workshop sebelum dikirim. Tim kami dapat mengerjakan pengiriman dan perakitan di lokasi.',
    ],
    items: {
      title: 'Yang biasa dipesan',
      groups: [
        { name: 'Jenis rak', list: ['Gondola supermarket single & double', 'Gondola branding ber-logo', 'Rak display toko', 'Floor display produk', 'Counter display kasir', 'Endcap ujung lorong'] },
        { name: 'Kelengkapan', list: ['Header logo & panel branding', 'Stiker body rak', 'Backwall pegboard atau polos', 'Ambalan kaca / akrilik / kayu', 'Lampu LED rak', 'Roda atau kaki adjustable'] },
        { name: 'Material', list: ['Besi & hollow finishing powder coating', 'Multipleks HPL', 'Duco', 'Akrilik', 'Kaca temper', 'Karton untuk display musiman'] },
      ],
    },
    faq: [
      { q: 'Berapa harga rak display custom?', a: 'Harga ditentukan ukuran, material, jumlah tingkat, dan finishing. Rak karton promosi jelas berbeda jauh dari gondola besi ber-branding. Kirim ukuran area dan foto lokasinya, kami hitungkan estimasinya lebih dahulu tanpa biaya.' },
      { q: 'Apakah menerima pesanan satu unit?', a: 'Menerima. Banyak pesanan kami justru satu atau dua unit untuk satu toko. Tidak ada minimum jumlah.' },
      { q: 'Bisa mencontoh rak yang sudah ada?', a: 'Bisa. Kirim fotonya beserta ukuran kasar, kami buatkan gambar kerjanya. Untuk desain milik pihak lain, penyesuaian bentuk kami sarankan agar tidak menyalin persis.' },
      { q: 'Sudah termasuk pemasangan?', a: 'Untuk Jabodetabek, pengiriman dan perakitan bisa kami kerjakan sekaligus. Biayanya dihitung per proyek sesuai lokasi dan tingkat kesulitan akses.' },
    ],
    scope: [
      'Konsultasi kebutuhan display dan ukuran produk yang akan dipajang.',
      'Desain custom atau penyesuaian dari desain brand guideline Anda.',
      'Produksi rangka besi, akrilik, dan finishing di workshop Serpong.',
      'Quality check sebelum kirim — pastikan kokoh dan rapi.',
      'Pengiriman dan instalasi di toko, supermarket, atau gudang Anda.',
    ],
    areas: [
      { name: 'Jakarta', detail: 'Pengiriman dan instalasi ke supermarket, minimarket, dan toko retail di seluruh Jakarta.' },
      { name: 'Tangerang Selatan', detail: 'Workshop kami di Serpong. Pengiriman cepat dan instalasi bisa dijadwalkan fleksibel.' },
      { name: 'Jabodetabek', detail: 'Bogor, Depok, Bekasi, dan Tangerang. Biaya kirim dihitung per proyek sesuai lokasi dan volume.' },
    ],
    proof: {
      stat: 'Lebih dari 6 tahun',
      text: 'Produksi rak display custom untuk Potens, Nutricell Pet Care, Bioxsine, Halowell, dan brand FMCG lainnya di Indonesia.',
    },
    cat: 'Retail & Merchandising',
    waMsg: 'Halo CSK, saya ingin minta penawaran rak display / gondola.\n\nProduk yang dipajang: \nUkuran area/rak: \nJumlah unit/outlet: \nLokasi pemasangan: \nTarget waktu: ',
    images: ['gondola-supermarket-custom-potens', 'rak-display-custom-nutricell-pet-care',
      'dress-up-gondola-supermarket-gentle-gen', 'floor-display-custom-kilau-nipis',
      'promotional-display-custom-bioxine', 'promotional-display-custom-bioxine-before', 'promotional-display-custom-bioxine-detail', 'mockup-dummy-custom-bioxine',
      'rak-display-custom-chistotel', 'rak-display-custom-chistotel-detail', 'rak-display-custom-grivy',
      'rak-asongan-custom-garuda', 'rak-mini-display-meja-custom-happy-cat', 'rak-mini-display-custom-well-better-sleep',
      'rak-display-activation-custom-healthcare'],
    assetImage: '/assets/display-akrilik-custom/gondola-supermarket-neon-sign-led.webp',
  },
  {
    slug: 'booth-pameran',
    icon: 'papan',
    nav: 'Booth Pameran & Event',
    title: 'Jasa Pembuatan Booth Pameran & Stand Event',
    metaTitle: 'Jasa Pembuatan Booth Pameran & Stand Event',
    description:
      'Vendor fabrikasi booth Jakarta untuk JCC, JIExpo, ICE BSD, dan aktivasi mall. Desain, produksi, pemasangan, sampai bongkar setelah acara. Berbasis di Tangerang Selatan.',
    lead:
      'Kami mengerjakan booth pameran dan stand event custom, dari gambar kerja dan produksi sampai pemasangan serta pembongkaran setelah acara.',
    intro: [
      'Jenis pekerjaan meliputi booth pameran industri, aktivasi brand di atrium mall, dan mini counter untuk kegiatan penjualan langsung.',
      'Kami menyesuaikan gambar kerja dan jadwal produksi dengan ketentuan venue, jadwal loading, serta tanggal acara yang disepakati.',
    ],
    items: {
      title: 'Lingkup pengerjaan',
      groups: [
        { name: 'Jenis booth', list: ['Booth pameran custom', 'Booth aktivasi mall', 'Mini counter penjualan', 'Backdrop & photo booth', 'Panggung kecil & podium', 'Booth modular untuk dipakai ulang'] },
        { name: 'Kelengkapan', list: ['Meja & kabinet display', 'Rak produk dalam booth', 'Instalasi listrik & pencahayaan', 'Branding dinding & lantai', 'Neon box & huruf timbul booth', 'Bracket TV dan dudukan layar'] },
        { name: 'Layanan', list: ['Desain 3D sebelum produksi', 'Produksi di workshop sendiri', 'Loading & instalasi di lokasi', 'Standby teknisi selama acara', 'Bongkar setelah acara', 'Penyimpanan untuk pemakaian berikutnya'] },
      ],
    },
    faq: [
      { q: 'Berapa lama pengerjaan booth pameran?', a: 'Bergantung ukuran dan tingkat kerumitan. Sebagai gambaran umum, booth berukuran sedang perlu waktu beberapa minggu sejak desain disetujui. Sampaikan tanggal acara sejak percakapan pertama agar kami bisa memastikan sanggup atau tidak.' },
      { q: 'Apakah mengurus izin gedung pameran?', a: 'Pengurusan izin, ketentuan ketinggian, dan jadwal loading umumnya melekat pada penyelenggara atau peserta pameran. Kami siapkan gambar kerja dan data teknis yang dibutuhkan untuk pengajuan tersebut, serta menyesuaikan konstruksi dengan aturan gedungnya.' },
      { q: 'Bisakah booth dipakai lagi di pameran berikutnya?', a: 'Bisa, kalau sejak awal dirancang modular. Sampaikan rencana ini di depan — konstruksi knock down memang sedikit lebih mahal, tapi jauh lebih murah daripada membangun ulang tiap acara.' },
      { q: 'Apakah melayani bongkar pasang di luar jam operasional?', a: 'Ya. Mall dan gedung pameran umumnya hanya mengizinkan loading di luar jam kunjung, dan tim kami sudah terbiasa bekerja pada jadwal tersebut.' },
    ],
    scope: [
      'Survei lokasi dan diskusi kebutuhan booth bersama tim Anda.',
      'Desain 3D dan gambar kerja lengkap sebelum produksi dimulai.',
      'Produksi di workshop Serpong dengan quality check sebelum kirim.',
      'Loading, instalasi, dan standby teknisi selama acara berlangsung.',
      'Bongkar setelah acara dan opsi penyimpanan untuk pemakaian berikutnya.',
    ],
    areas: [
      { name: 'Jakarta', detail: 'JCC, JIExpo Kemayoran, ICE BSD, dan aktivasi mall di Jakarta Selatan & Pusat. Loading di luar jam operasional mall bisa kami atur.' },
      { name: 'Tangerang Selatan', detail: 'Workshop kami di Serpong. Survei lokasi dan pemasangan bisa dijadwalkan di hari yang sama.' },
      { name: 'Jabodetabek', detail: 'Bogor, Depok, Bekasi, dan Tangerang. Biaya kirim dihitung per proyek sesuai lokasi dan akses.' },
    ],
    proof: {
      stat: 'Lebih dari 6 tahun',
      text: 'Mengerjakan booth pameran untuk Jasa Tirta II, aktivasi mall, dan kampanye brand di atrium mall Jabodetabek.',
    },
    cat: 'Booth & Custom Build',
    waMsg: 'Halo CSK, saya ingin minta penawaran booth pameran.\n\nJenis booth/kebutuhan: \nUkuran (jika sudah ada): \nLokasi/venue: \nTanggal acara: \n\nSaya ingin konsultasi dan mendapatkan estimasi.',
    images: ['booth-512-slow-move-bazaar', 'slow-move-bazaar-booth-detail',
      'slow-move-bazaar-event-activity', 'slow-move-bazaar-installation',
      'slow-move-bazaar-setup', 'slow-move-bazaar-signage',
      'booth-pameran-custom-jakarta-jasa-tirta', 'booth-pameran-custom-perfetto-jakarta',
      'booth-pameran-custom-sosrait', 'booth-aktivasi-mall-tema-golden-farm-jakarta',
      'gate-entrance-custom-le-minerale'],
    assetImage: '/assets/booth-exhibition/0452bbb6-c756-4e37-9c10-91a6274065b0.webp',
  },
  {
    slug: 'neon-box-signage',
    icon: 'neon',
    nav: 'Neon Box & Signage',
    title: 'Jasa Pembuatan Neon Box, Huruf Timbul & Papan Nama',
    metaTitle: 'Jasa Neon Box, Signage & Digital Printing | CSK',
    description:
      'Produksi signage, neon box, digital printing, dan large-format graphics di Tangerang Selatan: huruf timbul, light box, stiker, banner, serta grafis window, wall, dan floor. Material, finishing, dan pemasangan disesuaikan dengan media serta kondisi lokasi.',
    lead:
      'Kami mengerjakan neon box, huruf timbul, papan nama, serta grafis cetak skala besar untuk toko, kantor, retail, dan event—mulai dari stiker, banner, backlit graphic, sampai aplikasi pada kaca, dinding, dan lantai.',
    intro: [
      'Kami mengukur bidang dan kondisi lokasi sebelum menentukan ukuran, material, rangka, serta sistem pencahayaan yang diperlukan.',
      'Produksi dilakukan di workshop, kemudian dikirim dan dipasang oleh tim sesuai akses lokasi dan jadwal pekerjaan.',
    ],
    items: {
      title: 'Jenis signage',
      groups: [
        { name: 'Bercahaya', list: ['Neon box akrilik', 'Neon box kain frontlite', 'Huruf timbul LED front lit', 'Huruf timbul back lit (halo)', 'Neon flex custom', 'Light box menu & panel'] },
        { name: 'Tanpa cahaya', list: ['Huruf timbul akrilik / stainless', 'Papan nama toko & kantor', 'Signage arah dan penanda ruang', 'Plang berdiri & totem', 'Stiker kaca & branding etalase', 'Papan nama akrilik meja'] },
        { name: 'Digital Printing & Large-Format Graphics', list: ['Stiker dan vinyl printing', 'Banner & poster', 'Backlit film / Duratrans', 'Window graphics / etalase', 'Wall graphics / wall wrap', 'Floor graphics / floor decal', 'Panel branding & event backdrop', 'Cutting sticker / contour cut'] },
        { name: 'Material', list: ['Akrilik susu & bening', 'Stainless hairline & mirror', 'Galvanil finishing duco', 'Modul LED bergaransi', 'Rangka hollow galvanis', 'Frontlite untuk bidang lebar'] },
      ],
    },
    faq: [
      { q: 'Berapa harga neon box?', a: 'Harga dihitung per meter persegi bidang tampak, ditambah rangka, jenis modul LED, dan tingkat kesulitan pemasangan. Kirim ukuran bidang serta foto tampak depan bangunan, kami hitung estimasinya.' },
      { q: 'Berapa lama neon box bertahan?', a: 'Rangka dan panel dapat bertahan bertahun-tahun bila materialnya sesuai lokasi. Yang lebih dulu menua adalah komponen elektriknya — modul LED dan power supply — dan itu memang bagian yang dirancang untuk bisa diganti.' },
      { q: 'Apakah bisa memperbaiki neon box yang sudah ada?', a: 'Bisa, sepanjang rangkanya masih layak. Perbaikan umum berupa penggantian modul LED yang mati, power supply, atau panel akrilik yang menguning.' },
      { q: 'Apakah mengurus izin pemasangan reklame?', a: 'Papan nama yang menempel di bangunan usaha sendiri umumnya berbeda perlakuan dengan reklame komersial di ruang publik. Kami siapkan gambar teknis untuk keperluan pengajuan, sedangkan perizinannya diurus oleh pemilik usaha sesuai ketentuan daerah setempat.' },
      { q: 'Apakah menerima digital printing saja tanpa pemasangan signage?', a: 'Kebutuhan cetak stiker, vinyl, banner, poster, dan grafis bidang besar dapat dibahas terpisah. Penawaran mengikuti jenis media, ukuran, jumlah, finishing, file artwork, serta kebutuhan aplikasi di lokasi.' },
    ],
    scope: [
      'Survei lokasi dan ukur area pemasangan signage.',
      'Desain menyesuaikan brand guideline atau buat dari nol.',
      'Produksi huruf timbul, neon box LED, atau signage sesuai jenis.',
      'Cetak large-format graphics, finishing, dan aplikasi pada media atau lokasi sesuai brief.',
      'Quality check sebelum kirim — pastikan cahaya merata, huruf rapi.',
      'Instalasi di lokasi dengan tim berpengalaman, termasuk kabel dan kelistrikan.',
    ],
    areas: [
      { name: 'Jakarta', detail: 'Instalasi neon box dan signage di toko, cafe, resto, dan kantor wilayah Jakarta.' },
      { name: 'Tangerang Selatan', detail: 'Workshop kami di Serpong. Instalasi cepat, tim standby.' },
      { name: 'Jabodetabek', detail: 'Bogor, Depok, Bekasi, Tangerang. Biaya kirim dan instalasi dihitung per proyek.' },
    ],
    proof: {
      stat: 'Lebih dari 6 tahun',
      text: 'Produksi neon box dan signage untuk J&T Cargo, Gorisa, Zakku, Sarwaga Yoga, dan bisnis lainnya di Jabodetabek.',
    },
    cat: 'Signage & Branding',
    waMsg: 'Halo CSK, saya ingin minta penawaran neon box / signage.\n\nJenis signage: \nUkuran bidang: \nJumlah unit: \nLokasi dan tinggi pemasangan: \nKebutuhan lampu: \nTarget waktu: ',
    images: ['neon-box-custom-jnt-cargo-tangerang', 'huruf-timbul-akrilik-gorisa', 'papan-nama-custom-sarwaga-yoga',
      'neon-box-bulat-custom-jnt-sarwaga-yoga', 'neon-box-custom-relis',
      'huruf-timbul-custom-kavo-house-instalasi', 'huruf-timbul-custom-kavo-house-terpasang'],
    assetImage: '/assets/neon-box/neon-box-custom-relis-studio.webp',
  },
  {
    slug: 'visual-merchandising',
    icon: 'konsultasi',
    nav: 'Visual Merchandising',
    title: 'Visual Merchandising & In-Store Branding',
    metaTitle: 'Jasa Visual Merchandising & In-Store Branding',
    description:
      'Fit out contractor Jakarta untuk visual merchandising dan in-store branding: penataan display, window display, store build-up, dan branding outlet retail di Jabodetabek.',
    lead:
      'Kami menata dan memproduksi elemen visual untuk area retail, termasuk display produk, window display, store build-up, dan branding outlet.',
    intro: [
      'Lingkupnya dapat mencakup survei, konsep, gambar kerja, produksi rak atau panel di workshop, dan instalasi di lokasi.',
      'Pekerjaan ini sesuai untuk pembukaan outlet, penyegaran area toko, penyeragaman tampilan cabang, dan kampanye musiman.',
    ],
    items: {
      title: 'Lingkup pekerjaan',
      groups: [
        { name: 'Penataan', list: ['Perencanaan alur pengunjung', 'Tata letak rak dan zona produk', 'Window display etalase', 'Penataan area kasir', 'Focal point produk unggulan', 'Panduan display antar cabang'] },
        { name: 'Store build-up', list: ['Branding dinding & partisi', 'Panel dan backdrop area promo', 'Meja dan kabinet display', 'Signage dalam toko', 'Dekorasi musiman', 'Penyeragaman tampilan cabang'] },
        { name: 'Cara kerja', list: ['Survei lokasi', 'Konsep dan gambar kerja', 'Produksi di workshop', 'Instalasi di lokasi', 'Pengerjaan di luar jam buka', 'Perawatan dan penggantian berkala'] },
      ],
    },
    faq: [
      { q: 'Apakah menerima pekerjaan penataan saja tanpa produksi?', a: 'Bisa, tetapi kekuatan kami memang pada rangkaian penuh: konsep, produksi, sampai pemasangan. Bila Anda hanya membutuhkan penataan barang di rak yang sudah ada, sampaikan agar ruang lingkupnya kami sesuaikan sejak penawaran.' },
      { q: 'Apakah bisa mengerjakan banyak cabang sekaligus?', a: 'Bisa. Untuk pekerjaan antar cabang, kami buat satu acuan display lalu produksi dilakukan dalam batch supaya tampilannya seragam. Jadwal pemasangan disusun per lokasi.' },
      { q: 'Apakah toko harus tutup selama pengerjaan?', a: 'Tidak harus. Pemasangan bisa dijadwalkan malam hari atau di luar jam buka. Sampaikan jam operasional Anda saat survei.' },
      { q: 'Berapa lama satu toko dikerjakan?', a: 'Bergantung luas dan lingkupnya. Penyegaran satu area promo bisa selesai dalam hitungan hari, sedangkan build-up outlet baru menyeluruh perlu beberapa minggu termasuk produksi.' },
    ],
    scope: [
      'Audit visual toko atau area retail bersama tim Anda.',
      'Konsep display dan layout sesuai brand guideline.',
      'Produksi rak, display, signage, dan material visual.',
      'Instalasi di toko atau lokasi retail.',
      'Evaluasi hasil dan opsi perawatan berkala.',
    ],
    areas: [
      { name: 'Jakarta', detail: 'Visual merchandising untuk toko, mall, dan brand retail di seluruh Jakarta.' },
      { name: 'Tangerang Selatan', detail: 'Workshop kami di Serpong. Instalasi dan maintenance untuk area Tangsel.' },
      { name: 'Jabodetabek', detail: 'Bogor, Depok, Bekasi, Tangerang. Biaya kirim dan instalasi per proyek.' },
    ],
    proof: {
      stat: 'Lebih dari 6 tahun',
      text: 'Visual merchandising untuk brand FMCG, kosmetik, dan retail di Jabodetabek. Klien kami termasuk Nutricell, Beco, dan lainnya.',
    },
    cat: 'Visual Merchandising',
    waMsg: 'Halo CSK, saya ingin konsultasi visual merchandising dan branding toko.\n\nBrand/toko: \nJenis kebutuhan: \nLokasi outlet: \nTarget pemasangan: ',
    images: ['dress-up-gondola-supermarket-gentle-gen', 'floor-display-custom-kilau-nipis'],
    assetImage: '/assets/branding-store/20bd3285-1272-4623-b861-3504face4dcd.webp',
  },
  {
    slug: 'peralatan-event',
    icon: 'papan',
    nav: 'Peralatan Event & Pameran',
    title: 'Jual Peralatan Event & Pameran Custom',
    metaTitle: 'Jual Peralatan Event Custom | Tenda, Meja, Kursi & Stand Booth',
    description:
      'Penjualan peralatan event dan pameran: stand booth, tenda, meja, kursi, backdrop, serta mini counter. Pemesanan custom untuk kebutuhan bazar dan perusahaan di Jabodetabek.',
    lead:
      'Kami menyediakan peralatan event untuk dibeli, meliputi stand booth, tenda, meja, kursi, backdrop, dan mini counter sesuai kebutuhan acara atau promosi.',
    intro: [
      'CSK melayani penjualan dan pemesanan peralatan event untuk brand, penyelenggara acara, perusahaan, dan komunitas. Barang yang dipesan menjadi milik pelanggan setelah transaksi selesai.',
      'Kebutuhan ukuran, jumlah, material, warna, dan branding dapat dibahas sebelum penawaran. Pengiriman dan pemasangan dapat direncanakan sesuai jenis produk serta lokasi proyek.',
    ],
    items: {
      title: 'Pilihan peralatan event yang dapat dipesan',
      groups: [
        { name: 'Produk', list: ['Stand booth dan mini counter', 'Tenda event', 'Meja event', 'Kursi event', 'Backdrop dan perlengkapan display'] },
        { name: 'Penyesuaian', list: ['Ukuran dan kuantitas sesuai kebutuhan', 'Pilihan material dan finishing', 'Warna dan identitas brand', 'Konstruksi custom sesuai spesifikasi'] },
        { name: 'Kebutuhan acara', list: ['Bazar dan pameran', 'Aktivasi brand', 'Acara perusahaan', 'Kegiatan sekolah dan komunitas', 'Pembukaan toko'] },
      ],
    },
    faq: [
      { q: 'Apakah peralatan event ini dijual atau disewakan?', a: 'CSK hanya menjual peralatan event. Barang yang dipesan adalah untuk pembelian, bukan penyewaan.' },
      { q: 'Apakah ukuran dan desain bisa dibuat custom?', a: 'Bisa disesuaikan menurut jenis peralatan, material, jumlah, dan kebutuhan branding. Kirim referensi atau spesifikasi untuk kami tinjau.' },
      { q: 'Bagaimana cara mendapatkan harga?', a: 'Sampaikan jenis barang, ukuran, jumlah, lokasi, dan target waktu. Kami menyiapkan estimasi atau penawaran sesuai spesifikasi yang disepakati.' },
      { q: 'Apakah bisa dikirim dan dipasang di lokasi acara?', a: 'Pengiriman dan pemasangan dapat dibahas sesuai jenis barang serta lokasi. Cakupan dan biayanya akan dicantumkan pada penawaran.' },
    ],
    scope: [
      'Konsultasi jenis dan jumlah peralatan event yang diperlukan.',
      'Penentuan ukuran, material, desain, dan branding sesuai kebutuhan.',
      'Pengadaan atau produksi barang berdasarkan spesifikasi yang disetujui.',
      'Pemeriksaan hasil dan persiapan serah terima.',
      'Pengiriman dan pemasangan jika tercantum dalam penawaran.',
    ],
    areas: [
      { name: 'Jakarta', detail: 'Pemesanan peralatan event untuk kegiatan perusahaan, bazar, dan pameran di Jakarta.' },
      { name: 'Tangerang Selatan', detail: 'Konsultasi dan pemesanan melalui workshop CSK di Serpong, Tangerang Selatan.' },
      { name: 'Jabodetabek', detail: 'Melayani kebutuhan di Bogor, Depok, Bekasi, dan Tangerang. Pengiriman dihitung berdasarkan lokasi dan pesanan.' },
    ],
    proof: {
      stat: 'Lebih dari 6 tahun',
      text: 'CSK menangani kebutuhan produksi dan perlengkapan event untuk brand, perusahaan, serta kegiatan promosi di Jabodetabek.',
    },
    cat: 'Event & Support',
    waMsg: 'Halo CSK, saya ingin membeli peralatan event.\n\nJenis barang: \nUkuran/spesifikasi: \nJumlah: \nLokasi pengiriman: \nTarget selesai: ',
    images: ['mini-counter-booth-custom-beco'],
    assetImage: '/assets/tenda-event/a46ab99c-e267-48f4-be63-d2afa860ab72.webp',
  },
];
