# PRODUCT REQUIREMENTS DOCUMENT (PRD)

## Landing Page Ambalan Kameswara Sekartaji

**STATUS: DRAFT SEMENTARA**

| | |
| --- | --- |
| **Nama Produk** | Website Landing Page Resmi Organisasi Pramuka Ambalan Kameswara Sekartaji |
| **Versi Dokumen** | v0.1 (Draft Sementara) |
| **Disusun oleh** | Tim Pengembang Web (Pengembang) |
| **Untuk** | Ambalan Kameswara Sekartaji (Klien) |
| **Tanggal** | 24 Mei 2024 |
| **Dokumen Terkait** | Spesifikasi Kebutuhan Proyek & Arahan Desain Ambalan Kameswara Sekartaji |

---

# 1. Ringkasan Produk (Overview)

Ambalan Kameswara Sekartaji membutuhkan representasi digital resmi guna mengonsolidasikan identitas, nilai filosofis, sejarah, dan rekam jejak kegiatan kepramukaannya secara kredibel. Selama ini, penyebaran informasi seputar profil ambalan, publikasi dokumentasi kegiatan luar ruangan, serta struktur organisasi masih tersebar secara terpisah di berbagai media sosial atau belum terdokumentasi dalam satu platform digital yang terstruktur. Kondisi tersebut membatasi aksesibilitas calon anggota, anggota aktif, alumni, pembina, sekolah, maupun masyarakat luas untuk mengenal identitas dan karakter ambalan secara utuh melalui sebuah media resmi.

Untuk menjawab kebutuhan tersebut, proyek ini bertujuan mengembangkan sebuah website *landing page* resmi berbasis web modern yang bertindak sebagai etalase terpusat identitas Ambalan Kameswara Sekartaji. Website ini menyajikan arsitektur informasi terpadu yang memadukan estetika editorial modern, warna identitas khas *teal green*, dan nilai-nilai kepramukaan otentik. Cakupan sistem meliputi navigasi adaptif, sajian hero visual sinematik, narasi profil dan filosofi ambalan, rumusan visi dan misi berkarakter, etalase kegiatan terfilter, galeri dokumentasi interaktif dengan *lightbox*, hierarki struktur kepengurusan dengan data aman (*placeholder*), saluran ajakan bergabung (*Call to Action*), hingga footer informatif yang terintegrasi.

# 2. Tujuan & Sasaran (Goals)

- Memusatkan seluruh informasi resmi profil, sejarah, filosofi, visi-misi, dan struktur organisasi Ambalan Kameswara Sekartaji dalam satu platform digital yang mudah diakses dan terverifikasi.
- Membangun citra digital organisasi kepramukaan yang modern, aktif, inspiratif, dan berjiwa kepemimpinan tinggi melalui identitas visual khas (*teal green*) yang konsisten dan berkarakter kuat.
- Menyediakan wadah publikasi dokumentasi rekam jejak kegiatan (perkemahan, upacara, latihan rutin, bakti sosial) yang tertata rapi, sinematik, dan responsif di berbagai perangkat.
- Memfasilitasi interaksi dan rekrutmen awal bagi calon anggota, alumni, serta masyarakat umum untuk terhubung langsung dengan narahubung resmi ambalan.
- Menyajikan arsitektur kode frontend yang modular dan terstruktur rapi, memudahkan perluasan fungsi menjadi portal dinamis di masa mendatang.

# 3. Pengguna & Peran (Users & Roles)

- **Calon Anggota / Siswa :** Menjelajahi profil organisasi, memahami nilai dan keseruan kegiatan, serta mengakses tombol tindakan (CTA) untuk mendaftar atau menghubungi narahubung ambalan.
- **Anggota Aktif Pramuka :** Memperoleh referensi resmi terkait agenda kegiatan, struktur kepengurusan ambalan, serta menggunakan website sebagai identitas kebanggaan organisasi di ruang digital.
- **Alumni Ambalan :** Mengakses dokumentasi kegiatan terkini, memantau regenerasi kepengurusan, dan menjaga ikatan emosional serta silaturahmi dengan ambalan.
- **Pembina & Pihak Sekolah :** Memantau publikasi program kerja, memastikan integritas nilai kepramukaan, dan memvalidasi kesesuaian citra digital ambalan terhadap standar institusi pendidikan.
- **Masyarakat Umum :** Mengetahui kontribusi sosial, filosofi kepramukaan, dan rekam jejak positif yang dijalankan oleh Ambalan Kameswara Sekartaji di tengah lingkungan masyarakat.

# 4. Ruang Lingkup (Scope)

## 4.1 Termasuk (MVP)

- Navigasi responsif (*Sticky Navigation Bar*) lengkap dengan logo/emblem ambalan, tautan menu seksi internal (*smooth scroll*), tombol CTA aksi, dan menu mobile drawer/hamburger.
- Hero Section sinematik dengan *eyebrow text* "GERAKAN PRAMUKA", judul utama "Menempa Karakter, Menjelajah Makna", narasi pembuka, visual sinematik, serta tombol CTA primer ("Jelajahi Ambalan") dan sekunder ("Lihat Kegiatan").
- Seksi Tentang Ambalan (*About Section*) bergaya editorial yang menjabarkan identitas, peran, latar belakang, dan nilai-nilai fundamental ambalan.
- Seksi Filosofi Nama yang menguraikan makna filosofis dari identitas "Kameswara" dan "Sekartaji" dalam tata letak berimbang dengan *content placeholder* terstandarisasi.
- Seksi Visi & Misi yang menonjolkan enam pilar karakter: Kepemimpinan, Kemandirian, Kedisiplinan, Persaudaraan, Pengabdian, dan Pengembangan Karakter.
- Seksi Kegiatan & Aktivitas yang menampilkan kategori aktivitas (perkemahan, pelantikan, latihan rutin, bakti sosial, penjelajahan, lomba, kepemimpinan) berbasis visual fotografi dan kartu interaktif.
- Seksi Galeri Dokumentasi dengan tata letak *masonry / editorial grid*, interaksi *hover*, dan fitur penampil foto resolusi penuh (*lightbox modal*).
- Seksi Struktur Kepengurusan yang menyajikan hierarki dewan ambalan (Pradana Putra/Putri, Pemangku Adat, Kerani, Juru Uang, serta Bidang) menggunakan *placeholder* nama aman tanpa data fiktif.
- Seksi Ajakan Bertindak (*Join / Call to Action*) dengan narasi persuasif bernafaskan semangat kepramukaan yang terhubung langsung ke kanal narahubung resmi / WhatsApp.
- Footer situs yang memuat penegasan identitas logo, tautan navigasi pintas, kanal media sosial, identitas gugus depan/sekolah, dan pernyataan hak cipta.

## 4.2 Di Luar Lingkup Awal / Fase Lanjutan

Fitur-fitur seperti sistem formulir pendaftaran interaktif mandiri yang terhubung ke basis data (*online registration system*), panel dasbor pengelolaan konten dinamis (*Content Management System / CMS*), sistem autentikasi atau login anggota dan alumni, serta portal pembayaran iuran digital disepakati untuk ditunda dan direncanakan pada pengembangan tahap berikutnya (rincian lengkap tercantum pada Bab 11).

# 5. Asumsi & Batasan (Assumptions & Constraints)

- **Tumpukan Teknologi Frontend (Asumsi Pengembang):** Sistem akan diimplementasikan sebagai Single Page Application (SPA) berbasis React, TypeScript, Tailwind CSS untuk styling sistematis, serta Framer Motion untuk eksekusi animasi transisi dan *scroll reveal*.
- **Penyimpanan Data Lokal Terstruktur (Asumsi Pengembang):** Seluruh konten teks, daftar kegiatan, galeri foto, dan susunan kepengurusan pada tahap MVP disimpan dalam berkas data statis terstruktur (`data/*.ts`) untuk mempermudah migrasi ke API / CMS di masa mendatang tanpa ketergantungan server backend aktif.
- **Integritas Data dan Konten Historis (Batasan):** Informasi resmi terkait nomor registrasi gugus depan, nama sekolah induk, tahun pendirian resmi, naskah resmi sejarah ambalan, serta nama pembina/pengurus wajib mempertahankan penanda *placeholder* baku dan tidak diperbolehkan dibuat secara fiktif hingga data valid diserahkan secara resmi oleh pihak ambalan.
- **Pendekatan Desain Responsif (Batasan):** Antarmuka wajib menerapkan metodologi *Mobile-First Design* yang menjamin konsistensi tata letak, hierarki tipografi, dan kemudahan navigasi sentuh pada layar ponsel pintar (360px–480px), tablet (768px), hingga monitor *desktop* (1024px–1440px).
- **Skema Warna Utama (Batasan):** Identitas warna visual diikat ketat pada palet arahan klien: Primary Teal Green (`#39CFC0`), Deep Green (`#123D36`), Secondary Green (`#237D70`), Soft Background (`#F7FAF8`), Surface White (`#FFFFFF`), Text Primary (`#172C29`), dan Text Secondary (`#647873`) tanpa saturasi berlebih atau gradien warna yang tidak harmonis.
- **Ketergantungan Layanan Pihak Ketiga (Batasan):** Integrasi eksternal dibatasi pada protokol tautan langsung (URI link) menuju antarmuka WhatsApp Chat API dan tautan profil media sosial resmi organisasi tanpa integrasi webhook atau SDK berbayar.
- **Optimasi Performa & Aksesibilitas Visual (Batasan):** Seluruh aset citra fotografi kegiatan wajib dikompresi ke format modern (WebP) dengan rasio yang terukur, serta implementasi animasi berbasis CSS/Framer Motion wajib memperhatikan preferensi *prefers-reduced-motion* guna menjamin kenyamanan aksesibilitas pengguna.

# 6. Kebutuhan Fungsional (Functional Requirements)

## 6.1 Pengunjung - Navigasi & Beranda (Hero)

| **ID** | **Kebutuhan Fungsional** | **Prioritas** |
| --- | --- | --- |
| **NAV-1** | Sistem menampilkan logo resmi atau emblem Ambalan Kameswara Sekartaji beserta nama organisasi pada bilah navigasi (*navbar*). | **Wajib** |
| **NAV-2** | Sistem menyediakan tautan navigasi menuju seksi Beranda, Tentang, Filosofi, Kegiatan, Galeri, dan Kepengurusan dengan perpindahan halus (*smooth scroll*). | **Wajib** |
| **NAV-3** | Sistem mengubah gaya visual bilah navigasi secara dinamis saat digulir (*scroll interaction*) dan menandai menu aktif sesuai posisi seksi pada layar. | **Penting** |
| **NAV-4** | Sistem menyediakan menu navigasi responsif (*hamburger drawer menu*) yang mudah dibuka dan ditutup pada perangkat seluler. | **Wajib** |
| **NAV-5** | Sistem menampilkan tombol CTA pintas ("Kenali Ambalan" / "Bergabung") pada bilah navigasi yang mengarahkan pengguna ke seksi kontak/bergabung. | **Wajib** |
| **NAV-6** | Sistem menampilkan seksi Hero dengan *eyebrow text* "GERAKAN PRAMUKA", judul utama "Menempa Karakter, Menjelajah Makna", dan subjudul deskriptif semangat ambalan. | **Wajib** |
| **NAV-7** | Sistem menampilkan tombol aksi ganda pada Hero: tombol utama "Jelajahi Ambalan" (gulir ke Profil) dan tombol sekunder "Lihat Kegiatan" (gulir ke Kegiatan). | **Wajib** |
| **NAV-8** | Sistem menampilkan latar belakang visual fotografi sinematik bertema kepramukaan pada seksi Hero yang terintegrasi secara harmonis dengan warna *teal green*. | **Wajib** |

## 6.2 Pengunjung - Profil, Filosofi & Nilai Ambalan

| **ID** | **Kebutuhan Fungsional** | **Prioritas** |
| --- | --- | --- |
| **PRF-1** | Sistem menampilkan seksi Tentang Ambalan dalam tata letak editorial yang memuat narasi latar belakang, peran, dan identitas kepramukaan. | **Wajib** |
| **PRF-2** | Sistem menampilkan seksi Filosofi Nama yang menyajikan kartu/komposisi terpisah dan seimbang antara identitas "Kameswara" dan "Sekartaji". | **Wajib** |
| **PRF-3** | Sistem menyajikan area penampung teks (*placeholder*) terstandarisasi untuk uraian makna dan nilai filosofis resmi tanpa mengarang fakta sejarah yang belum terverifikasi. | **Wajib** |
| **PRF-4** | Sistem menampilkan rumusan Visi dan Misi ambalan yang berfokus pada 6 pilar nilai: Kepemimpinan, Kemandirian, Kedisiplinan, Persaudaraan, Pengabdian, dan Pengembangan Karakter. | **Wajib** |
| **PRF-5** | Sistem menerapkan tata letak visual tipografi yang elegan dan mudah dibaca pada seksi Visi & Misi untuk menegaskan karakter organisasi. | **Penting** |

## 6.3 Pengunjung - Kegiatan & Aktivitas

| **ID** | **Kebutuhan Fungsional** | **Prioritas** |
| --- | --- | --- |
| **ACT-1** | Sistem menampilkan daftar kegiatan ambalan (Perkemahan, Pelantikan, Latihan Rutin, Bakti Sosial, Penjelajahan, Lomba Kepramukaan, dan Pengembangan Kepemimpinan) berbasis visual fotografi. | **Wajib** |
| **ACT-2** | Pengunjung dapat menyaring (*filter*) daftar kegiatan berdasarkan kategori bidang kegiatan tertentu. | **Penting** |
| **ACT-3** | Sistem menampilkan informasi ringkas pada setiap kegiatan yang mencakup judul kegiatan, deskripsi singkat, kategori, dan foto dokumentasi utama. | **Wajib** |
| **ACT-4** | Sistem menyajikan interaksi responsif (*hover effect*) yang halus saat kursor mengarah pada kartu atau blok kegiatan. | **Penting** |

## 6.4 Pengunjung - Galeri Dokumentasi & Lightbox

| **ID** | **Kebutuhan Fungsional** | **Prioritas** |
| --- | --- | --- |
| **GAL-1** | Sistem menampilkan dokumentasi foto kegiatan asli dalam susunan tata letak *masonry* atau *editorial grid* dengan variasi rasio gambar yang estetis. | **Wajib** |
| **GAL-2** | Sistem menyajikan efek transisi dan pembesaran halus (*subtle zoom & overlay caption*) saat kursor berada di atas foto galeri. | **Penting** |
| **GAL-3** | Pengunjung dapat menekan foto dokumentasi untuk membukanya dalam tampilan resolusi penuh (*lightbox modal view*). | **Wajib** |
| **GAL-4** | Pengunjung dapat menutup tampilan *lightbox* atau berpindah ke foto berikutnya/sebelumnya menggunakan tombol navigasi maupun kontrol papan ketik (*escape/arrows*). | **Penting** |
| **GAL-5** | Sistem menerapkan optimasi pemuatan gambar bertahap (*lazy loading*) untuk menjaga kecepatan akses data pengguna. | **Wajib** |

## 6.5 Pengunjung - Struktur Kepengurusan

| **ID** | **Kebutuhan Fungsional** | **Prioritas** |
| --- | --- | --- |
| **ORG-1** | Sistem menampilkan hierarki bagan struktur dewan kepengurusan ambalan secara teratur dan berjenjang. | **Wajib** |
| **ORG-2** | Sistem menampilkan kartu jabatan kepengurusan inti yang mencakup: Pradana Putra, Pradana Putri, Pemangku Adat, Kerani, Juru Uang, serta jajaran Koordinator Bidang. | **Wajib** |
| **ORG-3** | Sistem menggunakan penanda posisi aman (*placeholder text*) pada nama pengurus dan tidak menampilkan data atau nama anggota fiktif sebelum data resmi disahkan. | **Wajib** |
| **ORG-4** | Sistem menyajikan kartu profil pengurus dengan susunan visual konsisten menggunakan palet warna *deep green* dan *teal*. | **Penting** |

## 6.6 Pengunjung - Narahubung, Aksi Bergabung & Footer

| **ID** | **Kebutuhan Fungsional** | **Prioritas** |
| --- | --- | --- |
| **CTA-1** | Sistem menampilkan seksi ajakan bertindak (*Join / Call to Action*) dengan naskah ajakan yang inspiratif dan berjiwa kepramukaan. | **Wajib** |
| **CTA-2** | Sistem menyediakan tombol tautan langsung menuju kontak resmi / WhatsApp narahubung organisasi untuk keperluan pendaftaran atau informasi lanjutan. | **Wajib** |
| **CTA-3** | Sistem menampilkan *placeholder* nomor kontak/tautan WhatsApp jika nomor resmi belum ditetapkan secara definitif oleh ambalan. | **Wajib** |
| **CTA-4** | Sistem menampilkan footer komprehensif yang memuat lambang organisasi, deskripsi singkat ambalan, tautan menu navigasi kilat, dan pernyataan hak cipta. | **Wajib** |
| **CTA-5** | Sistem menampilkan *placeholder* identitas Gugus Depan dan pangkalan sekolah pada bagian footer sampai informasi resmi divalidasi. | **Wajib** |
| **CTA-6** | Sistem menampilkan tautan menuju kanal media sosial resmi ambalan pada bagian footer. | **Penting** |

# 7. Alur Pengguna Utama (Key User Flows)

## 7.1 Menjelajahi Profil dan Filosofi Ambalan

1. Pengunjung membuka alamat domain situs landing page Ambalan Kameswara Sekartaji melalui peramban web.
2. Sistem memuat halaman beranda dengan status navigasi "Beranda Aktif" dan menampilkan visual Hero yang memikat.
3. Pengunjung menekan tombol "Jelajahi Ambalan" pada seksi Hero atau melakukan pengguliran layar ke bawah.
4. Halaman bergulir secara halus menuju seksi Tentang Ambalan, menampilkan informasi latar belakang dan nilai-nilai dasar.
5. Pengunjung melanjutkan pengguliran ke seksi Filosofi Nama dan membaca makna filosofis pembentuk nama "Kameswara" serta "Sekartaji".
6. Pengunjung menelusuri seksi Visi & Misi dan mencermati 6 pilar nilai pengembangan karakter ambalan.
7. Indikator menu pada bilah navigasi secara otomatis berpindah status menjadi "Tentang Aktif" atau "Filosofi Aktif" sesuai titik henti pandang layar.

## 7.2 Mengeksplorasi Dokumentasi Kegiatan Melalui Lightbox

1. Pengunjung menekan menu "Galeri" pada bilah navigasi atau menggulir layar hingga tiba pada seksi Dokumentasi Kegiatan.
2. Sistem menyajikan tata letak *editorial grid* foto-foto dokumentasi kegiatan ambalan.
3. Pengunjung memilih salah satu kategori kegiatan pada bilah penyaring (contoh: "Perkemahan" atau "Bakti Sosial").
4. Sistem memperbarui susunan foto secara dinamis dengan status "Kategori Terpilih".
5. Pengunjung mengarahkan kursor dan menekan salah satu foto yang menarik perhatian.
6. Sistem menampilkan jendela sembulan resolusi penuh dengan status *lightbox* "Terbuka", meredupkan latar belakang utama, dan menyajikan judul serta takarir foto.
7. Pengunjung menekan tombol navigasi panah untuk melihat foto dokumentasi berikutnya tanpa menutup jendela.
8. Pengunjung menekan tombol "Tutup" (ikon silang) atau tombol *Escape* pada papan ketik, lalu sistem mengembalikan tampilan halaman ke status *lightbox* "Tertutup".

## 7.3 Menghubungi Ambalan untuk Pendaftaran atau Informasi

1. Pengunjung (calon anggota atau pihak luar) menelusuri halaman hingga mencapai seksi *Join / Call to Action* di bagian bawah situs, atau menekan tombol navigasi "Bergabung".
2. Sistem menyajikan pesan persuasif mengenai nilai pembinaan ambalan serta tombol aksi "Hubungi Narahubung Ambalan".
3. Pengunjung menekan tombol narahubung tersebut.
4. Sistem membuka tab baru peramban dan mengarahkan pengguna secara otomatis ke tautan protokol WhatsApp resmi ambalan dengan status URL "Tautan Terverifikasi".
5. Peramban menampilkan antarmuka aplikasi perpesanan dengan draf teks pembuka otomatis untuk memulai komunikasi dengan narahubung ambalan.

## 7.4 Mengakses Navigasi Melalui Perangkat Seluler (Mobile Menu)

1. Pengunjung mengakses situs landing page melalui peramban pada layar ponsel cerdas.
2. Sistem menyajikan antarmuka *mobile-first* yang rapi dan memampatkan menu ke dalam sebuah tombol menu *hamburger* pada bilah navigasi.
3. Pengunjung menyentuh tombol *hamburger* tersebut.
4. Sistem memunculkan bilah samping navigasi (*mobile drawer*) dengan status menu "Terbuka" disertai animasi transisi geser yang mulus.
5. Pengunjung menyentuh salah satu tautan seksi, misalnya menu "Kepengurusan".
6. Sistem secara otomatis menutup bilah samping navigasi dengan status "Tertutup" dan menggulirkan tampilan layar tepat pada seksi Struktur Kepengurusan Ambalan.

# 8. Model Data (High-Level)

| **Entitas** | **Field Utama** | **Keterangan** |
| --- | --- | --- |
| **Activity** | `id`, `slug`, `title`, `category`, `short_description`, `full_description`, `thumbnail_url`, `event_date_placeholder`, `location_placeholder`, [`registration_link`], [`is_featured`] | Menyimpan data agenda, jenis program kerja, dan rekam jejak aktivitas kepramukaan ambalan. |
| **GalleryMedia** | `id`, `title`, `caption`, `image_url`, `aspect_ratio`, `category_tag`, `captured_year_placeholder`, [`photographer_credit`], [`display_order`] | Menyimpan data aset citra fotografi dokumentasi lapangan beserta dimensi rasio untuk tata letak *grid*. |
| **PhilosophyItem** | `id`, `figure_identifier`, `title`, `short_meaning`, `detailed_narrative_placeholder`, `visual_symbol_url`, `core_values` | Menyimpan narasi filosofi dari figur Kameswara dan Sekartaji beserta nilai-nilai pemaknaannya. |
| **PillarValue** | `id`, `value_name`, `short_definition`, `icon_identifier`, `display_order` | Menyimpan enam pilar nilai ambalan (Kepemimpinan, Kemandirian, Kedisiplinan, Persaudaraan, Pengabdian, Karakter). |
| **BoardMember** | `id`, `position_code`, `position_title`, `division_group`, `member_name_placeholder`, `photo_placeholder_url`, `display_order`, [`actual_full_name`], [`scout_id_number`], [`social_media_link`] | Menyimpan data struktur fungsional kepengurusan dewan ambalan putra dan putri. |
| **OrganizationProfile** | `id`, `organization_name`, `motto_headline`, `subheadline_text`, `about_narrative`, `vision_text`, `mission_list`, `gudep_number_placeholder`, `school_base_placeholder`, `whatsapp_contact_url`, `instagram_url`, `copyright_text`, [`contact_email`], [`address_coordinates`] | Menyimpan informasi profil fundamental, legalitas pangkalan, teks identitas, dan pranala komunikasi ambalan. |

**Catatan:** field dalam [tanda kurung siku] merupakan bagian dari fitur usulan/Fase Lanjutan (Bab 11).

# 9. Kebutuhan Non-Fungsional (Non-Functional Requirements)

- **Responsivitas & Tampilan Lintas Perangkat :** Antarmuka situs wajib beroperasi secara optimal dan adaptif pada seluruh dimensi layar, memprioritaskan perangkat seluler cerdas (*viewport* 360px–480px), tablet (768px), hingga monitor *desktop* (1024px–1440px+), dengan target nihil kerusakan tata letak (*zero layout break*).
- **Performa & Kecepatan Akses :** Waktu muat halaman awal (*First Contentful Paint*) ditargetkan di bawah 1,8 detik pada koneksi internet standar 4G, didukung dengan implementasi kompresi format citra modern (WebP), pemuatan bertahap (*lazy loading*), serta pemisahan bundel modul kode (*code splitting*).
- **Aksesibilitas (A11y) :** Kontras warna antara elemen teks dan latar belakang wajib memenuhi standar WCAG 2.1 Level AA (minimal rasio 4.5:1 untuk teks normal), seluruh elemen gambar wajib memiliki atribut teks alternatif (`alt`), serta navigasi modal *lightbox* dapat dioperasikan penuh melalui kontrol papan ketik (*keyboard accessible*).
- **Kehalusan Interaksi Visual :** Seluruh eksekusi animasi mikro (*hover*, *scroll reveal*, *parallax*) wajib berjalan lancar pada kecepatan 60 bingkai per detik (fps) tanpa memicu lonjakan penggunaan memori, serta wajib menghormati pengaturan preferensi pengguna terhadap pengurangan gerak (*prefers-reduced-motion*).
- **Optimasi Mesin Pencari (SEO) :** Kode markup wajib menggunakan hierarki HTML5 semantik (penggunaan tag `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, dan `<footer>`), menyediakan struktur meta tag Open Graph untuk pratinjau tautan media sosial, serta pemetaan tajuk (*heading structure*) H1 hingga H4 yang runut.
- **Keterpeliharaan Kode (Maintainability) :** Basis kode frontend wajib dibangun dengan TypeScript berspesifikasi tipe ketat (*strict typing*), komponen modular per seksi, serta pemisahan sumber data statis (`data/*.ts`) dari logika antarmuka guna memudahkan integrasi sistem dinamis pada fase selanjutnya.

# 10. Integrasi Pihak Ketiga

| **Layanan** | **Fungsi** | **Catatan** |
| --- | --- | --- |
| **WhatsApp Chat URI Protocol** | Menghubungkan aksi tombol CTA langsung ke aplikasi perpesanan WhatsApp narahubung resmi ambalan | Implementasi tahap MVP menggunakan format tautan standar `https://wa.me/[NOMOR_PLACEHOLDER]` dengan draf teks pembuka otomatis. |
| **Platform Media Sosial (Instagram)** | Menautkan ikon media sosial pada bilah footer ke profil resmi organisasi ambalan | Menggunakan pranala keluar eksternal (*outbound link*) dengan atribut keamanan `rel="noopener noreferrer"`. |
| **Google Fonts / Webfont Delivery** | Memuat tipografi editorial modern untuk judul dan teks konten ambalan secara performan | Pemuatan font asinkron dengan teknik *font-display: swap* guna mencegah *Flash of Invisible Text* (FOIT). |
| **Headless CMS / Database Backend API** | Mengelola dan memperbarui data kegiatan, dokumentasi galeri, dan pengurus secara dinamis tanpa sentuhan kode | Fase Lanjutan. |
| **Form Engine / Email Notification API** | Menampung data pengisian formulir pendaftaran anggota baru ambalan secara terstruktur dan mengirim notifikasi surel | Fase Lanjutan. |

# 11. Fitur Usulan / Fase Lanjutan

- **Sistem Formulir Pendaftaran Anggota Daring (Online Member Registration).** Fitur formulir interaktif di dalam website yang memungkinkan calon anggota mengunggah berkas identitas siswa, mengisi data diri lengkap, serta memvalidasi kesediaan mengikuti kegiatan kepramukaan secara digital, menggantikan alur pendaftaran manual via pesan singkat WhatsApp.
- **Panel Manajemen Konten (CMS Dashboard).** Dasbor administratif berbasis peran (*role-based access*) yang diperuntukkan bagi pengurus ambalan (misalnya Kerani atau Seksi Dokumentasi) untuk mempublikasikan artikel kegiatan baru, menambah koleksi foto ke galeri dokumentasi, serta memperbarui struktur kepengurusan secara mandiri tanpa perlu mengubah berkas kode frontend.
- **Direktori Database Alumni & Anggota (Scout Member Directory).** Halaman direktori pencarian anggota dan alumni terverifikasi yang dilengkapi riwayat angkatan (*pradana period*), tanda penghargaan kepramukaan, dan rekam jejak pengabdian guna memfasilitasi ikatan komunikasi antargenerasi ambalan.
- **Sistem Transparansi Kas & Iuran Digital Ambalan.** Modul pelaporan ringkas perbendaharaan kas kegiatan ambalan yang dikelola oleh Juru Uang dan dapat dipantau oleh dewan kehormatan serta pembina secara transparan, lengkap dengan pintu gerbang pembayaran iuran kegiatan melalui QRIS.

# 12. Pertanyaan Terbuka / TBD

- Berapakah nomor registrasi resmi Gugus Depan (Gudep) putra dan Gudep putri yang menaungi Ambalan Kameswara Sekartaji?
- Apa nama resmi pangkalan sekolah/institusi induk tempat Ambalan Kameswara Sekartaji berpangkalan?
- Kapan tahun resmi pendirian ambalan serta bagaimana uraian narasi resmi sejarah pendirian Ambalan Kameswara Sekartaji?
- Bagaimanakah rumusan naskah resmi mengenai makna filosofis dari nama "Kameswara" dan "Sekartaji" yang telah disahkan oleh Dewan Adat Ambalan?
- Siapa sajakah nama lengkap para pembina ambalan serta anggota pengurus dewan ambalan aktif (Pradana Putra/Putri, Pemangku Adat, Kerani, Juru Uang, dan Koordinator Bidang) beserta foto resmi berseragam Pramuka lengkap?
- Berapakah nomor kontak WhatsApp resmi dan alamat surel resmi yang akan dihubungkan pada tombol utama Call to Action (CTA)?
- Apa tautan (*handle*) akun media sosial resmi ambalan (seperti Instagram, YouTube, atau TikTok) yang akan disematkan pada bilah footer?
- Di manakah aset logo atau emblem resmi Ambalan Kameswara Sekartaji dengan resolusi tinggi atau format vektor (SVG) dapat diperoleh?
- Kapan seluruh koleksi materi fotografi asli kegiatan resolusi tinggi ambalan dapat disediakan untuk menggantikan foto *placeholder* galeri?

# 13. Glosarium

- **Ambalan :** Satuan organisasi kepramukaan di tingkat pangkalan sekolah yang mewadahi Pramuka Penegak (rentang usia 16 hingga 20 tahun).
- **Pradana :** Sebutan kehormatan bagi ketua dewan ambalan penegak yang memimpin jalannya organisasi (terbagi menjadi Pradana Putra untuk ambalan putra dan Pradana Putri untuk ambalan putri).
- **Pemangku Adat :** Pejabat dewan ambalan yang memegang amanah menjaga marwah, mengawasi kepatuhan tata tertib, serta memimpin prosesi adat istiadat ambalan.
- **Kerani :** Jabatan struktural dalam kepengurusan ambalan yang menjalankan fungsi sekretaris, tata kelola administrasi surat-menyurat, kearsipan, dan notulensi organisasi.
- **Juru Uang :** Jabatan struktural dewan ambalan yang bertindak sebagai bendahara pengelola keuangan, pencatatan kas, dan logistik perbendaharaan ambalan.
- **Gugus Depan (Gudep) :** Satuan organik terdepan dalam Gerakan Pramuka yang menjadi pangkalan penghimpun peserta didik dalam pembinaan kepramukaan.
- **Lightbox :** Pola antarmuka pengguna grafis (*UI modal*) yang menampilkan aset gambar resolusi tinggi di bagian tengah layar dengan meredupkan konten latar belakang halaman.
- **Masonry Grid :** Teknik tata letak kisi visual bergaya editorial di mana elemen gambar dengan rasio tinggi dan lebar yang bervariasi disusun rapat tanpa menyisakan ruang kosong vertikal (*uneven gap*).
- **Teal Green :** Spektrum warna hijau kebiruan (turquoise) bernuansa alami yang ditetapkan sebagai warna identitas visual primer Ambalan Kameswara Sekartaji (`#39CFC0`).
- **Deep Green :** Spektrum warna hijau tua gelap (`#123D36`) yang digunakan untuk menciptakan kedalaman kontras visual, latar belakang seksi gelap, dan ketegasan tipografi.

---

*Dokumen ini merupakan draft sementara dan dapat berubah seiring pembahasan lebih lanjut dengan klien.*