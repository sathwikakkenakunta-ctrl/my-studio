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

  return <div className="fixed inset-0 z-[65] grid place-items-center bg-black/20 px-4 py-6" role="presentation">
  <aside className="relative w-full max-w-[20rem] rounded-2xl border border-[var(--border)] bg-white p-3 shadow-[0_24px_70px_rgba(38,31,20,.22)]" aria-label="Project greeting">
    <button type="button" className="focus-ring absolute right-2 top-2 grid size-11 place-items-center rounded-full bg-white text-[var(--text)] shadow-md ring-1 ring-[var(--border)] transition hover:bg-[var(--surface-2)]" aria-label="Close greeting" onClick={close}><X size={22} strokeWidth={2.4} aria-hidden="true"/></button>

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

    <div className="mt-3 flex justify-start gap-2">
      <Button href={site.whatsappUrl} variant="primary" className="min-h-9 px-3 py-1.5 text-[11px]" showIcon={false}><MessageCircle size={13} aria-hidden="true"/>WhatsApp</Button>
      <Button href={`mailto:${site.email}`} variant="secondary" className="min-h-9 px-3 py-1.5 text-[11px]" showIcon={false}><Mail size={13} aria-hidden="true"/>Email</Button>
    </div>
  </aside>
  </div>;
}
