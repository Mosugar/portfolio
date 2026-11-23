import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import { useLanguage } from '../context/useLanguage';
import FeaturedProjectCard from './FeaturedProjectCard';
import OtherProjects from './OtherProjects';

const featured = projects.filter((p) => p.featured);
const others = projects.filter((p) => !p.featured);

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const Works = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="works"
      ref={ref}
      className="relative overflow-hidden bg-[var(--bg)] px-[clamp(1.5rem,6vw,6rem)] py-[clamp(5rem,10vw,9rem)]"
    >
      {/* Giant background word */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[12%] left-1/2 z-0 -translate-x-1/2 font-display text-[clamp(6rem,18vw,18rem)] font-bold tracking-[-0.04em] whitespace-nowrap text-transparent select-none [-webkit-text-stroke:1px_rgba(139,92,246,0.05)]"
      >
        WORKS
      </div>

      <motion.div
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="relative z-[1] mx-auto max-w-[1200px]"
      >
        {/* Header */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <motion.p variants={fadeUp} className="section-label mb-3">
              {t.works.label}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="m-0 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.1] font-bold tracking-[-0.02em] text-[var(--text)]"
            >
              {t.works.h2a}<br />
              <span className="text-[var(--accent-light)]">{t.works.h2b}</span>
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            className="m-0 text-[0.78rem] tracking-[0.12em] text-[var(--text-3)] uppercase"
          >
            {t.works.count.replace('{n}', projects.length)}
          </motion.p>
        </div>

        {/* Featured projects */}
        <ul className="m-0 grid list-none gap-6 p-0 md:grid-cols-2">
          {featured.map((project, i) => {
            // An odd last card takes the whole row instead of leaving a gap next to it
            const wide = featured.length % 2 === 1 && i === featured.length - 1;
            return (
              <motion.li key={project.slug} variants={fadeUp} className={wide ? 'md:col-span-2' : ''}>
                <FeaturedProjectCard project={project} wide={wide} />
              </motion.li>
            );
          })}
        </ul>

        {/* Other projects */}
        <motion.div variants={fadeUp} className="mt-16">
          <h3 className="section-label m-0 mb-2">{t.works.others}</h3>
          <OtherProjects projects={others} />
        </motion.div>

        {/* Design work lives on Behance — no duplicated screenshots here */}
        <motion.div variants={fadeUp} className="mt-12 text-center">
          <a
            href="https://www.behance.net/mohamed_sekkar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(139,92,246,0.3)] px-6 py-2.5 text-sm font-medium text-[var(--accent-light)] no-underline transition-colors hover:border-[rgba(139,92,246,0.55)] hover:bg-[rgba(139,92,246,0.12)] hover:text-[#c4b5fd]"
          >
            {t.works.behance}
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Works;
