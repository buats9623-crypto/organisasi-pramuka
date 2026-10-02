import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PhilosophySection } from './components/PhilosophySection';
import { VisionMissionSection } from './components/VisionMissionSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { GallerySection } from './components/GallerySection';
import { OrganizationSection } from './components/OrganizationSection';
import { JoinCTASection } from './components/JoinCTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <a
        href="#konten-utama"
        className="focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-60 focus:rounded-chip focus:bg-brand-deep focus:px-5 focus:py-3 focus:font-semibold focus:text-white"
      >
        Lewati ke konten utama
      </a>

      <Navbar />
      
      <main id="konten-utama" className="pt-16">
        <HeroSection />
        <AboutSection />
        <PhilosophySection />
        <VisionMissionSection />
        <ActivitiesSection />
        <GallerySection />
        <OrganizationSection />
        <JoinCTASection />
        <Footer />
      </main>
      
      <div className="grain-layer" aria-hidden="true" />
    </>
  );
}
