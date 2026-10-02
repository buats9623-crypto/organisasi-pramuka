import type { Icon } from '@phosphor-icons/react';
import { Crown, CompassRose } from '@phosphor-icons/react';

export interface PhilosophyItem {
  id: string;
  title: string;
  shortMeaning: string;
  coreValues: string[];
  narrativePlaceholder: string;
  icon: Icon;
}

/**
 * Narasi panjang untuk kedua nama ini belum ada.
 * PRD Bab 12 mencatat naskah resmi makna Kameswara dan Sekartaji
 * belum diserahkan Dewan Adat, jadi yang tampil baru garis besarnya.
 */
export const philosophyItems: PhilosophyItem[] = [
  {
    id: 'kameswara',
    title: 'Kameswara',
    shortMeaning: 'Pemimpin yang berani, tenang, dan dapat dipercaya.',
    coreValues: ['Kepemimpinan', 'Keberanian', 'Pengendalian diri'],
    narrativePlaceholder: 'Naskah resmi makna nama ini menunggu dari Dewan Adat Ambalan.',
    icon: Crown,
  },
  {
    id: 'sekartaji',
    title: 'Sekartaji',
    shortMeaning: 'Yang bijaksana, setia pada kesepakatan, dan teguh menghadapi kesulitan.',
    coreValues: ['Kebijaksanaan', 'Kesetiaan', 'Keteguhan'],
    narrativePlaceholder: 'Naskah resmi makna nama ini menunggu dari Dewan Adat Ambalan.',
    icon: CompassRose,
  },
];
