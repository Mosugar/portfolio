import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';
import { projectCount, sectorCount } from '../data/stats';

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
      className="relative overflow-hidden bg-[var(--surface)] px-[clamp(1.5rem,6vw,6rem)] py-[clamp(5rem,10vw,9rem)]"
    >
      {/* SVG dot-grid background */}
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-[0.18]">
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
        className="relative z-[1] mx-auto max-w-[1100px]"
      >
        {/* Label */}
        <motion.p variants={fadeUp} className="section-label mb-4">
          {t.about.label}
        </motion.p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-16">
          {/* Left: photo + info */}
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            {/* Photo */}
            <div className="relative w-full max-w-[340px]">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--border)]">
                <img
                  src="https://res.cloudinary.com/dylpck2et/image/upload/v1752367825/sugar_copy_2_tdpniz.jpg"
                  alt="Mohamed Sekkar"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            {/* Meta info */}
            <div className="flex flex-col gap-[0.6rem]">
              <div className="flex items-center gap-2 text-[0.9rem] text-[var(--text-2)]">
                <MapPin size={14} className="text-[var(--accent)]" aria-hidden="true" />
                {t.about.location}
              </div>
              <div className="flex items-center gap-2 text-[0.9rem] text-[var(--text-2)]">
                <span aria-hidden="true" className="text-[14px] text-[var(--accent)]">✦</span>
                {t.about.age}
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
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
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-[10px] border border-[var(--border)] text-[var(--text-2)] no-underline [transition:all_0.2s] hover:border-[var(--border-accent)] hover:text-[var(--accent-light)]"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div variants={fadeUp} className="flex flex-col gap-8">
            <h2 className="m-0 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.1] font-bold tracking-[-0.02em] text-[var(--text)]">
              {t.about.h2a}<br />
              <span className="text-[var(--accent-light)]">{t.about.h2b}</span>
            </h2>

            <div className="flex flex-col gap-4 text-[1rem] leading-[1.75] text-[var(--text-2)]">
              <p className="m-0" dangerouslySetInnerHTML={{ __html: t.about.p1 }} />
              <p className="m-0" dangerouslySetInnerHTML={{ __html: t.about.p2 }} />
              <p className="m-0" dangerouslySetInnerHTML={{ __html: t.about.p3 }} />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-[repeat(3,1fr)] gap-4">
              {[
                { value: '3+', label: t.about.stat1 },
                { value: String(projectCount), label: t.about.stat2 },
                { value: String(sectorCount), label: t.about.stat3 },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface-2)] p-4"
                >
                  <div className="font-display text-[1.75rem] leading-none font-bold text-[var(--accent-light)]">{value}</div>
                  <div className="mt-[0.3rem] text-[0.78rem] text-[var(--text-3)]">{label}</div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
