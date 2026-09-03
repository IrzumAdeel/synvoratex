import { useEffect } from 'react';

/** Delegated click handler that scrolls same-page anchor links with an offset for the fixed navbar. */
export default function useSmoothAnchorScroll(offset = 76) {
  useEffect(() => {
    function onClick(e) {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute('href');
      if (id.length <= 1) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [offset]);
}
