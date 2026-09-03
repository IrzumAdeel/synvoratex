import { industries } from '../../data/industries';
import Icon from '../icons/Icon';
import Reveal from '../Reveal';

export default function Industries() {
  return (
    <section id="industries" className="py-28 lg:py-36 bg-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <Reveal className="mb-16">
          <div className="text-accent font-bold text-xs tracking-[0.2em] mb-4">INDUSTRIES WE SERVE</div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-tight max-w-2xl">Built for the sectors that can't afford supply chain surprises.</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((ind, i) => (
            <Reveal
              key={ind.name}
              delay={`${Math.min(i, 7) * 0.05}s`}
              className="industry-card bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="industry-icon w-11 h-11 rounded-lg bg-accent/20 text-accent flex items-center justify-center mb-4">
                <Icon name={ind.icon} />
              </div>
              <div className="text-white font-semibold text-sm">{ind.name}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
