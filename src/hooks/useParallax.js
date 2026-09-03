import { useEffect, useRef } from 'react';
import { lerp, getMotionCapabilities } from '../utils/motion';

/**
 * Layered cinematic parallax for the hero section. Scroll position and
 * cursor position are tracked as targets and smoothly interpolated toward
 * (rAF + lerp) rather than applied directly, so the effect stays smooth
 * regardless of how fast the user scrolls or moves the mouse. Each layer
 * (background, content, floating cards, ambient orbs) gets its own speed
 * and writes to its own transform so animations never fight each other.
 */
export default function useParallax() {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const cardsRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);

  useEffect(() => {
    const { prefersReducedMotion, isFinePointer, isMobile } = getMotionCapabilities();
    if (prefersReducedMotion) return;

    const heroEl = heroRef.current;
    let heroScrollTarget = window.scrollY;
    let heroScrollCurrent = heroScrollTarget;
    let mouseTargetX = 0, mouseTargetY = 0, mouseCurrentX = 0, mouseCurrentY = 0;
    let rafId;

    function onScroll() { heroScrollTarget = window.scrollY; }
    window.addEventListener('scroll', onScroll, { passive: true });

    function onMouseMove(e) {
      const rect = heroEl.getBoundingClientRect();
      mouseTargetX = (e.clientX - rect.left) / rect.width - 0.5;
      mouseTargetY = (e.clientY - rect.top) / rect.height - 0.5;
    }
    if (heroEl && isFinePointer && !isMobile) {
      heroEl.addEventListener('mousemove', onMouseMove, { passive: true });
    }

    function loop() {
      const withinRange = heroScrollCurrent < window.innerHeight + 400;
      if (heroEl && withinRange) {
        heroScrollCurrent = lerp(heroScrollCurrent, heroScrollTarget, 0.09);
        mouseCurrentX = lerp(mouseCurrentX, mouseTargetX, 0.07);
        mouseCurrentY = lerp(mouseCurrentY, mouseTargetY, 0.07);

        const y = heroScrollCurrent;
        const bgSpeed = isMobile ? 0.10 : 0.2;
        const contentSpeed = isMobile ? 0.03 : 0.07;
        const cardSpeed = isMobile ? 0.05 : 0.12;

        if (bgRef.current) bgRef.current.style.transform = `translateY(${y * bgSpeed}px)`;
        if (contentRef.current) contentRef.current.style.transform = `translateY(${y * contentSpeed}px)`;
        if (cardsRef.current) {
          cardsRef.current.style.transform = `translate(${mouseCurrentX * 10}px, ${mouseCurrentY * 10 + y * cardSpeed}px)`;
        }
        if (orb1Ref.current) orb1Ref.current.style.transform = `translate(${mouseCurrentX * 40}px, ${mouseCurrentY * 40 - y * 0.04}px)`;
        if (orb2Ref.current) orb2Ref.current.style.transform = `translate(${mouseCurrentX * -30}px, ${mouseCurrentY * -30 + y * 0.06}px)`;
      }
      rafId = requestAnimationFrame(loop);
    }
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (heroEl) heroEl.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return { heroRef, bgRef, contentRef, cardsRef, orb1Ref, orb2Ref };
}
