import Reveal from '../Reveal';
import Ecosystem from './Ecosystem';
import Trajectory from './Trajectory';

export default function About() {
  return (
    <section id="about" className="py-28 lg:py-36 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <Reveal variant="left">
            <div className="text-accent font-bold text-xs tracking-[0.2em] mb-4">ABOUT SYNVORA</div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-navy mb-6">
              We are a sourcing company,<br className="hidden sm:block" /> not a factory.
            </h2>
            <p className="text-slate/80 text-lg leading-relaxed mb-6">
              Synvora connects international buyers with trusted manufacturing partners across Pakistan and China. We don't own factories. We own the relationships, the merchandising discipline, and the quality systems that make offshore sourcing predictable.
            </p>
            <p className="text-slate/70 leading-relaxed mb-8">
              Brands, wholesalers, hospitals, distributors and retailers work with us to source fabrics, garments and medical textiles through a vetted manufacturing network, while we manage sourcing, merchandising, quality assurance, production oversight, logistics and export documentation from end to end.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-2 border-accent pl-4">
                <div className="font-display font-bold text-navy mb-1">Single point of contact</div>
                <div className="text-sm text-slate/60">One team managing every factory relationship on your behalf.</div>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <div className="font-display font-bold text-navy mb-1">Full transparency</div>
                <div className="text-sm text-slate/60">Production visibility from raw material to shipped container.</div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="scale" className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/fabrics/sourcing.jpg"
                className="w-full h-[420px] object-cover"
                alt="Fabric production line"
              />
            </div>
            <Reveal
              className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-2xl p-6 max-w-[240px] border border-line hidden sm:block"
              delay=".35s"
            >
              <div className="font-display font-extrabold text-2xl text-navy mb-1">Ecosystem</div>
              <div className="text-sm text-slate/60 leading-snug">Sourcing → Merchandising → QA → Production → Logistics → Export</div>
            </Reveal>
          </Reveal>
        </div>

        <Ecosystem />
        <Trajectory />
      </div>
    </section>
  );
}
