import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const TOUR_SECTIONS = [null, 'home', 'about', 'skills', 'experience', 'resume', 'works', 'contact'];

const SugarBot = ({ blinking, talking, sleeping }) => (
  <svg
    width="96"
    height="120"
    viewBox="0 0 64 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block', filter: 'drop-shadow(0 4px 16px rgba(139,92,246,0.4))' }}
  >
    {/* Antenna */}
    <line x1="32" y1="6" x2="32" y2="14" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" />
    <circle cx="32" cy="5" r="3.5" fill="#a78bfa">
      <animate attributeName="opacity" values="1;0.4;1" dur="1.8s" repeatCount="indefinite" />
    </circle>

    {/* Sleeping Zzz */}
    {sleeping && (
      <>
        <text x="46" y="13" fill="#8b5cf6" fontSize="4" fontWeight="bold" opacity="0.5">z</text>
        <text x="50" y="9"  fill="#8b5cf6" fontSize="5" fontWeight="bold" opacity="0.65">z</text>
        <text x="54" y="5"  fill="#a78bfa" fontSize="6.5" fontWeight="bold" opacity="0.85">z</text>
      </>
    )}

    {/* Head */}
    <rect x="10" y="14" width="44" height="34" rx="12" fill="#18181f" stroke="#8b5cf6" strokeWidth="1.5" />

    {/* Eyes */}
    {sleeping ? (
      <>
        <line x1="16" y1="31" x2="28" y2="31" stroke="rgba(255,255,255,0.4)" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="36" y1="31" x2="48" y2="31" stroke="rgba(255,255,255,0.4)" strokeWidth="2.2" strokeLinecap="round" />
      </>
    ) : (
      <>
        <ellipse cx="22" cy="31" rx="6" ry={blinking ? 1 : 6} fill="#111118" />
        <circle cx="22" cy="31" r="3.5" fill="white" style={{ opacity: blinking ? 0 : 1 }} />
        <circle cx="23.5" cy="29.5" r="1.5" fill="#18181f" style={{ opacity: blinking ? 0 : 1 }} />
        <circle cx="24.5" cy="28.5" r="0.8" fill="white" opacity="0.8" style={{ opacity: blinking ? 0 : 0.8 }} />

        <ellipse cx="42" cy="31" rx="6" ry={blinking ? 1 : 6} fill="#111118" />
        <circle cx="42" cy="31" r="3.5" fill="white" style={{ opacity: blinking ? 0 : 1 }} />
        <circle cx="43.5" cy="29.5" r="1.5" fill="#18181f" style={{ opacity: blinking ? 0 : 1 }} />
        <circle cx="44.5" cy="28.5" r="0.8" fill="white" opacity="0.8" style={{ opacity: blinking ? 0 : 0.8 }} />
      </>
    )}

    {/* Mouth */}
    {sleeping ? (
      <path d="M 27 42 Q 32 40 37 42" stroke="#8b5cf6" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.35" />
    ) : talking ? (
      <ellipse cx="32" cy="41" rx="5" ry="3" fill="#8b5cf6" opacity="0.9">
        <animate attributeName="ry" values="3;1.5;3" dur="0.3s" repeatCount="indefinite" />
      </ellipse>
    ) : (
      <path d="M 25 41 Q 32 46 39 41" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    )}

    {/* Body */}
    <rect x="16" y="50" width="32" height="22" rx="8" fill="#18181f" stroke="#8b5cf6" strokeWidth="1.5" />

    {/* Chest glow */}
    <rect x="24" y="55" width="16" height="10" rx="4" fill="rgba(139,92,246,0.15)" stroke="rgba(139,92,246,0.3)" strokeWidth="1" />
    <circle cx="32" cy="60" r="2.5" fill="#8b5cf6" opacity="0.7">
      <animate attributeName="opacity" values="0.7;0.3;0.7" dur={sleeping ? '4s' : '2s'} repeatCount="indefinite" />
    </circle>

    {/* Arms */}
    <rect x="4"  y="52" width="10" height="6" rx="3" fill="#18181f" stroke="#8b5cf6" strokeWidth="1.2" />
    <rect x="50" y="52" width="10" height="6" rx="3" fill="#18181f" stroke="#8b5cf6" strokeWidth="1.2" />

    {/* Feet */}
    <rect x="17" y="70" width="10" height="6" rx="3" fill="#18181f" stroke="#8b5cf6" strokeWidth="1.2" />
    <rect x="37" y="70" width="10" height="6" rx="3" fill="#18181f" stroke="#8b5cf6" strokeWidth="1.2" />
  </svg>
);

const TourGuide = () => {
  const { t } = useLanguage();
  const TOUR_STEPS = t.tour.steps.map((step, i) => ({
    ...step,
    section: TOUR_SECTIONS[i],
  }));

  const [step, setStep]               = useState(0);
  const [visible, setVisible]         = useState(false);
  const [dismissed, setDismissed]     = useState(false);
  const [tourStarted, setTourStarted] = useState(false);
  const [blinking, setBlinking]       = useState(false);
  const [talking, setTalking]         = useState(false);
  const [sleeping, setSleeping]       = useState(false);
  const [reaction, setReaction]       = useState(null);
  const [easterEggText, setEasterEggText] = useState(null);

  // Typewriter
  const [typedTitle, setTypedTitle] = useState('');
  const [typedText,  setTypedText]  = useState('');

  const blinkTimerRef    = useRef(null);
  const typeTimerRef     = useRef(null);
  const idleTimerRef     = useRef(null);
  const clickCountRef    = useRef(0);
  const clickTimerRef    = useRef(null);
  const reactedSections  = useRef(new Set());
  const overrideTimerRef = useRef(null);

  // ── Appear after 3.5s ──────────────────────────────────────────────────────
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 3500);
    return () => clearTimeout(t);
  }, []);

  // ── Random blink ───────────────────────────────────────────────────────────
  useEffect(() => {
    if (!visible || dismissed || sleeping) return;
    const schedule = () => {
      blinkTimerRef.current = setTimeout(() => {
        setBlinking(true);
        setTimeout(() => { setBlinking(false); schedule(); }, 200);
      }, 2200 + Math.random() * 3500);
    };
    schedule();
    return () => clearTimeout(blinkTimerRef.current);
  }, [visible, dismissed, sleeping]);

  // ── Idle timer → sleep after 20 s ─────────────────────────────────────────
  const resetIdleTimer = () => {
    clearTimeout(idleTimerRef.current);
    setSleeping(false);
    idleTimerRef.current = setTimeout(() => setSleeping(true), 20000);
  };

  useEffect(() => {
    if (!visible || dismissed) return;
    resetIdleTimer();
    return () => clearTimeout(idleTimerRef.current);
  }, [visible, dismissed]);

  // ── Section reactions (IntersectionObserver) ──────────────────────────────
  useEffect(() => {
    if (!visible || dismissed) return;
    const ids = ['about', 'skills', 'experience', 'resume', 'works', 'contact'];
    const observers = [];

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(([entry]) => {
        if (
          entry.isIntersecting &&
          !reactedSections.current.has(id) &&
          !tourStarted
        ) {
          reactedSections.current.add(id);
          const text = t.tour.sectionReactions?.[id];
          if (!text) return;
          setReaction(text);
          setVisible(true);
          clearTimeout(overrideTimerRef.current);
          overrideTimerRef.current = setTimeout(() => setReaction(null), 5000);
        }
      }, { threshold: 0.45 });
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, [visible, dismissed, tourStarted, t]);

  // ── Typewriter ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!visible || dismissed) return;
    if (easterEggText || reaction) return; // override is showing

    const currentStep = TOUR_STEPS[step];
    const titleFull = currentStep.title;
    const textFull  = currentStep.text;

    clearInterval(typeTimerRef.current);
    setTypedTitle('');
    setTypedText('');
    setTalking(true);

    let phase = 'title', i = 0;
    typeTimerRef.current = setInterval(() => {
      if (phase === 'title') {
        i++;
        setTypedTitle(titleFull.slice(0, i));
        if (i >= titleFull.length) { phase = 'text'; i = 0; }
      } else {
        i++;
        setTypedText(textFull.slice(0, i));
        if (i >= textFull.length) { clearInterval(typeTimerRef.current); setTalking(false); }
      }
    }, 22);

    return () => clearInterval(typeTimerRef.current);
  }, [step, visible, dismissed, easterEggText, reaction]);

  const currentStep = TOUR_STEPS[step];

  const scrollToSection = (sectionId) => {
    if (!sectionId) return;
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleStart = () => {
    setTourStarted(true);
    setStep(1);
    scrollToSection(TOUR_STEPS[1].section);
    resetIdleTimer();
  };

  const handleNext = () => {
    const next = step + 1;
    if (next < TOUR_STEPS.length) {
      setStep(next);
      scrollToSection(TOUR_STEPS[next].section);
      resetIdleTimer();
    }
  };

  const handleDismiss = () => {
    clearInterval(typeTimerRef.current);
    setDismissed(true);
    setVisible(false);
  };

  // ── Bot click: wake / easter egg / toggle ──────────────────────────────────
  const handleBotClick = () => {
    if (dismissed) return;

    // Wake up from sleep
    if (sleeping) {
      resetIdleTimer();
      return;
    }

    // Easter egg: 5 rapid clicks
    clickCountRef.current += 1;
    clearTimeout(clickTimerRef.current);
    clickTimerRef.current = setTimeout(() => { clickCountRef.current = 0; }, 2000);

    if (clickCountRef.current >= 5) {
      clickCountRef.current = 0;
      const msgs = t.tour.easterEgg;
      const msg  = msgs[Math.floor(Math.random() * msgs.length)];
      setEasterEggText(msg);
      setReaction(null);
      setVisible(true);
      clearTimeout(overrideTimerRef.current);
      overrideTimerRef.current = setTimeout(() => setEasterEggText(null), 4000);
      return;
    }

    setVisible(v => !v);
    resetIdleTimer();
  };

  if (dismissed) return null;

  const isTitleTyping = typedTitle.length < currentStep.title.length;
  const isTextTyping  = !isTitleTyping && typedText.length < currentStep.text.length;

  const bubbleVisible = easterEggText || reaction || visible;
  const bubbleMode    = easterEggText ? 'easter' : reaction ? 'reaction' : 'tour';
  const isAngry       = bubbleMode === 'easter';

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '0.75rem',
        pointerEvents: 'none',
      }}
    >
      {/* Speech bubble */}
      <AnimatePresence mode="wait">
        {bubbleVisible && (
          <motion.div
            key={bubbleMode === 'easter' ? `easter` : bubbleMode === 'reaction' ? `react-${reaction}` : `tour-${step}`}
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              pointerEvents: 'all',
              backgroundColor: '#18181f',
              border: `1px solid ${isAngry ? 'rgba(248,113,113,0.35)' : 'rgba(139,92,246,0.3)'}`,
              borderRadius: '16px',
              padding: '1.1rem 1.4rem',
              maxWidth: '290px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(139,92,246,0.1)',
              position: 'relative',
            }}
          >
            {/* Tail */}
            <div style={{ position: 'absolute', bottom: '-8px', right: '28px', width: 0, height: 0, borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderTop: `8px solid ${isAngry ? 'rgba(248,113,113,0.35)' : 'rgba(139,92,246,0.3)'}` }} />
            <div style={{ position: 'absolute', bottom: '-6px', right: '29px', width: 0, height: 0, borderLeft: '7px solid transparent', borderRight: '7px solid transparent', borderTop: '7px solid #18181f' }} />

            {/* ── Easter egg ── */}
            {bubbleMode === 'easter' && (
              <motion.p
                initial={{ scale: 0.9 }}
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 0.4 }}
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.9rem', fontWeight: 700, color: '#f87171', margin: 0, lineHeight: 1.5 }}
              >
                {easterEggText}
              </motion.p>
            )}

            {/* ── Section reaction ── */}
            {bubbleMode === 'reaction' && (
              <>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.72rem', fontWeight: 600, color: '#a78bfa', margin: '0 0 0.3rem 0', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Sugar</p>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-2)', margin: 0, lineHeight: 1.6 }}>
                  {reaction}
                </p>
              </>
            )}

            {/* ── Tour ── */}
            {bubbleMode === 'tour' && (
              <>
                {tourStarted && !currentStep.isIntro && (
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '0.6rem' }}>
                    {TOUR_STEPS.slice(1).map((_, i) => (
                      <div key={i} style={{
                        width: '5px', height: '5px', borderRadius: '50%',
                        backgroundColor: i < step ? '#8b5cf6' : i === step - 1 ? '#a78bfa' : 'rgba(139,92,246,0.2)',
                        transition: 'background-color 0.3s',
                      }} />
                    ))}
                  </div>
                )}

                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.82rem', fontWeight: 700, color: '#a78bfa', margin: '0 0 0.3rem 0', letterSpacing: '0.05em', minHeight: '1.2em' }}>
                  {typedTitle}
                  {isTitleTyping && <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ color: '#8b5cf6' }}>|</motion.span>}
                </p>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-2)', margin: '0 0 1rem 0', lineHeight: 1.6, minHeight: '1.4em' }}>
                  {typedText}
                  {isTextTyping && <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ color: '#8b5cf6' }}>|</motion.span>}
                </p>

                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  {currentStep.isIntro ? (
                    <>
                      <button onClick={handleStart} style={{ flex: 1, padding: '0.45rem 0.75rem', borderRadius: '8px', background: 'linear-gradient(135deg, #7c3aed, #8b5cf6)', border: 'none', color: '#fff', fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
                        {t.tour.takeTour}
                      </button>
                      <button onClick={handleDismiss} style={{ padding: '0.45rem 0.75rem', borderRadius: '8px', background: 'transparent', border: '1px solid var(--border)', color: 'var(--text-3)', fontSize: '0.78rem', cursor: 'pointer', fontFamily: 'inherit' }}>
                        {t.tour.skip}
                      </button>
                    </>
                  ) : currentStep.isLast ? (
                    <button onClick={handleDismiss} style={{ flex: 1, padding: '0.45rem 0.75rem', borderRadius: '8px', background: 'linear-gradient(135deg, #7c3aed, #8b5cf6)', border: 'none', color: '#fff', fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
                      {t.tour.close}
                    </button>
                  ) : (
                    <>
                      <button onClick={handleNext} style={{ flex: 1, padding: '0.45rem 0.75rem', borderRadius: '8px', background: 'linear-gradient(135deg, #7c3aed, #8b5cf6)', border: 'none', color: '#fff', fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
                        {t.tour.next}
                      </button>
                      <button onClick={handleDismiss} style={{ padding: '0.45rem 0.6rem', borderRadius: '8px', background: 'transparent', border: '1px solid var(--border)', color: 'var(--text-3)', fontSize: '0.78rem', cursor: 'pointer', fontFamily: 'inherit' }}>
                        ✕
                      </button>
                    </>
                  )}
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bot */}
      <motion.div
        animate={sleeping ? { y: [0, -3, 0] } : { y: [0, -6, 0] }}
        transition={sleeping
          ? { duration: 4, repeat: Infinity, ease: 'easeInOut' }
          : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
        }
        style={{ pointerEvents: 'all', cursor: 'pointer' }}
        onClick={handleBotClick}
        title={sleeping ? 'Click to wake Sugar up' : ''}
      >
        <SugarBot blinking={blinking} talking={talking} sleeping={sleeping} />
      </motion.div>
    </div>
  );
};

export default TourGuide;
