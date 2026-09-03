import Reveal from '../Reveal';

const pakistanPoints = [
  'High-quality textile manufacturing',
  'A mature, vertically-integrated cotton ecosystem',
  'Competitive, transparent pricing',
  'Flexible production for mid-to-large volumes',
];

const chinaPoints = [
  'Advanced performance fabrics',
  'Broad synthetic material capability',
  'Deep accessories and trims ecosystem',
  'Fast sourcing turnaround and packaging solutions',
];

export default function PakistanChinaComparison() {
  return (
    <section id="pk-china" className="py-28 lg:py-36 bg-mist relative overflow-hidden">
      <div className="thread-texture text-navy" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="text-center mb-16">
          <div className="text-accent font-bold text-xs tracking-[0.2em] mb-4">TWO MANUFACTURING WORLDS. ONE PARTNER.</div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-navy leading-tight">Why Pakistan + China</h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <Reveal variant="left" className="card-lift bg-white rounded-2xl border border-line p-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center">🇵🇰</span>
              <h3 className="font-display font-bold text-xl text-navy">Pakistan</h3>
            </div>
            <ul className="space-y-4">
              {pakistanPoints.map((point) => (
                <li key={point} className="check-item flex gap-3 text-slate/75"><span className="text-accent mt-1">✓</span>{point}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal variant="right" delay=".1s" className="card-lift bg-navy rounded-2xl p-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">🇨🇳</span>
              <h3 className="font-display font-bold text-xl text-white">China</h3>
            </div>
            <ul className="space-y-4">
              {chinaPoints.map((point) => (
                <li key={point} className="check-item flex gap-3 text-white/70"><span className="text-accent mt-1">✓</span>{point}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal variant="scale" delay=".25s" className="bg-white rounded-2xl border border-line p-10 text-center">
          <p className="text-slate/70 max-w-2xl mx-auto leading-relaxed">Synvora sits in the middle, matching each order to the manufacturing base best suited to it and managing both under a single point of accountability.</p>
        </Reveal>
      </div>
    </section>
  );
}
