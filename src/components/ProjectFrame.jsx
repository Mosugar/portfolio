// A project screenshot inside a browser window (desktop shots) or a phone (mobile shots).
// Screenshots are top-anchored so a crop never hides a page's header.

const hostname = (url) => {
  try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return ''; }
};

const BrowserFrame = ({ url, children }) => (
  <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface-2)] shadow-[0_20px_60px_-25px_rgba(0,0,0,0.8)]">
    <div className="flex items-center gap-3 border-b border-[var(--border)] px-3 py-2" aria-hidden="true">
      <span className="flex gap-1.5">
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
      </span>
      {url && (
        <span className="min-w-0 flex-1 truncate rounded-md bg-white/[0.04] px-3 py-0.5 text-center text-[0.68rem] text-[var(--text-2)]">
          {hostname(url)}
        </span>
      )}
    </div>
    {children}
  </div>
);

const PhoneFrame = ({ children }) => (
  <div className="relative mx-auto w-full max-w-[260px] rounded-[2rem] border border-[var(--border-accent)] bg-[var(--surface-2)] p-2 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.8)]">
    <span aria-hidden="true" className="absolute top-3.5 left-1/2 z-[1] h-1.5 w-14 -translate-x-1/2 rounded-full bg-black/60" />
    <div className="overflow-hidden rounded-[1.6rem]">{children}</div>
  </div>
);

// url: the project's site, shown as its hostname in the browser bar
// eager: for the one screenshot that is the page's main image (largest paint), everything else lazy-loads
const ProjectShot = ({ shot, alt, url, eager = false }) => {
  const mobile = shot.kind === 'mobile';
  const img = (
    <img
      src={shot.src}
      alt={alt}
      width={mobile ? 375 : 1280}
      height={mobile ? 812 : 800}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : undefined}
      decoding="async"
      className={`block w-full bg-[#0a0a14] object-cover object-top ${mobile ? 'aspect-[9/19.5]' : 'aspect-[16/10]'}`}
    />
  );
  return mobile ? <PhoneFrame>{img}</PhoneFrame> : <BrowserFrame url={url}>{img}</BrowserFrame>;
};

export default ProjectShot;
