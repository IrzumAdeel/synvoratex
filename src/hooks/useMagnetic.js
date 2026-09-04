import { useEffect, useRef } from 'react';
import { getMotionCapabilities } from '../utils/motion';

/** Small clamped magnetic pull toward the cursor. Desktop, fine-pointer only. */
export default function useMagnetic() {
  const ref = useRef(null);

  useEffect(() => {
    const { prefersReducedMotion, isFinePointer, isMobile } = getMotionCapabilities();
    if (prefersReducedMotion || !isFinePointer || isMobile) return;

    const btn = ref.current;
    if (!btn) return;
    const radius = 70, maxPull = 7;

    function onMouseMove(e) {
      const rect = btn.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      const dist = Math.sqrt(relX * relX + relY * relY);
      if (dist < radius) {
        const pull = 1 - dist / radius;
        let dx = relX * 0.3 * pull;
        let dy = relY * 0.3 * pull;
        const mag = Math.sqrt(dx * dx + dy * dy);
        if (mag > maxPull) { const s = maxPull / mag; dx *= s; dy *= s; }
        btn.style.transform = `translate(${dx}px, ${dy}px)`;
      } else {
        btn.style.transform = 'translate(0,0)';
      }
    }
    function onMouseLeave() { btn.style.transform = 'translate(0,0)'; }

    btn.addEventListener('mousemove', onMouseMove, { passive: true });
    btn.addEventListener('mouseleave', onMouseLeave);
    return () => {
      btn.removeEventListener('mousemove', onMouseMove);
      btn.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return ref;
}
