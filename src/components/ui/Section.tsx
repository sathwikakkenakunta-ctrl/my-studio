import type { ReactNode } from 'react';

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>;
}

export function SectionHeading({ eyebrow, title, text, align = 'left' }: { eyebrow: string; title: ReactNode; text?: string; align?: 'left' | 'center' }) {
  return <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
    <span className="eyebrow">{eyebrow}</span>
    <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-[-.045em] sm:text-5xl lg:text-7xl text-balance">{title}</h2>
    {text && <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">{text}</p>}
  </div>;
}
