import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
const root=resolve(import.meta.dirname,'..');
const siteUrl=(process.env.VITE_SITE_URL||(process.env.VERCEL_PROJECT_PRODUCTION_URL?`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`:'https://sathwik-studio.vercel.app')).replace(/\/$/,'');
const today=new Date().toISOString().slice(0,10);
const [projectSource,articleSource]=await Promise.all([readFile(resolve(root,'src/data/content.ts'),'utf8'),readFile(resolve(root,'src/data/articles.ts'),'utf8')]);
const projects=[...projectSource.matchAll(/slug:\s*'([^']+)'/g)].map(m=>m[1]);
const posts=[...articleSource.matchAll(/slug:'([^']+)'/g)].map(m=>m[1]);
if(!projects.length||!posts.length) throw new Error('Could not find project or article slugs; refusing to write an incomplete sitemap.');
const fixed=['/','/about','/projects','/services','/blog','/contact','/faq','/pricing','/privacy','/terms'];
// Keep redirects (/case-studies) and utility pages (/search) out of the sitemap.
// Every URL here must be a canonical, indexable route with a prerendered shell.
const routes=[...fixed,...projects.map(slug=>`/project/${slug}`),...posts.map(slug=>`/blog/${slug}`)];
const escapeXml=value=>value.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&apos;');
const xml=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map(path=>`  <url>\n    <loc>${escapeXml(`${siteUrl}${path==='/'?'':path}`)}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`).join('\n')}\n</urlset>\n`;
await Promise.all([writeFile(resolve(root,'public/sitemap.xml'),xml),writeFile(resolve(root,'public/robots.txt'),`User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`)]);
console.log(`Generated sitemap with ${routes.length} indexable URLs for ${siteUrl}`);
