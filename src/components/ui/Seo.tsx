import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { site } from '../../data/site';

type Schema = Record<string, unknown>;
type Props = { title:string; description?:string; image?:string; type?:'website'|'article'|'profile'; noIndex?:boolean; schema?:Schema|Schema[]; publishedTime?:string; modifiedTime?:string };

export function Seo({ title, description=site.description, image=site.ogImage, type='website', noIndex=false, schema=[], publishedTime, modifiedTime }:Props) {
  const { pathname } = useLocation();
  const fullTitle = title === site.name ? `${site.name} — ${site.role}` : `${title} — ${site.name}`;
  const url = `${site.url}${pathname === '/' ? '' : pathname}`;
  const socialImage = image.startsWith('http') ? image : `${site.url}${image}`;
  const person = { '@context':'https://schema.org', '@type':'Person', '@id':`${site.url}/#person`, name:site.name, jobTitle:site.role, description:site.description, email:`mailto:${site.email}`, url:site.url, sameAs:[site.github], address:{ '@type':'PostalAddress', addressRegion:'Telangana', addressCountry:'IN' }, knowsAbout:[...site.skills] };
  const webPage = { '@context':'https://schema.org', '@type':'WebPage', '@id':`${url}#webpage`, url, name:fullTitle, description, inLanguage:'en-IN', isPartOf:{ '@id':`${site.url}/#website` }, author:{ '@id':`${site.url}/#person` } };
  const schemas = [person, webPage, ...(Array.isArray(schema) ? schema : [schema])].filter(Boolean);
  return <Helmet>
    <html lang="en-IN"/><title>{fullTitle}</title>
    <meta name="description" content={description}/><meta name="author" content={site.name}/><meta name="robots" content={noIndex?'noindex, nofollow':'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}/><meta name="theme-color" content={site.themeColor}/><link rel="canonical" href={url}/>
    <meta property="og:title" content={fullTitle}/><meta property="og:description" content={description}/><meta property="og:type" content={type}/><meta property="og:url" content={url}/><meta property="og:image" content={socialImage}/><meta property="og:image:width" content="1200"/><meta property="og:image:height" content="630"/><meta property="og:image:alt" content={`${title} — ${site.name}`}/><meta property="og:site_name" content={`${site.name} Portfolio`}/><meta property="og:locale" content={site.locale}/>
    <meta name="twitter:card" content="summary_large_image"/><meta name="twitter:title" content={fullTitle}/><meta name="twitter:description" content={description}/><meta name="twitter:image" content={socialImage}/>
    {publishedTime&&<meta property="article:published_time" content={publishedTime}/>} {modifiedTime&&<meta property="article:modified_time" content={modifiedTime}/>}<script type="application/ld+json">{JSON.stringify(schemas)}</script>
  </Helmet>;
}
