import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, X, ImageOff } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';

const SHOW_TODOS = import.meta.env.DEV;

// Dashed "fill me in" note — only rendered in dev so it never ships
const Todo = ({ item }) => {
  if (!SHOW_TODOS || !item) return null;
  return (
    <p className="mt-2 rounded-lg border border-dashed border-amber-400/50 bg-amber-400/5 px-3 py-2 text-xs text-amber-300">
      <strong className="font-semibold">TODO:</strong> {item.todo}
    </p>
  );
};

const Section = ({ title, children }) => (
  <section className="mt-7">
    <h3 className="section-label m-0 mb-2">{title}</h3>
    {children}
  </section>
);

const Screenshot = ({ shot, name, aspect, lang, missing, onMissing }) => {
  return (
    <figure className="m-0">
      {missing ? (
        <div className={`flex ${aspect} w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-[var(--border-accent)] bg-[var(--surface-2)] text-[var(--text-3)]`}>
          <ImageOff size={20} aria-hidden="true" />
          <span className="px-2 text-center text-[0.65rem]">{shot.src.split('/').pop()}</span>
        </div>
      ) : (
        <img
          src={shot.src}
          alt={`${name} — ${shot.label[lang]}`}
          loading="lazy"
          onError={onMissing}
          className={`block ${aspect} w-full rounded-xl object-cover`}
        />
      )}
      <figcaption className="mt-1.5 text-center text-xs text-[var(--text-2)]">{shot.label[lang]}</figcaption>
    </figure>
  );
};

// Until real screenshots exist: dashed placeholders in dev, nothing at all in production
// Landscape (desktop) shots get 2 columns so they stay readable; portrait phone shots fit 4 across
const ScreenshotGallery = ({ shots, name, aspect = 'aspect-[9/19]', title, lang }) => {
  const landscape = aspect !== 'aspect-[9/19]';
  const [missing, setMissing] = useState(() => new Set());
  if (!SHOW_TODOS && missing.size === shots.length) return null;
  return (
    <Section title={title}>
      <div className={`grid gap-3 ${landscape ? 'sm:grid-cols-2' : 'grid-cols-2 sm:grid-cols-4'}`}>
        {shots.map((shot) => (
          (SHOW_TODOS || !missing.has(shot.src)) && (
            <Screenshot
              key={shot.src}
              shot={shot}
              name={name}
              aspect={aspect}
              lang={lang}
              missing={missing.has(shot.src)}
              onMissing={() => setMissing((prev) => new Set(prev).add(shot.src))}
            />
          )
        ))}
      </div>
    </Section>
  );
};

// A section with no verified content yet only shows (as a TODO) in dev
const hasContent = (study, field) => Boolean(study[field]) || (SHOW_TODOS && Boolean(study[`${field}Todo`]));

const CaseStudy = ({ study, onClose }) => {
  const { t, lang } = useLanguage();
  const dialogRef = useRef(null);
  const cs = t.works.caseStudy;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (study && !dialog.open) dialog.showModal();
    if (!study && dialog.open) dialog.close();
  }, [study]);

  const p = (field) => study?.[field]?.[lang];

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => { if (e.target === dialogRef.current) onClose(); }}
      aria-labelledby="case-study-title"
      className="m-auto max-h-[90vh] w-[min(760px,calc(100vw-2rem))] overflow-y-auto rounded-2xl border border-[var(--border-accent)] bg-[var(--surface)] p-0 text-[var(--text)] shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm"
    >
      {study && (
        <article className="p-6 sm:p-9">
          <header className="flex items-start justify-between gap-4">
            <div>
              <p className="section-label m-0 mb-1.5">{study.tag[lang]} · {study.period[lang]}</p>
              <h2 id="case-study-title" className="m-0 font-display text-3xl font-bold tracking-tight">
                {study.name}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label={cs.close}
              className="grid size-9 shrink-0 place-items-center rounded-full border border-[var(--border)] bg-transparent text-[var(--text-2)] transition-colors hover:border-[var(--border-accent)] hover:text-[var(--text)]"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </header>

          <img
            src={study.img}
            alt=""
            className="mt-6 block max-h-72 w-full rounded-xl bg-[#0a0a14] object-contain"
          />

          <div className="text-[0.95rem] leading-relaxed text-[var(--text-2)]">
            <Section title={cs.problem}>
              <p className="m-0">{p('problem')}</p>
              <Todo item={study.problemTodo} />
            </Section>

            <Section title={cs.role}>
              <p className="m-0">{p('role')}</p>
              <Todo item={study.roleTodo} />
            </Section>

            {(study.stack.length > 0 || (SHOW_TODOS && study.stackTodo)) && (
              <Section title={cs.stack}>
                {study.stack.length > 0 && (
                  <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                    {study.stack.map((s) => (
                      <li key={s} className="rounded-full border border-[var(--border-accent)] bg-[rgba(139,92,246,0.08)] px-3 py-1 text-xs font-medium text-[var(--accent-light)]">
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
                <Todo item={study.stackTodo} />
              </Section>
            )}

            {study.features && (
              <Section title={cs.features}>
                <ul className="m-0 list-disc space-y-1 pl-5">
                  {study.features[lang].map((f) => <li key={f}>{f}</li>)}
                </ul>
              </Section>
            )}

            {hasContent(study, 'challenge') && (
              <Section title={cs.challenge}>
                {study.challenge && <p className="m-0">{p('challenge')}</p>}
                <Todo item={study.challengeTodo} />
              </Section>
            )}

            {hasContent(study, 'result') && (
              <Section title={cs.result}>
                {study.result && <p className="m-0">{p('result')}</p>}
                <Todo item={study.resultTodo} />
              </Section>
            )}

            {study.screenshots && (
              <ScreenshotGallery
                key={study.id}
                shots={study.screenshots}
                name={study.name}
                aspect={study.screenshotAspect}
                title={cs.screenshots}
                lang={lang}
              />
            )}
          </div>

          <a
            href={study.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--border-accent)] px-5 py-2.5 text-sm font-medium text-[var(--accent-light)] no-underline transition-colors hover:border-[rgba(139,92,246,0.55)] hover:bg-[rgba(139,92,246,0.12)] hover:text-[#c4b5fd]"
          >
            {cs[study.linkLabel] ?? cs.visit}
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </article>
      )}
    </dialog>
  );
};

export default CaseStudy;
