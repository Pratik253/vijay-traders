'use client';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

const footerLinks = {
  'Quick Links': [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ],
  'Products': [
    { label: 'Cement', href: '#products' },
    { label: 'TMT Steel', href: '#products' },
    { label: 'Pipes & Fittings', href: '#products' },
    { label: 'Sanitary Ware', href: '#products' },
    { label: 'Tiles', href: '#products' },
    { label: 'Roofing', href: '#products' },
  ],
};

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#080808',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      {/* Main Footer */}
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(245,166,35,0.2), rgba(232,98,26,0.15))',
                  border: '1px solid rgba(245,166,35,0.4)',
                }}
              >
                <span
                  className="font-display font-black text-xl"
                  style={{
                    background: 'linear-gradient(135deg, #f5a623, #e8621a)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  VT
                </span>
              </div>
              <div>
                <div className="font-display font-black text-white text-base">Vijay Traders</div>
                <div className="text-[10px] tracking-[2px] uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Yawal · Est. 1992
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Your trusted partner for premium building materials, hardware, and construction supplies
              in Yawal, Maharashtra.
            </p>
            {/* Contact quick links */}
            <div className="space-y-2">
              <a
                href="tel:9422773072"
                className="flex items-center gap-2 text-sm transition-colors hover:text-yellow-400"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                <Phone size={13} style={{ color: '#f5a623' }} />
                9422773072
              </a>
              <a
                href="https://wa.me/919422773072"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors hover:text-green-400"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                <MessageCircle size={13} style={{ color: '#22c55e' }} />
                WhatsApp Us
              </a>
              <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <MapPin size={13} style={{ color: '#f5a623' }} />
                Yawal, Jalgaon, Maharashtra
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-semibold text-white mb-4 text-sm tracking-wide">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-sm transition-colors hover:text-yellow-400 text-left"
                      style={{ color: 'rgba(255,255,255,0.45)' }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide">Get In Touch</h4>
            <p className="text-sm mb-5" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Need building materials? Call or WhatsApp us for a quick quote.
            </p>
            <div className="space-y-3">
              <a
                href="tel:9422773072"
                className="btn-primary text-sm w-full justify-center"
                style={{ padding: '12px 20px' }}
              >
                <Phone size={14} />
                Call Now
              </a>
              <a
                href="https://wa.me/919422773072"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm w-full justify-center"
                style={{ padding: '12px 20px', borderColor: 'rgba(34,197,94,0.4)', color: '#22c55e' }}
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        className="h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }}
      />

      {/* Bottom Bar */}
      <div className="container-xl py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-center" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © 2024 Vijay Traders, Yawal, Maharashtra. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#22c55e', boxShadow: '0 0 6px #22c55e' }} />
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Open Today · Mo: 9422773072
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
