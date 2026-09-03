import Reveal from '../Reveal';
import MaskHeading from '../MaskHeading';
import NetworkSvg from './NetworkSvg';
import { networkLegend } from './networkRoutes';

export default function GlobalNetwork() {
  return (
    <section id="network" className="py-28 lg:py-36 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle,#fff 1px,transparent 1px)', backgroundSize: '26px 26px' }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center mb-16">
          <div className="text-accent font-bold text-xs tracking-[0.2em] mb-4">GLOBAL NETWORK</div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-tight">
            <MaskHeading>Two sourcing hubs. Seven destinations.</MaskHeading>
          </h2>
          <p className="text-white/50 mt-3 max-w-xl mx-auto">Every order begins in Pakistan or China, and ships wherever your business operates, with our own imported fabric distribution route feeding materials from China straight into Pakistan.</p>
        </div>

        <Reveal variant="scale">
          <NetworkSvg />
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-center">
          {networkLegend.map((item) => (
            <div key={item.label} className="text-white/60 text-sm font-semibold">{item.flag} {item.label}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
