import { motion, useReducedMotion } from 'framer-motion';
import { organizationProfile } from '../data/organizationProfile';
import { pillarValues } from '../data/pillarValues';
import { ScrollReveal } from './ScrollReveal';
import { listItem, riseIn, tileIn } from '../lib/motion';

export function VisionMissionSection() {
  const reduce = useReducedMotion() ?? false;
  const item = riseIn(reduce);
  const missionItem = listItem(reduce);
  const pillarTile = tileIn(reduce);

  return (
    <section className="section-dark bg-brand-deep py-24 text-white md:py-32">
      <div className="mx-auto max-w-shell px-4">
        <ScrollReveal>
          <motion.h2 variants={item} className="font-display text-4xl leading-tight text-white md:text-5xl">
            Visi dan misi
          </motion.h2>

          <div className="mt-16 grid gap-12 lg:grid-cols-12">
            <motion.div variants={item} className="lg:col-span-5">
              <h3 className="mb-4 font-display text-xl text-brand-primary">Visi</h3>
              <p className="text-lg leading-relaxed text-white/95">
                {organizationProfile.visionText}
              </p>
            </motion.div>

            <div className="lg:col-span-7">
              <h3 className="mb-6 font-display text-xl text-brand-primary">Misi</h3>
              <ol className="divide-y divide-white/12">
                {organizationProfile.missionList.map((mission, i) => (
                  <motion.li
                    key={i}
                    variants={missionItem}
                    className="row-parent flex gap-5 py-4 leading-relaxed text-white/85 transition-colors hover:bg-white/5"
                  >
                    <span className="shrink-0 font-display text-sm text-brand-primary tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{mission}</span>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-24">
            <h3 className="mb-8 font-display text-xl text-brand-primary">
              Enam pilar karakter
            </h3>
            <ul className="grid gap-px bg-white/12 sm:grid-cols-2 lg:grid-cols-3">
              {pillarValues.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <motion.li
                    key={pillar.id}
                    variants={pillarTile}
                    className={`lift-parent bg-brand-deep p-6 transition-colors hover:bg-brand-deep/80 lg:p-8 ${reduce ? '' : 'liftable'}`}
                  >
                    <div className="liftable">
                      <Icon size={32} weight="light" className="mb-5 text-brand-primary" />
                      <h4 className="font-display text-lg font-bold text-white">
                        {pillar.valueName}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">
                        {pillar.shortDefinition}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}