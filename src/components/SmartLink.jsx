import { Link, useLocation } from 'react-router-dom';

/**
 * Renders same-page anchors (#services) as plain <a> when already on the
 * page that owns the section (so useSmoothAnchorScroll can intercept them),
 * and as a router Link to `/#section` from any other page so navigation
 * actually happens instead of silently rewriting the current URL's hash.
 * Route paths (/contact) and absolute URLs always render as a router Link.
 */
export default function SmartLink({ href, children, ...rest }) {
  const { pathname } = useLocation();

  if (href.startsWith('/')) {
    return (
      <Link to={href} {...rest}>
        {children}
      </Link>
    );
  }

  if (href.startsWith('#') && pathname !== '/') {
    return (
      <Link to={`/${href}`} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}
