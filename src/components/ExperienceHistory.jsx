import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { MapPin, Calendar, ExternalLink, ArrowUpRight } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { useLanguage } from '../context/LanguageContext';


const statusDot = {
  current: '#22c55e',
  completed: '#8b5cf6',
  previous: '#4a4a6a',
  recent: '#8b5cf6',
};

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
      style={{
        backgroundColor: 'var(--surface)',
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 6vw, 6rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle ambient glow */}
      <div style={{
        position: 'absolute', top: '20%', right: '-10%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '3rem' }}
        >
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>{t.experience.label}</p>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            lineHeight: 1.1,
            margin: 0,
          }}>
            {t.experience.h2a}<br />
            <span style={{ color: 'var(--accent-light)' }}>{t.experience.h2b}</span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="exp-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(260px, 2fr) 3fr',
          gap: '1.5rem',
          alignItems: 'start',
        }}>
          {/* Left: job list */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}
          >
            {experiences.map((item, i) => (
              <SpotlightCard
                key={i}
                spotlightColor="rgba(139,92,246,0.7)"
                intensity={0.14}
                spotlightSize={220}
                borderGlow={active === i ? 0.9 : 0.4}
                style={{
                  cursor: 'pointer',
                  padding: '0.85rem 1rem',
                  transition: 'transform 0.15s ease',
                  '--spotlight-card-surface': active === i ? '#1a1a24' : '#111118',
                  '--spotlight-card-border': active === i ? 'rgba(139,92,246,0.25)' : 'rgba(255,255,255,0.05)',
                }}
                onClick={() => setActive(i)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', position: 'relative', zIndex: 2 }}>
                  {/* Status dot */}
                  <div style={{
                    width: '7px', height: '7px', borderRadius: '50%', flexShrink: 0,
                    backgroundColor: statusDot[item.type] || '#4a4a6a',
                    boxShadow: item.type === 'current' ? '0 0 6px #22c55e' : item.type === 'completed' ? '0 0 6px rgba(139,92,246,0.6)' : 'none',
                  }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontSize: '0.82rem', fontWeight: 600,
                      color: active === i ? 'var(--text)' : 'var(--text-2)',
                      whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                      transition: 'color 0.2s',
                    }}>
                      {item.company}
                    </div>
                    <div style={{
                      fontSize: '0.72rem', color: 'var(--text-3)',
                      whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                    }}>
                      {item.title}
                    </div>
                  </div>
                  <div style={{
                    fontSize: '0.68rem', color: active === i ? 'var(--accent-light)' : 'var(--text-3)',
                    fontVariantNumeric: 'tabular-nums', flexShrink: 0,
                    transition: 'color 0.2s',
                  }}>
                    {item.year}
                  </div>
                </div>
                {/* Active indicator bar */}
                {active === i && (
                  <div style={{
                    position: 'absolute', left: 0, top: 0, bottom: 0, width: '2px',
                    borderRadius: '2px 0 0 2px',
                    background: 'linear-gradient(to bottom, #7c3aed, #a78bfa)',
                  }} />
                )}
              </SpotlightCard>
            ))}
          </motion.div>

          {/* Right: detail panel */}
          <motion.div
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
                  style={{
                    padding: '2rem',
                    '--spotlight-card-surface': '#18181f',
                    '--spotlight-card-border': 'rgba(139,92,246,0.15)',
                  }}
                >
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    {/* Title row */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.25rem' }}>
                      <div>
                        <p style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 0.4rem 0' }}>
                          {exp.type === 'current' ? t.experience.current : exp.type === 'completed' ? t.experience.completed : t.experience.past}
                        </p>
                        <h3 style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                          fontWeight: 700, letterSpacing: '-0.02em',
                          color: 'var(--text)', margin: 0, lineHeight: 1.2,
                        }}>
                          {exp.title}
                        </h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--accent-light)', margin: '0.25rem 0 0 0', fontWeight: 500 }}>
                          {exp.company}
                        </p>
                      </div>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'flex', alignItems: 'center', gap: '0.3rem',
                            padding: '0.5rem 1rem',
                            borderRadius: '8px',
                            border: '1px solid var(--border-accent)',
                            color: 'var(--accent-light)',
                            fontSize: '0.78rem', fontWeight: 500,
                            textDecoration: 'none', flexShrink: 0,
                            transition: 'all 0.2s',
                          }}
                          onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(139,92,246,0.1)'; }}
                          onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                        >
                          {t.experience.visit} <ArrowUpRight size={12} />
                        </a>
                      )}
                    </div>

                    {/* Meta */}
                    <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-3)', fontSize: '0.8rem' }}>
                        <MapPin size={12} style={{ color: 'var(--accent)' }} />
                        {exp.location}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-3)', fontSize: '0.8rem' }}>
                        <Calendar size={12} style={{ color: 'var(--accent)' }} />
                        {exp.period}
                      </div>
                    </div>

                    {/* Divider */}
                    <div style={{ height: '1px', backgroundColor: 'var(--border)', marginBottom: '1.25rem' }} />

                    {/* Description */}
                    <p style={{ color: 'var(--text-2)', fontSize: '0.88rem', lineHeight: 1.75, margin: '0 0 1.5rem 0' }}>
                      {exp.description}
                    </p>

                    {/* Tech tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {exp.tech.map(tech => (
                        <span key={tech} style={{
                          padding: '0.25rem 0.65rem',
                          borderRadius: '999px',
                          fontSize: '0.72rem', fontWeight: 500,
                          color: 'var(--accent-light)',
                          backgroundColor: 'rgba(139,92,246,0.08)',
                          border: '1px solid rgba(139,92,246,0.2)',
                        }}>
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

        {/* Mobile: stacked list */}
        <style>{`
          @media (max-width: 700px) {
            #experience .exp-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </motion.div>
    </section>
  );
};

export default ExperienceHistory;
