import { useEffect, useMemo, useRef, useState } from 'react';
import { lerp, getMotionCapabilities } from '../utils/motion';

/**
 * Scroll-driven progress for the "How We Work" timeline. The fill line's
 * scaleY and the active/done state of each step are computed from actual
 * element positions (not scroll delta), then smoothly interpolated toward
 * with rAF + lerp — so the line never jumps or overshoots on fast scrolling.
 */
export default function useTimelineProgress(stepCount) {
  const wrapRef = useRef(null);
  const lineRef = useRef(null);
  const stepRefs = useMemo(
    () => Array.from({ length: stepCount }, () => ({ current: null })),
    [stepCount]
  );

  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const { prefersReducedMotion } = getMotionCapabilities();
    let progressTarget = 0, progressCurrent = 0, ticking = false, rafId;

    function computeProgress() {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const rect = wrap.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const scrolled = viewportH * 0.75 - rect.top;
      const p = scrolled / (rect.height + viewportH * 0.2);
      progressTarget = Math.max(0, Math.min(1, p));

      const viewportCenter = viewportH / 2;
      let idx = -1, closestDist = Infinity;
      stepRefs.forEach((r, i) => {
        const el = r.current;
        if (!el) return;
        const stepRect = el.getBoundingClientRect();
        const center = stepRect.top + stepRect.height / 2;
        if (center < viewportCenter + viewportH * 0.15) {
          const dist = Math.abs(center - viewportCenter);
          if (dist < closestDist) { closestDist = dist; idx = i; }
        }
      });
      setActiveIndex(idx);
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => { computeProgress(); ticking = false; });
        ticking = true;
      }
    }

    function rafLoop() {
      if (lineRef.current) {
        progressCurrent = lerp(progressCurrent, progressTarget, prefersReducedMotion ? 1 : 0.12);
        lineRef.current.style.transform = `scaleY(${progressCurrent})`;
      }
      rafId = requestAnimationFrame(rafLoop);
    }

    computeProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', computeProgress, { passive: true });
    rafId = requestAnimationFrame(rafLoop);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', computeProgress);
      cancelAnimationFrame(rafId);
    };
  }, [stepCount, stepRefs]);

  return { wrapRef, lineRef, stepRefs, activeIndex };
}
