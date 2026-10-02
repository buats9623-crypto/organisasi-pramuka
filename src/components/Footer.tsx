import { motion, useReducedMotion } from 'framer-motion';
import { WhatsappLogo, InstagramLogo } from '@phosphor-icons/react';
import { organizationProfile } from '../data/organizationProfile';

const navLinks = [
  { href: '#tentang', label: 'Tentang' },
  { href: '#filosofi', label: 'Filosofi' },
  { href: '#kegiatan', label: 'Kegiatan' },
  { href: '#galeri', label: 'Galeri' },
  { href: '#kepengurusan', label: 'Kepengurusan' },
];

export function Footer() {
  const reduce = useReducedMotion();

  return (
    <footer className="section-dark bg-brand-deep pt-20 text-white">
      <div className="mx-auto max-w-shell px-4">
        <div className="grid gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <p className="font-display text-2xl">Ambalan Kameswara Sekartaji</p>
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-white/60">
              Pembinaan Pramuka Penegak di lingkungan sekolah. Menempa karakter,
              menjelajah makna.
            </p>
          </div>

          <nav aria-label="Navigasi footer">
            <h2 className="mb-5 text-sm font-semibold text-brand-primary">Halaman</h2>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 rounded-input text-sm text-white/60 hover:text-white focus-ring"
                  >
                    <span className="h-px w-0 bg-brand-primary transition-all duration-200 group-hover:w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-5 text-sm font-semibold text-brand-primary">Kanal</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href={organizationProfile.whatsappContactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-input text-sm text-white/60 hover:text-white focus-ring"
                >
                  <motion.span
                    whileHover={reduce ? undefined : { scale: 1.15 }}
                    transition={{ duration: 0.15 }}
                  >
                    <WhatsappLogo size={18} weight="fill" aria-hidden="true" />
                  </motion.span>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={organizationProfile.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-input text-sm text-white/60 hover:text-white focus-ring"
                >
                  <motion.span
                    whileHover={reduce ? undefined : { scale: 1.15 }}
                    transition={{ duration: 0.15 }}
                  >
                    <InstagramLogo size={18} weight="fill" aria-hidden="true" />
                  </motion.span>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid gap-3 border-t border-white/12 py-8 font-mono text-xs text-white/40 sm:grid-cols-2">
          <p>{organizationProfile.gudepNumberPlaceholder}</p>
          <p>{organizationProfile.schoolBasePlaceholder}</p>
        </div>

        <p className="border-t border-white/12 py-6 text-xs text-white/35">
          {organizationProfile.copyrightText}
        </p>
      </div>
    </footer>
  );
}