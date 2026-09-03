import { categoriesUnstitched, categoriesStitched } from '../../data/categories';
import Reveal from '../Reveal';
import CategoryCard from './CategoryCard';

function CategoryGroup({ items }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      {items.map((c, i) => (
        <CategoryCard key={c.name} {...c} delay={`${Math.min(i, 7) * 0.05}s`} />
      ))}
    </div>
  );
}

export default function ProductCategories() {
  return (
    <section id="categories" className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="mb-16">
          <div className="text-accent font-bold text-xs tracking-[0.2em] mb-4">PRODUCT CATEGORIES</div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-navy leading-tight max-w-2xl">Un-stitched fabric or fully stitched garments, sourced under your brand either way.</h2>
          <p className="text-slate/60 mt-4 max-w-2xl leading-relaxed">Order raw fabric by the roll, or hand us a spec sheet and get finished, ready-to-ship garments, including custom activewear and casualwear runs cut and sewn to size.</p>
        </Reveal>

        <Reveal as="div" className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-lg bg-navy text-white flex items-center justify-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M4 4h16v16H4z" />
              <path d="M4 9h16M4 14h16M9 4v16M14 4v16" strokeWidth="1" />
            </svg>
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-navy">Un-Stitched Fabrics</h3>
            <p className="text-sm text-slate/55">Sold by the roll or by weight, raw material for your own production line.</p>
          </div>
        </Reveal>
        <CategoryGroup items={categoriesUnstitched} />

        <Reveal variant="scale" className="relative overflow-hidden rounded-2xl bg-navy p-8 sm:p-10 mb-20 flex flex-col sm:flex-row items-center gap-8">
          <div className="pattern-drift absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle,#fff 1px,transparent 1px)', backgroundSize: '22px 22px' }} />
          <div className="wl-icon w-16 h-16 rounded-xl bg-accent flex items-center justify-center shrink-0 relative z-10">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" aria-hidden="true">
              <path d="M3 11 11 3h6a2 2 0 0 1 2 2v6l-8 8-8-8z" strokeLinejoin="round" />
              <circle cx="15" cy="9" r="1.4" />
            </svg>
          </div>
          <div className="relative z-10 text-center sm:text-left">
            <h3 className="font-display font-bold text-xl text-white mb-2">White Labeling &amp; Private Label</h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-2xl">Every category on this page, fabric or finished garment, can be produced under your own brand: custom woven labels, hang tags, poly-bagging and export packaging, from first sample to bulk reorder.</p>
          </div>
        </Reveal>

        <Reveal as="div" className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-lg bg-navy text-white flex items-center justify-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M8 3 4 6l2 3 2-1v13h8V8l2 1 2-3-4-3-2 2h-4z" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-navy">Stitched &amp; Ready-Made</h3>
            <p className="text-sm text-slate/55">Cut-and-sew finished garments, including custom activewear and casualwear runs for e-commerce brands.</p>
          </div>
        </Reveal>
        <CategoryGroup items={categoriesStitched} />
      </div>
    </section>
  );
}
