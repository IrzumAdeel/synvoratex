import { useEffect, useRef } from 'react';
import { getMotionCapabilities } from '../utils/motion';

/** rAF-throttled cursor-following spotlight glow for `.spot-card` elements. */
export default function useSpotlight() {
  const ref = useRef(null);

  useEffect(() => {
    const { prefersReducedMotion, isFinePointer, isMobile } = getMotionCapabilities();
    if (prefersReducedMotion || !isFinePointer || isMobile) return;

    const card = ref.current;
    if (!card) return;
    let ticking = false, lastEvt = null;

    function onMouseMove(e) {
      lastEvt = e;
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = card.getBoundingClientRect();
          card.style.setProperty('--mx', `${lastEvt.clientX - rect.left}px`);
          card.style.setProperty('--my', `${lastEvt.clientY - rect.top}px`);
          ticking = false;
        });
        ticking = true;
      }
    }

    card.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => card.removeEventListener('mousemove', onMouseMove);
  }, []);

  return ref;
}
