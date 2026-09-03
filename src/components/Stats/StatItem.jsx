import useScrollReveal from '../../hooks/useScrollReveal';
import useCounter from '../../hooks/useCounter';

export default function StatItem({ target, label, delayMs = 0, transitionDelay = '0s' }) {
  const [revealRef, isIn] = useScrollReveal();
  const [counterRef, value] = useCounter(target, { delayMs });

  return (
    <div
      ref={revealRef}
      className={`text-center lg:text-left reveal ${isIn ? 'in' : ''}`}
      style={{ transitionDelay }}
    >
      <div ref={counterRef} className="font-display font-extrabold text-4xl lg:text-5xl text-white counter">
        {value}{target >= 10 ? '+' : ''}
      </div>
      <div className="text-white/50 text-sm font-medium mt-2 tracking-wide">{label}</div>
    </div>
  );
}
