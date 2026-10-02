import { motion, useReducedMotion } from 'framer-motion';
import { organizationProfile } from '../data/organizationProfile';
import { ScrollReveal } from './ScrollReveal';
import { imageSettle, listItem, riseIn } from '../lib/motion';

export function AboutSection() {
  const reduce = useReducedMotion() ?? false;
  const paragraphs = organizationProfile.aboutNarrative.split('\n\n');
  const item = riseIn(reduce);
  const photo = imageSettle(reduce);
  const paragraphItem = listItem(reduce);

  return (
    <section id="tentang" className="py-24 md:py-32">
      <div className="mx-auto max-w-shell px-4">
        <ScrollReveal className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <motion.div variants={item} className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <div className="lift-parent overflow-hidden rounded-[10px] border border-hair bg-surface-sunk">
                <div className="liftable">
                  <motion.img
                    variants={photo}
                    src="/asset/image/pramuka/Suasana kebersamaan anggota.jfif"
                    alt="Anggota ambalan berkumpul melingkar saat latihan bersama"
                    loading="lazy"
                    className="photo-warm aspect-[4/5] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            <motion.h2 variants={item} className="font-display text-4xl leading-tight text-brand-textPrimary md:text-5xl">
              Pembinaan untuk siswa SMA dan MA
            </motion.h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-brand-textSecondary">
              {paragraphs.map((paragraph, i) => (
                <motion.p key={i} variants={paragraphItem} className="max-w-prose">
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}