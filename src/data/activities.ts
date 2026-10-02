export type ActivityCategory =
  | 'perkemahan'
  | 'pelantikan'
  | 'latihan-rutin'
  | 'bakti-sosial'
  | 'penjelajahan'
  | 'lomba'
  | 'kepemimpinan';

export interface Activity {
  id: string;
  slug: string;
  title: string;
  category: ActivityCategory;
  shortDescription: string;
  imageUrl: string;
  imageAlt: string;
  isFeatured: boolean;
}

/**
 * Tanggal dan lokasi kegiatan sengaja tidak ada di data ini.
 * PRD Bab 5 melarang data fiktif sebelum ambalan menyerahkan angka resmi,
 * jadi kedua field itu ditambahkan nanti, bukan dikarang sekarang.
 */

export const activities: Activity[] = [
  {
    id: 'penjelajahan-01',
    slug: 'penjelajahan-dan-kepemimpinan',
    title: 'Penjelajahan dan Kepemimpinan',
    category: 'penjelajahan',
    shortDescription:
      'Rute di alam terbuka untuk melatih navigasi, pengambilan keputusan, dan kerja tim dalam kondisi yang menantang.',
    imageUrl: '/asset/image/pramuka/Penjelajahan dan kepemimpinan.jfif',
    imageAlt:
      'Anggota ambalan menyelesaikan trekking sambil membawa bendera merah putih di jalur hutan',
    isFeatured: true,
  },
  {
    id: 'perkemahan-01',
    slug: 'perkemahan-dan-membangun-tenda',
    title: 'Perkemahan dan Membangun Tenda',
    category: 'perkemahan',
    shortDescription:
      'Mempelajari teknik membangun tenda, memasang alat, serta mengelola persediaan bersama tim.',
    imageUrl: '/asset/image/pramuka/Kegiatan perkemahan dan tenda.jfif',
    imageAlt:
      'Dua anggota ambalan membangun tenda di antara pepohonan saat cahaya senja',
    isFeatured: true,
  },
  {
    id: 'pelantikan-01',
    slug: 'upacara-dan-barisan',
    title: 'Upacara dan Barisan',
    category: 'pelantikan',
    shortDescription:
      'Upacara Membersih dan barisan untuk serah terima antar angkatan.',
    imageUrl: '/asset/image/pramuka/Upacara dan barisan Pramuka.jfif',
    imageAlt:
      'Barisan anggota ambalan berbaris rapi di lapangan upacara dengan latar pepohonan',
    isFeatured: true,
  },
  {
    id: 'kerja-sama-01',
    slug: 'kerja-sama-membangun',
    title: 'Kerja Sama Membangun',
    category: 'latihan-rutin',
    shortDescription:
      'Latihan teknis membangun struktur tenda bersama, dengan pembagian tugas yang jelas.',
    imageUrl: '/asset/image/pramuka/Kerja sama mendirikan tenda.jfif',
    imageAlt:
      'Beberapa anggota ambalan membangun struktur tenda oranye bersama-sama di ruang terbuka',
    isFeatured: false,
  },
  {
    id: 'kebersamaan-01',
    slug: 'kebersamaan-anggota',
    title: 'Kebersamaan Anggota',
    category: 'latihan-rutin',
    shortDescription:
      'Latihan bersama yang memupuk rasa dekat antar angkatan sebelum masa kegiatan luar ruangan.',
    imageUrl: '/asset/image/pramuka/Suasana kebersamaan anggota.jfif',
    imageAlt: 'Anggota ambalan berkumpul dalam melingkar saat latihan bersama',
    isFeatured: false,
  },
];

export const activityCategories: { value: ActivityCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'Semua' },
  { value: 'perkemahan', label: 'Perkemahan' },
  { value: 'pelantikan', label: 'Upacara' },
  { value: 'latihan-rutin', label: 'Latihan rutin' },
  { value: 'bakti-sosial', label: 'Bakti sosial' },
  { value: 'penjelajahan', label: 'Penjelajahan' },
  { value: 'lomba', label: 'Lomba' },
  { value: 'kepemimpinan', label: 'Kepemimpinan' },
];

export const categoryLabel = (value: ActivityCategory): string =>
  activityCategories.find((c) => c.value === value)?.label ?? value;
