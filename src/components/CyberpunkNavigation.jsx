import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const BottomNavigation = () => {
  const { lang, toggle, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      let current = 'home';
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) current = item.id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      if (id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
      else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }, menuOpen ? 300 : 0);
  };

  if (isMobile) {
    return (
      <>
        {/* Burger button — always visible on mobile */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          style={{
            position: 'fixed',
            top: '1.1rem',
            right: '1.25rem',
            zIndex: 200,
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            backgroundColor: 'rgba(17,17,24,0.9)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
            cursor: 'pointer',
            padding: 0,
            boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
          }}
        >
          <motion.span animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }}
            style={{ display: 'block', width: '18px', height: '2px', borderRadius: '2px', backgroundColor: '#f4f4f8' }} />
          <motion.span animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} transition={{ duration: 0.2 }}
            style={{ display: 'block', width: '14px', height: '2px', borderRadius: '2px', backgroundColor: '#8888a8', alignSelf: 'flex-end', marginRight: '4px' }} />
          <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }}
            style={{ display: 'block', width: '18px', height: '2px', borderRadius: '2px', backgroundColor: '#f4f4f8' }} />
        </motion.button>

        {/* Full-screen overlay menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 150,
                backgroundColor: 'rgba(9,9,15,0.97)',
                backdropFilter: 'blur(24px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.25rem',
              }}
            >
              {navItems.map((item, i) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: i * 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => scrollTo(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: 'clamp(1.6rem, 7vw, 2.2rem)',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      color: isActive ? '#a78bfa' : '#f4f4f8',
                      padding: '0.5rem 1.5rem',
                      borderRadius: '12px',
                      transition: 'color 0.2s',
                      opacity: isActive ? 1 : 0.7,
                    }}
                  >
                    {t.nav[item.key]}
                  </motion.button>
                );
              })}

              {/* Language toggle */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: navItems.length * 0.05 + 0.1 }}
                onClick={toggle}
                style={{
                  marginTop: '1.5rem',
                  padding: '0.6rem 1.5rem',
                  borderRadius: '10px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#a78bfa',
                  background: 'rgba(139,92,246,0.12)',
                  border: '1px solid rgba(139,92,246,0.25)',
                  cursor: 'pointer',
                  letterSpacing: '0.08em',
                }}
              >
                {lang === 'fr' ? 'EN' : 'FR'}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  return (
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

          <div style={{ width: '1px', height: '20px', backgroundColor: 'rgba(255,255,255,0.08)', margin: '0 4px' }} />

          <button
            onClick={toggle}
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
  );
};

export default BottomNavigation;
