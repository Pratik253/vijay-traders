'use client';
import { useRef, useCallback } from 'react';
import { Award, Tag, ShieldCheck, Lightbulb, Truck, Star, Clock, ThumbsUp } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Quality Products',
    desc: 'All products are sourced from certified, reputable brands. We never compromise on quality.',
    color: '#22c55e',
  },
  {
    icon: Tag,
    title: 'Affordable Prices',
    desc: 'Competitive pricing with no hidden charges. Best value for your construction budget.',
    color: '#f5a623',
  },
  {
    icon: Award,
    title: 'Trusted Brands',
    desc: 'Authorized dealers for Ambuja, ACC, Ultratech, DrFixit, Bangur and more premium brands.',
    color: '#3b82f6',
  },
  {
    icon: Lightbulb,
    title: 'Expert Advice',
    desc: '30+ years of knowledge. Our team will guide you to the right product for your project.',
    color: '#8b5cf6',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    desc: 'Swift delivery to your site in Yawal and surrounding areas. We value your time.',
    color: '#e8621a',
  },
  {
    icon: Star,
    title: '5000+ Customers',
    desc: 'Thousands of satisfied customers across the region trust us for every project.',
    color: '#f5a623',
  },
  {
    icon: Clock,
    title: '30+ Years Experience',
    desc: 'Established since 1992 — three decades of serving the Yawal construction community.',
    color: '#22c55e',
  },
  {
    icon: ThumbsUp,
    title: '100% Genuine',
    desc: 'Every product is genuine and certified. No counterfeits, no shortcuts.',
    color: '#ec4899',
  },
];

export default function WhyUs() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    const card = cardRefs.current[idx];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    card.style.transform = `perspective(800px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) translateY(-4px)`;
  }, []);

  const handleMouseLeave = useCallback((idx: number) => {
    const card = cardRefs.current[idx];
    if (!card) return;
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)';
  }, []);

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: '#111111' }}
    >
      {/* Decorative background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(245,166,35,0.04) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(45,106,179,0.03) 0%, transparent 50%)`,
        }}
      />

      <div className="container-xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-badge mx-auto">Why Choose Us</div>
          <h2
            className="font-display font-black mb-4"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', lineHeight: 1.1 }}
          >
            Why Thousands Choose{' '}
            <span className="text-gradient">Vijay Traders</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Not just a store — a trusted partner for your construction journey.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                ref={(el) => { cardRefs.current[i] = el; }}
                className="why-card cursor-default"
                style={{ transition: 'transform 0.15s ease, border-color 0.3s ease, background 0.3s ease' }}
                onMouseMove={(e) => handleMouseMove(e, i)}
                onMouseLeave={() => handleMouseLeave(i)}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `${reason.color}18`,
                    border: `1px solid ${reason.color}30`,
                  }}
                >
                  <Icon size={22} style={{ color: reason.color }} />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-white text-lg mb-3">{reason.title}</h3>

                {/* Description */}
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {reason.desc}
                </p>

                {/* Accent line (from CSS ::after) */}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div
          className="mt-16 p-10 rounded-2xl text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(245,166,35,0.1), rgba(232,98,26,0.08))',
            border: '1px solid rgba(245,166,35,0.2)',
          }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(245,166,35,0.05) 0%, transparent 70%)',
            }}
          />
          <div className="relative z-10">
            <h3 className="font-display font-bold text-3xl text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Visit us at Yawal or call us now. Our experts are ready to help you get exactly what you need.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:9422773072" className="btn-primary">
                📞 Call 9422773072
              </a>
              <a
                href="https://wa.me/919422773072"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
