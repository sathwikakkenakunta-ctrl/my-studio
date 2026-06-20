import { Helmet } from 'react-helmet-async';
import { site } from '../../data/site';

export function Seo({ title, description = site.description }: { title: string; description?: string }) {
  const isHome = title === site.name;
  const fullTitle = isHome ? `${site.name} — ${site.role}` : `${title} — ${site.name}`;
  const url = typeof window !== 'undefined' ? window.location.href : site.github;
  const structuredData = {
    '@context': 'https://schema.org', '@type': 'Person', name: site.name, jobTitle: site.role,
    description, email: `mailto:${site.email}`, url: site.github, sameAs: [site.github],
    address: { '@type': 'PostalAddress', addressRegion: 'Telangana', addressCountry: 'IN' },
    knowsAbout: [...site.skills],
  };

  return <Helmet>
    <title>{fullTitle}</title><meta name="description" content={description}/><meta name="author" content={site.name}/>
    <link rel="canonical" href={url}/><meta property="og:title" content={fullTitle}/><meta property="og:description" content={description}/><meta property="og:type" content="profile"/><meta property="og:url" content={url}/><meta property="profile:first_name" content="Sathwik"/><meta property="profile:last_name" content="Akkenakunta"/>
    <meta name="twitter:card" content="summary"/><meta name="twitter:title" content={fullTitle}/><meta name="twitter:description" content={description}/>
    <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
  </Helmet>;
}
