import { ecosystem } from '../../data/ecosystem';
import Icon from '../icons/Icon';
import Reveal from '../Reveal';

export default function Ecosystem() {
  return (
    <Reveal>
      <div className="text-center mb-14">
        <h3 className="font-display font-bold text-2xl text-navy">The Complete Sourcing Ecosystem</h3>
        <p className="text-slate/60 mt-2 max-w-xl mx-auto">Every stage of your supply chain, managed under one accountable partner.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {ecosystem.map((e, i) => (
          <Reveal
            key={e.label}
            className="bg-white rounded-xl border border-line p-6 text-center card-lift"
            delay={`${i * 0.08}s`}
          >
            <div className="w-11 h-11 mx-auto rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
              <Icon name={e.icon} />
            </div>
            <div className="text-sm font-bold text-navy">{e.label}</div>
          </Reveal>
        ))}
      </div>
    </Reveal>
  );
}
