import { forwardRef } from 'react';

const HeroBackground = forwardRef(function HeroBackground(_, bgRef) {
  return (
    <div id="hero-bg" ref={bgRef} className="absolute inset-0">
      <div className="hero-slide s1">
        <img
          src="/fabrics/pl.jpg"
          className="kenburns w-full h-full object-cover"
          alt="Fabric rolls ready for global export"
        />
      </div>
      <div className="hero-slide s2">
        <img
          src="/fabrics/sourcing.jpg"
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
