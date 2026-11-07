import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ProfileCard from './ProfileCard';

const RESUME_URL = '/mohamed-sekkar-cv-resume.pdf';

const Resume = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="resume"
      ref={ref}
      style={{
        backgroundColor: 'var(--bg)',
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 6vw, 6rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Giant background word */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: 'clamp(8rem, 22vw, 22rem)',
        fontWeight: 700,
        letterSpacing: '-0.04em',
        color: 'transparent',
        WebkitTextStroke: '1px rgba(139,92,246,0.07)',
        userSelect: 'none',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        zIndex: 0,
      }}>
        RESUME
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}
      >
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label" style={{ marginBottom: '1rem' }}>{t.resume.label}</p>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: 'var(--text)',
            lineHeight: 1.05,
            margin: '0 0 1.5rem 0',
          }}>
            {t.resume.h2a}<br />
            <span style={{ color: 'var(--accent-light)' }}>{t.resume.h2b}</span>
          </h2>
          <p style={{ color: 'var(--text-2)', lineHeight: 1.75, fontSize: '0.95rem', maxWidth: '340px', marginBottom: '2.5rem' }}>
            {t.resume.tagline}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a
              href={RESUME_URL}
              download="Mohamed-Sekkar-CV.pdf"
              className="btn-electric"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 1.75rem',
                borderRadius: '10px',
                fontWeight: 600,
                fontSize: '0.9rem',
                color: 'var(--text)',
                textDecoration: 'none',
                width: 'fit-content',
              }}
            >
              <FileDown size={15} />
              {t.resume.download}
            </a>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-3)', margin: 0 }}>
              {t.resume.available}
            </p>
          </div>
        </motion.div>

        {/* Right: Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <ProfileCard
            avatarUrl="https://res.cloudinary.com/dylpck2et/image/upload/v1752367825/sugar_copy_2_tdpniz.jpg"
            name="Mohamed Sekkar"
            title={t.resume.role}
            handle=""
            status=""
            statusColor="#22c55e"
            contactText={t.resume.viewResume}
            theme="dark"
            holo={0.7}
            glare={0.5}
            enableTilt={true}
            tiltStrength={12}
            parallax={8}
            radius={16}
            intro={true}
            onContactClick={() => window.open(RESUME_URL, '_blank')}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Resume;
