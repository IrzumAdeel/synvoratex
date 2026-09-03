import { useEffect, useRef, useState } from 'react';

/**
 * Drives the fixed top scroll-progress bar and the navbar's "scrolled"
 * glass state from a single rAF-throttled scroll listener. The progress
 * bar width is written directly to the DOM (not React state) so rapid
 * scrolling never triggers a render storm; "scrolled" is plain boolean
 * state since it only flips twice per session's worth of scrolling.
 */
export default function useScrollProgress(scrolledThreshold = 40) {
  const barRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    function update() {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
      if (barRef.current) barRef.current.style.width = `${pct}%`;
      setScrolled(h.scrollTop > scrolledThreshold);
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrolledThreshold]);

  return { barRef, scrolled };
}
