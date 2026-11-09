import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Fine pointer only, and never when the user asked for reduced motion.
// Must match the cursor: none media query in globals.css
const CURSOR_QUERY = '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [query]);
  return matches;
};

export default function Cursor() {
  const enabled = useMediaQuery(CURSOR_QUERY);
  const [visible,  setVisible]  = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [moving,   setMoving]   = useState(false);
  const moveTimer = useRef(null);

  // Exact mouse position — no lag
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Ring — snappy spring following the cursor
  const ringX = useSpring(mouseX, { stiffness: 300, damping: 24 });
  const ringY = useSpring(mouseY, { stiffness: 300, damping: 24 });

  // Trail — four dots chained, each following the previous with less tension
  const t1X = useSpring(ringX, { stiffness: 200, damping: 20 });
  const t1Y = useSpring(ringY, { stiffness: 200, damping: 20 });
  const t2X = useSpring(t1X,  { stiffness: 130, damping: 18 });
  const t2Y = useSpring(t1Y,  { stiffness: 130, damping: 18 });
  const t3X = useSpring(t2X,  { stiffness: 80,  damping: 16 });
  const t3Y = useSpring(t2Y,  { stiffness: 80,  damping: 16 });
  const t4X = useSpring(t3X,  { stiffness: 45,  damping: 14 });
  const t4Y = useSpring(t3Y,  { stiffness: 45,  damping: 14 });

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
      setMoving(true);
      clearTimeout(moveTimer.current);
      moveTimer.current = setTimeout(() => setMoving(false), 180);
    };

    const onOver = (e) => {
      setHovering(
        !!e.target.closest('a, button, [role="button"], input, textarea, select, label')
      );
    };

    const onDown  = () => setClicking(true);
    const onUp    = () => setClicking(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener('mousemove',  onMove);
    window.addEventListener('mouseover',  onOver);
    window.addEventListener('mousedown',  onDown);
    window.addEventListener('mouseup',    onUp);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove',  onMove);
      window.removeEventListener('mouseover',  onOver);
      window.removeEventListener('mousedown',  onDown);
      window.removeEventListener('mouseup',    onUp);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
      clearTimeout(moveTimer.current);
    };
  }, [enabled, mouseX, mouseY]);

  if (!enabled) return null;

  const trail = [
    { x: t4X, y: t4Y, size: 2.5, alpha: 0.14 },
    { x: t3X, y: t3Y, size: 3,   alpha: 0.26 },
    { x: t2X, y: t2Y, size: 3.5, alpha: 0.40 },
    { x: t1X, y: t1Y, size: 4.5, alpha: 0.55 },
  ];

  const ringW = clicking ? 24 : hovering ? 52 : 38;
  const ringH = clicking ? 24 : hovering ? 52 : 38;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[99999]"
    >
      {/* ── Trail ── */}
      {trail.map((t, i) => (
        <motion.span
          key={i}
          animate={{ opacity: visible && moving ? t.alpha : 0 }}
          transition={{ duration: 0.12 }}
          className="absolute top-0 left-0 block rounded-full bg-[#8b5cf6]"
          // Motion values (spring-driven position) have to stay in style
          style={{ x: t.x, y: t.y, width: t.size, height: t.size, translateX: '-50%', translateY: '-50%' }}
        />
      ))}

      {/* ── Ring ── */}
      <motion.span
        animate={{
          width:           ringW,
          height:          ringH,
          borderColor:     hovering ? 'rgba(139,92,246,0.9)' : 'rgba(139,92,246,0.55)',
          backgroundColor: hovering ? 'rgba(139,92,246,0.11)' : 'rgba(139,92,246,0)',
          boxShadow:       hovering
            ? '0 0 20px rgba(139,92,246,0.3), inset 0 0 12px rgba(139,92,246,0.08)'
            : '0 0 0px rgba(139,92,246,0)',
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        className="absolute top-0 left-0 block rounded-full border-[1.5px] border-solid"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      />

      {/* ── Dot ── */}
      <motion.span
        animate={{ opacity: visible ? (hovering ? 0 : 1) : 0 }}
        transition={{ duration: 0.14 }}
        className="absolute top-0 left-0 block size-[7px] rounded-full bg-[#8b5cf6] shadow-[0_0_9px_rgba(139,92,246,0.95)]"
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
      />
    </div>
  );
}
