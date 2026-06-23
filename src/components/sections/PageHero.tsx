import { Container } from '../ui/Section';

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="color-section relative overflow-hidden border-b border-[var(--border)] pb-16 pt-32 sm:pb-24 sm:pt-44"><div className="grid-bg absolute inset-0 opacity-25"/><Container className="relative"><span className="eyebrow">{eyebrow}</span><h1 className="mt-7 max-w-6xl font-display text-[clamp(2.75rem,8vw,7.4rem)] font-semibold leading-[.94] tracking-[-.045em] text-balance">{title}</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:mt-9">{text}</p></Container></section>;
}
