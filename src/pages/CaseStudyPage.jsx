import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import GithubIcon from '../components/GithubIcon';
import { projects } from '../data/projects';
import { useLanguage } from '../context/useLanguage';
import Link from '../router/Link';
import { projectPath } from '../router/navigation';
import ProjectShot from '../components/ProjectFrame';
import SEO from '../components/SEO';

const SITE_URL = 'https://www.mohamedsekkar.com';

// Drafts (texts not yet reviewed) are shown in full in dev only. In production a draft
// keeps its summary, stack, screenshots and links, and the unreviewed sections stay hidden.
const SHOW_DRAFTS = import.meta.env.DEV;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Section = ({ title, children }) => (
  <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} className="mt-16">
    <h2 className="section-label m-0 mb-5">{title}</h2>
    {children}
  </motion.section>
);

const ButtonLink = ({ href, children, primary = false }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium no-underline transition-colors ${
      primary
        ? 'border-[#7c3aed] bg-[#7c3aed] text-white hover:bg-[#6d28d9]' // darker than --accent so white text passes WCAG AA
        : 'border-[var(--border-accent)] text-[var(--accent-light)] hover:border-[rgba(139,92,246,0.55)] hover:bg-[rgba(139,92,246,0.12)] hover:text-[#c4b5fd]'
    }`}
  >
    {children}
  </a>
);

const NotFound = ({ t }) => (
  <div className="mx-auto max-w-[700px] py-[clamp(6rem,14vw,10rem)] text-center">
    <SEO title={`${t.project.notFound} | Mohamed Sekkar`} description={t.project.notFoundText} index={false} />
    <h1 className="m-0 font-display text-4xl font-bold text-[var(--text)]">{t.project.notFound}</h1>
    <p className="mt-4 text-[var(--text-2)]">{t.project.notFoundText}</p>
    <Link to="/#works" className="mt-8 inline-flex items-center gap-2 text-sm text-[var(--accent-light)] no-underline hover:text-[#c4b5fd]">
      <ArrowLeft size={15} aria-hidden="true" /> {t.project.back}
    </Link>
  </div>
);

// Previous / next project, looping around the list
const ProjectPager = ({ index, t, lang }) => {
  const at = (offset) => projects[(index + offset + projects.length) % projects.length];
  const links = [
    { project: at(-1), label: t.project.previous, Icon: ArrowLeft, align: 'items-start text-left' },
    { project: at(1), label: t.project.next, Icon: ArrowRight, align: 'items-end text-right' },
  ];
  return (
    <nav aria-label={`${t.project.previous} / ${t.project.next}`} className="mt-20 grid gap-4 border-t border-[var(--border)] pt-10 sm:grid-cols-2">
      {links.map(({ project, label, Icon, align }) => (
        <Link
          key={label}
          to={projectPath(project.slug)}
          className={`group flex flex-col gap-1 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 no-underline transition-colors hover:border-[var(--border-accent)] ${align}`}
        >
          <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-[0.12em] text-[var(--text-2)] uppercase">
            {Icon === ArrowLeft && <Icon size={13} aria-hidden="true" />}
            {label}
            {Icon === ArrowRight && <Icon size={13} aria-hidden="true" />}
          </span>
          <span className="font-display text-lg font-bold text-[var(--text)] transition-colors group-hover:text-[var(--accent-light)]">{project.name}</span>
          <span className="text-xs text-[var(--text-2)]">{project.type[lang]}</span>
        </Link>
      ))}
    </nav>
  );
};

const CaseStudyPage = ({ slug }) => {
  const { t, lang } = useLanguage();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  if (!project) return <NotFound t={t} />;

  const full = !project.draft || SHOW_DRAFTS;
  // A Behance link isn't the site's address, so screenshots don't show it in their browser bar
  const siteUrl = project.linkLabel ? null : project.url;
  // Design-only projects talk about the process and UX decisions, not what was built
  const design = project.discipline === 'design';
  const tp = t.project;
  // The cover is already shown above, so the gallery skips it
  const shots = project.gallery.filter((s) => s.src !== project.cover.src);
  const desktopShots = shots.filter((s) => s.kind === 'desktop');
  const mobileShots = shots.filter((s) => s.kind === 'mobile');

  return (
    <article className="relative px-[clamp(1.5rem,6vw,6rem)] pt-[clamp(2.5rem,6vw,4rem)] pb-[clamp(5rem,10vw,8rem)]">
      <SEO
        title={`${project.name} — ${project.type[lang]} | Mohamed Sekkar`}
        description={project.summary[lang]}
        image={`${SITE_URL}/images/projets/${project.slug}/og.jpg`}
        url={SITE_URL + projectPath(project.slug)}
        type="article"
      />
      <div className="mx-auto max-w-[1100px]">
        <Link to="/#works" className="inline-flex items-center gap-2 text-sm text-[var(--text-2)] no-underline transition-colors hover:text-[var(--text)]">
          <ArrowLeft size={15} aria-hidden="true" /> {tp.back}
        </Link>

        {project.draft && SHOW_DRAFTS && (
          <p className="mt-6 rounded-lg border border-dashed border-amber-400/50 bg-amber-400/5 px-3 py-2 text-xs text-amber-300">
            {tp.draft}
          </p>
        )}

        {/* Header */}
        <motion.header variants={{ show: { transition: { staggerChildren: 0.08 } } }} initial="hidden" animate="show" className="mt-8">
          <motion.p variants={fadeUp} className="section-label m-0 mb-3">
            {project.type[lang]} · {project.year}
          </motion.p>
          <motion.h1 variants={fadeUp} className="m-0 font-display text-[clamp(2.4rem,6vw,4.2rem)] leading-[1.05] font-bold tracking-[-0.03em] text-[var(--text)]">
            {project.name}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-5 max-w-[720px] text-[1.05rem] leading-[1.7] text-[var(--text-2)]">
            {project.summary[lang]}
          </motion.p>

          {full && (
            <motion.dl variants={fadeUp} className="mt-8 grid gap-5 sm:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
              {[
                [tp.role, project.role[lang]],
                // Personal and learning projects have no client
                project.client && [tp.client, project.client[lang]],
              ].filter(Boolean).map(([label, value]) => (
                <div key={label} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
                  <dt className="text-[0.7rem] font-semibold tracking-[0.12em] text-[var(--text-2)] uppercase">{label}</dt>
                  <dd className="m-0 mt-1.5 text-[0.92rem] leading-[1.6] text-[var(--text)]">{value}</dd>
                </div>
              ))}
            </motion.dl>
          )}

          <motion.ul variants={fadeUp} aria-label={tp.stack} className="m-0 mt-6 flex list-none flex-wrap gap-2 p-0">
            {project.stack.map((s) => (
              <li key={s} className="rounded-full border border-[var(--border-accent)] bg-[rgba(139,92,246,0.08)] px-3 py-1 text-xs font-medium text-[var(--accent-light)]">
                {s}
              </li>
            ))}
          </motion.ul>

          {(project.url || project.repos.length > 0) && (
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              {project.url && (
                <ButtonLink href={project.url} primary>
                  {tp[project.linkLabel] ?? tp.visit}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </ButtonLink>
              )}
              {project.repos.map((repo) => (
                <ButtonLink key={repo.url} href={repo.url}>
                  <GithubIcon size={15} aria-hidden="true" />
                  {project.repos.length > 1 ? `${tp.code} · ${repo.label}` : tp.code}
                </ButtonLink>
              ))}
            </motion.div>
          )}
        </motion.header>

        {/* Main screenshot */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" className={`mt-12 ${project.cover.kind === 'mobile' ? 'mx-auto max-w-[280px]' : ''}`}>
          <ProjectShot shot={project.cover} alt={`${project.name} — ${project.cover.label[lang]}`} url={siteUrl} eager />
        </motion.div>

        <div className="max-w-[760px] text-[1rem] leading-[1.75] text-[var(--text-2)]">
          {full && (
            <>
              <Section title={tp.context}>
                <p className="m-0">{project.context[lang]}</p>
              </Section>

              <Section title={design ? tp.process : tp.built}>
                <ul className="m-0 list-disc space-y-1.5 pl-5 marker:text-[var(--accent)]">
                  {project.built[lang].map((item) => <li key={item}>{item}</li>)}
                </ul>
                {project.quality && (
                  <>
                    <h3 className="mt-7 mb-3 font-display text-base font-semibold text-[var(--text)]">{tp.quality}</h3>
                    <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                      {project.quality[lang].map((item) => (
                        <li key={item} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-sm">{item}</li>
                      ))}
                    </ul>
                  </>
                )}
              </Section>
            </>
          )}

          {full && project.challenges.length > 0 && (
            <Section title={design ? tp.uxChoices : tp.challenges}>
              <div className="flex flex-col gap-4">
                {project.challenges.map((c) => (
                  <div key={c.title.en} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
                    <h3 className="m-0 font-display text-lg font-semibold text-[var(--text)]">{c.title[lang]}</h3>
                    <p className="m-0 mt-2 text-[0.95rem]">{c.text[lang]}</p>
                  </div>
                ))}
              </div>
            </Section>
          )}
        </div>

        {/* Gallery: desktop shots two by two, phone shots side by side */}
        <Section title={tp.gallery}>
          {desktopShots.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2">
              {desktopShots.map((shot) => (
                <figure key={shot.src} className="m-0">
                  <ProjectShot shot={shot} alt={`${project.name} — ${shot.label[lang]}`} url={siteUrl} />
                  <figcaption className="mt-2 text-center text-xs text-[var(--text-2)]">{shot.label[lang]}</figcaption>
                </figure>
              ))}
            </div>
          )}
          {mobileShots.length > 0 && (
            <div className={`grid grid-cols-2 gap-4 sm:grid-cols-4 ${desktopShots.length > 0 ? 'mt-8' : ''}`}>
              {mobileShots.map((shot) => (
                <figure key={shot.src} className="m-0">
                  <ProjectShot shot={shot} alt={`${project.name} — ${shot.label[lang]}`} />
                  <figcaption className="mt-2 text-center text-xs text-[var(--text-2)]">{shot.label[lang]}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </Section>

        {full && (
          <div className="max-w-[760px] text-[1rem] leading-[1.75] text-[var(--text-2)]">
            <Section title={tp.result}>
              <p className="m-0 text-[var(--text)]">{project.result[lang]}</p>
            </Section>
          </div>
        )}

        <ProjectPager index={index} t={t} lang={lang} />

        <Link to="/#works" className="mt-8 inline-flex items-center gap-2 text-sm text-[var(--text-2)] no-underline transition-colors hover:text-[var(--text)]">
          <ArrowLeft size={15} aria-hidden="true" /> {tp.back}
        </Link>
      </div>
    </article>
  );
};

export default CaseStudyPage;
