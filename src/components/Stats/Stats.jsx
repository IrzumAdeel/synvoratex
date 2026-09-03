import { stats } from '../../data/stats';
import StatItem from './StatItem';

export default function Stats() {
  return (
    <section id="stats" className="bg-navy relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((s, i) => (
          <StatItem key={s.label} target={s.target} label={s.label} delayMs={i * 110} transitionDelay={`${i * 0.1}s`} />
        ))}
      </div>
    </section>
  );
}
