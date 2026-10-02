# Landing Page Ambalan Kameswara Sekartaji

Website landing page resmi organisasi Pramuka Ambalan Kameswara Sekartaji — representasi digital yang mengonsolidasikan identitas, nilai filosofis, sejarah, dan rekam jejak kegiatan kepramukaan.

## 🎯 Fitur

- ✅ **Hero Section Cinematic** — Visual sinematik dengan foto penjelajahan
- ✅ **Navigasi Responsif** — Sticky navbar dengan mobile drawer dan active section detection
- ✅ **Profil & Filosofi** — Tentang ambalan dan filosofi nama Kameswara-Sekartaji
- ✅ **Visi & Misi** — 6 pilar nilai kepramukaan
- ✅ **Kegiatan** — Filter kategori dengan animasi smooth
- ✅ **Galeri Dokumentasi** — Masonry grid dengan lightbox modal
- ✅ **Struktur Kepengurusan** — Hierarki dewan ambalan
- ✅ **Call to Action** — Integrasi WhatsApp untuk kontak
- ✅ **Footer Informatif** — Navigasi dan media sosial

## 🛠 Tech Stack

- **React 18** — UI library
- **TypeScript** — Type safety
- **Vite** — Build tool & dev server
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animation library

## 🎨 Design System

### Color Palette
```css
Primary Teal Green: #39CFC0
Deep Green: #123D36
Secondary Green: #237D70
Soft Background: #F7FAF8
Surface White: #FFFFFF
Text Primary: #172C29
Text Secondary: #647873
```

### Typography
- **Display**: Instrument Serif (headings)
- **Body**: Schibsted Grotesk (content)

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Buka `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── PhilosophySection.tsx
│   ├── VisionMissionSection.tsx
│   ├── ActivitiesSection.tsx
│   ├── GallerySection.tsx
│   ├── OrganizationSection.tsx
│   ├── JoinCTASection.tsx
│   └── Footer.tsx
├── data/               # Static data layer
│   ├── activities.ts
│   ├── galleryMedia.ts
│   ├── organizationProfile.ts
│   ├── philosophyItems.ts
│   ├── pillarValues.ts
│   └── boardMembers.ts
├── styles/
│   └── globals.css     # Global styles & Tailwind
├── App.tsx             # Main app component
└── main.tsx            # Entry point

public/
└── asset/
    └── image/
        └── pramuka/    # Dokumentasi foto kegiatan
```

## 📝 Data Management

Semua konten disimpan sebagai data statis TypeScript di folder `src/data/`. Ini memudahkan:
- Migrasi ke CMS/API di masa depan
- Update konten tanpa ubah komponen
- Type safety untuk seluruh data

## ♿ Accessibility

- ✅ WCAG 2.1 Level AA compliant
- ✅ Keyboard navigation support
- ✅ ARIA labels & semantic HTML
- ✅ Focus management
- ✅ Reduced motion support
- ✅ Alt text untuk semua gambar

## 📱 Responsive Breakpoints

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## 🔧 Customization

### Update Konten
Edit file di `src/data/` sesuai kebutuhan:
- `organizationProfile.ts` — Info organisasi, visi/misi, kontak
- `activities.ts` — Kegiatan dan kategori
- `galleryMedia.ts` — Foto dokumentasi
- `boardMembers.ts` — Struktur kepengurusan

### Update Warna
Edit `tailwind.config.js` di section `theme.extend.colors.brand`

### Update Foto
Ganti file di `public/asset/image/pramuka/` dan update path di data files

## 📄 License

© 2024 Ambalan Kameswara Sekartaji. Hak Cipta Dilindungi Undang-Undang.

## 📞 Contact

- WhatsApp: [Placeholder - perlu nomor resmi]
- Instagram: [@kameswara_sekartaji](https://instagram.com/kameswara_sekartaji)

---

**Status**: MVP Complete ✅  
**Version**: 0.1.0  
**Last Updated**: 30 September 2026
