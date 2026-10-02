import type { Transition, Variants } from 'framer-motion';

/**
 * Motion tokens. One definition, used everywhere.
 *
 * The curves and durations here are the ones already declared as CSS custom
 * properties in globals.css, so the library-driven motion and the CSS-driven
 * motion share a timing system instead of drifting apart.
 *
 * Rules this file encodes:
 *  - entering and exiting uses ease-out, never ease-in
 *  - on-screen movement uses ease-in-out
 *  - UI durations stay under 300ms
 *  - nothing animates layout properties, only transform and opacity
 *  - reduced motion: keep opacity fade, reduce transform movement
 */

export const EASE_REVEAL = [0.16, 1, 0.3, 1] as const;
export const EASE_DRAWER = [0.32, 0.72, 0, 1] as const;

/** Entering and exiting. */
export const tweenOut = (duration: number): Transition => ({
  type: 'tween',
  duration,
  ease: EASE_REVEAL,
});

/** Moving something that is already on screen. */
export const tweenInOut = (duration: number): Transition => ({
  type: 'tween',
  duration,
  ease: [0.77, 0, 0.175, 1],
});

/** Drawer and other directional travel. */
export const tweenDrawer = (duration = 0.3): Transition => ({
  type: 'tween',
  duration,
  ease: EASE_DRAWER,
});

/** Overlay fade. Fast, because it is not the thing being looked at. */
export const overlayTransition = (duration = 0.2): Transition => ({
  type: 'tween',
  duration,
  ease: EASE_REVEAL,
});

/**
 * The 12px rise + fade entrance.
 * Written as a full transform string rather than a `y` shorthand, because
 * framer-motion only writes a GPU-composited transform for the full string.
 * Fallback: when reduced, only opacity animates; when full, both opacity + Y.
 */
export const riseIn = (reduce: boolean): Variants => {
  if (reduce) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.2 } },
    };
  }
  return {
    hidden: { opacity: 0, transform: 'translateY(12px)' },
    visible: {
      opacity: 1,
      transform: 'translateY(0px)',
      transition: { duration: 0.6, ease: EASE_REVEAL },
    },
  };
};

/**
 * Parent that sequences its children.
 * 70ms per step keeps the cascade readable without making the reader wait
 * for the last item.
 * Fallback: when reduced, no stagger delay.
 */
export const sequence = (reduce: boolean, step = 0.07): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: reduce ? 0 : step,
      delayChildren: reduce ? 0 : 0.1,
    },
  },
});

/**
 * Image settles from 1.04 scale + fade. Cinematic 1.1s entrance.
 * Used for hero image and hero photo elements.
 */
export const imageSettle = (reduce: boolean): Variants => ({
  hidden: { opacity: 0, transform: 'scale(1.04)' },
  visible: {
    opacity: 1,
    transform: 'scale(1)',
    transition: reduce
      ? { duration: 0.3 }
      : { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
});

/**
 * Tile entrance: subtle rise + slight scale (0.98→1).
 * Feels like a card settling onto the surface.
 */
export const tileIn = (reduce: boolean): Variants => {
  if (reduce) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.2 } },
    };
  }
  return {
    hidden: { opacity: 0, transform: 'translateY(12px) scale(0.98)' },
    visible: {
      opacity: 1,
      transform: 'translateY(0px) scale(1)',
      transition: { duration: 0.5, ease: EASE_REVEAL },
    },
  };
};

/**
 * Masked line reveal (for typography).
 * Translates Y from 105% to 0% with ease-out.
 */
export const lineMask = (reduce: boolean): Variants => {
  if (reduce) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.2 } },
    };
  }
  return {
    hidden: { opacity: 0, transform: 'translateY(105%)' },
    visible: {
      opacity: 1,
      transform: 'translateY(0%)',
      transition: { duration: 0.6, ease: EASE_REVEAL },
    },
  };
};

/**
 * Container variants for scroll-triggered reveals.
 * Staggers children when section enters viewport.
 */
export const scrollReveal = (reduce: boolean, step = 0.06): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: reduce ? 0 : step,
      delayChildren: reduce ? 0 : 0.08,
    },
  },
});

/**
 * Staggered list item reveal.
 */
export const listItem = (reduce: boolean): Variants => {
  if (reduce) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.15 } },
    };
  }
  return {
    hidden: { opacity: 0, transform: 'translateY(16px)' },
    visible: {
      opacity: 1,
      transform: 'translateY(0px)',
      transition: { duration: 0.4, ease: EASE_REVEAL },
    },
  };
};
