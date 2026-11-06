import { useEffect, useRef } from 'react';
import '../styles/spotlight-card.css';

const NOISE = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const falloff = (color, softness) => {
  const soft = clamp(softness, 0, 1);
  const core = (1 - soft) ** 1.5 * 0.85;
  const stop = (alpha, at) =>
    `color-mix(in srgb, ${color} ${(alpha * 100).toFixed(2)}%, transparent) ${(at * 100).toFixed(2)}%`;
  const list = [stop(1, 0)];
  for (let i = 0; i <= 14; i++) {
    const t = core + ((1 - core) * i) / 14;
    const g = (t - core) / (1 - core);
    const smooth = 1 - g * g * (3 - 2 * g);
    const glow = Math.exp(-4.6 * g * g) * (1 - g ** 6);
    list.push(stop(smooth + (glow - smooth) * soft, t));
  }
  return list.join(', ');
};

const SpotlightCard = ({
  children,
  className = '',
  style,
  spotlightColor = '#8b5cf6',
  intensity = 0.18,
  spotlightSize = 280,
  softness = 0.7,
  borderGlow = 0.7,
  proximity = 100,
  smoothing = 0.25,
  ...rest
}) => {
  const rootRef = useRef(null);
  const lightRef = useRef(null);
  const grainRef = useRef(null);
  const edgeRef = useRef(null);
  const wakeRef = useRef(null);

  const color = spotlightColor;
  const settings = {
    fill: falloff(color, softness),
    edge: falloff(color, 1),
    size: Math.max(20, spotlightSize),
    intensity: clamp(intensity, 0, 1),
    borderGlow: clamp(borderGlow, 0, 1),
    proximity: Math.max(0, proximity),
    smoothing: clamp(smoothing, 0, 1),
  };
  const settingsRef = useRef(settings);
  settingsRef.current = settings;

  useEffect(() => { wakeRef.current?.(); });

  useEffect(() => {
    const root = rootRef.current, light = lightRef.current;
    const noise = grainRef.current, edge = edgeRef.current;
    if (!root || !light || !noise || !edge) return;

    const state = { x: 0, y: 0, presence: 0, flare: 0, pressed: false, visible: true };
    const pointer = { x: 0, y: 0, active: false };
    const drawn = { light: '', edge: '' };
    let raf = 0, last = 0, alive = true;

    const gradient = (s, size, x, y, stops) =>
      `radial-gradient(circle ${size.toFixed(1)}px at ${x.toFixed(1)}px ${y.toFixed(1)}px, ${stops})`;

    const paint = s => {
      const size = s.size * (1 + 0.2 * state.flare);
      const boost = 1 + 0.7 * state.flare;
      const fill = gradient(s, size, state.x, state.y, s.fill);
      const rim = gradient(s, size * 0.6, state.x, state.y, s.edge);
      if (fill !== drawn.light) { drawn.light = fill; light.style.background = fill; }
      if (rim !== drawn.edge) { drawn.edge = rim; edge.style.background = rim; }
      light.style.opacity = String(Math.min(1, state.presence * s.intensity * boost));
      edge.style.opacity = String(Math.min(1, state.presence * s.borderGlow * boost));
    };

    const tick = now => {
      raf = 0;
      if (!alive) return;
      const s = settingsRef.current;
      const dt = Math.min(0.05, Math.max(0.001, (now - last) / 1000));
      last = now;
      const rect = root.getBoundingClientRect();
      let tx = state.x, ty = state.y, target = 0;
      if (pointer.active) {
        tx = pointer.x - rect.left; ty = pointer.y - rect.top;
        const gap = Math.hypot(Math.max(0, -tx, tx - rect.width), Math.max(0, -ty, ty - rect.height));
        if (gap === 0) target = 1;
        else if (s.proximity > 0) target = Math.max(0, 1 - gap / s.proximity) ** 2;
      }
      if (state.presence < 0.02 && target > 0) { state.x = tx; state.y = ty; }
      const follow = s.smoothing === 0 ? 1 : 1 - Math.exp(-dt / (0.015 + s.smoothing * 0.22));
      state.x += (tx - state.x) * follow; state.y += (ty - state.y) * follow;
      const fade = 1 - Math.exp(-dt / (target > state.presence ? 0.1 : 0.32));
      state.presence += (target - state.presence) * fade;
      if (Math.abs(target - state.presence) < 0.002) state.presence = target;
      const press = state.pressed ? 1 : 0;
      state.flare += (press - state.flare) * (1 - Math.exp(-dt / (press ? 0.05 : 0.28)));
      paint(s);
      const moving = Math.abs(tx - state.x) > 0.1 || Math.abs(ty - state.y) > 0.1;
      const settled = !moving && state.presence === target && state.flare === press;
      if (!settled) raf = requestAnimationFrame(tick);
    };

    const wake = () => { if (raf || !alive) return; last = performance.now(); raf = requestAnimationFrame(tick); };
    wakeRef.current = wake;

    const onMove = e => { pointer.x = e.clientX; pointer.y = e.clientY; pointer.active = true; wake(); };
    const onOut = e => { if (e.relatedTarget) return; pointer.active = false; wake(); };
    const onDown = e => { pointer.x = e.clientX; pointer.y = e.clientY; pointer.active = true; state.pressed = true; wake(); };
    const onUp = e => { if (e.pointerType !== 'mouse') pointer.active = false; state.pressed = false; wake(); };
    const onScroll = () => { if (pointer.active || state.presence > 0) wake(); };
    const observer = new IntersectionObserver(entries => { state.visible = entries.some(e => e.isIntersecting); if (state.visible) wake(); });
    observer.observe(root);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);
    window.addEventListener('scroll', onScroll, { capture: true, passive: true });
    document.addEventListener('pointerout', onOut);
    root.addEventListener('pointerdown', onDown);
    wake();
    return () => {
      alive = false; cancelAnimationFrame(raf); observer.disconnect();
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
      window.removeEventListener('scroll', onScroll, { capture: true });
      document.removeEventListener('pointerout', onOut);
      root.removeEventListener('pointerdown', onDown);
      wakeRef.current = null;
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={`spotlight-card${className ? ` ${className}` : ''}`}
      style={{
        '--spotlight-card-surface': '#111118',
        '--spotlight-card-border': 'rgba(255,255,255,0.06)',
        '--spotlight-card-shadow': '0 2px 12px rgba(0,0,0,0.3)',
        ...style,
      }}
      {...rest}
    >
      <span ref={lightRef} className="spotlight-card__light" aria-hidden="true" />
      <span ref={grainRef} className="spotlight-card__grain" style={{ backgroundImage: NOISE }} aria-hidden="true" />
      {children}
      <span className="spotlight-card__border" aria-hidden="true" />
      <span ref={edgeRef} className="spotlight-card__edge" aria-hidden="true" />
    </div>
  );
};

export default SpotlightCard;
