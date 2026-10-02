import { motion, useReducedMotion } from 'framer-motion';
import { philosophyItems } from '../data/philosophyItems';
import { ScrollReveal } from './ScrollReveal';
import { riseIn, tileIn } from '../lib/motion';

export function PhilosophySection() {
  const reduce = useReducedMotion() ?? false;
  const [lead, ...rest] = philosophyItems;
  const item = riseIn(reduce);
  const tile = tileIn(reduce);

  return (
    <section id="filosofi" className="py-24 md:py-32 bg-canvas">
      <div className="mx-auto max-w-shell px-4">
        <ScrollReveal>
          <div className="max-w-prose">
            <motion.h2 variants={item} className="font-display text-4xl leading-tight text-brand-textPrimary md:text-5xl">
              Dua nama, dua rujukan
            </motion.h2>
            <motion.p variants={item} className="mt-5 text-lg leading-relaxed text-brand-textSecondary">
              Nama ambalan diambil dari dua figur yang menjadi rujukan watak
              anggota. Penjelasan lengkap menunggu naskah resmi Dewan Adat.
            </motion.p>
          </div>

          <motion.div variants={tile} className="mt-14 grid gap-4 lg:grid-cols-12">
            <article
              key={lead.id}
              className={`lift-parent rounded-[10px] border border-hair bg-surface p-8 lg:col-span-7 lg:p-12 ${reduce ? '' : 'liftable'}`}
            >
              <div className="liftable">
                <lead.icon size={40} weight="bold" className="mb-8 text-brand-primary" />
                <h3 className="font-display text-4xl text-brand-textPrimary lg:text-5xl">
                  {lead.title}
                </h3>
                <p className="mt-5 max-w-prose text-xl leading-relaxed text-brand-textSecondary">
                  {lead.shortMeaning}
                </p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {lead.coreValues.map((v) => (
                    <li
                      key={v}
                      className="rounded-chip bg-pastel-greenBg px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.05em] text-pastel-greenInk"
                    >
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {rest.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.id}
                  className={`lift-parent rounded-[10px] border border-hair bg-surface p-8 lg:col-span-5 lg:p-12 ${reduce ? '' : 'liftable'}`}
                >
                  <div className="liftable">
                    <Icon size={36} weight="bold" className="mb-8 text-brand-primary" />
                    <h3 className="font-display text-3xl text-brand-deep mb-4">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-lg text-brand-textPrimary mb-8 leading-relaxed">
                      {item.shortMeaning}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {item.coreValues.map((v) => (
                        <li
                          key={v}
                          className="rounded-chip bg-pastel-greenBg px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.05em] text-pastel-greenInk"
                        >
                          {v}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-8 border-t border-hair pt-4 text-sm text-brand-textSecondary">
                      {item.narrativePlaceholder}
                    </p>
                  </div>
                </article>
              );
            })}
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}