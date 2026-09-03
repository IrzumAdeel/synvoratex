import useScrollReveal from '../hooks/useScrollReveal';

const VARIANT_CLASS = {
  up: 'reveal',
  scale: 'reveal-scale',
  left: 'reveal-left',
  right: 'reveal-right',
};

/**
 * Shared scroll-reveal wrapper. Renders `as` (default div) with the given
 * variant's base class plus `in` once it scrolls into view.
 */
export default function Reveal({ as: Tag = 'div', variant = 'up', delay, className = '', style, children, ...rest }) {
  const [ref, isIn] = useScrollReveal();
  const base = VARIANT_CLASS[variant] || VARIANT_CLASS.up;

  return (
    <Tag
      ref={ref}
      className={`${base} ${isIn ? 'in' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: delay, ...style } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
