import { useEffect, useState } from 'react';
import { Menu, Moon, Search, Sun, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Button } from '../ui/Button';

const nav = [['Work','/case-studies'], ['Services','/services'], ['About','/about'], ['Insights','/blog']];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(() => typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches);
  const reduceMotion = useReducedMotion();

  useEffect(() => { document.documentElement.classList.toggle('light', light); }, [light]);
  useEffect(() => { let frame = 0; const update = () => { frame = 0; setScrolled(window.scrollY > 24); }; const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); }; update(); window.addEventListener('scroll', onScroll, { passive: true }); return () => { window.removeEventListener('scroll', onScroll); if (frame) cancelAnimationFrame(frame); }; }, []);

  return <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-7 sm:pt-4">
    <nav className={`glossy-header mx-auto flex min-h-16 max-w-[1380px] items-center justify-between rounded-full px-4 sm:px-5 ${scrolled ? 'is-scrolled' : ''}`} aria-label="Primary navigation">
      <Link to="/" className="focus-ring flex min-w-0 items-center gap-2 rounded-lg font-display text-base font-bold tracking-[-.04em] sm:text-lg"><span className="grid size-8 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#b69cff,#6b7bff_55%,#5ed9ce)] text-xs text-ink shadow-[0_0_22px_rgba(127,105,247,.36)]" aria-hidden="true">SA</span><span className="truncate">SATHWIK<span className="text-[var(--muted)]">/DEV</span></span></Link>
      <div className="hidden items-center gap-7 md:flex">{nav.map(([label, path]) => <NavLink key={path} to={path} className={({isActive}) => `focus-ring rounded-md py-2 text-xs font-bold uppercase tracking-[.12em] transition-colors hover:text-[var(--text)] ${isActive ? 'nav-active' : 'text-[var(--muted)]'}`}>{label}</NavLink>)}</div>
      <div className="flex items-center gap-2">
        <Link to="/search" aria-label="Search projects and articles" className="focus-ring grid size-11 shrink-0 place-items-center rounded-full border border-[var(--glass-border)] bg-[var(--glass)] text-[var(--text)]"><Search size={18} aria-hidden="true"/></Link>
        <button type="button" aria-label={light ? 'Switch to dark theme' : 'Switch to light theme'} aria-pressed={light} className="focus-ring grid size-11 shrink-0 place-items-center rounded-full border border-[var(--glass-border)] bg-[var(--glass)] text-[var(--text)] shadow-[inset_0_1px_0_var(--glass-highlight)] transition hover:border-violet hover:shadow-[0_0_24px_rgba(127,105,247,.2)]" onClick={() => setLight(!light)}>{light ? <Moon size={18} aria-hidden="true"/> : <Sun size={18} aria-hidden="true"/>}</button>
        <Button to="/contact" variant="primary" showIcon={false} className="hidden min-h-11 px-5 text-xs sm:inline-flex">Let's talk</Button>
        <button type="button" className="focus-ring grid size-11 shrink-0 place-items-center rounded-full text-[var(--text)] md:hidden" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X size={22} aria-hidden="true"/> : <Menu size={22} aria-hidden="true"/>}</button>
      </div>
    </nav>
    <AnimatePresence>{open && <motion.div id="mobile-menu" initial={reduceMotion ? false : {opacity:0,y:-12,scale:.98}} animate={{opacity:1,y:0,scale:1}} exit={reduceMotion ? undefined : {opacity:0,y:-12,scale:.98}} className="glass-card mx-auto mt-2 max-w-[1380px] rounded-3xl p-5 md:hidden">{nav.map(([label,path]) => <NavLink key={path} to={path} onClick={() => setOpen(false)} className={({isActive}) => `focus-ring block rounded-lg border-b border-[var(--border)] px-2 py-4 font-display text-2xl ${isActive ? 'text-violet' : ''}`}>{label}</NavLink>)}<span onClick={() => setOpen(false)}><Button to="/contact" variant="primary" className="mt-5 w-full">Let's work together</Button></span></motion.div>}</AnimatePresence>
  </header>;
}
