import Reveal from '../Reveal';

export default function CategoryCard({ img, name, delay }) {
  return (
    <Reveal variant="scale" delay={delay} className="cat-card group relative rounded-xl overflow-hidden card-lift h-64">
      <img
        src={img.startsWith('/') ? img : `https://images.unsplash.com/photo-${img}?auto=format&fit=crop&w=700&q=75`}
        loading="lazy"
        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=75'; }}
        className="w-full h-full object-cover"
        alt={name}
      />
      <div className="cat-overlay absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-2">
        <div className="cat-title text-white font-display font-bold">{name}</div>
        <span className="cat-arrow shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </span>
      </div>
    </Reveal>
  );
}
