import { useEffect, useRef, useState } from 'react';

/**
 * IntersectionObserver-based scroll reveal. Returns a ref to attach to the
 * element and a boolean that flips to true once the element enters the
 * viewport (and stays true — the observer unsubscribes after firing once).
 */
export default function useScrollReveal({ threshold = 0.15, rootMargin = '0px' } = {}) {
  const ref = useRef(null);
  const [isIn, setIsIn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIn(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isIn];
}
