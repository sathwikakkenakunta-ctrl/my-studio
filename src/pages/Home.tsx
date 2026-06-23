import { ArrowDown, ArrowUpRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { services, projects, process, technologies, principles, faqs } from '../data/content';
import { articles } from '../data/articles';
import { Accordion } from '../components/ui/Accordion';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { Container, SectionHeading } from '../components/ui/Section';
import { Seo } from '../components/ui/Seo';
import { site } from '../data/site';

export default function Home() {
  const reduceMotion = useReducedMotion();

  return <><Seo title={site.name} />
    <section className="color-section relative overflow-hidden border-b border-[var(--border)] pt-28 sm:pt-40">
      <div className="grid-bg absolute inset-0 opacity-30"/>
      <Container className="relative">
        <div className="grid items-end gap-10 pb-12 sm:pb-16 lg:grid-cols-[1fr_360px]">
          <div>
            <span className="eyebrow">{site.role} / {site.location}</span>
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.75rem,9vw,8.4rem)] font-semibold leading-[.94] tracking-[-.045em]">Clear, fast websites built to bring leads.</h1>
          </div>
          <div className="pb-2">
            <p className="text-lg leading-8 text-[var(--muted)]">{site.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={site.whatsappUrl} variant="primary">WhatsApp</Button>
              <Button to="/case-studies" variant="secondary">View work</Button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 border-t border-[var(--border)] py-5 text-[11px] font-bold uppercase tracking-[.14em] text-[var(--muted)]">
          <span>Design / Development / Performance</span>
          <a className="focus-ring flex shrink-0 items-center gap-2 rounded" href="#work">Explore <ArrowDown size={14}/></a>
        </div>
      </Container>
    </section>

    <section className="border-b border-[var(--border)] bg-white py-6">
      <Container><div className="flex flex-wrap items-center justify-between gap-5 text-sm font-bold text-[var(--muted)]"><span className="text-[10px] uppercase tracking-[.16em]">Core toolkit</span>{site.skills.slice(0,6).map(x=><span className="font-display" key={x}>{x}</span>)}</div></Container>
    </section>

    <section id="work" className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Selected work" title={<>Simple products.<br/>Strong <span className="text-violet">first impressions.</span></>} text="A few responsive builds across healthcare, restaurants, real estate, and scheduling."/>
        <div className="mt-16 grid gap-5 lg:grid-cols-2">{projects.slice(0,4).map((p,i)=><Reveal key={p.slug} delay={(i%2)*.08}><Link to={`/project/${p.slug}`} className="glass-card focus-ring group block overflow-hidden rounded-2xl">
          <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-2)]">
            <img src={p.image} alt={`${p.title} responsive web application interface preview`} width="1440" height="980" loading="lazy" decoding="async" className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.025]"/>
            <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.12em] text-[var(--text)] shadow">{p.status}</span>
            <div className="absolute bottom-4 right-4 grid size-12 place-items-center rounded-full bg-white shadow-lg transition group-hover:-translate-y-1 group-hover:translate-x-1" style={{color:p.color}}><ArrowUpRight/></div>
          </div>
          <div className="flex items-end justify-between gap-5 p-6 sm:p-8"><div><span className="text-xs text-[var(--muted)]">{p.number} / {p.type}</span><h3 className="mt-2 font-display text-3xl font-medium">{p.title}</h3></div><span className="text-right text-xs font-bold" style={{color:p.color}}>{p.result}</span></div>
        </Link></Reveal>)}</div>
        <div className="mt-10 text-center"><Button to="/case-studies" variant="outline">View all projects</Button></div>
      </Container>
    </section>

    <section className="color-section border-y border-[var(--border)] bg-[var(--surface-2)] py-20 sm:py-28">
      <Container className="relative">
        <SectionHeading eyebrow="Capabilities" title={<>One developer for<br/><span className="text-cyan">clear digital work.</span></>}/>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.map((s,i)=><Reveal key={s.title} delay={(i%3)*.06} className="h-full"><div className="glass-card group h-full rounded-2xl p-7 sm:p-8"><span className="icon-glass"><s.icon size={20}/></span><span className="mt-10 block text-xs text-[var(--muted)]">0{i+1}</span><h3 className="mt-3 font-display text-2xl font-medium">{s.title}</h3><p className="mt-4 text-sm leading-6 text-[var(--muted)]">{s.text}</p></div></Reveal>)}</div>
      </Container>
    </section>

    <section className="py-20 sm:py-28">
      <Container><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><SectionHeading eyebrow="How I work" title={<>Clear steps.<br/><span className="text-violet">Fast decisions.</span></>} text="Plan, design, build, test, and launch without making the process feel heavy."/><Button to="/about" variant="outline" className="mt-8">My approach</Button></div><div className="space-y-3">{process.slice(0,5).map(([n,t,d])=><div key={n} className="glass-card grid gap-3 rounded-2xl p-5 sm:grid-cols-[50px_140px_1fr] sm:p-6"><span className="text-xs text-violet">{n}</span><h3 className="font-display text-lg font-medium">{t}</h3><p className="text-sm leading-6 text-[var(--muted)]">{d}</p></div>)}</div></div></Container>
    </section>

    <section className="color-section overflow-hidden border-y border-[var(--border)] py-8" aria-label="Technology stack">
      <motion.div className="flex w-max gap-3" animate={reduceMotion ? undefined : {x:['0%','-50%']}} transition={reduceMotion ? undefined : {duration:35,repeat:Infinity,ease:'linear'}}>{[...technologies,...technologies].map((t,i)=><span key={`${t}${i}`} className="rounded-full border border-[var(--border)] bg-white px-5 py-2.5 font-display text-lg text-[var(--muted)]">{t}</span>)}</motion.div>
    </section>

    <section className="py-20 sm:py-28">
      <Container><SectionHeading eyebrow="Why work with me" title={<>Focused craft.<br/><span className="text-cyan">No extra noise.</span></>} /><div className="mt-14 grid gap-5 md:grid-cols-3">{principles.map((p,i)=><Reveal delay={i*.08} key={p.title}><div className="glass-card h-full rounded-2xl p-8"><span className="icon-glass"><p.icon size={20}/></span><h3 className="mt-10 font-display text-2xl">{p.title}</h3><p className="mt-4 leading-7 text-[var(--muted)]">{p.text}</p></div></Reveal>)}</div><div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">{[['10','core skills'],['100%','responsive'],['A11y','built in'],['Fast','by default']].map(([v,l])=><div className="glass-card rounded-2xl p-7 sm:p-9" key={l}><strong className="font-display text-3xl font-medium text-violet sm:text-5xl">{v}</strong><span className="mt-3 block text-xs text-[var(--muted)]">{l}</span></div>)}</div></Container>
    </section>

    <section className="gradient-panel relative overflow-hidden py-20 sm:py-24">
      <Container className="relative"><Quote size={38} aria-hidden="true"/><blockquote className="mt-8 max-w-5xl font-display text-4xl font-medium leading-[1.08] sm:text-6xl">Your site should explain the value quickly, feel trustworthy, and make contacting you easy.</blockquote><div className="mt-9 flex flex-wrap items-center gap-4"><div className="grid size-12 place-items-center rounded-lg border border-white/25 bg-white/10 text-sm font-bold text-white">SA</div><div><b className="block text-sm">{site.name}</b><span className="text-xs text-white/75">{site.role} / {site.location}</span></div><Button href={site.whatsappUrl} variant="primary" className="bg-white text-[#1d3557] hover:bg-white">WhatsApp now</Button></div></Container>
    </section>

    <section className="py-20 sm:py-28">
      <Container><div className="flex items-end justify-between gap-6"><SectionHeading eyebrow="Field notes" title="Ideas for better digital work."/><Link to="/blog" className="focus-ring hidden rounded text-sm font-bold text-violet sm:block">View all notes -&gt;</Link></div><div className="mt-14 grid gap-5 md:grid-cols-3">{articles.slice(0,3).map((article,i)=><Reveal delay={i*.07} key={article.slug}><Link to={`/blog/${article.slug}`} className="glass-card focus-ring group block h-full rounded-2xl p-7"><div className="aspect-[16/10] rounded-2xl border border-[var(--border)] bg-[#eef4ff] p-5"><span className="text-xs text-violet">0{i+1} / DEV NOTES</span><div className="mt-12 h-px w-full bg-[var(--border)]"/><div className="mt-3 h-px w-2/3 bg-[var(--border)]"/></div><p className="mt-6 text-xs text-[var(--muted)]">{article.category} / {article.readTime} min read</p><h3 className="mt-3 font-display text-xl font-medium group-hover:text-violet">{article.title}</h3></Link></Reveal>)}</div></Container>
    </section>

    <section className="color-section border-t border-[var(--border)] bg-[var(--surface-2)] py-20 sm:py-28">
      <Container className="relative"><div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]"><SectionHeading eyebrow="FAQs" title={<>Good questions.<br/><span className="text-violet">Straight answers.</span></>}/><Accordion items={faqs.slice(0,6)}/></div></Container>
    </section>
  </>;
}
