export interface BoardMember {
  id: string;
  positionCode: string;
  positionTitle: string;
  divisionGroup: 'Pimpinan Inti' | 'Administrasi' | 'Bidang';
  memberName: string;
}

export const boardMembers: BoardMember[] = [
  {
    id: 'pradana-putra',
    positionCode: 'PRADANA_PUTRA',
    positionTitle: 'Pradana Putra',
    divisionGroup: 'Pimpinan Inti',
    memberName: 'Nur Ahmad Wijayanto',
  },
  {
    id: 'pradana-putri',
    positionCode: 'PRADANA_PUTRI',
    positionTitle: 'Pradana Putri',
    divisionGroup: 'Pimpinan Inti',
    memberName: 'Amilia Cahyani',
  },
  {
    id: 'pemangku-adat',
    positionCode: 'PEMANGKU_ADAT',
    positionTitle: 'Pemangku Adat',
    divisionGroup: 'Pimpinan Inti',
    memberName: 'Muhammad Ilham dan Amel',
  },
  {
    id: 'kerani',
    positionCode: 'KERANI',
    positionTitle: 'Kerani',
    divisionGroup: 'Administrasi',
    memberName: 'Bella Safira',
  },
  {
    id: 'juru-uang',
    positionCode: 'JURU_UANG',
    positionTitle: 'Juru Uang',
    divisionGroup: 'Administrasi',
    memberName: 'Nuril Pika',
  },
  {
    id: 'koordinator-perkemahan',
    positionCode: 'KOORDINATOR_PERKEMAHAN',
    positionTitle: 'Koordinator Perkemahan',
    divisionGroup: 'Bidang',
    memberName: 'Fiki Prastama',
  },
  {
    id: 'koordinator-humas',
    positionCode: 'KOORDINATOR_HUMAS',
    positionTitle: 'Koordinator Humas',
    divisionGroup: 'Bidang',
    memberName: 'Satrio Jati dan Anggita Anggraini',
  },
];

export const divisionOrder: BoardMember['divisionGroup'][] = ['Pimpinan Inti', 'Administrasi', 'Bidang'];

export const groupedMembers: Record<BoardMember['divisionGroup'], BoardMember[]> = {
  'Pimpinan Inti': boardMembers.filter((m) => m.divisionGroup === 'Pimpinan Inti'),
  'Administrasi': boardMembers.filter((m) => m.divisionGroup === 'Administrasi'),
  'Bidang': boardMembers.filter((m) => m.divisionGroup === 'Bidang'),
};