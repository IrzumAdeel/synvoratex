import Reveal from '../Reveal';

export default function LeadershipCard({ role, desc, delay }) {
  return (
    <Reveal delay={delay} className="card-lift leader-card bg-mist rounded-2xl border border-line p-8 text-center">
      <div className="leader-avatar w-20 h-20 mx-auto rounded-full bg-navy text-white flex items-center justify-center font-display font-extrabold text-xl mb-5">SV</div>
      <div className="leader-text">
        <div className="font-display font-bold text-navy mb-1">{role}</div>
        <p className="text-sm text-slate/60 leading-relaxed">{desc}</p>
      </div>
    </Reveal>
  );
}
