import { forwardRef } from 'react';

const HeroBackground = forwardRef(function HeroBackground(_, bgRef) {
  return (
    <div id="hero-bg" ref={bgRef} className="absolute inset-0">
      <div className="hero-slide s1">
        <img
          src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=2000&q=80"
          onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80'; }}
          className="kenburns w-full h-full object-cover"
          alt="Fabric rolls ready for global export"
        />
      </div>
      <div className="hero-slide s2">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2000&q=80"
          onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80'; }}
          className="kenburns-2 w-full h-full object-cover"
          alt="Textile manufacturing floor"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/85 to-navy/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/30 to-transparent" />
      <div className="light-sweep" />
    </div>
  );
});

export default HeroBackground;
