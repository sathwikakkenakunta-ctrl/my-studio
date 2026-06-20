import { useState } from 'react';
import { Plus } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

export function Accordion({ items }: { items: string[][] }) {
  const [open, setOpen] = useState(0); const reduce = useReducedMotion();
  return <div className="border-t border-[var(--border)]">{items.map(([question, answer], index) => <div className="border-b border-[var(--border)]" key={question}>
    <button type="button" className="focus-ring flex min-h-16 w-full items-center justify-between gap-5 rounded-lg py-5 text-left font-display text-lg font-medium transition-colors hover:text-violet sm:text-xl" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index} aria-controls={`faq-panel-${index}`}>
      <span><span className="mr-5 text-xs text-[var(--muted)]">{String(index + 1).padStart(2, '0')}</span>{question}</span>
      <Plus size={20} className={`shrink-0 transition-transform ${open === index ? 'rotate-45' : ''}`} />
    </button>
    <AnimatePresence initial={false}>{open === index && <motion.div id={`faq-panel-${index}`} initial={reduce ? false : { height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><p className="max-w-3xl pb-7 pl-0 text-[var(--muted)] leading-7 sm:pl-11">{answer}</p></motion.div>}</AnimatePresence>
  </div>)}</div>;
}
