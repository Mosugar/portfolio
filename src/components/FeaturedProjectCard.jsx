import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';
import Link from '../router/Link';
import { projectPath } from '../router/navigation';
import ProjectShot from './ProjectFrame';

const MAX_BADGES = 5;

// The whole card is clickable through the case study link's ::after overlay,
// so keyboard users still get a single, clearly labelled tab stop.
// wide: full-row card (screenshot left, text right on desktop), used when a row would be left half-empty
const FeaturedProjectCard = ({ project, wide = false }) => {
  const { t, lang } = useLanguage();
  const { cover } = project;
  const extra = project.stack.length - MAX_BADGES;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-colors duration-300 hover:border-[var(--border-accent)] ${
        wide ? 'md:grid md:grid-cols-2' : ''
      }`}
    >
      {/* Screenshot peeking out of the top of the card */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.18),transparent_70%)]">
        <div
          className={`transition-transform duration-500 ease-out group-hover:-translate-y-1.5 ${
            cover.kind === 'mobile' ? 'mx-auto w-[44%] max-w-[210px] pt-6' : 'px-[7%] pt-[6%]'
          }`}
        >
          <ProjectShot shot={cover} alt="" url={project.url} />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[var(--surface)] to-transparent" />
      </div>

      <div className={`flex flex-1 flex-col gap-3 p-6 sm:p-7 ${wide ? 'md:justify-center md:py-10' : ''}`}>
        <p className="m-0 text-[0.65rem] font-semibold tracking-[0.14em] text-[var(--accent-light)] uppercase">
          {project.type[lang]} · {project.year}
        </p>
        <h3 className="m-0 font-display text-2xl font-bold tracking-[-0.01em] text-[var(--text)]">{project.name}</h3>
        <p className="m-0 text-[0.92rem] leading-[1.65] text-[var(--text-2)]">{project.summary[lang]}</p>

        <ul className="m-0 mt-1 flex list-none flex-wrap gap-1.5 p-0">
          {project.stack.slice(0, MAX_BADGES).map((s) => (
            <li key={s} className="rounded-full border border-[var(--border-accent)] bg-[rgba(139,92,246,0.08)] px-2.5 py-0.5 text-[0.7rem] font-medium text-[var(--accent-light)]">
              {s}
            </li>
          ))}
          {extra > 0 && (
            <li className="rounded-full border border-[var(--border)] px-2.5 py-0.5 text-[0.7rem] text-[var(--text-2)]">+{extra}</li>
          )}
        </ul>

        <Link
          to={projectPath(project.slug)}
          aria-label={`${t.works.viewCase} — ${project.name}`}
          className={`mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border-accent)] px-5 py-2.5 text-sm font-medium text-[var(--accent-light)] no-underline transition-colors after:absolute after:inset-0 after:content-[''] group-hover:border-[rgba(139,92,246,0.55)] group-hover:bg-[rgba(139,92,246,0.12)] group-hover:text-[#c4b5fd] ${wide ? 'md:mt-4' : ''}`}
        >
          {t.works.viewCase}
          <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
};

export default FeaturedProjectCard;
