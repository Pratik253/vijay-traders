'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 30, suffix: '+', label: 'Years of Experience', sub: 'Trusted Since 1992' },
  { value: 5000, suffix: '+', label: 'Happy Customers', sub: 'Across Yawal Region' },
  { value: 200, suffix: '+', label: 'Products Available', sub: 'All Categories' },
  { value: 100, suffix: '%', label: 'Quality Assured', sub: 'Certified Brands Only' },
];

function AnimatedCounter({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return (
    <div ref={ref} className="stat-number">
      {target >= 1000 ? (count >= 1000 ? `${(count / 1000).toFixed(0)}K` : count) : count}
      {suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #111111 0%, #141414 50%, #0f0f0f 100%)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      {/* Concrete texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.008) 3px, rgba(255,255,255,0.008) 4px),
            repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(255,255,255,0.008) 3px, rgba(255,255,255,0.008) 4px)`,
        }}
      />

      {/* Accent glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 rounded-full pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, #f5a623, transparent)' }}
      />

      <div className="container-xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center relative group"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Vertical divider */}
              {i < stats.length - 1 && (
                <div
                  className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16"
                  style={{ background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.08), transparent)' }}
                />
              )}

              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <div
                className="text-base font-semibold mt-2 mb-1"
                style={{ color: 'rgba(255,255,255,0.85)' }}
              >
                {stat.label}
              </div>
              <div className="text-xs tracking-wider" style={{ color: 'rgba(255,255,255,0.35)' }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
