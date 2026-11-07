import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        backgroundColor: 'var(--surface)',
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 6vw, 6rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* SVG dot-grid background */}
      <svg
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.18,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <defs>
          <pattern id="about-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(139,92,246,0.6)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#about-dots)" />
      </svg>
      <motion.div
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}
      >
        {/* Label */}
        <motion.p variants={fadeUp} className="section-label" style={{ marginBottom: '1rem' }}>
          {t.about.label}
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          {/* Left: photo + info */}
          <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Photo */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '340px' }}>
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  aspectRatio: '4/5',
                  border: '1px solid var(--border)',
                }}
              >
                <img
                  src="https://res.cloudinary.com/dylpck2et/image/upload/v1752367825/sugar_copy_2_tdpniz.jpg"
                  alt="Mohamed Sekkar"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
              {/* Status dot */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  right: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(9,9,15,0.85)',
                  border: '1px solid rgba(34,197,94,0.3)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#22c55e', boxShadow: '0 0 8px #22c55e', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                <span style={{ fontSize: '0.7rem', color: '#86efac', fontWeight: 500 }}>{t.about.available}</span>
              </div>
            </div>

            {/* Meta info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-2)', fontSize: '0.9rem' }}>
                <MapPin size={14} style={{ color: 'var(--accent)' }} />
                {t.about.location}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-2)', fontSize: '0.9rem' }}>
                <span style={{ fontSize: '14px', color: 'var(--accent)' }}>✦</span>
                {t.about.age}
              </div>
            </div>

            {/* Social */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { href: 'https://github.com/Mosugar', icon: Github, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/mohamedsekkar/', icon: Linkedin, label: 'LinkedIn' },
                { href: 'mailto:mohamedsekkar1110@gmail.com', icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  title={label}
                  style={{
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '10px',
                    border: '1px solid var(--border)',
                    color: 'var(--text-2)',
                    transition: 'all 0.2s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-accent)'; e.currentTarget.style.color = 'var(--accent-light)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-2)'; }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'var(--text)',
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              {t.about.h2a}<br />
              <span style={{ color: 'var(--accent-light)' }}>{t.about.h2b}</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-2)', fontSize: '1rem', lineHeight: 1.75 }}>
              <p style={{ margin: 0 }} dangerouslySetInnerHTML={{ __html: t.about.p1 }} />
              <p style={{ margin: 0 }} dangerouslySetInnerHTML={{ __html: t.about.p2 }} />
              <p style={{ margin: 0 }} dangerouslySetInnerHTML={{ __html: t.about.p3 }} />
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              {[
                { value: '3+', label: t.about.stat1 },
                { value: '8+', label: t.about.stat2 },
                { value: '3', label: t.about.stat3 },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  style={{
                    padding: '1rem',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    backgroundColor: 'var(--surface-2)',
                  }}
                >
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.75rem', fontWeight: 700, color: 'var(--accent-light)', lineHeight: 1 }}>{value}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-3)', marginTop: '0.3rem' }}>{label}</div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.4); }
        }
      `}</style>
    </section>
  );
};

export default About;
