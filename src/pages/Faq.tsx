import { Accordion } from '../components/ui/Accordion';
import { PageHero } from '../components/sections/PageHero';
import { Container } from '../components/ui/Section';
import { Seo } from '../components/ui/Seo';
import { faqs } from '../data/content';
export default function Faq(){return <><Seo title="FAQs" description="Answers about working with Sathwik on websites, dashboards, and SaaS applications."/><PageHero eyebrow="Frequently asked" title="Less mystery. Better decisions." text="The practical details people usually want before starting a serious digital project with me."/><section className="pb-24 sm:pb-28"><Container><div className="mx-auto max-w-5xl"><Accordion items={faqs}/></div></Container></section></>}
