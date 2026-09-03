export const lerp = (a, b, t) => a + (b - a) * t;

export const easeOutQuad = (t) => 1 - (1 - t) * (1 - t);

export function getMotionCapabilities() {
  if (typeof window === 'undefined') {
    return { prefersReducedMotion: false, isFinePointer: false, isMobile: false };
  }
  return {
    prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    isFinePointer: window.matchMedia('(pointer:fine)').matches,
    isMobile: window.matchMedia('(max-width: 768px)').matches,
  };
}
