import { Link } from 'react-router-dom';
import useMagnetic from '../../hooks/useMagnetic';
import Reveal from '../Reveal';
import MaskHeading from '../MaskHeading';

export default function CTA() {
  const scheduleRef = useMagnetic();

  return (
    <section className="relative py-28 lg:py-36 bg-navy overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80"
          onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.style.display = 'none'; }}
          className="cta-zoom w-full h-full object-cover opacity-20"
          alt="Port logistics at dusk"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/95 to-navy/80" />
      </div>
      <Reveal className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
          <MaskHeading>Ready to simplify your textile sourcing?</MaskHeading>
        </h2>
        <p className="text-white/60 text-lg mb-10">Let's build your supply chain together.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link ref={scheduleRef} to="/contact" className="btn-primary magnetic text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-300">Schedule Meeting</Link>
          <Link to="/contact" className="btn-outline text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300">Contact Us</Link>
        </div>
      </Reveal>
    </section>
  );
}
