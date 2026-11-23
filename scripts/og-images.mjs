// Builds each project's social preview image (1200×630 JPEG, the size LinkedIn, WhatsApp
// and X expect) from its cover screenshot: public/images/projets/<slug>/og.jpg
//
//   node scripts/og-images.mjs

import { chromium } from 'playwright';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { projects } from '../src/data/projects.js';

// Projects whose cover is a phone screenshot read better with a wider image
const SOURCE_OVERRIDES = { recur: '/images/recur-cover.webp' };

const tmp = mkdtempSync(join(tmpdir(), 'og-'));
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });

for (const project of projects) {
  const src = resolve('public' + (SOURCE_OVERRIDES[project.slug] ?? project.cover.src));
  const html = join(tmp, `${project.slug}.html`);
  writeFileSync(html, `<!doctype html><style>
    html, body { margin: 0; width: 1200px; height: 630px; background: #09090f; overflow: hidden; }
    img { width: 100%; height: 100%; object-fit: cover; object-position: top; display: block; }
  </style><img src="file://${src}">`);
  await page.goto('file://' + html);
  await page.waitForFunction(() => document.images[0].complete && document.images[0].naturalWidth > 0);

  const outDir = join('public/images/projets', project.slug);
  mkdirSync(outDir, { recursive: true });
  await page.screenshot({ path: join(outDir, 'og.jpg'), type: 'jpeg', quality: 80 });
  console.log(`✓ ${outDir}/og.jpg`);
}

await browser.close();
rmSync(tmp, { recursive: true, force: true });
