import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Analytics } from '../Analytics';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { LeadPopup } from './LeadPopup';

export function Layout(){
  const {pathname}=useLocation();
  useEffect(()=>{window.scrollTo(0,0)},[pathname]);
  return <><Analytics/><a href="#main" className="focus-ring fixed left-3 top-3 z-[70] -translate-y-20 rounded-full bg-cyan px-4 py-2 font-bold text-ink transition focus:translate-y-0">Skip to content</a><div className="noise"/><Navbar/><main id="main"><div key={pathname} className="page-enter"><Outlet/></div></main><Footer/><LeadPopup/></>;
}
