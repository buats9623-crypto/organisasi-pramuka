import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { organizationProfile } from '../data/organizationProfile';
import { imageSettle, riseIn, sequence } from '../lib/motion';

export function HeroSection() {
  const reduce = useReducedMotion() ?? false;
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  
  const item = riseIn(reduce);
  const parent = sequence(reduce);
  const photo = imageSettle(reduce);

  return (
    <section
      id="beranda"
      className="relative isolate flex min-h-[100dvh] items-end overflow-hidden"
    >
      <div className="ambient-warm left-[-12rem] top-[-14rem]" aria-hidden="true" />

      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <motion.div
          variants={photo}
          initial="hidden"
          animate="visible"
        >
          <img
            src="/asset/image/pramuka/Penjelajahan dan kepemimpinan.jfif"
            alt="Anggota ambalan berjalan membawa bendera merah putih di jalur hutan"
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/95 via-brand-deep/70 to-brand-deep/30" />
      </motion.div>

      <motion.div
        variants={parent}
        initial="hidden"
        animate="visible"
        className="relative z-20 w-full pb-20 md:pb-28"
      >
        <div className="mx-auto max-w-shell px-4">
          <div className="max-w-3xl">
            <motion.p
              variants={item}
              className="mb-7 text-sm font-medium text-brand-primary"
            >
              {organizationProfile.shortName}
            </motion.p>

            <motion.h1
              variants={item}
              className="font-display text-hero font-normal text-white md:text-hero-md lg:text-hero-lg"
            >
              Menempa Karakter,
              <br />
              Menjelajah Makna
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-prose text-lg leading-relaxed text-white/85 md:text-xl"
            >
              {organizationProfile.heroSubtext}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#tentang"
                className="btn rounded-btn bg-brand-primary px-8 py-3.5 text-center font-semibold text-brand-deep hover:bg-brand-primary/85 focus-ring on-dark whitespace-nowrap"
              >
                Tentang Ambalan
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#kegiatan"
                className="btn rounded-btn border border-white/30 px-8 py-3.5 text-center font-semibold text-white hover:border-white/60 hover:bg-white/5 focus-ring on-dark whitespace-nowrap"
              >
                Lihat Kegiatan
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
