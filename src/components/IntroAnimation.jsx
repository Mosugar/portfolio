import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const SEEN_KEY = 'sugar-intro-seen';

// ─── Sugar SVG ───────────────────────────────────────────────────────────────
const SugarBig = ({ talking, blinking, waving }) => (
  <svg
    width="180"
    height="225"
    viewBox="0 0 64 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ filter: 'drop-shadow(0 12px 40px rgba(139,92,246,0.55))' }}
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
    <circle cx="22" cy="31" r="3.5" fill="white" style={{ opacity: blinking ? 0 : 1 }} />
    <circle cx="23.5" cy="29.5" r="1.5" fill="#18181f" style={{ opacity: blinking ? 0 : 1 }} />
    <circle cx="24.5" cy="28.5" r="0.8" fill="white" opacity="0.8" style={{ opacity: blinking ? 0 : 0.8 }} />

    <ellipse cx="42" cy="31" rx="6" ry={blinking ? 0.8 : 6} fill="#111118" />
    <circle cx="42" cy="31" r="3.5" fill="white" style={{ opacity: blinking ? 0 : 1 }} />
    <circle cx="43.5" cy="29.5" r="1.5" fill="#18181f" style={{ opacity: blinking ? 0 : 1 }} />
    <circle cx="44.5" cy="28.5" r="0.8" fill="white" opacity="0.8" style={{ opacity: blinking ? 0 : 0.8 }} />

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
    <g style={{ transformOrigin: '14px 55px', transform: waving ? 'rotate(-40deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>
      <rect x="4" y="52" width="10" height="6" rx="3" fill="#18181f" stroke="#8b5cf6" strokeWidth="1.2" />
    </g>
    {/* Right arm */}
    <rect x="50" y="52" width="10" height="6" rx="3" fill="#18181f" stroke="#8b5cf6" strokeWidth="1.2" />

    {/* Feet */}
    <rect x="17" y="70" width="10" height="6" rx="3" fill="#18181f" stroke="#8b5cf6" strokeWidth="1.2" />
    <rect x="37" y="70" width="10" height="6" rx="3" fill="#18181f" stroke="#8b5cf6" strokeWidth="1.2" />
  </svg>
);

// ─── Particle sparks on landing ─────────────────────────────────────────────
const Sparks = () => (
  <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none' }}>
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
          style={{ position: 'absolute', width: 6, height: 6, borderRadius: '50%', backgroundColor: i % 2 === 0 ? '#a78bfa' : '#8b5cf6' }}
        />
      );
    })}
  </div>
);

// ─── Main component ──────────────────────────────────────────────────────────
const IntroAnimation = () => {
  const { t, lang } = useLanguage();

  const [visible] = useState(() => {
    try { return !sessionStorage.getItem(SEEN_KEY); }
    catch { return true; }
  });

  const [landed, setLanded] = useState(false);
  const [showSparks, setShowSparks] = useState(false);
  // phase: null → 'ask-sound' → 'typing'
  const [phase, setPhase] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [talking, setTalking] = useState(false);
  const [blinking, setBlinking] = useState(false);
  const [waving, setWaving] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [gone, setGone] = useState(!visible);

  const landedRef = useRef(false);

  // Blinking loop
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

  // Strip emojis + punctuation that TTS reads literally ("." → "point", "!" → "point d'exclamation")
  const cleanForSpeech = (str) =>
    str
      .replace(/[\u{1F000}-\u{1FFFF}\u{2600}-\u{27FF}\u{2300}-\u{23FF}\u{2B00}-\u{2BFF}]/gu, '')
      .replace(/[.!?…;:]/g, ' ')
      .replace(/→/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();

  // Pick the best available voice for a language
  const pickBestVoice = (voices, langPrefix) => {
    const pool = voices.filter(v => v.lang.startsWith(langPrefix));
    if (!pool.length) return null;
    return (
      pool.find(v => /neural|enhanced|premium|natural/i.test(v.name)) ||
      pool.find(v => !/compact/i.test(v.name)) ||
      pool[0]
    );
  };

  // Speak a cleaned string; skip if empty after cleaning
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

  // Pick time-based greeting
  const getTimedGreeting = () => {
    const h = new Date().getHours();
    if (h >= 5  && h < 12) return t.intro.greetingMorning;
    if (h >= 12 && h < 18) return t.intro.greetingAfternoon;
    if (h >= 18 && h < 22) return t.intro.greetingEvening;
    return t.intro.greetingNight;
  };

  // Start typewriter after user picks sound preference
  const startTyping = (withSound) => {
    const line1Full = getTimedGreeting();
    const line2Full = t.intro.line2;

    setPhase('typing');
    setTalking(true);

    // Speak via Web Speech API if opted in
    if (withSound && window.speechSynthesis) {
      window.speechSynthesis.cancel();

      const speak = () => {
        const voices   = window.speechSynthesis.getVoices();
        const frVoice  = pickBestVoice(voices, 'fr');
        const enVoice  = pickBestVoice(voices, 'en');
        const mainLang = lang === 'fr' ? 'fr-FR' : 'en-US';
        const mainVoice = lang === 'fr' ? frVoice : enVoice;

        if (lang === 'fr') {
          // Split line2 at the name so we can switch voice for it
          const [beforeName, afterName] = line2Full.split('Mohamed');
          sayIn(line1Full, 'fr-FR', frVoice, () => {
            setTimeout(() => {
              sayIn(beforeName, 'fr-FR', frVoice, () => {
                // Phonetic spelling → en-US voice reads it as "moh-HA-med"
                sayIn('Mouhamed', 'en-US', enVoice, () => {
                  // afterName is usually just "." — cleanForSpeech strips it, sayIn skips empty
                  sayIn(afterName ?? '', 'fr-FR', frVoice);
                });
              });
            }, 220);
          });
        } else {
          // English: replace with phonetic so it doesn't sound like "MOH-hamd"
          const line2Phonetic = line2Full.replace('Mohamed', 'Mouhamed');
          sayIn(line1Full, 'en-US', enVoice, () => {
            setTimeout(() => sayIn(line2Phonetic, 'en-US', enVoice), 220);
          });
        }
      };

      if (window.speechSynthesis.getVoices().length > 0) {
        speak();
      } else {
        window.speechSynthesis.onvoiceschanged = () => { speak(); window.speechSynthesis.onvoiceschanged = null; };
      }
    }

    // Typewriter line 1
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
    try { sessionStorage.setItem(SEEN_KEY, '1'); } catch {}
    setTimeout(() => setGone(true), 750);
  };

  if (gone) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: 0.65, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#09090f',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background radial glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Subtle grid lines */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
        pointerEvents: 'none',
      }} />

      {/* Skip */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={handleEnter}
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          padding: '0.4rem 1rem',
          borderRadius: '999px',
          border: '1px solid rgba(255,255,255,0.08)',
          backgroundColor: 'transparent',
          color: '#4a4a6a',
          fontSize: '0.78rem',
          cursor: 'pointer',
          fontFamily: 'inherit',
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.color = '#8888a8'}
        onMouseLeave={e => e.currentTarget.style.color = '#4a4a6a'}
      >
        {t.intro.skip}
      </motion.button>

      {/* Speech bubble */}
      <AnimatePresence mode="wait">
        {phase === 'ask-sound' && (
          <motion.div
            key="ask-sound"
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            style={{
              maxWidth: '340px',
              width: '90vw',
              marginBottom: '1.75rem',
              backgroundColor: '#18181f',
              border: '1px solid rgba(139,92,246,0.3)',
              borderRadius: '20px',
              padding: '1.4rem 1.6rem',
              position: 'relative',
              boxShadow: '0 12px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(139,92,246,0.08)',
            }}
          >
            <div style={{ position: 'absolute', bottom: '-8px', left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '9px solid transparent', borderRight: '9px solid transparent', borderTop: '9px solid rgba(139,92,246,0.3)' }} />
            <div style={{ position: 'absolute', bottom: '-6px', left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderTop: '8px solid #18181f' }} />

            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '1rem',
              fontWeight: 700,
              color: '#f4f4f8',
              margin: '0 0 1.1rem 0',
              lineHeight: 1.4,
              textAlign: 'center',
            }}>
              {t.intro.soundPrompt}
            </p>

            <div style={{ display: 'flex', gap: '0.6rem' }}>
              <button
                onClick={() => handleSoundChoice(true)}
                style={{
                  flex: 1,
                  padding: '0.65rem 0.5rem',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #7c3aed, #8b5cf6)',
                  border: 'none',
                  color: '#fff',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  boxShadow: '0 4px 16px rgba(139,92,246,0.4)',
                  transition: 'opacity 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                {t.intro.soundYes}
              </button>
              <button
                onClick={() => handleSoundChoice(false)}
                style={{
                  flex: 1,
                  padding: '0.65rem 0.5rem',
                  borderRadius: '12px',
                  background: 'transparent',
                  border: '1px solid rgba(139,92,246,0.3)',
                  color: '#a78bfa',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'background 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(139,92,246,0.08)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}
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
            style={{
              maxWidth: '340px',
              width: '90vw',
              marginBottom: '1.75rem',
              backgroundColor: '#18181f',
              border: '1px solid rgba(139,92,246,0.3)',
              borderRadius: '20px',
              padding: '1.4rem 1.6rem',
              position: 'relative',
              boxShadow: '0 12px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(139,92,246,0.08)',
            }}
          >
            <div style={{ position: 'absolute', bottom: '-8px', left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '9px solid transparent', borderRight: '9px solid transparent', borderTop: '9px solid rgba(139,92,246,0.3)' }} />
            <div style={{ position: 'absolute', bottom: '-6px', left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderTop: '8px solid #18181f' }} />

            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '1.05rem',
              fontWeight: 700,
              color: '#f4f4f8',
              margin: '0 0 0.5rem 0',
              minHeight: '1.5em',
            }}>
              {line1}
              {talking && line1.length > 0 && line1.length < t.intro.line1.length && (
                <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }}>|</motion.span>
              )}
            </p>

            <p style={{
              fontSize: '0.92rem',
              color: '#8888a8',
              margin: 0,
              minHeight: '1.4em',
              lineHeight: 1.55,
            }}>
              {line2}
              {talking && line1.length >= t.intro.line1.length && line2.length < t.intro.line2.length && (
                <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }}>|</motion.span>
              )}
            </p>

            <AnimatePresence>
              {showButton && (
                <motion.button
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  onClick={handleEnter}
                  style={{
                    marginTop: '1.25rem',
                    width: '100%',
                    padding: '0.72rem 1rem',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #7c3aed, #8b5cf6)',
                    border: 'none',
                    color: '#fff',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    letterSpacing: '0.01em',
                    fontFamily: 'inherit',
                    boxShadow: '0 4px 24px rgba(139,92,246,0.4)',
                    transition: 'opacity 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  {t.intro.enter}
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sugar bot with entry animation */}
      <div style={{ position: 'relative' }}>
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
              // Wave then show the sound-choice bubble
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
