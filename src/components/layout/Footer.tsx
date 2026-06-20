import { Link } from 'react-router-dom';
import { Container } from '../ui/Section';
import { Button } from '../ui/Button';
import { site } from '../../data/site';

const explore = [['Work','/case-studies'],['Services','/services'],['About','/about'],['Contact','/contact']];
const resources = [['Journal','/blog'],['FAQs','/faq'],['Privacy','/privacy'],['Terms','/terms']];

export function Footer() {
  return <footer className="color-section relative border-t border-[var(--glass-border)] pt-20 sm:pt-28"><div aria-hidden="true" className="section-glow -bottom-80 left-[20%]"/><Container className="relative">
    <div className="grid gap-14 lg:grid-cols-[1.35fr_1fr]">
      <div><p className="eyebrow">Have a project in mind?</p><h2 className="mt-5 max-w-3xl font-display text-5xl font-medium leading-[.95] tracking-[-.055em] sm:text-7xl lg:text-8xl">Let's make it <span className="text-violet">matter.</span></h2><Button to="/contact" variant="text" className="mt-7">Tell me what you're building</Button></div>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        <FooterColumn title="Explore" links={explore}/><FooterColumn title="Resources" links={resources}/>
        <div><p className="mb-5 text-xs font-bold uppercase tracking-[.14em] text-[var(--muted)]">Connect</p><a className="focus-ring mb-3 block rounded text-sm hover:text-violet" href={`mailto:${site.email}`}>Email</a><a className="focus-ring mb-3 block rounded text-sm hover:text-violet" href={site.github} target="_blank" rel="noreferrer">GitHub</a></div>
      </div>
    </div>
    <div className="mt-20 flex flex-col gap-4 border-t border-[var(--border)] py-7 text-xs text-[var(--muted)] sm:mt-24 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 {site.name}. Built with care in {site.location}.</span><span>{site.role}</span></div>
  </Container></footer>;
}

function FooterColumn({title,links}:{title:string;links:string[][]}){return <div><p className="mb-5 text-xs font-bold uppercase tracking-[.14em] text-[var(--muted)]">{title}</p>{links.map(([label,path])=><Link className="focus-ring mb-3 block rounded text-sm hover:text-violet" to={path} key={label}>{label}</Link>)}</div>}
