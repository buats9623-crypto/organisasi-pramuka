export interface GalleryMedia {
  id: string;
  title: string;
  caption: string;
  imageUrl: string;
  imageAlt: string;
  aspect: 'wide' | 'tall' | 'square';
}

export const galleryMedia: GalleryMedia[] = [
  {
    id: 'gallery-01',
    title: 'Perkemahan',
    caption: 'Memasang tenda saat cahaya senja.',
    imageUrl: '/asset/image/pramuka/Kegiatan perkemahan dan tenda.jfif',
    imageAlt: 'Anggota ambalan membangun tenda di antara pepohonan saat cahaya senja',
    aspect: 'wide',
  },
  {
    id: 'gallery-02',
    title: 'Penjelajahan',
    caption: 'Rute hutan dengan bendera merah putih di barisan depan.',
    imageUrl: '/asset/image/pramuka/Penjelajahan dan kepemimpinan.jfif',
    imageAlt: 'Anggota ambalan berjalan membawa bendera merah putih di jalur hutan',
    aspect: 'tall',
  },
  {
    id: 'gallery-03',
    title: 'Upacara',
    caption: 'Barisan di lapangan upacara.',
    imageUrl: '/asset/image/pramuka/Upacara dan barisan Pramuka.jfif',
    imageAlt: 'Barisan anggota ambalan berbaris rapi di lapangan upacara',
    aspect: 'wide',
  },
  {
    id: 'gallery-04',
    title: 'Kerja Sama',
    caption: 'Membangun struktur tenda bersama-sama.',
    imageUrl: '/asset/image/pramuka/Kerja sama mendirikan tenda.jfif',
    imageAlt: 'Anggota ambalan bekerja sama membangun struktur tenda oranye',
    aspect: 'square',
  },
  {
    id: 'gallery-05',
    title: 'Kebersamaan',
    caption: 'Latihan bersama sebelum kegiatan luar ruangan.',
    imageUrl: '/asset/image/pramuka/Suasana kebersamaan anggota.jfif',
    imageAlt: 'Anggota ambalan berkumpul dalam melingkar saat latihan bersama',
    aspect: 'wide',
  },
];