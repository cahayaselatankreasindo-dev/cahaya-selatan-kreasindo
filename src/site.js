export const site = {
  name: 'Cahaya Selatan Kreasindo',
  tagline: 'Production Partner untuk Brand dan Bisnis',
  wa: '628888533488',
  waDisplay: '0888-8533-488',
  email: 'cahayaselatankreasindo@gmail.com',
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
  {
    group: 'Event & Pameran',
    items: ['Stand booth', 'Booth pameran custom', 'Backdrop & photo booth', 'Mini counter kasir', 'Panggung & podium'],
  },
  {
    group: 'POSM & Display Promosi',
    items: ['Floor display', 'Endcap display', 'Counter display', 'Standee & standing character', 'Wobbler', 'Shelf talker', 'Hanging mobile', 'Tent card', 'Acrylic stand'],
  },
  {
    group: 'Rak Display & Gondola',
    items: ['Rak display toko', 'Gondola supermarket', 'Gondola branding', 'Ambalan kaca & akrilik', 'Header logo rak', 'Divider & pusher'],
  },
  {
    group: 'Neon Box & Signage',
    items: ['Neon box akrilik', 'Neon box frontlite', 'Huruf timbul LED', 'Papan nama toko', 'Signage arah', 'Plang & totem', 'Stiker etalase'],
  },
  {
    group: 'In-Store Branding',
    items: ['Store build-up', 'Window display', 'Branding dinding & partisi', 'Dekorasi musiman', 'Penyeragaman tampilan cabang'],
  },
  {
    group: 'Peralatan Sewa',
    items: ['Kursi', 'Meja', 'Tenda', 'Stand booth'],
  },
];

export const portfolio = [
  { img: 'booth-pameran-jasa-tirta-ii', title: 'Booth Pameran Jasa Tirta II', cat: 'Booth & Pameran' },
  { img: 'booth-pameran-jasa-tirta-ii-detail', title: 'Detail Booth Jasa Tirta II', cat: 'Booth & Pameran' },
  { img: 'booth-pameran-mall-tema-barn', title: 'Booth Aktivasi Tema Barn — Atrium Mall', cat: 'Booth & Pameran' },
  { img: 'booth-aktivasi-brand-mall', title: 'Booth Kampanye "Rayakan Setiap Momen"', cat: 'Booth & Pameran' },
  { img: 'mini-counter-booth-beco', title: 'Mini Counter Beco', cat: 'Booth & Pameran', featured: true },
  { img: 'display-akrilik-line-friends', title: 'Display Akrilik Koleksi Line Friends', cat: 'Booth & Pameran' },

  { img: 'gondola-supermarket-potens', title: 'Gondola Supermarket Potens', cat: 'Rak Display', featured: true },
  { img: 'rak-display-toko-potens', title: 'Rangkaian Rak Display Potens', cat: 'Rak Display', featured: true },
  { img: 'rak-display-nutricell-pet-care', title: 'Rak Display Nutricell Pet Care', cat: 'Rak Display' },
  { img: 'rak-display-bioxsine', title: 'Rak Display Bioxsine', cat: 'Rak Display' },
  { img: 'floor-display-evo-pet-food', title: 'Floor Display Evo Pet Food', cat: 'Rak Display', featured: true },
  { img: 'rak-display-halowell', title: 'Rak Display Halowell', cat: 'Rak Display' },
  { img: 'counter-display-nky', title: 'Counter Display NKY', cat: 'Rak Display', featured: true },

  { img: 'neon-box-jnt-cargo', title: 'Neon Box J&T Cargo', cat: 'Neon Box & Signage' },
  { img: 'huruf-timbul-gorisa', title: 'Huruf Timbul & Signage Gorisa', cat: 'Neon Box & Signage', featured: true },
  { img: 'papan-nama-sarwaga-yoga', title: 'Papan Nama Sarwaga Yoga', cat: 'Neon Box & Signage' },
  { img: 'signage-toko-zakku', title: 'Signage Area Toko Zakku', cat: 'Neon Box & Signage', featured: true },

  { img: 'workshop-produksi-rak-display', title: 'Perakitan Rak Display di Workshop', cat: 'Proses Produksi', featured: true },
  { img: 'finishing-rak-display-workshop', title: 'Finishing Rak Display', cat: 'Proses Produksi', featured: true },
  { img: 'quality-check-rak-display', title: 'Quality Check Sebelum Kirim', cat: 'Proses Produksi', featured: true },
  { img: 'standee-potens-siap-kirim', title: 'Standee Potens Siap Kirim', cat: 'Proses Produksi', featured: true },
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
      'Posm manufacturer di Tangerang Selatan: floor display, counter display, standee, wobbler, shelf talker, dan acrylic stand sebagai display manufacturer Jakarta. Dikerjakan di workshop sendiri, dikirim dan dipasang untuk area Jabodetabek.',
    lead:
      'POSM (Point of Sale Material) adalah materi promosi untuk area rak, kasir, dan titik penjualan. Kami membuatnya sesuai ukuran produk, kebutuhan kampanye, dan jumlah outlet.',
    intro: [
      'Kami memproduksi POSM untuk produk FMCG, perawatan diri, pet care, dan retail modern. Alurnya dimulai dari gambar kerja, dilanjutkan produksi di workshop Serpong, lalu pengiriman atau pemasangan di outlet.',
      'Untuk kebutuhan banyak cabang, produksi dapat dilakukan dalam batch dengan acuan ukuran dan finishing yang sama.',
    ],
    items: {
      title: 'Jenis POSM yang kami produksi',
      groups: [
        { name: 'Floor Display & Rak', list: ['Floor display', 'Endcap display', 'Counter display', 'Mini counter', 'Standee & standing character', 'Tier display bertingkat'] },
        { name: 'Materi rak', list: ['Wobbler', 'Shelf talker', 'Hanging mobile', 'Tent card', 'Header banner rak', 'Divider & pusher rak'] },
        { name: 'Material yang dipakai', list: ['Akrilik bening & warna', 'Karton duplex & corrugated', 'PVC board', 'Multipleks finishing HPL / duco', 'Besi & hollow', 'Stiker cetak & laminasi'] },
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
      'Produksi standee, display akrilik, wobbler, dan material promosi lain.',
      'Quality check sebelum kirim.',
      'Pengiriman ke toko, gudang, atau distributor Anda.',
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
    waMsg: 'Halo, saya ingin minta penawaran produksi POSM untuk brand berikut:',
    images: ['display-akrilik-line-friends'],
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
    waMsg: 'Halo, saya ingin minta penawaran rak display / gondola untuk kebutuhan berikut:',
    images: ['gondola-supermarket-potens', 'rak-display-toko-potens', 'rak-display-nutricell-pet-care'],
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
    waMsg: 'Halo, saya ingin minta penawaran booth pameran untuk acara berikut:',
    images: ['booth-pameran-jasa-tirta-ii', 'booth-pameran-mall-tema-barn', 'booth-aktivasi-brand-mall'],
    assetImage: '/assets/booth-exhibition/0452bbb6-c756-4e37-9c10-91a6274065b0.webp',
  },
  {
    slug: 'neon-box-signage',
    icon: 'neon',
    nav: 'Neon Box & Signage',
    title: 'Jasa Pembuatan Neon Box, Huruf Timbul & Papan Nama',
    metaTitle: 'Jasa Pembuatan Neon Box & Huruf Timbul',
    description:
      'Signage & neon box Jakarta: neon box, huruf timbul, papan nama toko, dan signage arah di Tangerang Selatan dan Jabodetabek. Material tahan cuaca, dipasang oleh tim sendiri.',
    lead:
      'Kami membuat neon box, huruf timbul, papan nama, dan signage arah untuk toko, kantor, klinik, gudang, serta area dalam gedung.',
    intro: [
      'Kami mengukur bidang dan kondisi lokasi sebelum menentukan ukuran, material, rangka, serta sistem pencahayaan yang diperlukan.',
      'Produksi dilakukan di workshop, kemudian dikirim dan dipasang oleh tim sesuai akses lokasi dan jadwal pekerjaan.',
    ],
    items: {
      title: 'Jenis signage',
      groups: [
        { name: 'Bercahaya', list: ['Neon box akrilik', 'Neon box kain frontlite', 'Huruf timbul LED front lit', 'Huruf timbul back lit (halo)', 'Neon flex custom', 'Light box menu & panel'] },
        { name: 'Tanpa cahaya', list: ['Huruf timbul akrilik / stainless', 'Papan nama toko & kantor', 'Signage arah dan penanda ruang', 'Plang berdiri & totem', 'Stiker kaca & branding etalase', 'Papan nama akrilik meja'] },
        { name: 'Material', list: ['Akrilik susu & bening', 'Stainless hairline & mirror', 'Galvanil finishing duco', 'Modul LED bergaransi', 'Rangka hollow galvanis', 'Frontlite untuk bidang lebar'] },
      ],
    },
    faq: [
      { q: 'Berapa harga neon box?', a: 'Harga dihitung per meter persegi bidang tampak, ditambah rangka, jenis modul LED, dan tingkat kesulitan pemasangan. Kirim ukuran bidang serta foto tampak depan bangunan, kami hitung estimasinya.' },
      { q: 'Berapa lama neon box bertahan?', a: 'Rangka dan panel dapat bertahan bertahun-tahun bila materialnya sesuai lokasi. Yang lebih dulu menua adalah komponen elektriknya — modul LED dan power supply — dan itu memang bagian yang dirancang untuk bisa diganti.' },
      { q: 'Apakah bisa memperbaiki neon box yang sudah ada?', a: 'Bisa, sepanjang rangkanya masih layak. Perbaikan umum berupa penggantian modul LED yang mati, power supply, atau panel akrilik yang menguning.' },
      { q: 'Apakah mengurus izin pemasangan reklame?', a: 'Papan nama yang menempel di bangunan usaha sendiri umumnya berbeda perlakuan dengan reklame komersial di ruang publik. Kami siapkan gambar teknis untuk keperluan pengajuan, sedangkan perizinannya diurus oleh pemilik usaha sesuai ketentuan daerah setempat.' },
    ],
    scope: [
      'Survei lokasi dan ukur area pemasangan signage.',
      'Desain menyesuaikan brand guideline atau buat dari nol.',
      'Produksi huruf timbul, neon box LED, atau signage sesuai jenis.',
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
    waMsg: 'Halo, saya ingin minta penawaran neon box / signage untuk lokasi berikut:',
    images: ['neon-box-jnt-cargo', 'huruf-timbul-gorisa', 'papan-nama-sarwaga-yoga'],
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
    waMsg: 'Halo, saya ingin konsultasi visual merchandising untuk toko berikut:',
    images: ['floor-display-evo-pet-food', 'display-akrilik-line-friends'],
    assetImage: '/assets/branding-store/20bd3285-1272-4623-b861-3504face4dcd.webp',
  },
  {
    slug: 'sewa-peralatan-event',
    icon: 'papan',
    nav: 'Sewa Peralatan Event',
    title: 'Sewa Stand Booth, Tenda, Meja & Kursi Event',
    metaTitle: 'Sewa Stand Booth, Tenda, Meja & Kursi Event',
    description:
      'Sewa stand booth, tenda, meja, dan kursi untuk bazar, pameran, dan kegiatan perusahaan di Tangerang Selatan dan sekitarnya. Diantar dan dipasang oleh tim sendiri.',
    lead:
      'Kami menyewakan stand booth, tenda, meja, dan kursi untuk bazar, pameran, acara perusahaan, serta kegiatan komunitas.',
    intro: [
      'Peralatan dapat dipakai untuk kebutuhan pendukung acara, termasuk stand booth untuk area brand dan perlengkapan untuk area pengunjung atau panitia.',
      'Pengantaran, pemasangan, pembongkaran, dan pengambilan kembali disesuaikan dengan lokasi serta jadwal acara.',
    ],
    items: {
      title: 'Yang tersedia',
      groups: [
        { name: 'Peralatan', list: ['Stand booth', 'Tenda', 'Meja', 'Kursi', 'Backdrop', 'Mini counter'] },
        { name: 'Termasuk', list: ['Pengantaran ke lokasi', 'Pemasangan', 'Pembongkaran setelah acara', 'Pengambilan kembali'] },
        { name: 'Cocok untuk', list: ['Bazar & pasar rakyat', 'Pameran dan expo', 'Acara perusahaan', 'Kegiatan sekolah & komunitas', 'Aktivasi brand', 'Pembukaan toko'] },
      ],
    },
    faq: [
      { q: 'Berapa lama masa sewa minimum?', a: 'Umumnya dihitung harian mengikuti durasi acara, termasuk hari pemasangan dan pembongkaran. Sampaikan tanggal dan jamnya, kami hitungkan.' },
      { q: 'Apakah biaya antar sudah termasuk?', a: 'Biaya antar dihitung sesuai jarak dan tingkat kesulitan akses lokasi, dan selalu kami cantumkan terpisah pada penawaran agar jelas.' },
      { q: 'Bagaimana bila ada barang rusak selama acara?', a: 'Keausan wajar tidak dipermasalahkan. Kerusakan atau kehilangan di luar itu menjadi tanggung jawab penyewa sesuai kesepakatan sewa.' },
      { q: 'Bisakah menyewa sekaligus memesan booth custom?', a: 'Bisa, dan justru itu yang paling sering. Booth utama dibuat custom, sisa kebutuhan ruang dipenuhi dengan peralatan sewa.' },
    ],
    scope: [
      'Konsultasi kebutuhan peralatan untuk event Anda.',
      'Rekomendasi set peralatan sesuai jenis acara dan budget.',
      'Pengiriman, instalasi, dan setup di lokasi acara.',
      'Standby teknisi atau operator selama event berlangsung.',
      'Bongkar dan pengambilan setelah acara selesai.',
    ],
    areas: [
      { name: 'Jakarta', detail: 'Sewa peralatan event di JCC, JIExpo, hotel, dan venue Jakarta lainnya.' },
      { name: 'Tangerang Selatan', detail: 'Workshop dan gudang kami di Serpong. Penyewaan cepat.' },
      { name: 'Jabodetabek', detail: 'Bogor, Depok, Bekasi, Tangerang. Biaya sewa + kirim dihitung per event.' },
    ],
    proof: {
      stat: 'Lebih dari 6 tahun',
      text: 'Sewa peralatan untuk event organizer, perusahaan, dan komunitas di Jabodetabek. Termasuk booth portable, backdrop, standee, dan display.',
    },
    cat: 'Event & Support',
    waMsg: 'Halo, saya ingin menyewa peralatan event untuk acara berikut:',
    images: ['mini-counter-booth-beco'],
    assetImage: '/assets/tenda-event/a46ab99c-e267-48f4-be63-d2afa860ab72.webp',
  },
];
