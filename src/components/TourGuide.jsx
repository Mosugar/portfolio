import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/useLanguage';
import { projectCount, toolCount } from '../data/stats';

const TOUR_SECTIONS = [null, 'home', 'about', 'skills', 'experience', 'resume', 'works', 'contact'];

const SugarBot = ({ blinking, talking, sleeping }) => (
  <svg
    aria-hidden="true"
    width="96"
    height="120"
    viewBox="0 0 64 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="block [filter:drop-shadow(0_4px_16px_rgba(139,92,246,0.4))]"
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
        <circle cx="22" cy="31" r="3.5" fill="white" className={blinking ? 'opacity-0' : ''} />
        <circle cx="23.5" cy="29.5" r="1.5" fill="#18181f" className={blinking ? 'opacity-0' : ''} />
        <circle cx="24.5" cy="28.5" r="0.8" fill="white" className={blinking ? 'opacity-0' : 'opacity-80'} />

        <ellipse cx="42" cy="31" rx="6" ry={blinking ? 1 : 6} fill="#111118" />
        <circle cx="42" cy="31" r="3.5" fill="white" className={blinking ? 'opacity-0' : ''} />
        <circle cx="43.5" cy="29.5" r="1.5" fill="#18181f" className={blinking ? 'opacity-0' : ''} />
        <circle cx="44.5" cy="28.5" r="0.8" fill="white" className={blinking ? 'opacity-0' : 'opacity-80'} />
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

const primaryBtn =
  'flex-1 cursor-pointer rounded-lg border-none bg-[linear-gradient(135deg,#7c3aed,#8b5cf6)] px-3 py-[0.45rem] text-[0.78rem] font-semibold text-white';
const ghostBtn =
  'cursor-pointer rounded-lg border border-[var(--border)] bg-transparent py-[0.45rem] text-[0.78rem] text-[var(--text-3)]';
const cursorBlink = 'text-[#8b5cf6]';

const TourGuide = () => {
  const { t } = useLanguage();
  const TOUR_STEPS = useMemo(
    () => t.tour.steps.map((step, i) => ({
      ...step,
      text: step.text.replace('{projects}', projectCount).replace('{tools}', toolCount),
      section: TOUR_SECTIONS[i],
    })),
    [t]
  );

  const [step, setStep]               = useState(0);
  const [visible, setVisible]         = useState(false);
  const [dismissed, setDismissed]     = useState(false);
  const [tourStarted, setTourStarted] = useState(false);
  const [blinking, setBlinking]       = useState(false);
  const [talking, setTalking]         = useState(false);
  const [sleeping, setSleeping]       = useState(false);
  const [reaction, setReaction]       = useState(null);
  const [easterEggText, setEasterEggText] = useState(null);

  const [typedTitle, setTypedTitle] = useState('');
  const [typedText,  setTypedText]  = useState('');

  const blinkTimerRef    = useRef(null);
  const typeTimerRef     = useRef(null);
  const idleTimerRef     = useRef(null);
  const clickCountRef    = useRef(0);
  const clickTimerRef    = useRef(null);
  const reactedSections  = useRef(new Set());
  const overrideTimerRef = useRef(null);

  // The bubble only opens when the visitor clicks Sugar; the bot itself stays alive (blinks, naps)
  useEffect(() => {
    if (dismissed || sleeping) return;
    const schedule = () => {
      blinkTimerRef.current = setTimeout(() => {
        setBlinking(true);
        setTimeout(() => { setBlinking(false); schedule(); }, 200);
      }, 2200 + Math.random() * 3500);
    };
    schedule();
    return () => clearTimeout(blinkTimerRef.current);
  }, [dismissed, sleeping]);

  const resetIdleTimer = () => {
    clearTimeout(idleTimerRef.current);
    setSleeping(false);
    idleTimerRef.current = setTimeout(() => setSleeping(true), 20000);
  };

  useEffect(() => {
    if (dismissed) return;
    resetIdleTimer();
    return () => clearTimeout(idleTimerRef.current);
  }, [dismissed]);

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
  }, [step, visible, dismissed, easterEggText, reaction, TOUR_STEPS]);

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

  const handleBotClick = () => {
    if (dismissed) return;

    if (sleeping) {
      resetIdleTimer();
      return;
    }

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
    <div className="pointer-events-none fixed right-6 bottom-6 z-[999] flex flex-col items-end gap-3">
      {/* Speech bubble */}
      <AnimatePresence mode="wait">
        {bubbleVisible && (
          <motion.div
            key={bubbleMode === 'easter' ? `easter` : bubbleMode === 'reaction' ? `react-${reaction}` : `tour-${step}`}
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className={`pointer-events-auto relative max-w-[290px] rounded-2xl border bg-[rgba(18,18,28,0.28)] px-[1.4rem] py-[1.1rem] shadow-[0_8px_32px_rgba(0,0,0,0.35),0_0_0_1px_rgba(139,92,246,0.08)] backdrop-blur-[16px] backdrop-saturate-[1.4] ${
              isAngry ? 'border-[rgba(248,113,113,0.35)]' : 'border-[rgba(139,92,246,0.3)]'
            }`}
          >
            {/* Tail */}
            <div className={`absolute right-7 -bottom-2 h-0 w-0 border-x-8 border-t-8 border-x-transparent ${isAngry ? 'border-t-[rgba(248,113,113,0.35)]' : 'border-t-[rgba(139,92,246,0.3)]'}`} />
            <div className="absolute right-[29px] bottom-[-6px] h-0 w-0 border-x-[7px] border-t-[7px] border-x-transparent border-t-[rgba(18,18,28,0.28)]" />

            {/* ── Easter egg ── */}
            {bubbleMode === 'easter' && (
              <motion.p
                initial={{ scale: 0.9 }}
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 0.4 }}
                className="m-0 font-display text-[0.9rem] leading-[1.5] font-bold text-[#f87171]"
              >
                {easterEggText}
              </motion.p>
            )}

            {/* ── Section reaction ── */}
            {bubbleMode === 'reaction' && (
              <>
                <p className="m-0 mb-[0.3rem] font-display text-[0.72rem] font-semibold tracking-[0.08em] text-[#a78bfa] uppercase">Sugar</p>
                <p className="m-0 text-[0.88rem] leading-[1.6] text-[var(--text-2)]">
                  {reaction}
                </p>
              </>
            )}

            {/* ── Tour ── */}
            {bubbleMode === 'tour' && (
              <>
                {tourStarted && !currentStep.isIntro && (
                  <div className="mb-[0.6rem] flex gap-1">
                    {TOUR_STEPS.slice(1).map((_, i) => (
                      <div
                        key={i}
                        className={`size-[5px] rounded-full [transition:background-color_0.3s] ${
                          i < step ? 'bg-[#8b5cf6]' : i === step - 1 ? 'bg-[#a78bfa]' : 'bg-[rgba(139,92,246,0.2)]'
                        }`}
                      />
                    ))}
                  </div>
                )}

                <p className="m-0 mb-[0.3rem] min-h-[1.2em] font-display text-[0.82rem] font-bold tracking-[0.05em] text-[#a78bfa]">
                  {typedTitle}
                  {isTitleTyping && <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }} className={cursorBlink}>|</motion.span>}
                </p>

                <p className="m-0 mb-4 min-h-[1.4em] text-[0.88rem] leading-[1.6] text-[var(--text-2)]">
                  {typedText}
                  {isTextTyping && <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }} className={cursorBlink}>|</motion.span>}
                </p>

                <div className="flex items-center gap-2">
                  {currentStep.isIntro ? (
                    <>
                      <button onClick={handleStart} className={primaryBtn}>
                        {t.tour.takeTour}
                      </button>
                      <button onClick={handleDismiss} className={`${ghostBtn} px-3`}>
                        {t.tour.skip}
                      </button>
                    </>
                  ) : currentStep.isLast ? (
                    <button onClick={handleDismiss} className={primaryBtn}>
                      {t.tour.close}
                    </button>
                  ) : (
                    <>
                      <button onClick={handleNext} className={primaryBtn}>
                        {t.tour.next}
                      </button>
                      <button onClick={handleDismiss} aria-label={t.tour.skip} className={`${ghostBtn} px-[0.6rem]`}>
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
      <motion.button
        type="button"
        aria-label={t.a11y.tourBot}
        animate={sleeping ? { y: [0, -3, 0] } : { y: [0, -6, 0] }}
        transition={sleeping
          ? { duration: 4, repeat: Infinity, ease: 'easeInOut' }
          : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
        }
        className="pointer-events-auto block cursor-pointer border-none bg-transparent p-0"
        onClick={handleBotClick}
        title={sleeping ? 'Click to wake Sugar up' : undefined}
      >
        <SugarBot blinking={blinking} talking={talking} sleeping={sleeping} />
      </motion.button>
    </div>
  );
};

export default TourGuide;
