import { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { List, X } from '@phosphor-icons/react';
import { tweenDrawer, overlayTransition } from '../lib/motion';
import NavigationMenuWithActiveItem, { MobileNavigationMenu } from '@/components/ui/navigation-menu-05';

const SECTION_IDS = ['beranda', 'tentang', 'filosofi', 'kegiatan', 'galeri', 'kepengurusan'];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  const toggleRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion() ?? false;

  const close = useCallback(() => {
    setIsOpen(false);
    toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0
          );
        }
        let best = '';
        let bestRatio = 0;
        for (const [id, ratio] of visible) {
          if (ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        }
        if (best) setActiveSection((prev) => (prev === best ? prev : best));
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    const nodes = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (n): n is HTMLElement => Boolean(n)
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, close]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brand-deep shadow-lift">
        <nav className="mx-auto max-w-shell px-4">
          <div className="flex h-16 items-center justify-between">
            <a href="#beranda" className="font-display text-2xl text-white">
              Ambalan Kameswara Sekartaji
            </a>

            <div className="hidden md:flex items-center gap-7">
              <NavigationMenuWithActiveItem activeSection={activeSection} />
            </div>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => (isOpen ? close() : setIsOpen(true))}
              className="rounded-input p-2 text-white focus-ring md:hidden"
              aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={isOpen}
              aria-controls="nav-drawer"
            >
              {isOpen ? (
                <X size={22} weight="bold" />
              ) : (
                <List size={22} weight="bold" />
              )}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={overlayTransition(0.2)}
            className="fixed inset-0 z-40 bg-brand-deep/50 md:hidden"
            onClick={close}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="nav-drawer"
            key="drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Menu navigasi"
            initial={reduce ? { opacity: 0 } : { transform: 'translateX(100%)' }}
            animate={reduce ? { opacity: 1 } : { transform: 'translateX(0px)' }}
            exit={reduce ? { opacity: 0 } : { transform: 'translateX(100%)' }}
            transition={tweenDrawer(0.3)}
            className="fixed inset-y-0 right-0 z-50 flex w-80 max-w-[85vw] flex-col border-l border-hair bg-canvas shadow-drawer md:hidden"
          >
            <div className="flex items-center justify-between border-b border-hair p-5">
              <span className="font-display text-lg text-brand-textPrimary">Menu</span>
              <button
                type="button"
                onClick={close}
                className="rounded-input p-2 text-brand-textPrimary hover:text-brand-primaryInk focus-ring"
                aria-label="Tutup menu"
              >
                <X size={20} weight="bold" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              <MobileNavigationMenu
                activeSection={activeSection}
                onItemClick={() => close()}
              />
            </div>

            <div className="border-t border-hair p-5">
              <a
                href="#bergabung"
                onClick={close}
                className="btn block w-full rounded-btn bg-brand-deep px-4 py-3 text-center font-semibold text-white hover:bg-brand-deep/90 focus-ring"
              >
                Bergabung
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}