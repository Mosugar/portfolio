import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';
import Link from '../router/Link';
import { projectPath } from '../router/navigation';

// Compact list for the projects that aren't featured: one row each, linking to its case study
const OtherProjects = ({ projects }) => {
  const { lang } = useLanguage();

  return (
    <ul className="m-0 grid list-none gap-x-8 p-0 md:grid-cols-2">
      {projects.map((project) => (
        <li key={project.slug} className="border-b border-[var(--border)]">
          <Link
            to={projectPath(project.slug)}
            className="group flex items-center gap-4 py-4 no-underline"
          >
            <span className="flex min-w-0 flex-1 flex-col gap-0.5">
              <span className="font-display text-[1.05rem] font-semibold text-[var(--text)] transition-colors group-hover:text-[var(--accent-light)]">
                {project.name}
              </span>
              <span className="truncate text-[0.8rem] text-[var(--text-2)]">{project.type[lang]}</span>
            </span>
            <span className="shrink-0 text-[0.75rem] text-[var(--text-2)] tabular-nums">{project.year}</span>
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="shrink-0 text-[var(--text-3)] transition-all group-hover:translate-x-0.5 group-hover:text-[var(--accent-light)]"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default OtherProjects;
