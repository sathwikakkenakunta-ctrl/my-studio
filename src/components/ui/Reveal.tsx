import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={reduce ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .52, delay, ease: [.22, 1, .36, 1] }}>{children}</motion.div>;
}
