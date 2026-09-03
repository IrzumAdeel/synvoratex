import { leaders } from '../../data/leadership';
import Reveal from '../Reveal';
import LeadershipCard from './LeadershipCard';

export default function Leadership() {
  return (
    <section id="leadership" className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="mb-16">
          <div className="text-accent font-bold text-xs tracking-[0.2em] mb-4">LEADERSHIP</div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-navy leading-tight max-w-2xl">The team behind every shipment.</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaders.map((l, i) => (
            <LeadershipCard key={l.role} {...l} delay={`${Math.min(i, 5) * 0.06}s`} />
          ))}
        </div>
      </div>
    </section>
  );
}
