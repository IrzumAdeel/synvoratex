import { useEffect, useRef, useState } from 'react';
import { easeOutQuad, getMotionCapabilities } from '../utils/motion';

/**
 * Animates a number from 0 to `target` once the element scrolls into view.
 * Eased, staggered via `delayMs`, fires once. Returns [ref, displayValue].
 */
export default function useCounter(target, { delayMs = 0, duration = 1400, threshold = 0.4 } = {}) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const { prefersReducedMotion } = getMotionCapabilities();

    let rafId = null;
    let timeoutId = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);

          if (prefersReducedMotion) {
            setValue(target);
            return;
          }

          const startTime = performance.now() + delayMs;
          function tick(now) {
            if (now < startTime) {
              rafId = requestAnimationFrame(tick);
              return;
            }
            const t = Math.min(1, (now - startTime) / duration);
            setValue(Math.round(target * easeOutQuad(t)));
            if (t < 1) {
              rafId = requestAnimationFrame(tick);
            } else {
              el.style.transition = 'transform .3s cubic-bezier(.34,1.4,.64,1)';
              el.style.transform = 'scale(1.08)';
              timeoutId = setTimeout(() => { el.style.transform = 'scale(1)'; }, 300);
            }
          }
          rafId = requestAnimationFrame(tick);
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (timeoutId !== null) clearTimeout(timeoutId);
    };
  }, [target, delayMs, duration, threshold]);

  return [ref, value];
}
