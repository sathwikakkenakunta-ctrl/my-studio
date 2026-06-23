import { useEffect, useState } from 'react';
import { Mail, MessageCircle, Sparkles, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { site } from '../../data/site';

export function LeadPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(() => typeof window !== 'undefined' && sessionStorage.getItem('lead-popup-dismissed') === 'true');

  useEffect(() => {
    if (dismissed) return;
    const id = window.setTimeout(() => setVisible(true), 10000);
    return () => window.clearTimeout(id);
  }, [dismissed]);

  const close = () => {
    sessionStorage.setItem('lead-popup-dismissed', 'true');
    setDismissed(true);
    setVisible(false);
  };

  if (!visible || dismissed) return null;

  return <aside className="fixed bottom-3 left-3 right-3 z-[65] mx-auto max-w-[20rem] rounded-2xl border border-[var(--border)] bg-white p-3 shadow-[0_18px_42px_rgba(38,31,20,.16)] sm:left-auto sm:right-5 sm:mx-0" aria-label="Project greeting">
    <button type="button" className="focus-ring absolute right-2.5 top-2.5 grid size-7 place-items-center rounded-full bg-[var(--surface-2)] text-[var(--muted)] transition hover:text-[var(--text)]" aria-label="Close greeting" onClick={close}><X size={14} aria-hidden="true"/></button>

    <div className="overflow-hidden rounded-xl bg-[#eef4ff] p-3">
      <div className="flex items-center justify-between gap-2">
        <div className="grid size-9 place-items-center rounded-xl bg-white text-[var(--accent)] shadow-sm"><Sparkles size={17} aria-hidden="true"/></div>
        <div className="flex flex-1 items-center gap-2">
          <span className="h-1.5 flex-1 rounded-full bg-[#2457d6]"/>
          <span className="h-1.5 flex-1 rounded-full bg-[#0f8f75]"/>
          <span className="h-1.5 flex-1 rounded-full bg-[#d94f30]"/>
        </div>
      </div>
      <div className="mt-4 grid gap-1.5">
        <span className="h-2.5 w-3/4 rounded-full bg-white"/>
        <span className="h-2.5 w-1/2 rounded-full bg-white"/>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-1.5">
        {['Websites','Dashboards','SaaS'].map(item => <span key={item} className="rounded-lg bg-white px-1.5 py-1.5 text-center text-[9px] font-bold text-[var(--muted)]">{item}</span>)}
      </div>
    </div>

    <div className="mt-3 pr-7">
      <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[var(--muted)]">Hi, welcome</p>
      <h2 className="mt-1.5 font-display text-xl font-semibold leading-tight">Need a clean website?</h2>
      <p className="mt-1.5 text-xs leading-5 text-[var(--muted)]">Simple, fast pages for websites, dashboards, and SaaS ideas.</p>
    </div>

    <div className="mt-3 flex flex-col gap-2 sm:flex-row">
      <Button href={site.whatsappUrl} variant="primary" className="min-h-10 w-full px-3 py-2 text-xs" showIcon={false}><MessageCircle size={14} aria-hidden="true"/>WhatsApp</Button>
      <Button href={`mailto:${site.email}`} variant="secondary" className="min-h-10 w-full px-3 py-2 text-xs" showIcon={false}><Mail size={14} aria-hidden="true"/>Email</Button>
    </div>
  </aside>;
}
