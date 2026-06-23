import { useEffect, useState } from 'react';
import { Menu, Search, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Button } from '../ui/Button';

const nav = [['Work','/case-studies'], ['Services','/services'], ['About','/about'], ['Insights','/blog']];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => { document.documentElement.classList.add('light'); }, []);
  useEffect(() => { let frame = 0; const update = () => { frame = 0; setScrolled(window.scrollY > 24); }; const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); }; update(); window.addEventListener('scroll', onScroll, { passive: true }); return () => { window.removeEventListener('scroll', onScroll); if (frame) cancelAnimationFrame(frame); }; }, []);
  useEffect(() => { if (!open) return; const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); }; const previousOverflow = document.body.style.overflow; document.body.style.overflow = 'hidden'; window.addEventListener('keydown', onKeyDown); return () => { document.body.style.overflow = previousOverflow; window.removeEventListener('keydown', onKeyDown); }; }, [open]);
  return <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-7 sm:pt-4">
    <nav className={`glossy-header mx-auto flex min-h-14 max-w-[1180px] items-center justify-between rounded-2xl px-3.5 sm:px-4 ${scrolled ? 'is-scrolled' : ''}`} aria-label="Primary navigation">
      <Link to="/" className="focus-ring flex min-w-0 items-center gap-2 rounded-lg font-display text-base font-bold sm:text-lg"><span className="grid size-8 shrink-0 place-items-center rounded-lg bg-[#1b1a17] text-xs text-white" aria-hidden="true">SA</span><span className="truncate">Sathwik<span className="text-[var(--muted)]">.dev</span></span></Link>
      <div className="hidden items-center gap-7 md:flex">{nav.map(([label, path]) => <NavLink key={path} to={path} className={({isActive}) => `focus-ring rounded-md py-2 text-xs font-bold uppercase tracking-[.12em] transition-colors hover:text-[var(--text)] ${isActive ? 'nav-active' : 'text-[var(--muted)]'}`}>{label}</NavLink>)}</div>
      <div className="flex items-center gap-2">
        <Link to="/search" aria-label="Search projects and articles" className="focus-ring grid size-10 shrink-0 place-items-center rounded-xl border border-[var(--border)] bg-white text-[var(--text)] transition hover:border-[var(--accent)]"><Search size={17} aria-hidden="true"/></Link>
        <Button to="/contact" variant="primary" showIcon={false} className="hidden min-h-10 whitespace-nowrap px-4 py-2 text-[11px] lg:inline-flex">Let's talk</Button>
        <button type="button" className="focus-ring grid size-10 shrink-0 place-items-center rounded-xl border border-[var(--border)] bg-white text-[var(--text)] md:hidden" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X size={20} aria-hidden="true"/> : <Menu size={20} aria-hidden="true"/>}</button>
      </div>
    </nav>
    <AnimatePresence>{open && <motion.div id="mobile-menu" initial={reduceMotion ? false : {opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={reduceMotion ? undefined : {opacity:0,y:-8}} className="mx-auto mt-2 max-w-[1180px] rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-xl md:hidden">{nav.map(([label,path]) => <NavLink key={path} to={path} onClick={() => setOpen(false)} className={({isActive}) => `focus-ring block rounded-xl px-4 py-3 font-display text-xl ${isActive ? 'bg-[#eef4ff] text-[var(--accent)]' : 'text-[var(--text)]'}`}>{label}</NavLink>)}<span onClick={() => setOpen(false)}><Button to="/contact" variant="primary" className="mt-3 w-full">WhatsApp / Contact</Button></span></motion.div>}</AnimatePresence>
  </header>;
}
