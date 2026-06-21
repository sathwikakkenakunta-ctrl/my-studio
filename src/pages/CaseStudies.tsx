import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/sections/PageHero';
import { Container } from '../components/ui/Section';
import { Seo } from '../components/ui/Seo';
import { projects } from '../data/content';

export default function CaseStudies() {
  return <>
    <Seo title="Projects" description="Selected websites, dashboards, and SaaS applications built by Sathwik Akkenakunta."/>
    <PageHero eyebrow="Selected work" title="Real products, designed down to the details." text="Four complete frontend products spanning healthcare, hospitality, property, and appointment scheduling."/>
    <section className="pb-28 sm:pb-32"><Container>
      <div className="grid gap-5 lg:grid-cols-2">{projects.map((p) =>
        <Link to={`/case-studies/${p.slug}`} key={p.slug} className="glass-card focus-ring group rounded-3xl p-4">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[var(--surface-2)]">
            <img src={p.image} alt={`${p.title} interface preview`} loading="lazy" className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.035]"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"/>
            <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.12em] text-white backdrop-blur-md">{p.status}</span>
            <span className="absolute bottom-4 right-4 grid size-11 place-items-center rounded-full bg-white text-ink shadow-xl transition group-hover:-translate-y-1 group-hover:translate-x-1"><ArrowUpRight size={18} aria-hidden="true"/></span>
          </div>
          <div className="flex items-end justify-between gap-5 px-3 pb-3 pt-6"><div><span className="text-xs text-[var(--muted)]">{p.number} / {p.type}</span><h2 className="mt-1 font-display text-2xl">{p.title}</h2></div><b className="flex items-center gap-1 text-right text-xs" style={{color:p.color}}>{p.result}<ExternalLink size={12}/></b></div>
        </Link>)}</div>
      <div className="gradient-panel mt-16 rounded-3xl p-8 text-center sm:p-14"><span className="text-xs font-bold uppercase tracking-[.16em]">Your idea could be next</span><h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl tracking-[-.04em] sm:text-6xl">Need a product like this? Let’s design yours.</h2><Link to="/contact" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-ink">Contact me <ArrowUpRight size={16}/></Link></div>
    </Container></section>
  </>;
}
