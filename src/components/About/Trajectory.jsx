import useScrollReveal from '../../hooks/useScrollReveal';
import { trajectory } from '../../data/timeline';
import Reveal from '../Reveal';

export default function Trajectory() {
  const [wrapRef, lineIn] = useScrollReveal({ threshold: 0.2 });

  return (
    <div className="mt-28">
      <Reveal>
        <div className="text-center mb-16">
          <h3 className="font-display font-bold text-2xl text-navy">Our Trajectory</h3>
          <p className="text-slate/60 mt-2">From a merchandising desk to a cross-border sourcing network.</p>
        </div>
      </Reveal>
      <div ref={wrapRef} className="grid md:grid-cols-4 gap-8 relative">
        <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-line" />
        <div
          className="hidden md:block absolute top-6 left-0 h-px bg-accent"
          id="traj-line"
          style={{ width: '100%', transformOrigin: 'left', transform: lineIn ? 'scaleX(1)' : 'scaleX(0)' }}
        />
        {trajectory.map((t, i) => (
          <Reveal key={t.n} delay={`${i * 0.1}s`} className="relative">
            <div className={`tl-circle ${t.final ? 'tl-final-pulse bg-accent' : 'bg-navy'} w-12 h-12 rounded-full text-white flex items-center justify-center font-display font-bold mb-5 relative z-10`}>
              {t.n}
            </div>
            <div className="font-display font-bold text-navy mb-1">{t.title}</div>
            <p className="text-sm text-slate/60 leading-relaxed">{t.desc}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
