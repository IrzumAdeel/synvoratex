import useMagnetic from '../../hooks/useMagnetic';
import SmartLink from '../SmartLink';

const quickLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#industries', label: 'Industries' },
  { href: '#how-we-work', label: 'How We Work' },
  { href: '#network', label: 'Global Network' },
  { href: '/contact', label: 'Contact' },
];

const serviceLinks = [
  'Fabric Sourcing',
  'Garment Manufacturing',
  'Medical Textiles',
  'Private Label Manufacturing',
  'Quality Assurance',
];

export default function Footer() {
  const emailBtnRef = useMagnetic();
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate text-white pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-3 gap-14 mb-16">
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3 12C3 12 7 6 12 6C17 6 21 12 21 12C21 12 17 18 12 18C7 18 3 12 3 12Z" stroke="white" strokeWidth="1.6" />
                  <circle cx="12" cy="12" r="2.2" fill="white" />
                </svg>
              </span>
              <span className="font-display font-extrabold text-lg">Synvora<span className="text-accent">.</span></span>
            </div>
            <p className="text-white/50 leading-relaxed max-w-sm mb-6">Connecting international buyers with trusted manufacturing partners across Pakistan and China. Sourcing, quality assurance and export, managed end to end.</p>
            <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.65 4.76 6.1V23h-4v-6.85c0-1.63-.03-3.73-2.27-3.73-2.28 0-2.63 1.78-2.63 3.62V23h-4V8z" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="font-display font-bold mb-5 text-white/90 text-sm tracking-wide">QUICK LINKS</div>
              <ul className="space-y-3 text-white/50 text-sm">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <SmartLink href={l.href} className="hover:text-white transition-colors">{l.label}</SmartLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-display font-bold mb-5 text-white/90 text-sm tracking-wide">SERVICES</div>
              <ul className="space-y-3 text-white/50 text-sm">
                {serviceLinks.map((s) => (<li key={s}>{s}</li>))}
              </ul>
            </div>
          </div>

          <div>
            <div className="font-display font-bold mb-5 text-white/90 text-sm tracking-wide">GET IN TOUCH</div>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex gap-3"><span className="text-accent">✉</span> hello@synvora.com</li>
              <li className="flex gap-3"><span className="text-accent">☎</span> +92 300 000 0000</li>
              <li className="flex gap-3"><span className="text-accent">📍</span> 24C3, MM Alam Road, Gulberg III, Lahore</li>
            </ul>
            <a ref={emailBtnRef} href="mailto:hello@synvora.com" className="inline-block mt-6 btn-primary magnetic text-white font-bold text-sm px-6 py-3 rounded-full">Email Us</a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-white/35 text-xs">
          <div>© {year} Synvora Sourcing. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/70">Privacy Policy</a>
            <a href="#" className="hover:text-white/70">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
