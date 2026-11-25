import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { useLanguage } from '../context/useLanguage';


const statusDot = {
  current: 'bg-[#22c55e] shadow-[0_0_6px_#22c55e]',
  completed: 'bg-[#8b5cf6] shadow-[0_0_6px_rgba(139,92,246,0.6)]',
  previous: 'bg-[#4a4a6a]',
  recent: 'bg-[#8b5cf6]',
};

const kindBadge = {
  education: 'border-[rgba(255,255,255,0.12)] text-[var(--text-2)]',
  experience: 'border-[rgba(139,92,246,0.3)] bg-[rgba(139,92,246,0.08)] text-[var(--accent-light)]',
};

const KindBadge = ({ kind, label }) => (
  <span className={`inline-block rounded-full border px-[0.45rem] py-[0.1rem] text-[0.6rem] leading-[1.4] font-semibold tracking-[0.06em] uppercase ${kindBadge[kind]}`}>
    {label}
  </span>
);

const ExperienceHistory = () => {
  const { t } = useLanguage();
  const experiences = t.experience.entries;
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const exp = experiences[active];

  return (
    <section
      id="experience"
      ref={ref}
      className="relative overflow-hidden bg-[var(--surface)] px-[clamp(1.5rem,6vw,6rem)] py-[clamp(5rem,10vw,9rem)]"
    >
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute top-[20%] right-[-10%] size-[500px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.06)_0%,transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-[1] mx-auto max-w-[1100px]"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="section-label mb-3">{t.experience.label}</p>
          <h2 className="m-0 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.1] font-bold tracking-[-0.02em] text-[var(--text)]">
            {t.experience.h2a}<br />
            <span className="text-[var(--accent-light)]">{t.experience.h2b}</span>
          </h2>
        </motion.div>

        {/* Two-column layout, stacked under 700px */}
        <div className="grid grid-cols-[minmax(260px,2fr)_3fr] items-start gap-6 max-[700px]:grid-cols-[minmax(0,1fr)]">
          {/* Left: job list */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-[6px]"
          >
            {experiences.map((item, i) => (
              <SpotlightCard
                key={i}
                spotlightColor="rgba(139,92,246,0.7)"
                intensity={0.14}
                spotlightSize={220}
                borderGlow={active === i ? 0.9 : 0.4}
                role="button"
                tabIndex={0}
                aria-pressed={active === i}
                aria-controls="experience-detail"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(i); }
                }}
                className="cursor-pointer px-4 py-[0.85rem] [transition:transform_0.15s_ease]"
                style={{
                  '--spotlight-card-surface': active === i ? '#1a1a24' : '#111118',
                  '--spotlight-card-border': active === i ? 'rgba(139,92,246,0.25)' : 'rgba(255,255,255,0.05)',
                }}
                onClick={() => setActive(i)}
              >
                <div className="relative z-[2] flex items-center gap-3">
                  {/* Status dot */}
                  <div className={`size-[7px] shrink-0 rounded-full ${statusDot[item.type] || 'bg-[#4a4a6a]'}`} />
                  <div className="min-w-0 flex-1">
                    <div className={`truncate text-[0.82rem] font-semibold [transition:color_0.2s] ${active === i ? 'text-[var(--text)]' : 'text-[var(--text-2)]'}`}>
                      {item.company}
                    </div>
                    <div className="truncate text-[0.72rem] text-[var(--text-3)]">
                      {item.title}
                    </div>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-1">
                    <KindBadge kind={item.kind} label={t.experience.kinds[item.kind]} />
                    <div className={`text-[0.68rem] tabular-nums [transition:color_0.2s] ${active === i ? 'text-[var(--accent-light)]' : 'text-[var(--text-3)]'}`}>
                      {item.year}
                    </div>
                  </div>
                </div>
                {/* Active indicator bar */}
                {active === i && (
                  <div className="absolute top-0 bottom-0 left-0 w-[2px] rounded-l-[2px] bg-[linear-gradient(to_bottom,#7c3aed,#a78bfa)]" />
                )}
              </SpotlightCard>
            ))}
          </motion.div>

          {/* Right: detail panel */}
          <motion.div
            id="experience-detail"
            aria-live="polite"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <SpotlightCard
                  spotlightColor="rgba(139,92,246,0.5)"
                  intensity={0.1}
                  spotlightSize={380}
                  borderGlow={0.5}
                  className="p-8"
                  style={{
                    '--spotlight-card-surface': '#18181f',
                    '--spotlight-card-border': 'rgba(139,92,246,0.15)',
                  }}
                >
                  <div className="relative z-[2]">
                    {/* Title row */}
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div>
                        <div className="mb-[0.4rem] flex flex-wrap items-center gap-2">
                          <KindBadge kind={exp.kind} label={t.experience.kinds[exp.kind]} />
                          <p className="m-0 text-[0.68rem] font-semibold tracking-[0.15em] text-[var(--accent)] uppercase">
                            {exp.type === 'current' ? t.experience.current : exp.type === 'completed' ? t.experience.completed : t.experience.past}
                          </p>
                        </div>
                        <h3 className="m-0 font-display text-[clamp(1.1rem,2vw,1.5rem)] leading-[1.2] font-bold tracking-[-0.02em] text-[var(--text)]">
                          {exp.title}
                        </h3>
                        <p className="m-0 mt-1 text-[0.9rem] font-medium text-[var(--accent-light)]">
                          {exp.company}
                        </p>
                      </div>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex shrink-0 items-center gap-[0.3rem] rounded-lg border border-[var(--border-accent)] px-4 py-2 text-[0.78rem] font-medium text-[var(--accent-light)] no-underline [transition:all_0.2s] hover:bg-[rgba(139,92,246,0.1)]"
                        >
                          {t.experience.visit} <ArrowUpRight size={12} aria-hidden="true" />
                        </a>
                      )}
                    </div>

                    {/* Meta */}
                    <div className="mb-5 flex flex-wrap gap-6">
                      <div className="flex items-center gap-[0.4rem] text-[0.8rem] text-[var(--text-3)]">
                        <MapPin size={12} className="text-[var(--accent)]" aria-hidden="true" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-[0.4rem] text-[0.8rem] text-[var(--text-3)]">
                        <Calendar size={12} className="text-[var(--accent)]" aria-hidden="true" />
                        {exp.period}
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="mb-5 h-px bg-[var(--border)]" />

                    {/* Description */}
                    <p className="m-0 mb-6 text-[0.88rem] leading-[1.75] text-[var(--text-2)]">
                      {exp.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-[0.4rem]">
                      {exp.tech.map(tech => (
                        <span
                          key={tech}
                          className="rounded-full border border-[rgba(139,92,246,0.2)] bg-[rgba(139,92,246,0.08)] px-[0.65rem] py-1 text-[0.72rem] font-medium text-[var(--accent-light)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceHistory;
