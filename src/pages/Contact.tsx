import { zodResolver } from '@hookform/resolvers/zod';
import { Clock3, Github, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { PageHero } from '../components/sections/PageHero';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Section';
import { Seo } from '../components/ui/Seo';
import { site } from '../data/site';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.email('Enter a valid email'),
  company: z.string().optional(),
  budget: z.string().min(1, 'Choose a budget range'),
  message: z.string().min(20, 'Tell me a little more (at least 20 characters)'),
});
type FormData = z.infer<typeof schema>;
const field = 'focus-ring mt-2 w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--glass)] px-5 py-4 text-sm text-[var(--text)] shadow-[inset_0_1px_0_var(--glass-highlight)] backdrop-blur-md placeholder:text-[var(--muted)] transition-colors hover:border-violet/60 focus:border-violet';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = () => setSent(true);

  return <><Seo title="Contact" description={`Contact ${site.name} about a website, dashboard, or SaaS application.`}/>
    <PageHero eyebrow="Start a conversation" title="Have an idea? Let's build it properly." text="Share a few useful details and I'll respond with an honest view on the project, the likely approach, and the clearest next step."/>
    <section className="pb-24 sm:pb-28"><Container><div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr]">
      <aside className="space-y-4" aria-label="Contact details">
        <ContactCard icon={Mail} label="Email" value={site.email} href={`mailto:${site.email}`}/>
        <ContactCard icon={Github} label="GitHub" value="sathwikakkenakunta-ctrl" href={site.github}/>
        <ContactCard icon={MapPin} label="Based in" value={site.location}/>
        <ContactCard icon={Clock3} label="Availability" value="Open to freelance and full-time opportunities"/>
        <div className="glass-card grid-bg h-56 rounded-3xl p-6"><span className="text-xs font-bold text-violet">TELANGANA · INDIA</span><p className="mt-24 font-display text-2xl">Building for the web, worldwide.</p></div>
      </aside>
      <div className="glass-card rounded-3xl p-5 sm:p-10">{sent ? <div className="grid min-h-[500px] place-items-center text-center"><div><div className="mx-auto grid size-16 place-items-center rounded-full bg-[linear-gradient(135deg,#a98df7,#47d6ca)] text-2xl font-bold text-ink shadow-[0_0_36px_rgba(118,85,232,.3)]">✓</div><h2 className="mt-6 font-display text-4xl">Message received.</h2><p className="mx-auto mt-4 max-w-md text-[var(--muted)]">Thanks for reaching out. This portfolio form is ready to connect to an email service before deployment.</p><Button href={`mailto:${site.email}`} variant="outline" className="mt-7">Email me directly</Button></div></div> :
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Your name" error={errors.name?.message} id="name"><input id="name" autoComplete="name" className={field} placeholder="Your name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} {...register('name')}/></Field>
            <Field label="Work email" error={errors.email?.message} id="email"><input id="email" type="email" autoComplete="email" className={field} placeholder="you@company.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} {...register('email')}/></Field>
            <Field label="Company or project" id="company"><input id="company" autoComplete="organization" className={field} placeholder="Optional" {...register('company')}/></Field>
            <Field label="Indicative budget" error={errors.budget?.message} id="budget"><select id="budget" className={field} aria-invalid={!!errors.budget} aria-describedby={errors.budget ? 'budget-error' : undefined} {...register('budget')} defaultValue=""><option value="" disabled>Select a range</option><option>₹1L–₹3L</option><option>₹3L–₹8L</option><option>₹8L–₹15L</option><option>₹15L+</option></select></Field>
          </div>
          <Field label="Tell me about the project" error={errors.message?.message} id="message" className="mt-6"><textarea id="message" rows={7} className={`${field} resize-none`} placeholder="What are you building, and why now?" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} {...register('message')}/></Field>
          <Button type="submit" variant="secondary" disabled={isSubmitting} className="mt-6 w-full">{isSubmitting ? 'Sending…' : 'Send project note'}</Button>
          <p className="mt-4 text-center text-xs text-[var(--muted)]">Prefer email? Write directly to <a className="focus-ring rounded underline underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a>.</p>
        </form>}
      </div>
    </div></Container></section>
  </>;
}

function ContactCard({icon:Icon,label,value,href}:{icon:typeof Mail;label:string;value:string;href?:string}) {
  const content = <><Icon className="text-violet" size={21} aria-hidden="true"/><span className="mt-7 block text-xs text-[var(--muted)]">{label}</span><strong className="mt-1 block break-words text-sm">{value}</strong></>;
  return href ? <a className="glass-card focus-ring block rounded-2xl p-6" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>{content}</a> : <div className="glass-card rounded-2xl p-6">{content}</div>;
}

function Field({label,error,id,children,className=''}:{label:string;error?:string;id:string;children:React.ReactNode;className?:string}) {
  return <label htmlFor={id} className={`block text-sm font-semibold ${className}`}>{label}{children}{error && <span id={`${id}-error`} role="alert" className="mt-2 block text-xs font-medium text-red-400">{error}</span>}</label>;
}
