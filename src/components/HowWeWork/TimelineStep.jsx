import { useMemo } from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';
import mergeRefs from '../../utils/mergeRefs';

export default function TimelineStep({ step, status, delay, positionRef }) {
  const [revealRef, isIn] = useScrollReveal();
  const setRef = useMemo(() => mergeRefs(revealRef, positionRef), [revealRef, positionRef]);

  return (
    <div
      ref={setRef}
      className={`reveal ${isIn ? 'in' : ''} tl-step ${status} relative pl-16`}
      style={{ transitionDelay: delay }}
    >
      <div className="tl-dot absolute left-0 top-0 w-12 h-12 rounded-full bg-white border-2 border-accent text-accent font-display font-bold flex items-center justify-center z-10">
        {step.n}
      </div>
      <h4 className="font-display font-bold text-lg text-navy mb-1">{step.title}</h4>
      <p className="text-sm text-slate/60 leading-relaxed max-w-md">{step.desc}</p>
    </div>
  );
}
