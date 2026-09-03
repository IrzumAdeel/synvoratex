import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SmartLink from '../SmartLink';
import { navLinks } from './navLinks';
import NavDropdown from './NavDropdown';
import MobileMenu from './MobileMenu';

export default function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    document.body.style.overflow = 'hidden';
    function onKeyDown(e) {
      if (e.key === 'Escape') setMenuOpen(false);
    }
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header id="navbar" className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl">
      <nav
        className={`relative flex items-center justify-between px-4 sm:px-6 py-3 sm:py-3.5 rounded-full
                    border border-white/[0.08] backdrop-blur-2xl
                    transition-[background-color,box-shadow] duration-500
                    before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-white/[0.08] before:to-transparent before:pointer-events-none
                    ${scrolled
                      ? 'bg-navy/85 shadow-[0_8px_32px_0_rgba(15,23,42,0.45)]'
                      : 'bg-navy/60 shadow-[0_8px_32px_0_rgba(15,23,42,0.25)]'}`}
      >
        <Link to="/" className="flex items-center gap-2.5 pl-1 sm:pl-2 group relative z-10">
          <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white p-1 flex items-center justify-center overflow-hidden shadow-lg shadow-black/20 group-hover:scale-105 transition-transform">
            <img src="/synvora-mark.png" alt="" className="w-full h-full object-contain" />
          </span>
          <span className="font-display font-extrabold text-lg tracking-tight text-white group-hover:text-accent transition-colors">
            Synvora<span className="text-accent">.</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-7 text-[13.5px] font-semibold text-white/70 relative z-10">
          {navLinks.map((link) =>
            link.items ? (
              <NavDropdown key={link.label} label={link.label} items={link.items} />
            ) : (
              <SmartLink key={link.href} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </SmartLink>
            )
          )}
        </div>

        <div className="flex items-center gap-2 relative z-10">
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 rounded-full
                       bg-accent hover:bg-blue-500 text-white font-semibold text-sm
                       shadow-[0_0_25px_rgba(37,99,235,0.35)]
                       hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]
                       transition-all duration-300"
          >
            Get a Quote
          </Link>

          <button
            id="menu-btn"
            type="button"
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <MobileMenu open={menuOpen} onNavigate={() => setMenuOpen(false)} />
    </header>
  );
}
