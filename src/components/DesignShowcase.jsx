import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const DESIGNS = [
  { id: 1, name: 'ElJamai Couture', category: 'E-Commerce',    img: 'https://res.cloudinary.com/decjm9mmr/image/upload/q_60,f_auto/d-clubArtboard_1_cjqxkq.png',         url: 'https://www.behance.net/mohamed_sekkar' },
  { id: 2, name: 'Wardd Studio',    category: 'Agency',        img: 'https://res.cloudinary.com/decjm9mmr/image/upload/q_60,f_auto/wardd_cover_two_u2j8hi_ahpexf.webp',  url: 'https://www.behance.net/mohamed_sekkar' },
  { id: 3, name: 'Stretched Web',   category: 'Landing',       img: 'https://res.cloudinary.com/decjm9mmr/image/upload/q_60,f_auto/Stretched_1_hjoiei.jpg',              url: 'https://www.behance.net/mohamed_sekkar' },
  { id: 4, name: 'Wardd Music',     category: 'Music',         img: 'https://res.cloudinary.com/decjm9mmr/image/upload/q_60,f_auto/wardd_music_02__xgryox.jpg',           url: 'https://www.behance.net/mohamed_sekkar' },
  { id: 5, name: 'CSBA Law Firm',   category: 'Legal',         img: 'https://res.cloudinary.com/decjm9mmr/image/upload/q_60,f_auto/lawyer_eto36c.webp',                  url: 'https://www.behance.net/mohamed_sekkar' },
  { id: 6, name: 'Smiley Dental',   category: 'Medical',       img: 'https://res.cloudinary.com/decjm9mmr/image/upload/q_60,f_auto/post_gyz5fk.png',                     url: 'https://www.behance.net/mohamed_sekkar' },
  { id: 7, name: 'Gourmet & Grove', category: 'Restaurant',    img: 'https://res.cloudinary.com/decjm9mmr/image/upload/q_60,f_auto/gg_u096hn.webp',                      url: 'https://www.behance.net/mohamed_sekkar' },
];

const ROW_2 = [...DESIGNS].reverse();

const Card = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        display: 'block',
        width: '300px',
        flexShrink: 0,
        borderRadius: '14px',
        overflow: 'hidden',
        border: `1px solid ${hovered ? 'rgba(139,92,246,0.4)' : 'rgba(255,255,255,0.06)'}`,
        textDecoration: 'none',
        transition: 'border-color 0.3s ease',
        userSelect: 'none',
      }}
    >
      <img
        src={item.img}
        alt={item.name}
        loading="lazy"
        draggable={false}
        style={{
          width: '100%',
          aspectRatio: '16 / 9',
          objectFit: 'cover',
          display: 'block',
          transform: hovered ? 'scale(1.07)' : 'scale(1)',
          transition: 'transform 0.5s ease',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(9,9,15,0.96) 0%, rgba(9,9,15,0.15) 55%, transparent 100%)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '1rem',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <p style={{
              margin: '0 0 0.25rem 0',
              fontSize: '0.6rem',
              color: 'var(--accent-light)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}>
              {item.category}
            </p>
            <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: 600, color: '#f4f4f8', lineHeight: 1.2 }}>
              {item.name}
            </p>
          </div>
          <div style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: 'rgba(139,92,246,0.22)',
            border: '1px solid rgba(139,92,246,0.45)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <ArrowUpRight size={14} color="var(--accent-light)" />
          </div>
        </div>
      </div>
    </a>
  );
};

const MarqueeRow = ({ items, direction, speed }) => {
  const [paused, setPaused] = useState(false);
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        overflow: 'hidden',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)',
        maskImage: 'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)',
        cursor: paused ? 'default' : 'default',
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        style={{
          display: 'flex',
          gap: '16px',
          width: 'max-content',
          animation: `${direction === 'left' ? 'marquee-left' : 'marquee-right'} ${speed}s linear infinite`,
          animationPlayState: paused ? 'paused' : 'running',
        }}
      >
        {doubled.map((item, i) => (
          <Card key={`${item.id}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const DesignShowcase = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="design"
      style={{
        backgroundColor: 'var(--surface)',
        padding: 'clamp(5rem, 10vw, 9rem) 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        style={{
          textAlign: 'center',
          marginBottom: '3.5rem',
          padding: '0 clamp(1.5rem, 6vw, 6rem)',
        }}
      >
        <motion.p variants={fadeUp} className="section-label" style={{ marginBottom: '1rem' }}>
          {t.design.label}
        </motion.p>
        <motion.h2
          variants={fadeUp}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            margin: '0 0 1rem 0',
          }}
        >
          {t.design.h2a}<span style={{ color: 'var(--accent-light)' }}>{t.design.h2b}</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          style={{
            color: 'var(--text-2)',
            fontSize: '0.95rem',
            maxWidth: '460px',
            margin: '0 auto',
            lineHeight: 1.65,
          }}
        >
          {t.design.sub}
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.25 }}
        style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
      >
        <MarqueeRow items={DESIGNS} direction="left"  speed={40} />
        <MarqueeRow items={ROW_2}   direction="right" speed={32} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.45 }}
        style={{ textAlign: 'center', marginTop: '3.5rem' }}
      >
        <a
          href="https://www.behance.net/mohamed_sekkar"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = 'rgba(139,92,246,0.12)';
            e.currentTarget.style.borderColor = 'rgba(139,92,246,0.55)';
            e.currentTarget.style.color = '#c4b5fd';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.borderColor = 'rgba(139,92,246,0.3)';
            e.currentTarget.style.color = 'var(--accent-light)';
          }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.6rem 1.5rem',
            borderRadius: '999px',
            border: '1px solid rgba(139,92,246,0.3)',
            backgroundColor: 'transparent',
            color: 'var(--accent-light)',
            fontSize: '0.875rem',
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'background-color 0.2s, border-color 0.2s, color 0.2s',
            fontFamily: 'inherit',
          }}
        >
          {t.design.cta}
          <ArrowUpRight size={15} />
        </a>
      </motion.div>
    </section>
  );
};

export default DesignShowcase;
