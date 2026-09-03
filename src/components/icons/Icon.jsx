import { createElement } from 'react';
import { icons } from '../../data/icons';

/** Renders one of the shared inline line-icons by name. */
export default function Icon({ name, size = 22, className = '', ...rest }) {
  const shapes = icons[name] || icons.check;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {shapes.map((shape, i) => {
        const { tag, ...props } = shape;
        return createElement(tag, { key: i, ...props });
      })}
    </svg>
  );
}
