import { whyCards } from '../../data/whyCards';
import Reveal from '../Reveal';

export default function WhySynvora() {
  return (
    <section id="why-threadline" className="py-28 lg:py-36 bg-mist">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="mb-16">
          <div className="text-accent font-bold text-xs tracking-[0.2em] mb-4">WHY SYNVORA</div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-navy leading-tight max-w-2xl">The difference is in how we operate.</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyCards.map((w, i) => (
            <Reveal key={w.title} delay={`${Math.min(i, 7) * 0.05}s`} className="card-lift bg-white rounded-2xl border border-line p-7">
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center mb-5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <h4 className="font-display font-bold text-navy mb-2 text-[15px]">{w.title}</h4>
              <p className="text-sm text-slate/60 leading-relaxed">{w.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
