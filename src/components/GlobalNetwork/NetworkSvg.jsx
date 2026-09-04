import { useRef } from 'react';
import useShipmentParticles from '../../hooks/useShipmentParticles';
import { ROUTE_IDS, FABRIC_ROUTE_ID, destinations } from './networkRoutes';

export default function NetworkSvg() {
  const svgRef = useRef(null);
  useShipmentParticles(svgRef, ROUTE_IDS, FABRIC_ROUTE_ID);

  return (
    <svg ref={svgRef} viewBox="0 0 1000 460" className="w-full h-auto" id="network-svg">
      <g stroke="#2563EB" strokeWidth="1.4" fill="none" opacity="0.55">
        <path className="flow-path" d="M300,230 C 260,150 220,90 190,70" />
        <path id="route-pk-uk" className="flow-path" d="M300,230 C 320,150 340,90 360,60" />
        <path id="route-pk-europe" className="flow-path" d="M300,230 C 400,190 500,150 560,120" />
        <path id="route-pk-usa" className="flow-path" d="M300,230 C 200,300 140,340 100,360" />
        <path className="flow-path" d="M650,230 C 560,150 500,100 430,70" style={{ animationDelay: '.3s' }} />
        <path id="route-cn-middleeast" className="flow-path" d="M650,230 C 700,300 760,360 820,390" style={{ animationDelay: '.6s' }} />
        <path id="route-cn-asia" className="flow-path" d="M650,230 C 720,220 800,210 860,200" style={{ animationDelay: '.2s' }} />
      </g>

      <g>
        <path
          id="route-fabric-import"
          d="M628,222 C 550,196 420,196 322,222"
          stroke="#fbbf24"
          strokeWidth="2"
          fill="none"
          strokeDasharray="7 6"
          className="flow-path"
          opacity="0.9"
        />
        <text x="475" y="192" textAnchor="middle" fill="#fbbf24" fontFamily="Poppins" fontSize="11" fontWeight="600" letterSpacing="0.5">FABRIC IMPORT ROUTE</text>
      </g>

      <g>
        <circle cx="300" cy="230" r="9" fill="#2563EB" className="pulse-dot" />
        <circle cx="300" cy="230" r="5" fill="#2563EB" />
        <text x="300" y="262" textAnchor="middle" fill="#fff" fontFamily="Poppins" fontSize="13" fontWeight="700">Pakistan</text>
      </g>
      <g>
        <circle cx="650" cy="230" r="9" fill="#2563EB" className="pulse-dot" style={{ animationDelay: '.4s' }} />
        <circle cx="650" cy="230" r="5" fill="#2563EB" />
        <text x="650" y="262" textAnchor="middle" fill="#fff" fontFamily="Poppins" fontSize="13" fontWeight="700">China</text>
      </g>

      <g fill="#94a3b8" fontFamily="Poppins" fontSize="11">
        {destinations.map((d) => (
          <g key={`${d.cx}-${d.cy}`}>
            <circle cx={d.cx} cy={d.cy} r="4" fill="#60a5fa" />
            <text x={d.cx} y={d.labelY} textAnchor="middle" fill="#e2e8f0">{d.label}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}
