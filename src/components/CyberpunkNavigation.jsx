import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const BottomNavigation = () => {
  const { lang, toggle, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home',       key: 'home' },
    { id: 'about',      key: 'about' },
    { id: 'skills',     key: 'skills' },
    { id: 'experience', key: 'experience' },
    { id: 'resume',     key: 'resume' },
    { id: 'works',      key: 'works' },
    { id: 'contact',    key: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = navItems.map(item => item.id);
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    if (id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
    else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(id);
  };

  return (
    <>
      <AnimatePresence>
        {scrolled && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              top: '1.25rem',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 100,
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
              padding: '5px',
              borderRadius: '14px',
              backgroundColor: 'rgba(17,17,24,0.85)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.07)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            }}
          >
            {navItems.map(item => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  style={{
                    position: 'relative',
                    padding: '0.45rem 0.9rem',
                    borderRadius: '10px',
                    fontSize: '0.8rem',
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? '#f4f4f8' : '#8888a8',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      style={{
                        position: 'absolute', inset: 0, borderRadius: '10px',
                        backgroundColor: 'rgba(139,92,246,0.18)',
                        border: '1px solid rgba(139,92,246,0.3)',
                      }}
                      transition={{ type: 'spring', duration: 0.4, bounce: 0.2 }}
                    />
                  )}
                  <span style={{ position: 'relative', zIndex: 1 }}>{t.nav[item.key]}</span>
                </button>
              );
            })}

            {/* Divider */}
            <div style={{ width: '1px', height: '20px', backgroundColor: 'rgba(255,255,255,0.08)', margin: '0 4px' }} />

            {/* Language toggle */}
            <button
              onClick={toggle}
              title={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
              style={{
                position: 'relative',
                padding: '0.45rem 0.75rem',
                borderRadius: '10px',
                fontSize: '0.72rem',
                fontWeight: 600,
                color: '#a78bfa',
                background: 'rgba(139,92,246,0.1)',
                border: '1px solid rgba(139,92,246,0.2)',
                cursor: 'pointer',
                letterSpacing: '0.05em',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(139,92,246,0.2)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(139,92,246,0.1)'; }}
            >
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default BottomNavigation;
