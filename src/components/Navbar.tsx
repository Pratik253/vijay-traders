'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-[1000] transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(10,10,10,0.9)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div className="container-xl">
          <div className="flex items-center justify-between" style={{ height: '72px' }}>
            {/* Logo */}
            <button
              onClick={() => scrollTo('#home')}
              className="flex items-center gap-3 group"
              aria-label="Vijay Traders Home"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
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
              <div className="flex flex-col leading-tight">
                <span className="font-display font-black text-white text-base tracking-wide">
                  Vijay Traders
                </span>
                <span className="text-[10px] tracking-[2px] uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Yawal · Est. 1992
                </span>
              </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:text-yellow-400 relative group"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-4 right-4 h-px bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  />
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:9422773072"
                className="btn-primary text-sm"
                style={{ padding: '10px 22px' }}
              >
                <Phone size={14} />
                Call Now
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-2 rounded-lg transition-colors"
              style={{ background: 'rgba(255,255,255,0.05)' }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className="fixed inset-0 z-[999] flex flex-col md:hidden transition-all duration-400"
        style={{
          background: 'rgba(8,8,8,0.98)',
          backdropFilter: 'blur(20px)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'all' : 'none',
          transform: mobileOpen ? 'translateY(0)' : 'translateY(-10px)',
        }}
      >
        <div className="flex flex-col items-center justify-center gap-8 h-full">
          {navLinks.map((link, i) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="font-display font-bold text-3xl text-white hover:text-yellow-400 transition-colors"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:9422773072"
            className="btn-primary mt-4"
            onClick={() => setMobileOpen(false)}
          >
            <Phone size={16} />
            9422773072
          </a>
        </div>
      </div>
    </>
  );
}
