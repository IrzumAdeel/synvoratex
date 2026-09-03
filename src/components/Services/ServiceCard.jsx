import useScrollReveal from '../../hooks/useScrollReveal';
import useSpotlight from '../../hooks/useSpotlight';
import mergeRefs from '../../utils/mergeRefs';
import Icon from '../icons/Icon';

export default function ServiceCard({ icon, title, desc, delay }) {
  const [revealRef, isIn] = useScrollReveal();
  const spotRef = useSpotlight();

  return (
    <div
      ref={mergeRefs(revealRef, spotRef)}
      className={`reveal ${isIn ? 'in' : ''} card-lift spot-card bg-white rounded-2xl border border-line p-8`}
      style={{ transitionDelay: delay }}
    >
      <div className="service-icon w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center mb-6">
        <Icon name={icon} />
      </div>
      <h3 className="font-display font-bold text-lg text-navy mb-3">{title}</h3>
      <p className="text-sm text-slate/60 leading-relaxed">{desc}</p>
    </div>
  );
}
