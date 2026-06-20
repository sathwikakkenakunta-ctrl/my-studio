import { Container } from '../ui/Section';
import { GradientBlob, SectionGlow } from '../ui/Visual';

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="color-section relative overflow-hidden pb-20 pt-36 sm:pb-28 sm:pt-48"><div className="grid-bg absolute inset-0 opacity-20"/><GradientBlob tone="violet" className="-left-28 top-16 size-96"/><GradientBlob tone="cyan" className="right-[-8rem] top-28 size-[28rem]"/><SectionGlow className="left-[38%] top-[-25rem]"/><Container className="relative"><span className="eyebrow">{eyebrow}</span><h1 className="mt-7 max-w-6xl font-display text-[clamp(3.35rem,9vw,8rem)] font-medium leading-[.9] tracking-[-.06em] text-balance">{title}</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:mt-9 sm:text-xl">{text}</p></Container></section>;
}
