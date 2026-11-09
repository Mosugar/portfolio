import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/useLanguage';

const SEEN_KEY = 'sugar-intro-seen';

const SugarBig = ({ talking, blinking, waving }) => (
  <svg
    aria-hidden="true"
    width="180"
    height="225"
    viewBox="0 0 64 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="[filter:drop-shadow(0_12px_40px_rgba(139,92,246,0.55))]"
  >
    {/* Antenna */}
    <line x1="32" y1="6" x2="32" y2="14" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" />
    <circle cx="32" cy="5" r="3.5" fill="#a78bfa">
      <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
    </circle>

    {/* Head */}
    <rect x="10" y="14" width="44" height="34" rx="12" fill="#18181f" stroke="#8b5cf6" strokeWidth="1.5" />

    {/* Eyes */}
    <ellipse cx="22" cy="31" rx="6" ry={blinking ? 0.8 : 6} fill="#111118" />
    <circle cx="22" cy="31" r="3.5" fill="white" className={blinking ? 'opacity-0' : ''} />
    <circle cx="23.5" cy="29.5" r="1.5" fill="#18181f" className={blinking ? 'opacity-0' : ''} />
    <circle cx="24.5" cy="28.5" r="0.8" fill="white" className={blinking ? 'opacity-0' : 'opacity-80'} />

    <ellipse cx="42" cy="31" rx="6" ry={blinking ? 0.8 : 6} fill="#111118" />
    <circle cx="42" cy="31" r="3.5" fill="white" className={blinking ? 'opacity-0' : ''} />
    <circle cx="43.5" cy="29.5" r="1.5" fill="#18181f" className={blinking ? 'opacity-0' : ''} />
    <circle cx="44.5" cy="28.5" r="0.8" fill="white" className={blinking ? 'opacity-0' : 'opacity-80'} />

    {/* Mouth */}
    {talking ? (
      <ellipse cx="32" cy="41" rx="5" ry="3" fill="#8b5cf6" opacity="0.9">
        <animate attributeName="ry" values="3;1.2;3" dur="0.25s" repeatCount="indefinite" />
      </ellipse>
    ) : (
      <path d="M 25 41 Q 32 47 39 41" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    )}

    {/* Body */}
    <rect x="16" y="50" width="32" height="22" rx="8" fill="#18181f" stroke="#8b5cf6" strokeWidth="1.5" />

    {/* Chest glow */}
    <rect x="24" y="55" width="16" height="10" rx="4" fill="rgba(139,92,246,0.15)" stroke="rgba(139,92,246,0.3)" strokeWidth="1" />
    <circle cx="32" cy="60" r="2.5" fill="#8b5cf6">
      <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
      <animate attributeName="r" values="2.5;3.2;2.5" dur="2s" repeatCount="indefinite" />
    </circle>

    {/* Left arm — waves when waving=true */}
    <g className={`origin-[14px_55px] [transition:transform_0.3s_ease] ${waving ? '[transform:rotate(-40deg)]' : '[transform:rotate(0deg)]'}`}>
      <rect x="4" y="52" width="10" height="6" rx="3" fill="#18181f" stroke="#8b5cf6" strokeWidth="1.2" />
    </g>
    {/* Right arm */}
    <rect x="50" y="52" width="10" height="6" rx="3" fill="#18181f" stroke="#8b5cf6" strokeWidth="1.2" />

    {/* Feet */}
    <rect x="17" y="70" width="10" height="6" rx="3" fill="#18181f" stroke="#8b5cf6" strokeWidth="1.2" />
    <rect x="37" y="70" width="10" height="6" rx="3" fill="#18181f" stroke="#8b5cf6" strokeWidth="1.2" />
  </svg>
);

const Sparks = () => (
  <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2">
    {[...Array(6)].map((_, i) => {
      const angle = (i / 6) * 360;
      const dist = 55 + Math.random() * 25;
      const rad = (angle * Math.PI) / 180;
      return (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{ x: Math.cos(rad) * dist, y: Math.sin(rad) * dist - 20, opacity: 0, scale: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className={`absolute size-[6px] rounded-full ${i % 2 === 0 ? 'bg-[#a78bfa]' : 'bg-[#8b5cf6]'}`}
        />
      );
    })}
  </div>
);

const bubbleClass =
  'relative mb-7 w-[90vw] max-w-[340px] rounded-[20px] border border-[rgba(139,92,246,0.3)] bg-[#18181f] px-[1.6rem] py-[1.4rem] shadow-[0_12px_48px_rgba(0,0,0,0.6),0_0_0_1px_rgba(139,92,246,0.08)]';

// Two stacked CSS triangles: violet outline + surface fill
const BubbleTail = () => (
  <>
    <div className="absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[9px] border-t-[9px] border-x-transparent border-t-[rgba(139,92,246,0.3)]" />
    <div className="absolute bottom-[-6px] left-1/2 h-0 w-0 -translate-x-1/2 border-x-8 border-t-8 border-x-transparent border-t-[#18181f]" />
  </>
);

const primaryBtnClass =
  'cursor-pointer rounded-xl border-none bg-[linear-gradient(135deg,#7c3aed,#8b5cf6)] font-semibold text-white [transition:opacity_0.2s,translate_0.2s] hover:-translate-y-px hover:opacity-90';

const IntroAnimation = ({ onClose }) => {
  const { t, lang } = useLanguage();

  const [visible] = useState(() => {
    try { return !localStorage.getItem(SEEN_KEY); }
    catch { return true; } // storage blocked (private mode) — show the intro
  });

  const [landed, setLanded] = useState(false);
  const [showSparks, setShowSparks] = useState(false);
  const [phase, setPhase] = useState(null);
  const [_soundEnabled, setSoundEnabled] = useState(false);
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [talking, setTalking] = useState(false);
  const [blinking, setBlinking] = useState(false);
  const [waving, setWaving] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [gone, setGone] = useState(!visible);

  // Tell the app the overlay is gone (also on load when the intro was already seen)
  useEffect(() => {
    if (gone) onClose?.();
  }, [gone, onClose]);

  const landedRef = useRef(false);

  useEffect(() => {
    if (!visible || gone) return;
    let id;
    const scheduleBlink = () => {
      id = setTimeout(() => {
        setBlinking(true);
        setTimeout(() => { setBlinking(false); scheduleBlink(); }, 180);
      }, 2200 + Math.random() * 3000);
    };
    scheduleBlink();
    return () => clearTimeout(id);
  }, [visible, gone]);

  const cleanForSpeech = (str) =>
    str
      .replace(/[\u{1F000}-\u{1FFFF}\u{2600}-\u{27FF}\u{2300}-\u{23FF}\u{2B00}-\u{2BFF}]/gu, '')
      .replace(/[.!?…;:]/g, ' ')
      .replace(/→/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();

  const pickBestVoice = (voices, langPrefix) => {
    const pool = voices.filter(v => v.lang.startsWith(langPrefix));
    if (!pool.length) return null;
    return (
      pool.find(v => /neural|enhanced|premium|natural/i.test(v.name)) ||
      pool.find(v => !/compact/i.test(v.name)) ||
      pool[0]
    );
  };

  const sayIn = (text, langCode, voice, onEnd) => {
    const cleaned = cleanForSpeech(text);
    if (!cleaned) { if (onEnd) onEnd(); return; }
    const u = new SpeechSynthesisUtterance(cleaned);
    u.lang   = langCode;
    u.rate   = 0.92;
    u.pitch  = 1.08;
    u.volume = 1;
    if (voice) u.voice = voice;
    if (onEnd) u.onend = onEnd;
    window.speechSynthesis.speak(u);
  };

  const getTimedGreeting = () => {
    const h = new Date().getHours();
    if (h >= 5  && h < 12) return t.intro.greetingMorning;
    if (h >= 12 && h < 18) return t.intro.greetingAfternoon;
    if (h >= 18 && h < 22) return t.intro.greetingEvening;
    return t.intro.greetingNight;
  };

  const startTyping = (withSound) => {
    const line1Full = getTimedGreeting();
    const line2Full = t.intro.line2;

    setPhase('typing');
    setTalking(true);

    if (withSound && window.speechSynthesis) {
      window.speechSynthesis.cancel();

      const speak = () => {
        const voices   = window.speechSynthesis.getVoices();
        const frVoice  = pickBestVoice(voices, 'fr');
        const enVoice  = pickBestVoice(voices, 'en');

        if (lang === 'fr') {
          sayIn(line1Full, 'fr-FR', frVoice, () => {
            setTimeout(() => sayIn(line2Full, 'fr-FR', frVoice), 220);
          });
        } else {
          sayIn(line1Full, 'en-US', enVoice, () => {
            setTimeout(() => sayIn(line2Full, 'en-US', enVoice), 220);
          });
        }
      };

      if (window.speechSynthesis.getVoices().length > 0) {
        speak();
      } else {
        window.speechSynthesis.onvoiceschanged = () => { speak(); window.speechSynthesis.onvoiceschanged = null; };
      }
    }

    let i = 0;
    const interval1 = setInterval(() => {
      i++;
      setLine1(line1Full.slice(0, i));
      if (i >= line1Full.length) {
        clearInterval(interval1);
        setTimeout(() => {
          let j = 0;
          const interval2 = setInterval(() => {
            j++;
            setLine2(line2Full.slice(0, j));
            if (j >= line2Full.length) {
              clearInterval(interval2);
              setTalking(false);
              setTimeout(() => setShowButton(true), 350);
            }
          }, 28);
        }, 380);
      }
    }, 32);
  };

  const handleSoundChoice = (withSound) => {
    setSoundEnabled(withSound);
    startTyping(withSound);
  };

  const handleEnter = () => {
    window.speechSynthesis?.cancel();
    setExiting(true);
    try {
      localStorage.setItem(SEEN_KEY, '1');
    } catch {
      // Storage unavailable — the intro will simply show again next visit
    }
    setTimeout(() => setGone(true), 750);
  };

  useEffect(() => {
    if (gone) return;
    const onKey = (e) => { if (e.key === 'Escape') handleEnter(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  if (gone) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: 0.65, ease: 'easeInOut' }}
      role="dialog"
      aria-modal="true"
      aria-label="Mohamed Sekkar — portfolio"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#09090f]"
    >
      {/* Background radial glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute size-[500px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.14)_0%,transparent_70%)]"
      />

      {/* Subtle grid lines */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Name — visible within the first second so recruiters know where they are */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.35 }}
        className="absolute top-6 left-6 sm:left-8"
      >
        <p className="m-0 font-display text-lg sm:text-xl font-bold tracking-tight text-[var(--text)]">
          Mohamed Sekkar
        </p>
        <p className="m-0 mt-0.5 text-xs text-[var(--text-2)]">{t.hero.label}</p>
      </motion.div>

      {/* Skip — visible immediately, also reachable with Escape */}
      <button
        type="button"
        onClick={handleEnter}
        autoFocus
        aria-label={`${t.intro.skip} (Esc)`}
        className="absolute top-6 right-6 sm:right-8 inline-flex items-center gap-2 rounded-full border border-[rgba(139,92,246,0.45)] bg-[rgba(139,92,246,0.12)] px-5 py-2 text-sm font-semibold text-[var(--text)] transition-colors hover:bg-[rgba(139,92,246,0.25)] hover:border-[var(--accent-light)]"
      >
        {t.intro.skip}
        <span aria-hidden="true" className="text-[0.65rem] font-medium text-[var(--text-2)]">Esc</span>
      </button>

      {/* Speech bubble */}
      <AnimatePresence mode="wait">
        {phase === 'ask-sound' && (
          <motion.div
            key="ask-sound"
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className={bubbleClass}
          >
            <BubbleTail />

            <p className="m-0 mb-[1.1rem] text-center font-display text-[1rem] leading-[1.4] font-bold text-[#f4f4f8]">
              {t.intro.soundPrompt}
            </p>

            <div className="flex gap-[0.6rem]">
              <button
                type="button"
                onClick={() => handleSoundChoice(true)}
                className={`${primaryBtnClass} flex-1 px-2 py-[0.65rem] text-[0.88rem] shadow-[0_4px_16px_rgba(139,92,246,0.4)]`}
              >
                {t.intro.soundYes}
              </button>
              <button
                type="button"
                onClick={() => handleSoundChoice(false)}
                className="flex-1 cursor-pointer rounded-xl border border-[rgba(139,92,246,0.3)] bg-transparent px-2 py-[0.65rem] text-[0.88rem] font-medium text-[#a78bfa] [transition:background_0.2s,translate_0.2s] hover:-translate-y-px hover:bg-[rgba(139,92,246,0.08)]"
              >
                {t.intro.soundNo}
              </button>
            </div>
          </motion.div>
        )}

        {phase === 'typing' && (
          <motion.div
            key="typing"
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className={bubbleClass}
          >
            <BubbleTail />

            <p className="m-0 mb-2 min-h-[1.5em] font-display text-[1.05rem] font-bold text-[#f4f4f8]">
              {line1}
              {talking && line1.length > 0 && line1.length < t.intro.line1.length && (
                <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }}>|</motion.span>
              )}
            </p>

            <p className="m-0 min-h-[1.4em] text-[0.92rem] leading-[1.55] text-[#8888a8]">
              {(() => {
                const name = 'Mohamed';
                const idx = t.intro.line2.indexOf(name);
                if (idx === -1) return line2;
                const before = line2.slice(0, idx);
                const nameTyped = line2.slice(idx, idx + name.length);
                const after = line2.slice(idx + name.length);
                return (
                  <>
                    {before}
                    {nameTyped && <span className="font-semibold text-[#f4f4f8]">{nameTyped}</span>}
                    {after}
                  </>
                );
              })()}
              {talking && line1.length >= t.intro.line1.length && line2.length < t.intro.line2.length && (
                <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }}>|</motion.span>
              )}
            </p>

            <AnimatePresence>
              {showButton && (
                <motion.button
                  type="button"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  onClick={handleEnter}
                  className={`${primaryBtnClass} mt-5 w-full px-4 py-[0.72rem] text-[0.9rem] tracking-[0.01em] shadow-[0_4px_24px_rgba(139,92,246,0.4)]`}
                >
                  {t.intro.enter}
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sugar bot with entry animation */}
      <div className="relative">
        <motion.div
          initial={{ y: -380, opacity: 0 }}
          animate={exiting
            ? { y: -420, opacity: 0, transition: { duration: 0.45, ease: 'easeIn' } }
            : { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 160, damping: 12, delay: 0.1 } }
          }
          onAnimationComplete={() => {
            if (!exiting && !landedRef.current) {
              landedRef.current = true;
              setLanded(true);
              setShowSparks(true);
              setTimeout(() => setShowSparks(false), 600);
              setWaving(true);
              setTimeout(() => setWaving(false), 700);
              setTimeout(() => setPhase('ask-sound'), 400);
            }
          }}
        >
          <motion.div
            animate={landed && !exiting ? { y: [0, -10, 0] } : {}}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <SugarBig talking={talking} blinking={blinking} waving={waving} />
          </motion.div>
        </motion.div>

        {showSparks && <Sparks />}
      </div>
    </motion.div>
  );
};

export default IntroAnimation;
