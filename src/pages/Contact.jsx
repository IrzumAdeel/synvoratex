import Reveal from '../components/Reveal';
import MaskHeading from '../components/MaskHeading';
import ContactForm from '../components/Contact/ContactForm';

const infoItems = [
  {
    label: 'Email',
    value: 'info@synvoratex.com',
    href: 'mailto:info@synvoratex.com',
    icon: '✉',
  },
  {
    label: 'United Arab Emirates',
    value: '+971 50 397 4628',
    href: 'tel:+971503974628',
    icon: '☎',
  },
  {
    label: 'Pakistan',
    value: '+92 320 148 7339',
    href: 'tel:+923201487339',
    icon: '☎',
  },
  {
    label: 'Office',
    value: '24C3, MM Alam Road, Gulberg III, Lahore, Pakistan',
    icon: '📍',
  },
];

export default function Contact() {
  return (
    <>
      <header className="relative bg-navy overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="absolute -top-20 -right-20 pointer-events-none">
          <div className="w-[420px] h-[420px] rounded-full bg-accent/25 blur-[110px]" />
        </div>
        <div className="absolute bottom-0 left-1/3 pointer-events-none">
          <div className="w-[320px] h-[320px] rounded-full bg-blue-400/10 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Reveal className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/90 text-xs font-semibold tracking-wide mb-7 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            GET IN TOUCH
          </Reveal>
          <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-6">
            <MaskHeading>Let's talk sourcing.</MaskHeading>
          </h1>
          <Reveal delay=".15s" className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Share a few details about your products, quantities or sourcing needs and our team will get back to you within one business day.
          </Reveal>
        </div>
      </header>

      <section className="relative bg-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[.85fr_1.15fr] gap-12 lg:gap-16 items-start">
          <Reveal variant="left" className="lg:sticky lg:top-32">
            <div className="text-accent font-bold text-xs tracking-[0.2em] mb-4">CONTACT DETAILS</div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-navy mb-6 leading-tight">
              We'd love to hear about your next shipment.
            </h2>
            <p className="text-slate/70 leading-relaxed mb-10">
              Whether you're exploring fabric sourcing, garment manufacturing or a private label run, tell us what you need and we'll connect you with the right team.
            </p>

            <ul className="space-y-5">
              {infoItems.map((item) => (
                <li key={item.label} className="flex items-start gap-4 border border-line rounded-xl p-4 card-lift">
                  <span className="w-10 h-10 shrink-0 rounded-lg bg-accent/10 text-accent flex items-center justify-center text-lg">
                    {item.icon}
                  </span>
                  <div>
                    <div className="text-xs font-semibold text-slate/50 tracking-wide mb-0.5">{item.label.toUpperCase()}</div>
                    {item.href ? (
                      <a href={item.href} className="text-navy font-semibold hover:text-accent transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-navy font-semibold">{item.value}</div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="right" delay=".1s">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
