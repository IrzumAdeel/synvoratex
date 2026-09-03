import { useState } from 'react';
import { Link } from 'react-router-dom';
import SmartLink from '../SmartLink';
import { navLinks } from './navLinks';

export default function MobileMenu({ open, onNavigate }) {
  const [openGroup, setOpenGroup] = useState(null);

  return (
    <div
      id="mobile-menu"
      className={`lg:hidden absolute top-full left-0 right-0 mt-3 origin-top transition-all duration-300 ${
        open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
    >
      <div className="p-3 rounded-3xl bg-navy/95 backdrop-blur-2xl border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.45)] flex flex-col gap-1 text-sm font-semibold text-white/80">
        {navLinks.map((link) =>
          link.items ? (
            <div key={link.label}>
              <button
                type="button"
                className="w-full flex items-center justify-between px-3 py-3 rounded-xl hover:bg-white/10 hover:text-white transition-colors"
                aria-expanded={openGroup === link.label}
                onClick={() => setOpenGroup((v) => (v === link.label ? null : link.label))}
              >
                {link.label}
                <svg
                  className={`w-3.5 h-3.5 text-white/40 transition-transform duration-300 ${openGroup === link.label ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openGroup === link.label ? 'max-h-96' : 'max-h-0'}`}>
                <div className="flex flex-col gap-1 pb-1 pl-2">
                  {link.items.map((item) => (
                    <SmartLink
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                      onClick={onNavigate}
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
          ) : (
            <SmartLink
              key={link.href}
              href={link.href}
              className="px-3 py-3 rounded-xl hover:bg-white/10 hover:text-white transition-colors"
              onClick={onNavigate}
            >
              {link.label}
            </SmartLink>
          )
        )}

        <Link
          to="/contact"
          className="mt-1 inline-flex items-center justify-center px-5 py-3 rounded-full bg-accent hover:bg-blue-500 text-white font-semibold text-sm shadow-[0_0_25px_rgba(37,99,235,0.35)] transition-all duration-300"
          onClick={onNavigate}
        >
          Get a Quote
        </Link>
      </div>
    </div>
  );
}
