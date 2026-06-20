import { Check } from 'lucide-react';
import { PageHero } from '../components/sections/PageHero';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { Container, SectionHeading } from '../components/ui/Section';
import { Seo } from '../components/ui/Seo';
import { services } from '../data/content';
import { site } from '../data/site';

export default function Services(){return <><Seo title="Services" description={`${site.name} builds modern websites, dashboards, and SaaS applications with React and Tailwind CSS.`}/><PageHero eyebrow="Capabilities" title="Complete web development, with one point of contact." text="I bring UI/UX thinking, responsive frontend development, and performance into one focused process—so the idea stays intact through production."/>
<section className="pb-28"><Container><div className="grid gap-4">{services.map((s,i)=><Reveal key={s.title}><div className="glass-card grid gap-6 rounded-3xl p-6 md:grid-cols-[60px_1fr_1.2fr_auto] md:items-center sm:p-8"><span className="text-xs text-violet">0{i+1}</span><div><span className="icon-glass"><s.icon size={20}/></span><h2 className="mt-4 font-display text-3xl font-medium">{s.title}</h2></div><p className="leading-7 text-[var(--muted)]">{s.text}</p><span className="rounded-full border border-[var(--glass-border)] bg-[var(--glass)] px-3 py-2 text-xs font-bold text-cyan">{s.tag}</span></div></Reveal>)}</div></Container></section>
<section className="color-section py-24 sm:py-28"><Container><SectionHeading eyebrow="Built in" title="The details that make good work last."/><div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{['Technical SEO','WCAG accessibility','Responsive QA','Core Web Vitals','Clean Git history','Semantic HTML','Performance testing','Launch support'].map(x=><div className="glass-card flex items-center gap-3 rounded-2xl p-5 text-sm" key={x}><span className="icon-glass size-8 rounded-lg"><Check size={16} aria-hidden="true"/></span>{x}</div>)}</div><div className="mt-14 flex flex-wrap gap-3">{site.skills.map(x=><span className="rounded-full border border-[var(--glass-border)] bg-[var(--glass)] px-4 py-2 text-xs text-[var(--muted)] backdrop-blur-md" key={x}>{x}</span>)}</div><Button to="/contact" variant="primary" className="mt-10">Discuss your project</Button></Container></section></>}
