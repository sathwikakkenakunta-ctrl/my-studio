import { Check, Github } from 'lucide-react';
import { Navigate, useParams } from 'react-router-dom';
import { PageHero } from '../components/sections/PageHero';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Section';
import { Seo } from '../components/ui/Seo';
import { projects } from '../data/content';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <Navigate to="/case-studies" replace/>;

  return <>
    <Seo title={project.title} description={`${project.title}: ${project.description}`}/>
    <PageHero eyebrow={`${project.type} · ${project.status}`} title={project.title} text={project.description}/>
    <section className="pb-28"><Container>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">{[
        ['Role', project.role], ['Timeline', project.timeline], ['Scope', project.result], ['Status', project.status],
      ].map(([key,value]) => <div className="glass-card rounded-2xl p-5 sm:p-8" key={key}><span className="text-xs text-[var(--muted)]">{key}</span><b className="mt-3 block font-display text-lg sm:text-xl">{value}</b></div>)}</div>

      <div className="glass-card mt-6 overflow-hidden rounded-3xl p-2 sm:p-3"><div className="overflow-hidden rounded-[1.15rem] bg-[var(--surface-2)]"><img src={project.image} alt={`${project.title} desktop interface`} className="aspect-[16/10] h-full w-full object-cover object-top"/></div></div>

      <div className="mt-8 flex flex-wrap gap-3">
        {project.liveUrl && <Button href={project.liveUrl} variant="primary">View live site</Button>}
        <Button href={project.githubUrl} variant="secondary"><Github size={17}/> View GitHub</Button>
        {!project.liveUrl && <Button to="/contact" variant="outline">Contact me to design yours</Button>}
      </div>

      <div className="mx-auto mt-20 grid max-w-5xl gap-10 sm:mt-24 md:grid-cols-2"><div><span className="eyebrow">The challenge</span><h2 className="mt-5 font-display text-4xl tracking-[-.04em]">Make a complex product feel immediately clear.</h2></div><p className="leading-8 text-[var(--muted)]">{project.challenge}</p></div>
      <div className="mx-auto mt-24 grid max-w-5xl gap-12 md:grid-cols-2"><div><span className="eyebrow">The solution</span><h2 className="mt-5 font-display text-4xl tracking-[-.04em]">One considered system, from first click to daily work.</h2></div><div><p className="leading-8 text-[var(--muted)]">{project.solution}</p><div className="mt-7 flex flex-wrap gap-2">{project.stack.map((technology) => <span className="rounded-full border border-[var(--border)] px-4 py-2 text-xs" key={technology}>{technology}</span>)}</div></div></div>

      <div className="mt-24 grid gap-5 md:grid-cols-3">{project.highlights.map((highlight) => <div className="glass-card rounded-2xl p-7" key={highlight}><span className="grid size-10 place-items-center rounded-full" style={{background:`${project.color}22`,color:project.color}}><Check size={18}/></span><h3 className="mt-8 font-display text-xl">{highlight}</h3></div>)}</div>

      <div className="gradient-panel mt-24 rounded-3xl p-8 sm:p-14"><span className="text-xs font-bold uppercase tracking-[.15em]">Have a product in mind?</span><p className="mt-5 max-w-4xl font-display text-4xl font-medium tracking-[-.04em] sm:text-6xl">Let’s turn your idea into a clear, polished digital experience.</p><Button to="/contact" variant="secondary" className="mt-8 border-white/20 bg-white text-ink">Contact me to design yours</Button></div>
    </Container></section>
  </>;
}
