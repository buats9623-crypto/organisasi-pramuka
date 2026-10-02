import type { Icon } from '@phosphor-icons/react';
import {
  Compass,
  FlagBannerFold,
  Handshake,
  HeartStraight,
  ShieldChevron,
  UsersThree,
} from '@phosphor-icons/react';

export interface PillarValue {
  id: string;
  valueName: string;
  shortDefinition: string;
  icon: Icon;
}

export const pillarValues: PillarValue[] = [
  {
    id: 'kepemimpinan',
    valueName: 'Kepemimpinan',
    shortDefinition: 'Memimpin diri sendiri dan tim, lalu mengambil keputusan saat keadaan tidak pasti.',
    icon: FlagBannerFold,
  },
  {
    id: 'kemandirian',
    valueName: 'Kemandirian',
    shortDefinition: 'Berpisah dari ketergantungan, mengatur waktu, kebutuhan, dan keuangan sendiri.',
    icon: Compass,
  },
  {
    id: 'kedisiplinan',
    valueName: 'Kedisiplinan',
    shortDefinition: 'Menepati aturan, jadwal, dan kesepakatan yang disepakati bersama.',
    icon: ShieldChevron,
  },
  {
    id: 'persaudaraan',
    valueName: 'Persaudaraan',
    shortDefinition: 'Menjaga keharmonisan dan keberlanjutan kerja dengan angkatan lain.',
    icon: UsersThree,
  },
  {
    id: 'pengabdian',
    valueName: 'Pengabdian',
    shortDefinition: 'Memberi waktu dan tenaga untuk lingkungan sekolah dan masyarakat.',
    icon: Handshake,
  },
  {
    id: 'karakter',
    valueName: 'Pengembangan Karakter',
    shortDefinition: 'Membentuk kejujuran, keberanian, dan santunan dalam keseharian.',
    icon: HeartStraight,
  },
];