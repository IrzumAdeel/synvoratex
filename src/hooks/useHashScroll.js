import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Scrolls to the element matching the current URL hash after route navigation lands (e.g. Link to="/#services" from another page). */
export default function useHashScroll(offset = 76) {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = window.CSS?.escape ? `#${CSS.escape(hash.slice(1))}` : hash;
    const t = setTimeout(() => {
      const target = document.querySelector(id);
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }, 60);
    return () => clearTimeout(t);
  }, [hash, offset]);
}
