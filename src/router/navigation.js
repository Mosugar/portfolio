// Tiny client-side router: two kinds of pages (home and /projets/:slug) don't need a library.
// The URL is the source of truth; navigate() pushes a history entry and tells subscribers.
import { useSyncExternalStore } from 'react';

const NAVIGATE_EVENT = 'app:navigate';

const subscribe = (callback) => {
  window.addEventListener('popstate', callback);
  window.addEventListener(NAVIGATE_EVENT, callback);
  return () => {
    window.removeEventListener('popstate', callback);
    window.removeEventListener(NAVIGATE_EVENT, callback);
  };
};

export const usePathname = () => useSyncExternalStore(subscribe, () => window.location.pathname);

export const projectPath = (slug) => `/projets/${slug}`;

// Slug of a case study URL, or null for any other page
export const projectSlugFrom = (pathname) => pathname.match(/^\/projets\/([^/]+)\/?$/)?.[1] ?? null;

// Home sections load lazily, so the target may not exist yet: keep looking for a couple of seconds
export const scrollToId = (id, behavior = 'smooth') => {
  const started = performance.now();
  const tryScroll = () => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior, block: 'start' });
    else if (performance.now() - started < 3000) requestAnimationFrame(tryScroll);
  };
  tryScroll();
};

export const navigate = (to) => {
  const url = new URL(to, window.location.href);
  const samePage = url.pathname === window.location.pathname;
  if (!samePage || url.hash !== window.location.hash) {
    window.history.pushState(null, '', url.pathname + url.hash);
    window.dispatchEvent(new Event(NAVIGATE_EVENT));
  }
  if (url.hash) scrollToId(url.hash.slice(1), samePage ? 'smooth' : 'instant');
  else if (!samePage) window.scrollTo({ top: 0, behavior: 'instant' });
};
