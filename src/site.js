export const site = {
  name: 'Cahaya Selatan Kreasindo',
  tagline: 'Jasa Pembuatan Stand Event & Booth Pameran Premium',
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

export const services = [
  {
    title: 'Rak Display Custom',
    icon: 'rak',
    lead: 'Butuh rak yang modelnya pas untuk produk Anda?',
    body: 'Dari rak toko kecil sampai gondola supermarket. Hasil akhir presisi, kokoh tahan lama, finishing rapi — bikin produk Anda lebih menjual.',
  },
  {
    title: 'Neon Box & Signage Premium',
    icon: 'neon',
    lead: 'Toko gelap = toko sepi.',
    body: 'Neon box terang dan menarik bikin logo bisnis Anda terlihat jelas dari kejauhan, siang maupun malam. Bahan baku tahan lama dan anti luntur.',
  },
  {
    title: 'Signage & Papan Nama',
    icon: 'papan',
    lead: 'First impression itu penting.',
    body: 'Papan nama yang rapi dan berkarakter bikin pelanggan langsung tertarik masuk ke toko Anda.',
  },
  {
    title: 'Konsultasi & Instalasi',
    icon: 'konsultasi',
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
  { img: 'booth-pameran-jasa-tirta-ii', title: 'Booth Pameran Jasa Tirta II', cat: 'Booth & Pameran' },
  { img: 'booth-pameran-jasa-tirta-ii-detail', title: 'Detail Booth Jasa Tirta II', cat: 'Booth & Pameran' },
  { img: 'booth-pameran-mall-tema-barn', title: 'Booth Aktivasi Tema Barn — Atrium Mall', cat: 'Booth & Pameran' },
  { img: 'booth-aktivasi-brand-mall', title: 'Booth Kampanye "Rayakan Setiap Momen"', cat: 'Booth & Pameran' },
  { img: 'mini-counter-booth-beco', title: 'Mini Counter Beco', cat: 'Booth & Pameran' },
  { img: 'display-akrilik-line-friends', title: 'Display Akrilik Koleksi Line Friends', cat: 'Booth & Pameran' },

  { img: 'gondola-supermarket-potens', title: 'Gondola Supermarket Potens', cat: 'Rak Display' },
  { img: 'rak-display-toko-potens', title: 'Rangkaian Rak Display Potens', cat: 'Rak Display' },
  { img: 'rak-display-nutricell-pet-care', title: 'Rak Display Nutricell Pet Care', cat: 'Rak Display' },
  { img: 'rak-display-bioxsine', title: 'Rak Display Bioxsine', cat: 'Rak Display' },
  { img: 'floor-display-evo-pet-food', title: 'Floor Display Evo Pet Food', cat: 'Rak Display' },
  { img: 'rak-display-halowell', title: 'Rak Display Halowell', cat: 'Rak Display' },
  { img: 'counter-display-nky', title: 'Counter Display NKY', cat: 'Rak Display' },
  { img: 'rak-display-produk-hanasui', title: 'Display Produk Hanasui', cat: 'Rak Display' },

  { img: 'neon-box-jnt-cargo', title: 'Neon Box J&T Cargo', cat: 'Neon Box & Signage' },
  { img: 'huruf-timbul-gorisa', title: 'Huruf Timbul & Signage Gorisa', cat: 'Neon Box & Signage' },
  { img: 'papan-nama-sarwaga-yoga', title: 'Papan Nama Sarwaga Yoga', cat: 'Neon Box & Signage' },
  { img: 'signage-toko-zakku', title: 'Signage Area Toko Zakku', cat: 'Neon Box & Signage' },

  { img: 'workshop-produksi-rak-display', title: 'Perakitan Rak Display di Workshop', cat: 'Proses Produksi' },
  { img: 'finishing-rak-display-workshop', title: 'Finishing Rak Display', cat: 'Proses Produksi' },
  { img: 'quality-check-rak-display', title: 'Quality Check Sebelum Kirim', cat: 'Proses Produksi' },
  { img: 'standee-potens-siap-kirim', title: 'Standee Potens Siap Kirim', cat: 'Proses Produksi' },
];

export const portfolioCats = [...new Set(portfolio.map((p) => p.cat))];
