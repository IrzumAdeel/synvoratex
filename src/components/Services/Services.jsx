import { services } from '../../data/services';
import Reveal from '../Reveal';
import ServiceCard from './ServiceCard';

export default function Services() {
  return (
    <section id="services" className="py-28 lg:py-36 bg-mist relative overflow-hidden">
      <div className="thread-texture text-navy" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal as="div" className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-accent font-bold text-xs tracking-[0.2em] mb-4">SERVICES</div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-navy leading-tight max-w-xl">End-to-end sourcing, managed for you.</h2>
          </div>
          <p className="text-slate/60 max-w-sm">From first sample to final shipment, Synvora runs the operational layer between your brand and the factory floor.</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={`${Math.min(i, 6) * 0.06}s`} />
          ))}
        </div>
      </div>
    </section>
  );
}
