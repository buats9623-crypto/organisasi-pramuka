import { motion, useReducedMotion } from 'framer-motion';
import { WhatsappLogo } from '@phosphor-icons/react';
import { organizationProfile } from '../data/organizationProfile';
import { ScrollReveal } from './ScrollReveal';
import { riseIn, tileIn } from '../lib/motion';

export function JoinCTASection() {
  const reduce = useReducedMotion() ?? false;
  const item = riseIn(reduce);
  const tile = tileIn(reduce);

  return (
    <section id="bergabung" className="bg-canvas py-24 md:py-32">
      <div className="mx-auto max-w-shell px-4">
        <ScrollReveal>
          <motion.div variants={tile} className="lift-parent rounded-[12px] border border-hair bg-surface p-10 md:p-16">
            <div className="liftable grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <motion.h2 variants={item} className="font-display text-4xl leading-tight text-brand-textPrimary md:text-5xl">
                  Bergabung dengan ambalan
                </motion.h2>
                <motion.p variants={item} className="mt-5 max-w-prose text-lg leading-relaxed text-brand-textSecondary">
                  Pendaftaran anggota baru dilakukan melalui narahubung ambalan.
                  Sampaikan nama sekolah dan kelas agar prosesnya bisa dilanjutkan.
                </motion.p>
              </div>

              <div className="lg:col-span-5">
                <motion.a
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={organizationProfile.whatsappContactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn flex w-full items-center justify-center gap-3 rounded-btn bg-brand-deep px-7 py-4 text-center font-semibold text-white hover:bg-brand-deep/90 focus-ring on-dark"
                >
                  <WhatsappLogo size={22} weight="fill" aria-hidden="true" />
                  <span className="whitespace-nowrap">Hubungi narahubung</span>
                </motion.a>
                <motion.p variants={item} className="mt-4 text-center text-sm text-brand-textSecondary">
                  Nomor WhatsApp resmi menunggu penetapan ambalan.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}