export interface OrganizationProfile {
  organizationName: string;
  shortName: string;
  mottoHeadline: string;
  heroSubtext: string;
  aboutNarrative: string;
  visionText: string;
  missionList: string[];
  gudepNumberPlaceholder: string;
  schoolBasePlaceholder: string;
  whatsappContactUrl: string;
  instagramUrl: string;
  copyrightText: string;
}

export const organizationProfile: OrganizationProfile = {
  organizationName: 'Ambalan Kameswara Sekartaji',
  shortName: 'Kameswara Sekartaji',
  mottoHeadline: 'Menempa Karakter, Menjelajah Makna',
  heroSubtext:
    'Pembinaan Pramuka Penegak yang membentuk karakter, kepemimpinan, dan kemandirian.',
  aboutNarrative:
    'Ambalan Kameswara Sekartaji menghimpun siswa SMA dan MA di lingkungan sekolah untuk dibina dalam kepramukaan Penegak. Pembinaan berjalan melalui latihan rutin, kegiatan luar ruangan, upacara, dan pengabdian kepada masyarakat.\n\nSelama masa keanggotaan, anggota dilatih agar mampu memimpin, berdiri sendiri, dan bertanggung jawab atas diri serta timnya. Materi latihan disusun agar anggota memahami dan menerapkan nilai Dasa Darma dan Pancasila dalam keseharian maupun di masyarakat.',
  visionText:
    'Menjadi ambalan yang menyiapkan anggota berkarakter, berjiwa kepemimpinan, mandiri, dan berlandaskan nilai Pancasila.',
  missionList: [
    'Menyelenggarakan kegiatan kepramukaan yang menantang dan terarah.',
    'Melatih kepemimpinan, kedisiplinan, dan tanggung jawab sejak dini.',
    'Menguatkan persaudaraan antar anggota, alumni, dan sekolah.',
    'Mengerakkan pengabdian masyarakat dan kepedulian lingkungan.',
    'Mengembangkan minat dan bakat setiap anggota sesuai potensinya.',
  ],
  gudepNumberPlaceholder: 'Gudep 02.275 / 02.176 (putra / putri)',
  schoolBasePlaceholder: 'Pangkalan sekolah menunggu data resmi dari ambalan',
  whatsappContactUrl:
    'https://wa.me/6285649246034?text=Halo%20Ambalan%20Kameswara%20Sekartaji%2C%20saya%20ingin%20bertanya%20seputar%20pendaftaran%20anggota.',
  instagramUrl: 'https://instagram.com/iillhhmm__',
  copyrightText: 'Ambalan Kameswara Sekartaji. Hak cipta dilindungi undang-undang.',
};
