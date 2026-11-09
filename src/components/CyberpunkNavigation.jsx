import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/useLanguage';

const NAV_ITEMS = [
  { id: 'home',       key: 'home' },
  { id: 'about',      key: 'about' },
  { id: 'skills',     key: 'skills' },
  { id: 'experience', key: 'experience' },
  { id: 'resume',     key: 'resume' },
  { id: 'works',      key: 'works' },
  { id: 'contact',    key: 'contact' },
];

const BottomNavigation = () => {
  const { lang, toggle, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      for (const item of NAV_ITEMS) {
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
          className="fixed top-[1.1rem] right-5 z-[200] flex size-[42px] cursor-pointer flex-col items-center justify-center gap-[5px] rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(17,17,24,0.9)] p-0 shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-[16px]"
        >
          <motion.span animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }}
            className="block h-[2px] w-[18px] rounded-[2px] bg-[#f4f4f8]" />
          <motion.span animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} transition={{ duration: 0.2 }}
            className="mr-1 block h-[2px] w-[14px] self-end rounded-[2px] bg-[#8888a8]" />
          <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }}
            className="block h-[2px] w-[18px] rounded-[2px] bg-[#f4f4f8]" />
        </motion.button>

        {/* Full-screen overlay menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[150] flex flex-col items-center justify-center gap-1 bg-[rgba(9,9,15,0.97)] backdrop-blur-[24px]"
            >
              {NAV_ITEMS.map((item, i) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: i * 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => scrollTo(item.id)}
                    className={`cursor-pointer rounded-xl border-none bg-none px-6 py-2 font-display text-[clamp(1.6rem,7vw,2.2rem)] font-bold tracking-[-0.02em] [transition:color_0.2s] ${
                      isActive ? 'text-[#a78bfa] opacity-100' : 'text-[#f4f4f8] opacity-70'
                    }`}
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
                transition={{ delay: NAV_ITEMS.length * 0.05 + 0.1 }}
                onClick={toggle}
                className="mt-6 cursor-pointer rounded-[10px] border border-[rgba(139,92,246,0.25)] bg-[rgba(139,92,246,0.12)] px-6 py-[0.6rem] text-[0.85rem] font-semibold tracking-[0.08em] text-[#a78bfa]"
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
        // No -translate-x-1/2: framer's y animation owns `transform`, so the nav has always rendered from left: 50%
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-5 left-1/2 z-[100] flex items-center gap-[2px] rounded-[14px] border border-[rgba(255,255,255,0.07)] bg-[rgba(17,17,24,0.85)] p-[5px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-[20px]"
        >
          {NAV_ITEMS.map(item => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative cursor-pointer rounded-[10px] border-none bg-none px-[0.9rem] py-[0.45rem] text-[0.8rem] whitespace-nowrap [transition:color_0.2s] ${
                  isActive ? 'font-semibold text-[#f4f4f8]' : 'font-normal text-[#8888a8]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-[10px] border border-[rgba(139,92,246,0.3)] bg-[rgba(139,92,246,0.18)]"
                    transition={{ type: 'spring', duration: 0.4, bounce: 0.2 }}
                  />
                )}
                <span className="relative z-[1]">{t.nav[item.key]}</span>
              </button>
            );
          })}

          <div className="mx-1 h-5 w-px bg-[rgba(255,255,255,0.08)]" />

          <button
            onClick={toggle}
            className="relative cursor-pointer rounded-[10px] border border-[rgba(139,92,246,0.2)] bg-[rgba(139,92,246,0.1)] px-3 py-[0.45rem] text-[0.72rem] font-semibold tracking-[0.05em] text-[#a78bfa] [transition:all_0.2s] hover:bg-[rgba(139,92,246,0.2)]"
          >
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default BottomNavigation;
