import useScrollReveal from '../hooks/useScrollReveal';

/** Scroll-triggered per-line mask reveal, used for signature section headlines. */
export default function MaskHeading({ children }) {
  const [ref, isIn] = useScrollReveal();
  return (
    <span ref={ref} className={`mask-heading ${isIn ? 'in' : ''}`}>
      <span>{children}</span>
    </span>
  );
}
