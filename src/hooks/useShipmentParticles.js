import { useEffect } from 'react';
import { getMotionCapabilities } from '../utils/motion';

/**
 * Spawns animated shipment particles that travel along the given SVG route
 * paths. Runs only while the network SVG is in the viewport, and pauses
 * entirely under prefers-reduced-motion.
 */
export default function useShipmentParticles(svgRef, routeIds, fabricRouteId) {
  useEffect(() => {
    const { prefersReducedMotion, isMobile } = getMotionCapabilities();
    if (prefersReducedMotion) return;

    const svg = svgRef.current;
    if (!svg) return;

    const routes = routeIds.map((id) => svg.querySelector(`#${id}`)).filter(Boolean);
    const fabricRoute = fabricRouteId ? svg.querySelector(`#${fabricRouteId}`) : null;

    let networkVisible = false;
    let activeParticles = 0;
    const MAX_CONCURRENT = isMobile ? 2 : 3;
    let timeoutId;
    let cancelled = false;

    function spawnParticle(pathEl, amber) {
      if (!networkVisible || activeParticles >= MAX_CONCURRENT || !pathEl) return;
      const len = pathEl.getTotalLength();
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('r', amber ? '3.2' : '3');
      circle.setAttribute('fill', amber ? '#fbbf24' : '#60a5fa');
      circle.setAttribute('class', amber ? 'shipment-particle amber' : 'shipment-particle');
      circle.style.opacity = '0';
      svg.appendChild(circle);
      activeParticles++;

      const duration = amber ? 3200 : 4200 + Math.random() * 1800;
      const start = performance.now();

      function step(now) {
        if (cancelled) return;
        const t = Math.min(1, (now - start) / duration);
        const pt = pathEl.getPointAtLength(t * len);
        circle.setAttribute('cx', pt.x);
        circle.setAttribute('cy', pt.y);
        let op = 1;
        if (t < 0.12) op = t / 0.12;
        else if (t > 0.88) op = (1 - t) / 0.12;
        circle.style.opacity = op;
        if (t < 1) {
          requestAnimationFrame(step);
        } else {
          svg.removeChild(circle);
          activeParticles--;
        }
      }
      requestAnimationFrame(step);
    }

    function scheduleNext() {
      const delay = 1800 + Math.random() * 2600;
      timeoutId = setTimeout(() => {
        if (networkVisible) {
          if (fabricRoute && Math.random() < 0.3) {
            spawnParticle(fabricRoute, true);
          } else if (routes.length) {
            spawnParticle(routes[Math.floor(Math.random() * routes.length)], false);
          }
        }
        scheduleNext();
      }, delay);
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => { networkVisible = entry.isIntersecting; }),
      { threshold: 0.15 }
    );
    observer.observe(svg);

    scheduleNext();

    return () => {
      cancelled = true;
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [svgRef, routeIds, fabricRouteId]);
}
