import { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X, ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import { galleryMedia } from '../data/galleryMedia';
import { overlayTransition, tweenOut, tileIn, riseIn } from '../lib/motion';
import { ScrollReveal } from './ScrollReveal';

const FOCUSABLE = 'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])';

export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const reduce = useReducedMotion() ?? false;
  const item = riseIn(reduce);
  const tile = tileIn(reduce);

  const close = useCallback(() => setSelectedIndex(null), []);
  const next = useCallback(
    () => setSelectedIndex((i) => (i === null ? null : (i + 1) % galleryMedia.length)),
    []
  );
  const previous = useCallback(
    () =>
      setSelectedIndex((i) =>
        i === null ? null : (i - 1 + galleryMedia.length) % galleryMedia.length
      ),
    []
  );

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        previous();
      }
      if (e.key === 'Tab') {
        const nodes = dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
        if (!nodes || nodes.length === 0) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [selectedIndex, close, next, previous]);

  useEffect(() => {
    if (selectedIndex === null) {
      lastFocused.current?.focus();
      document.body.style.overflow = '';
      return;
    }
    lastFocused.current = document.activeElement as HTMLElement;
    document.body.style.overflow = 'hidden';
    const t = window.setTimeout(() => {
      dialogRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();
    }, 20);
    return () => window.clearTimeout(t);
  }, [selectedIndex]);

  const media = selectedIndex === null ? null : galleryMedia[selectedIndex];

  return (
    <>
      <section id="galeri" className="py-24 md:py-32">
        <div className="mx-auto max-w-shell px-4">
          <ScrollReveal>
            <div className="max-w-prose">
              <motion.h2 variants={item} className="font-display text-4xl leading-tight text-brand-textPrimary md:text-5xl">
                Galeri dokumentasi
              </motion.h2>
              <motion.p variants={item} className="mt-5 text-lg leading-relaxed text-brand-textSecondary">
                Dokumentasi kegiatan ambalan. Pilih foto untuk melihat versi
                resolusi penuh.
              </motion.p>
            </div>

            <motion.ul variants={tile} className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {galleryMedia.map((item, index) => (
                <li key={item.id} className={index === 0 ? 'col-span-2 row-span-2' : ''}>
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className="lift-parent zoom-parent group block w-full text-left focus-ring"
                  >
                    <span
                      className={
                        'liftable zoomable block overflow-hidden rounded-[10px] border border-hair bg-surface-sunk ' +
                        (index === 0 ? 'aspect-square' : 'aspect-[4/3]')
                      }
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.imageAlt}
                        loading="lazy"
                        className="photo-warm h-full w-full object-cover"
                      />
                    </span>
                    <span className="mt-4 block">
                      <span className="block font-semibold text-brand-textPrimary">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-sm text-brand-textSecondary">
                        {item.caption}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </motion.ul>
          </ScrollReveal>
        </div>
      </section>

      {/*
        The exit animation is the reason this uses AnimatePresence. Without it
        the backdrop and the frame would vanish instantly, which reads as a
        glitch rather than a dismissal. The conditional is a plain div because
        AnimatePresence needs a direct child it can track.
      */}
      <AnimatePresence>
        {media && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={overlayTransition(0.2)}
            className="on-dark fixed inset-0 z-60 flex items-center justify-center bg-brand-deep/97 p-4 sm:p-8"
            onClick={close}
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;
              const delta = e.changedTouches[0].clientX - touchStartX.current;
              if (Math.abs(delta) > 50) {
                if (delta < 0) next();
                else previous();
              }
              touchStartX.current = null;
            }}
          >
            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-label={`Foto ${(selectedIndex ?? 0) + 1} dari ${galleryMedia.length}: ${media.title}`}
              initial={
                reduce
                  ? { opacity: 0 }
                  : { opacity: 0, transform: 'scale(0.95)' }
              }
              animate={
                reduce ? { opacity: 1 } : { opacity: 1, transform: 'scale(1)' }
              }
              exit={
                reduce
                  ? { opacity: 0 }
                  : { opacity: 0, transform: 'scale(0.95)' }
              }
              transition={tweenOut(0.2)}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={media.imageUrl}
                alt={media.imageAlt}
                className="photo-warm max-h-[76vh] w-full bg-surface-sunk object-contain"
              />

              <div className="mt-5 flex items-end justify-between gap-4 text-white">
                <div>
                  <p className="font-semibold">{media.title}</p>
                  <p className="mt-1 text-sm text-white/60">{media.caption}</p>
                </div>
                <p className="shrink-0 font-mono text-sm tabular-nums text-white/50">
                  {String((selectedIndex ?? 0) + 1).padStart(2, '0')} /{' '}
                  {String(galleryMedia.length).padStart(2, '0')}
                </p>
              </div>

              <button
                type="button"
                onClick={previous}
                className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-full p-3 text-white hover:text-brand-primary focus-ring sm:-left-16"
                aria-label="Foto sebelumnya"
              >
                <ArrowLeft size={26} weight="bold" />
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-full p-3 text-white hover:text-brand-primary focus-ring sm:-right-16"
                aria-label="Foto berikutnya"
              >
                <ArrowRight size={26} weight="bold" />
              </button>
            </motion.div>

            <motion.button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 rounded-full p-3 text-white hover:text-brand-primary focus-ring"
              aria-label="Tutup galeri"
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              transition={tweenOut(0.2)}
            >
              <X size={26} weight="bold" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
