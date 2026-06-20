import { ArrowUpRight } from 'lucide-react';
import { PageHero } from '../components/sections/PageHero';
import { Container } from '../components/ui/Section';
import { Seo } from '../components/ui/Seo';
import { articles } from '../data/content';
import { site } from '../data/site';

export default function Blog(){return <><Seo title="Developer Notes" description={`${site.name}'s notes on React, responsive design, UI/UX, accessibility, and web performance.`}/><PageHero eyebrow="Developer notes" title="Useful thinking for better web products." text="Practical observations from building at the intersection of design, frontend engineering, and performance."/><section className="pb-28"><Container><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{articles.map(([title,cat,read],i)=><article className="glass-card group rounded-3xl p-7" key={title}><div className="flex justify-between text-xs text-[var(--muted)]"><span>NO. {String(i+1).padStart(2,'0')}</span><span className="icon-glass size-8 rounded-lg"><ArrowUpRight size={15} aria-hidden="true"/></span></div><div className="mt-20 sm:mt-24"><span className="rounded-full border border-[var(--glass-border)] bg-[var(--glass)] px-3 py-2 text-xs font-bold text-violet">{cat} · {read}</span><h2 className="mt-6 font-display text-2xl font-medium tracking-[-.03em] group-hover:text-violet">{title}</h2><p className="mt-5 text-sm leading-6 text-[var(--muted)]">Practical perspective for teams and developers who care about the quality of what they put into the world.</p></div></article>)}</div></Container></section></>}
