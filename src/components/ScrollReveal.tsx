import { useRef } from 'react';
import { motion, useInView, useReducedMotion, Variants } from 'framer-motion';
import { scrollReveal } from '../lib/motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  amount?: number | 'all' | 'some';
  once?: boolean;
  staggerStep?: number;
}

/**
 * Orchestrates entrance animations when children enter the viewport.
 * Uses IntersectionObserver via useInView for high-performance detection.
 */
export function ScrollReveal({
  children,
  variants,
  className,
  amount = 0.15,
  once = true,
  staggerStep = 0.08,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
  const reduce = useReducedMotion() ?? false;
  const containerVariants = variants || scrollReveal(reduce, staggerStep);

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}
