import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileDown } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';
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
      className="relative overflow-hidden bg-[var(--bg)] px-[clamp(1.5rem,6vw,6rem)] py-[clamp(5rem,10vw,9rem)]"
    >
      {/* Giant background word */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 font-display text-[clamp(8rem,22vw,22rem)] font-bold tracking-[-0.04em] whitespace-nowrap text-transparent select-none [-webkit-text-stroke:1px_rgba(139,92,246,0.07)]"
      >
        RESUME
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-[1] mx-auto grid max-w-[1100px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-16"
      >
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label mb-4">{t.resume.label}</p>
          <h2 className="m-0 mb-6 font-display text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.05] font-bold tracking-[-0.03em] text-[var(--text)]">
            {t.resume.h2a}<br />
            <span className="text-[var(--accent-light)]">{t.resume.h2b}</span>
          </h2>
          <p className="mb-10 max-w-[340px] text-[0.95rem] leading-[1.75] text-[var(--text-2)]">
            {t.resume.tagline}
          </p>

          <div className="flex flex-col gap-3">
            <a
              href={RESUME_URL}
              download="Mohamed-Sekkar-CV.pdf"
              className="btn-electric inline-flex w-fit items-center gap-2 rounded-[10px] px-7 py-[0.8rem] text-[0.9rem] font-semibold text-[var(--text)] no-underline"
            >
              <FileDown size={15} aria-hidden="true" />
              {t.resume.download}
            </a>
            <p className="m-0 text-[0.75rem] text-[var(--text-3)]">
              {t.resume.available}
            </p>
          </div>
        </motion.div>

        {/* Right: Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
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
