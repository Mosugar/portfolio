import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
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
    if (window.matchMedia('(hover: none)').matches) return;

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
  }, [mouseX, mouseY]);

  // Skip on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

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
      style={{ position: 'fixed', inset: 0, zIndex: 99999, pointerEvents: 'none' }}
    >
      {/* ── Trail ── */}
      {trail.map((t, i) => (
        <motion.span
          key={i}
          animate={{ opacity: visible && moving ? t.alpha : 0 }}
          transition={{ duration: 0.12 }}
          style={{
            position: 'absolute',
            left: 0, top: 0,
            x: t.x,
            y: t.y,
            width:  t.size,
            height: t.size,
            borderRadius: '50%',
            backgroundColor: '#8b5cf6',
            translateX: '-50%',
            translateY: '-50%',
            display: 'block',
          }}
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
        style={{
          position: 'absolute',
          left: 0, top: 0,
          x: ringX,
          y: ringY,
          borderRadius: '50%',
          borderStyle: 'solid',
          borderWidth: '1.5px',
          translateX: '-50%',
          translateY: '-50%',
          display: 'block',
        }}
      />

      {/* ── Dot ── */}
      <motion.span
        animate={{ opacity: visible ? (hovering ? 0 : 1) : 0 }}
        transition={{ duration: 0.14 }}
        style={{
          position: 'absolute',
          left: 0, top: 0,
          x: mouseX,
          y: mouseY,
          width:  7,
          height: 7,
          borderRadius: '50%',
          backgroundColor: '#8b5cf6',
          boxShadow: '0 0 9px rgba(139,92,246,0.95)',
          translateX: '-50%',
          translateY: '-50%',
          display: 'block',
        }}
      />
    </div>
  );
}
