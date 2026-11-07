import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import CircularCarousel from './CircularCarousel';
import { useLanguage } from '../context/LanguageContext';

const projects = [
  {
    id: 1,
    name: 'ScoreLift',
    src: '/images/scorelift.png',
    alt: 'ScoreLift sports community app',
    title: 'ScoreLift',
    subtitle: 'Mobile App · React Native',
    url: 'https://scorelift.fr/',
  },
  {
    id: 2,
    name: 'TL Global',
    src: 'https://res.cloudinary.com/dylpck2et/image/upload/v1752879892/TL_GLOBAL_lxew7e.jpg',
    alt: 'TL Global website',
    title: 'TL Global',
    subtitle: 'Web · React',
    url: 'https://toufaiq.vercel.app/',
  },
  {
    id: 3,
    name: 'ElJamai Couture',
    src: 'https://res.cloudinary.com/decjm9mmr/image/upload/q_80,f_auto/d-clubArtboard_1_cjqxkq.png',
    alt: 'ElJamai Couture fashion e-commerce',
    title: 'ElJamai Couture',
    subtitle: 'E-Commerce · Laravel',
    url: 'https://eljamaicouture.ae',
  },
  {
    id: 4,
    name: 'Wardd Studio',
    src: 'https://res.cloudinary.com/decjm9mmr/image/upload/q_80,f_auto/wardd_cover_two_u2j8hi_ahpexf.webp',
    alt: 'Wardd Studio creative agency',
    title: 'Wardd Studio',
    subtitle: 'Agency · Full-Stack',
    url: 'https://warddstudio.ma/',
  },
  {
    id: 5,
    name: 'Stretched Web',
    src: 'https://res.cloudinary.com/decjm9mmr/image/upload/q_80,f_auto/Stretched_1_hjoiei.jpg',
    alt: 'Stretched Web landing page',
    title: 'Stretched Web',
    subtitle: 'Landing · React',
    url: 'https://stretched-web.vercel.app',
  },
  {
    id: 6,
    name: 'Wardd Music',
    src: 'https://res.cloudinary.com/decjm9mmr/image/upload/q_80,f_auto/wardd_music_02__xgryox.jpg',
    alt: 'Wardd Music platform',
    title: 'Wardd Music',
    subtitle: 'Music · Full-Stack',
    url: 'https://warddstudio.ma/',
  },
  {
    id: 7,
    name: 'CSBA Law Firm',
    src: 'https://res.cloudinary.com/decjm9mmr/image/upload/q_80,f_auto/lawyer_eto36c.webp',
    alt: 'CSBA Law Firm website',
    title: 'CSBA Law Firm',
    subtitle: 'Legal · React',
    url: 'https://lawyer-sulaiman.vercel.app/',
  },
  {
    id: 8,
    name: 'Pristine Dental',
    src: 'https://res.cloudinary.com/decjm9mmr/image/upload/q_80,f_auto/pristine_dental_screenshot.png',
    alt: 'Pristine Dental Center website',
    title: 'Pristine Dental',
    subtitle: 'Medical · React',
    url: 'https://pristinedentalcenter.vercel.app/',
  },
  {
    id: 9,
    name: 'Gourmet & Grove',
    src: 'https://res.cloudinary.com/decjm9mmr/image/upload/q_80,f_auto/gg_u096hn.webp',
    alt: 'Gourmet and Grove restaurant website',
    title: 'Gourmet & Grove',
    subtitle: 'Restaurant · React',
    url: 'https://gourmet-grove.vercel.app/',
  },
  {
    id: 10,
    name: 'Recur',
    src: 'https://opengraph.githubassets.com/1/Mosugar/recur',
    alt: 'Recur subscription tracker app',
    title: 'Recur',
    subtitle: 'Mobile · Expo · React Native',
    url: 'https://github.com/Mosugar/recur',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const MobileGrid = ({ items }) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
    {items.map(item => (
      <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer"
        style={{ position: 'relative', display: 'block', borderRadius: '12px', overflow: 'hidden', aspectRatio: '4/3', textDecoration: 'none', backgroundColor: '#0a0a14' }}
      >
        <img src={item.src} alt={item.alt} style={{ width: '100%', height: '100%', objectFit: 'contain' }} loading="lazy" />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(9,9,15,0.9) 0%, transparent 55%)',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0.6rem',
        }}>
          <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: 600, lineHeight: 1.2 }}>{item.title}</span>
          <span style={{ color: 'rgba(167,139,250,0.9)', fontSize: '0.62rem', marginTop: '2px' }}>{item.subtitle}</span>
        </div>
      </a>
    ))}
  </div>
);

const Works = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleItemClick = (item) => {
    if (item.url) window.open(item.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="works"
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
        fontSize: 'clamp(6rem, 18vw, 18rem)',
        fontWeight: 700,
        letterSpacing: '-0.04em',
        color: 'transparent',
        WebkitTextStroke: '1px rgba(139,92,246,0.05)',
        userSelect: 'none',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        zIndex: 0,
      }}>
        WORKS
      </div>

      <motion.div
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <motion.p variants={fadeUp} className="section-label" style={{ marginBottom: '0.75rem' }}>
              {t.works.label}
            </motion.p>
            <motion.h2
              variants={fadeUp}
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
              {t.works.h2a}<br />
              <span style={{ color: 'var(--accent-light)' }}>{t.works.h2b}</span>
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            style={{ color: 'var(--text-2)', fontSize: '0.85rem', maxWidth: '260px', lineHeight: 1.6, margin: 0 }}
          >
            {t.works.hint}
          </motion.p>
        </div>

        {/* Carousel / Mobile Grid */}
        <motion.div variants={fadeUp} style={{ borderRadius: '20px', overflow: 'hidden', height: isMobile ? 'auto' : '580px' }}>
          {isMobile ? (
            <MobileGrid items={projects} />
          ) : (
            <CircularCarousel
              items={projects}
              preset="cylinder"
              cardWidth={260}
              aspectRatio={1.45}
              gap={20}
              speed={10}
              autoplay="drift"
              direction="left"
              captions={true}
              depthFade={0.6}
              fadeColor="#09090f"
              innerShade={0.5}
              cornerRadius={14}
              parallax={0.25}
              stretch={0.4}
              onItemClick={handleItemClick}
            />
          )}
        </motion.div>

        {/* Count */}
        <motion.p
          variants={fadeUp}
          style={{
            textAlign: 'center',
            color: 'var(--text-3)',
            fontSize: '0.78rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginTop: '1.5rem',
          }}
        >
          {t.works.count.replace('{n}', projects.length)}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Works;
