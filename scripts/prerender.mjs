// Runs after `vite build`: writes dist/projets/<slug>/index.html for every project, a copy of the
// app shell with that project's title, description, canonical URL and Open Graph tags.
// Social crawlers (LinkedIn, WhatsApp, X…) don't run JavaScript, so they need these in the HTML.
// The French text is used, as it's the site's default language.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { projects } from '../src/data/projects.js';

const SITE_URL = 'https://www.mohamedsekkar.com';
const shell = readFileSync('dist/index.html', 'utf8');

const escape = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Swap the content of one tag, and fail the build loudly if index.html no longer has it
const setTag = (html, pattern, replacement) => {
  if (!pattern.test(html)) throw new Error(`prerender: tag not found in dist/index.html: ${pattern}`);
  return html.replace(pattern, replacement);
};

for (const project of projects) {
  const url = `${SITE_URL}/projets/${project.slug}`;
  const title = escape(`${project.name} — ${project.type.fr} | Mohamed Sekkar`);
  const description = escape(project.summary.fr);
  const image = `${SITE_URL}/images/projets/${project.slug}/og.jpg`;

  let html = shell;
  html = setTag(html, /<title>[^<]*<\/title>/, `<title>${title}</title>`);
  for (const name of ['title', 'description']) {
    html = setTag(html, new RegExp(`<meta name="${name}" content="[^"]*"`), `<meta name="${name}" content="${name === 'title' ? title : description}"`);
  }
  const og = { type: 'article', url, title, description, image, 'image:alt': escape(`${project.name} — ${project.cover.label.fr}`) };
  for (const [key, value] of Object.entries(og)) {
    html = setTag(html, new RegExp(`<meta property="og:${key}" content="[^"]*"`), `<meta property="og:${key}" content="${value}"`);
  }
  for (const key of ['url', 'title', 'description', 'image', 'image:alt']) {
    html = setTag(html, new RegExp(`<meta property="twitter:${key}" content="[^"]*"`), `<meta property="twitter:${key}" content="${og[key]}"`);
  }
  html = setTag(html, /<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${url}"`);
  // The share images are JPEGs, not the home page's PNG
  html = html.replace('<meta property="og:image:type" content="image/png" />', '<meta property="og:image:type" content="image/jpeg" />');

  const dir = join('dist/projets', project.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html);
}

console.log(`prerender: ${projects.length} pages projets générées dans dist/projets/`);
