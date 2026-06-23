import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { motion, useReducedMotion } from 'framer-motion';
import { Analytics } from '../Analytics';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { LeadPopup } from './LeadPopup';

export function Layout(){
  const {pathname}=useLocation(); const reduceMotion=useReducedMotion();
  useEffect(()=>{window.scrollTo(0,0)},[pathname]);
  useEffect(()=>{if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;const lenis=new Lenis({duration:.95,wheelMultiplier:1.55,touchMultiplier:1.8,smoothWheel:true});let id=0;const raf=(time:number)=>{lenis.raf(time);id=requestAnimationFrame(raf)};id=requestAnimationFrame(raf);return()=>{cancelAnimationFrame(id);lenis.destroy()}},[]);
  return <><Analytics/><a href="#main" className="focus-ring fixed left-3 top-3 z-[70] -translate-y-20 rounded-full bg-cyan px-4 py-2 font-bold text-ink transition focus:translate-y-0">Skip to content</a><div className="noise"/><Navbar/><main id="main"><motion.div key={pathname} initial={reduceMotion?false:{opacity:.65,y:8}} animate={{opacity:1,y:0}} transition={{duration:reduceMotion?0:.32,ease:[.22,1,.36,1]}}><Outlet/></motion.div></main><Footer/><LeadPopup/></>;
}
