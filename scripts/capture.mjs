// Takes the project screenshots from the live sites and saves them as WebP
// in public/images/projets/<slug>/. Needs Playwright (dev dependency) and cwebp.
//
//   node scripts/capture.mjs              → every project
//   node scripts/capture.mjs repere-rh    → one or more projects by slug

import { chromium } from 'playwright';
import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const VIEWPORTS = {
  desktop: { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1, resize: [1280, 0] },
  mobile: { viewport: { width: 375, height: 812 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, resize: [750, 0] },
};

// path: page to open · section: CSS selector to scroll to (top of the page when omitted)
// wait: ms to let intros, preloaders and scroll animations finish
// reducedMotion: 'reduce' stops autoplaying sliders from being caught mid-fade
const PROJECTS = {
  'repere-rh': {
    url: 'https://repererh.com',
    reducedMotion: 'reduce',
    shots: [
      { name: 'accueil', vp: 'desktop' },
      { name: 'accueil-mobile', vp: 'mobile' },
      { name: 'domaine', vp: 'desktop', path: '/formations/intelligence-artificielle' },
      { name: 'devis', vp: 'desktop', path: '/contact', section: '#devis' },
      { name: 'devis-mobile', vp: 'mobile', path: '/contact', section: '#devis' },
    ],
  },
  'wardd-studio': {
    url: 'https://warddstudio.ma',
    wait: 3000,
    shots: [
      { name: 'accueil', vp: 'desktop' },
      { name: 'accueil-mobile', vp: 'mobile' },
      { name: 'reservation', vp: 'desktop', path: '/booking' },
      { name: 'arabe', vp: 'desktop', path: '/ar' },
    ],
  },
  'wardd-music': {
    url: 'https://warddstudio.ma',
    wait: 3000,
    reducedMotion: 'reduce',
    shots: [
      { name: 'sorties', vp: 'desktop', section: '#tracks' },
      { name: 'sorties-mobile', vp: 'mobile', section: '#tracks' },
      { name: 'clips', vp: 'desktop', section: '#clips' },
      { name: 'artistes', vp: 'desktop', section: '#artists' },
    ],
  },
  'pristine-dental': {
    url: 'https://pristinedentalcenter.vercel.app',
    shots: [
      { name: 'accueil', vp: 'desktop' },
      { name: 'accueil-mobile', vp: 'mobile' },
      { name: 'soins', vp: 'desktop', section: '#services' },
      { name: 'contact', vp: 'desktop', section: '#contact' },
    ],
  },
  'tl-global': {
    url: 'https://toufaiq.vercel.app',
    shots: [
      { name: 'accueil', vp: 'desktop' },
      { name: 'accueil-mobile', vp: 'mobile' },
      { name: 'realisations', vp: 'desktop', section: '#projects' },
      { name: 'contact', vp: 'desktop', section: '#contact' },
    ],
  },
  'csba-law-firm': {
    url: 'https://lawyer-sulaiman.vercel.app',
    shots: [
      { name: 'accueil', vp: 'desktop' },
      { name: 'accueil-mobile', vp: 'mobile' },
      { name: 'services', vp: 'desktop', section: '#services' },
      { name: 'rendez-vous', vp: 'desktop', section: '#booking' },
    ],
  },
  'gourmet-grove': {
    url: 'https://gourmet-grove.vercel.app',
    wait: 9000,
    shots: [
      // The first screen is a full-bleed video; the restaurant's name sits right below it
      { name: 'accueil', vp: 'desktop', section: 'h1' },
      { name: 'accueil-mobile', vp: 'mobile', section: 'h1' },
      { name: 'menu', vp: 'desktop', path: '/menu' },
      { name: 'galerie', vp: 'desktop', section: '#gallery' },
    ],
  },
  'stretched-web': {
    url: 'https://stretched-web.vercel.app',
    wait: 9000,
    shots: [
      { name: 'accueil', vp: 'desktop' },
      { name: 'accueil-mobile', vp: 'mobile' },
      { name: 'realisations', vp: 'desktop', path: '/work' },
      { name: 'services', vp: 'desktop', path: '/services' },
    ],
  },
};

// Scroll through the whole page so lazy images and scroll-triggered reveals have run
const warmUp = async (page) => {
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 500) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  });
};

// Close cookie banners the way a visitor who declines would
const dismissBanners = async (page) => {
  const decline = page.getByRole('button', { name: /^(refuser|tout refuser|decline|reject)$/i }).first();
  if (await decline.isVisible().catch(() => false)) await decline.click();
};

const capture = async (browser, slug, { url, wait = 2500, reducedMotion = 'no-preference', shots }) => {
  const outDir = join('public/images/projets', slug);
  mkdirSync(outDir, { recursive: true });
  const tmp = mkdtempSync(join(tmpdir(), 'capture-'));

  for (const shot of shots) {
    const { resize, ...options } = VIEWPORTS[shot.vp];
    const context = await browser.newContext({ ...options, reducedMotion });
    const page = await context.newPage();
    await page.goto(url + (shot.path ?? ''), { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(wait);
    await dismissBanners(page);
    await warmUp(page);
    if (shot.section) {
      // Land just above the section so a sticky header doesn't cover its title
      await page.locator(shot.section).first().evaluate((el) => {
        window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 90);
      });
    }
    await page.waitForTimeout(1500);

    const png = join(tmp, `${shot.name}.png`);
    await page.screenshot({ path: png });
    const webp = join(outDir, `${shot.name}.webp`);
    execFileSync('cwebp', ['-quiet', '-q', '78', '-m', '6', '-resize', ...resize.map(String), png, '-o', webp]);
    console.log(`✓ ${webp}`);
    await context.close();
  }
  rmSync(tmp, { recursive: true, force: true });
};

const slugs = process.argv.slice(2);
const browser = await chromium.launch();
for (const [slug, project] of Object.entries(PROJECTS)) {
  if (slugs.length && !slugs.includes(slug)) continue;
  await capture(browser, slug, project);
}
await browser.close();
