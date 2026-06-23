import { zodResolver } from '@hookform/resolvers/zod';
import { Github, Mail, MapPin, MessageCircle } from 'lucide-react';
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
  message: z.string().min(12, 'Share a short project note'),
});

type FormData = z.infer<typeof schema>;
const field = 'focus-ring mt-2 w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted)] transition-colors hover:border-[var(--accent)] focus:border-[var(--accent)]';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = () => setSent(true);

  return <><Seo title="Contact" description={`Contact ${site.name} about a website, dashboard, or SaaS application.`}/>
    <PageHero eyebrow="Contact" title="Ready to make your website clearer?" text="Send a short note or message me on WhatsApp. I will reply with the next practical step."/>
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
          <aside className="space-y-4" aria-label="Contact details">
            <a className="glass-card focus-ring block rounded-2xl bg-[#eef4ff] p-6" href={site.whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle className="text-[var(--accent)]" size={24} aria-hidden="true"/>
              <span className="mt-7 block text-xs text-[var(--muted)]">Fastest reply</span>
              <strong className="mt-1 block text-lg">WhatsApp</strong>
              <span className="mt-4 inline-flex text-sm font-bold text-[var(--accent)]">Start chat -&gt;</span>
            </a>
            <ContactCard icon={Mail} label="Email" value="sathwikakkenakunta" href={`mailto:${site.email}`}/>
            <ContactCard icon={Github} label="GitHub" value="sathwikakkenakunta-ctrl" href={site.github}/>
            <ContactCard icon={MapPin} label="Based in" value={site.location}/>
          </aside>

          <div className="glass-card rounded-2xl p-5 sm:p-8">
            {sent ? <div className="grid min-h-[380px] place-items-center text-center"><div>
              <div className="mx-auto grid size-14 place-items-center rounded-xl bg-[#e8f7f1] text-2xl font-bold text-[#0f8f75]">OK</div>
              <h2 className="mt-6 font-display text-4xl">Message noted.</h2>
              <p className="mx-auto mt-4 max-w-md text-[var(--muted)]">This demo form is ready for an email service. For now, WhatsApp is the quickest route.</p>
              <Button href={site.whatsappUrl} variant="primary" className="mt-7">Message on WhatsApp</Button>
            </div></div> :
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" error={errors.name?.message} id="name"><input id="name" autoComplete="name" className={field} placeholder="Your name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} {...register('name')}/></Field>
                <Field label="Email" error={errors.email?.message} id="email"><input id="email" type="email" autoComplete="email" className={field} placeholder="you@company.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} {...register('email')}/></Field>
              </div>
              <Field label="Project note" error={errors.message?.message} id="message" className="mt-5"><textarea id="message" rows={7} className={`${field} resize-none`} placeholder="Website, dashboard, landing page, or redesign?" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} {...register('message')}/></Field>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full sm:w-auto">{isSubmitting ? 'Sending...' : 'Send note'}</Button>
                <Button href={site.whatsappUrl} variant="secondary" className="w-full sm:w-auto">WhatsApp instead</Button>
              </div>
            </form>}
          </div>
        </div>
      </Container>
    </section>
  </>;
}

function ContactCard({icon:Icon,label,value,href}:{icon:typeof Mail;label:string;value:string;href?:string}) {
  const content = <><Icon className="text-violet" size={21} aria-hidden="true"/><span className="mt-7 block text-xs text-[var(--muted)]">{label}</span><strong className="mt-1 block break-words text-sm">{value}</strong></>;
  return href ? <a className="glass-card focus-ring block rounded-2xl p-6" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>{content}</a> : <div className="glass-card rounded-2xl p-6">{content}</div>;
}

function Field({label,error,id,children,className=''}:{label:string;error?:string;id:string;children:React.ReactNode;className?:string}) {
  return <label htmlFor={id} className={`block text-sm font-semibold ${className}`}>{label}{children}{error && <span id={`${id}-error`} role="alert" className="mt-2 block text-xs font-medium text-red-600">{error}</span>}</label>;
}
