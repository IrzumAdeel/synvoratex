import { forwardRef } from 'react';

const FloatingCards = forwardRef(function FloatingCards(_, ref) {
  return (
    <div id="float-cards" ref={ref} className="hidden lg:flex flex-col gap-4 relative" style={{ willChange: 'transform' }}>
      <div className="hero-in float-card bg-white/10 border border-white/15 rounded-2xl p-6 backdrop-blur-md" style={{ animationDelay: '.7s' }}>
        <div className="flex items-center gap-3 mb-2">
          <span className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M20 7 12 3 4 7l8 4 8-4Z" />
              <path d="M4 7v10l8 4 8-4V7" />
              <path d="M12 11v10" />
            </svg>
          </span>
          <div className="text-white font-display font-bold text-sm">Ready-to-Stitch</div>
        </div>
        <p className="text-white/60 text-xs leading-relaxed">Cut-and-sew production runs built for e-commerce brands that need speed and consistency.</p>
      </div>
      <div className="hero-in float-card-2 bg-white/10 border border-white/15 rounded-2xl p-6 backdrop-blur-md ml-8" style={{ animationDelay: '.8s' }}>
        <div className="flex items-center gap-3 mb-2">
          <span className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M3 12h13M11 6l6 6-6 6" />
            </svg>
          </span>
          <div className="text-white font-display font-bold text-sm">Fabric Distribution</div>
        </div>
        <p className="text-white/60 text-xs leading-relaxed">Imported fabric moving from China into Pakistan, feeding our manufacturing network directly.</p>
      </div>
    </div>
  );
});

export default FloatingCards;
