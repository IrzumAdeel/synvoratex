import { useEffect, useRef, useState } from 'react';
import SmartLink from '../SmartLink';

export default function NavDropdown({ label, items }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    }
    function onKeyDown(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  function openNow() {
    clearTimeout(closeTimer.current);
    setOpen(true);
  }

  function closeSoon() {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  }

  return (
    <div
      ref={wrapRef}
      className="relative py-2"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
    >
      <button
        type="button"
        className="flex items-center gap-1 hover:text-white transition-colors focus:outline-none focus-visible:text-white"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <svg
          className={`w-3.5 h-3.5 text-white/40 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64 transition-all duration-300 ${
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <div className="p-2 rounded-2xl bg-navy/95 backdrop-blur-2xl border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.45)] flex flex-col gap-1">
          {items.map((item) => (
            <SmartLink
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              <span className={`w-2 h-2 rounded-full shrink-0 ${item.dot}`} />
              <span>
                <span className="block text-xs font-semibold text-white">{item.title}</span>
                <span className="block text-[11px] text-white/50">{item.desc}</span>
              </span>
            </SmartLink>
          ))}
        </div>
      </div>
    </div>
  );
}
