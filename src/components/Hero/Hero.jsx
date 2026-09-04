import { Link } from 'react-router-dom';
import useParallax from '../../hooks/useParallax';
import useMagnetic from '../../hooks/useMagnetic';
import HeroBackground from './HeroBackground';
import FloatingCards from './FloatingCards';

const tickerItems = [
  'READY-TO-STITCH FOR E-COMMERCE BRANDS',
  'IMPORTED FABRIC DISTRIBUTION: CHINA → PAKISTAN',
  'PRIVATE LABEL MANUFACTURING',
  'MEDICAL TEXTILE PRODUCTION',
  'EXPORT-READY QUALITY ASSURANCE',
];

function TickerGroup({ ariaHidden }) {
  return (
    <span className="flex gap-10" aria-hidden={ariaHidden}>
      {tickerItems.map((item) => (
        <span key={item} className="flex gap-10">
          <span>{item}</span>
          <span className="text-accent">•</span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const { heroRef, bgRef, contentRef, cardsRef, orb1Ref, orb2Ref } = useParallax();
  const ctaRef = useMagnetic();

  return (
    <header id="home" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-navy">
      <HeroBackground ref={bgRef} />

      <div id="orb-1" ref={orb1Ref} className="absolute -top-20 -right-20 pointer-events-none">
        <div className="orb w-[420px] h-[420px] rounded-full bg-accent/25 blur-[110px]" />
      </div>
      <div id="orb-2" ref={orb2Ref} className="absolute bottom-0 left-1/3 pointer-events-none">
        <div className="orb-slow w-[320px] h-[320px] rounded-full bg-blue-400/10 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-16 w-full grid lg:grid-cols-[1.15fr_.85fr] gap-14 items-center">
        <div ref={contentRef} className="max-w-2xl">
          <div className="hero-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/90 text-xs font-semibold tracking-wide mb-7 backdrop-blur-sm" style={{ animationDelay: '.05s' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            SOURCING · MANUFACTURING · LOGISTICS · PAKISTAN &amp; CHINA
          </div>
          <h1 className="font-display font-extrabold text-white text-[2.4rem] sm:text-5xl lg:text-[3.9rem] leading-[1.08] tracking-tight mb-6">
            <span className="mask-line"><span style={{ animationDelay: '.15s' }}>Building Global</span></span>
            <span className="mask-line"><span style={{ animationDelay: '.28s' }}>Textile Supply Chains.</span></span>
          </h1>
          <p className="hero-in text-white/75 text-lg lg:text-xl max-w-xl leading-relaxed mb-6 font-light" style={{ animationDelay: '.45s' }}>
            Your trusted sourcing partner for fabrics, garments and medical textiles across Pakistan and China, including ready-to-stitch production runs built for e-commerce brands.
          </p>
          <p className="hero-in text-white/55 text-sm max-w-lg leading-relaxed mb-10" style={{ animationDelay: '.52s' }}>
            We also run our own imported fabric distribution line, bringing specialty and performance fabrics from China into Pakistan, so local manufacturing partners get faster access to materials they'd otherwise wait months for.
          </p>
          <div className="hero-in flex flex-wrap items-center gap-5" style={{ animationDelay: '.6s' }}>
            <Link ref={ctaRef} to="/contact" className="btn-primary magnetic text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-300">Get a Quote</Link>
            <a href="#how-we-work" className="group flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold transition-colors">
              See how sourcing works
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>

        <FloatingCards ref={cardsRef} />
      </div>

      <a href="#stats" className="scroll-cue hidden sm:flex absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 text-white/50 hover:text-white transition-colors" style={{ animationDelay: '1.1s' }} aria-label="Scroll down">
        <span className="text-[10px] font-semibold tracking-[0.2em]">SCROLL</span>
        <svg width="14" height="20" viewBox="0 0 14 20" fill="none" aria-hidden="true">
          <path d="M7 1v16M1 11l6 6 6-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>

      <div className="absolute bottom-0 left-0 right-0 z-10 bg-white/5 border-t border-white/10 backdrop-blur-sm overflow-hidden py-3">
        <div className="marquee-track flex whitespace-nowrap gap-10 text-white/50 text-xs font-semibold tracking-wide">
          <TickerGroup />
          <TickerGroup ariaHidden="true" />
        </div>
      </div>
    </header>
  );
}
