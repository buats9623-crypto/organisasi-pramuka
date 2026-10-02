import { useState, useTransition } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { activities, activityCategories, categoryLabel } from '../data/activities';
import { tweenOut } from '../lib/motion';

export function ActivitiesSection() {
  const [selected, setSelected] = useState<string>('all');
  const [isPending, startTransition] = useTransition();
  const reduce = useReducedMotion();

  const filtered =
    selected === 'all'
      ? activities
      : activities.filter((a) => a.category === selected);

  const exitDuration = reduce ? 0 : 0.22;

  return (
    <section id="kegiatan" className="py-24 md:py-32">
      <div className="mx-auto max-w-shell px-4">
        <div className="max-w-prose">
          <h2 className="font-display text-4xl leading-tight text-brand-textPrimary md:text-5xl">
            Kegiatan
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-brand-textSecondary">
            Agenda latihan rutin, kegiatan luar ruangan, dan upacara yang
            tertata dalam program pembinaan.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {activityCategories.map((cat) => {
            const isActive = selected === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => startTransition(() => setSelected(cat.value))}
                aria-pressed={isActive}
                className={
                  'rounded-chip px-4 py-2 text-xs font-semibold uppercase tracking-[0.05em] focus-ring whitespace-nowrap ' +
                  (isActive
                    ? 'bg-brand-deep text-white'
                    : 'border border-hair bg-surface text-brand-textSecondary hover:border-brand-primary hover:text-brand-primaryInk')
                }
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {filtered.length > 0 ? (
          <motion.ul
            layout={!reduce}
            className="mt-12 grid gap-4 transition-opacity duration-200 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {filtered.map((activity) => (
                <motion.li
                  key={activity.id}
                  layout={!reduce}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isPending ? 0.4 : 1 }}
                  exit={{ opacity: 0 }}
                  transition={tweenOut(exitDuration)}
                >
                  <article className="lift-parent zoom-parent group liftable flex h-full flex-col overflow-hidden rounded-[10px] border border-hair bg-surface">
                    <div className="aspect-[16/10] overflow-hidden bg-surface-sunk">
                      <img
                        src={activity.imageUrl}
                        alt={activity.imageAlt}
                        loading="lazy"
                        className="photo-warm zoomable h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="mb-3 self-start rounded-chip bg-pastel-greenBg px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.05em] text-pastel-greenInk">
                        {categoryLabel(activity.category)}
                      </span>
                      <h3 className="font-display text-xl text-brand-textPrimary">
                        {activity.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-brand-textSecondary">
                        {activity.shortDescription}
                      </p>
                    </div>
                  </article>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        ) : (
          <div
            role="status"
            className="mt-12 rounded-[10px] border border-hair bg-surface px-6 py-20 text-center"
          >
            <p className="font-display text-xl text-brand-textPrimary">
              Belum ada kegiatan
            </p>
            <p className="mx-auto mt-2 max-w-prose text-brand-textSecondary">
              Kategori ini belum punya kegiatan terjadwal.
            </p>
            <button
              type="button"
              onClick={() => startTransition(() => setSelected('all'))}
              className="btn mt-8 rounded-btn bg-brand-deep px-6 py-3 font-semibold text-white hover:bg-brand-deep/90 focus-ring"
            >
              Lihat semua kegiatan
            </button>
          </div>
        )}
      </div>
    </section>
  );
}