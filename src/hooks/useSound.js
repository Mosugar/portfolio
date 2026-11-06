import { useCallback, useRef } from 'react';

// Web Audio API — no audio files needed
export const useBubbleSound = () => {
  const ctxRef = useRef(null);
  const lastPlayRef = useRef(0);

  const play = useCallback(() => {
    // Throttle: max one sound every 80ms so rapid mouse movement isn't overwhelming
    const now = Date.now();
    if (now - lastPlayRef.current < 80) return;
    lastPlayRef.current = now;

    try {
      if (!ctxRef.current) {
        ctxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = ctxRef.current;

      // Resume if suspended (browser autoplay policy)
      if (ctx.state === 'suspended') ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      // Random pitch so each bubble feels unique
      const baseFreq = 500 + Math.random() * 400;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseFreq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.4, ctx.currentTime + 0.09);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.09);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.09);
    } catch {
      // AudioContext not available (SSR, old browser) — silently ignore
    }
  }, []);

  return play;
};
