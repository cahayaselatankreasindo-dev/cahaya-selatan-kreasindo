export const site = {
  name: 'Cahaya Selatan Kreasindo',
  tagline: 'Jasa Pembuatan Stand Event & Booth Pameran Premium',
  wa: '628888533488',
  waDisplay: '0888-8533-488',
  email: 'cahayaselatankreasindo@gmail.com',
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

export const services = [
  {
    title: 'Rak Display Custom',
    lead: 'Butuh rak yang modelnya pas untuk produk Anda?',
    body: 'Dari rak toko kecil sampai gondola supermarket. Hasil akhir presisi, kokoh tahan lama, finishing rapi — bikin produk Anda lebih menjual.',
  },
  {
    title: 'Neon Box & Signage Premium',
    lead: 'Toko gelap = toko sepi.',
    body: 'Neon box terang dan menarik bikin logo bisnis Anda terlihat jelas dari kejauhan, siang maupun malam. Bahan baku tahan lama dan anti luntur.',
  },
  {
    title: 'Signage & Papan Nama',
    lead: 'First impression itu penting.',
    body: 'Papan nama yang rapi dan berkarakter bikin pelanggan langsung tertarik masuk ke toko Anda.',
  },
  {
    title: 'Konsultasi & Instalasi',
    lead: 'Bingung mau desain seperti apa?',
    body: 'Tim kami siap bantu dari konsep, desain, produksi, sampai pemasangan di lokasi. Semua dikerjakan profesional.',
  },
];

export const products = [
  { group: 'Event & Pameran', items: ['Stand booth', 'Pameran custom', 'Backdrop', 'Mini counter kasir'] },
  { group: 'Display & Signage', items: ['Rak display barang', 'Neon box', 'Huruf timbul', 'Papan nama'] },
  { group: 'Peralatan Sewa', items: ['Kursi', 'Meja', 'Tenda', 'Stand booth'] },
];

export const portfolio = [
  { img: 'jasa-tirta-booth-pameran', title: 'Booth Pameran Jasa Tirta II', cat: 'Booth & Pameran' },
  { img: 'jasa-tirta-booth-detail', title: 'Detail Booth Jasa Tirta II', cat: 'Booth & Pameran' },
  { img: 'booth-barn-mall', title: 'Booth Aktivasi Tema Barn — Atrium Mall', cat: 'Booth & Pameran' },
  { img: 'booth-rayakan-setiap-momen', title: 'Booth Kampanye "Rayakan Setiap Momen"', cat: 'Booth & Pameran' },
  { img: 'beco-mini-counter', title: 'Mini Counter Beco', cat: 'Booth & Pameran' },
  { img: 'line-friends-akrilik', title: 'Display Akrilik Koleksi Line Friends', cat: 'Booth & Pameran' },

  { img: 'potens-gondola-supermarket', title: 'Gondola Supermarket Potens', cat: 'Rak Display' },
  { img: 'potens-rak-display', title: 'Rangkaian Rak Display Potens', cat: 'Rak Display' },
  { img: 'nutricell-rak-display', title: 'Rak Display Nutricell Pet Care', cat: 'Rak Display' },
  { img: 'bioxsine-rak-display', title: 'Rak Display Bioxsine', cat: 'Rak Display' },
  { img: 'evo-floor-display', title: 'Floor Display Evo Pet Food', cat: 'Rak Display' },
  { img: 'halowell-rak-display', title: 'Rak Display Halowell', cat: 'Rak Display' },
  { img: 'nky-display-counter', title: 'Counter Display NKY', cat: 'Rak Display' },
  { img: 'hanasui-display-produk', title: 'Display Produk Hanasui', cat: 'Rak Display' },

  { img: 'jnt-cargo-neon-box', title: 'Neon Box J&T Cargo', cat: 'Neon Box & Signage' },
  { img: 'gorisa-huruf-timbul', title: 'Huruf Timbul & Signage Gorisa', cat: 'Neon Box & Signage' },
  { img: 'sarwaga-papan-nama', title: 'Papan Nama Sarwaga Yoga', cat: 'Neon Box & Signage' },
  { img: 'zakku-signage-toko', title: 'Signage Area Toko Zakku', cat: 'Neon Box & Signage' },

  { img: 'produksi-rak-karton', title: 'Perakitan Rak Display di Workshop', cat: 'Proses Produksi' },
  { img: 'rak-display-produksi', title: 'Finishing Rak Display', cat: 'Proses Produksi' },
  { img: 'workshop-perakitan', title: 'Quality Check Sebelum Kirim', cat: 'Proses Produksi' },
  { img: 'potens-standee-produksi', title: 'Standee Potens Siap Kirim', cat: 'Proses Produksi' },
];

export const portfolioCats = [...new Set(portfolio.map((p) => p.cat))];
