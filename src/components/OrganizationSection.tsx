import { motion, useReducedMotion } from 'framer-motion';
import { UserCircle } from '@phosphor-icons/react';
import { divisionOrder, groupedMembers } from '../data/boardMembers';
import { ScrollReveal } from './ScrollReveal';
import { listItem, riseIn, tileIn } from '../lib/motion';

export function OrganizationSection() {
  const reduce = useReducedMotion() ?? false;
  const item = riseIn(reduce);
  const memberTile = tileIn(reduce);

  return (
    <section id="kepengurusan" className="section-dark bg-brand-deep py-24 text-white md:py-32">
      <div className="mx-auto max-w-shell px-4">
        <ScrollReveal>
          <motion.h2 variants={item} className="font-display text-4xl leading-tight text-white md:text-5xl">
            Struktur kepengurusan
          </motion.h2>
          <motion.p variants={item} className="mt-5 max-w-prose text-lg leading-relaxed text-white/65">
            Dewan ambalan menangani fungsi pembinaan, secretariat, keuangan, dan
            koordinasi bidang.
          </motion.p>

          <div className="mt-16 space-y-14">
            {divisionOrder.map((division) => (
              <div key={division}>
                <h3 className="mb-6 border-b border-white/12 pb-3 text-sm font-semibold text-brand-primary">
                  {division}
                </h3>
                <ul
                  className={
                    'grid gap-4 ' +
                    (division === 'Administrasi'
                      ? 'sm:grid-cols-2 lg:max-w-3xl'
                      : 'sm:grid-cols-2 lg:grid-cols-3')
                  }
                >
                  {groupedMembers[division].map((member) => (
                    <motion.li
                      key={member.id}
                      variants={memberTile}
                      className={`lift-parent rounded-[10px] border border-white/12 p-6 ${reduce ? '' : 'liftable'}`}
                    >
                      <div className="liftable">
                        <UserCircle
                          size={36}
                          weight="bold"
                          className="mb-4 text-white/25"
                          aria-hidden="true"
                        />
                        <h4 className="font-semibold text-white">{member.positionTitle}</h4>
                        <p className="mt-1 text-sm text-white/40">
                          {member.memberName}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}