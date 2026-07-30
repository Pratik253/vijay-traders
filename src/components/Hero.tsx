'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Phone, MapPin, ChevronDown } from 'lucide-react';

export default function Hero() {
  const headlineRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle dust canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; alpha: number; size: number; life: number; maxLife: number }[] = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -(Math.random() * 0.5 + 0.2),
        alpha: Math.random() * 0.5,
        size: Math.random() * 2.5 + 0.5,
        life: Math.random() * 200,
        maxLife: 200 + Math.random() * 200,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.life++;
        if (p.life > p.maxLife) {
          p.life = 0;
          p.x = Math.random() * canvas.width;
          p.y = canvas.height + 10;
          p.vy = -(Math.random() * 0.5 + 0.2);
        }
        p.x += p.vx;
        p.y += p.vy;
        const lifeRatio = p.life / p.maxLife;
        const currentAlpha = p.alpha * Math.sin(lifeRatio * Math.PI);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 166, 35, ${currentAlpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Parallax on mouse move
  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const scrollDown = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#080808' }}
    >
      {/* Background: Real Shop Exterior Photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/photos/WhatsApp Image 2026-07-30 at 11.53.27 PM (3).jpeg"
          alt="Vijay Traders shop exterior - front view with Vijay Traders signage"
          fill
          priority
          quality={85}
          className="object-cover"
          style={{ objectPosition: 'center 30%' }}
        />
        {/* Heavy gradient overlays for cinematic look */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to right, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.7) 50%, rgba(5,5,5,0.3) 100%),
              linear-gradient(to top, rgba(5,5,5,1) 0%, rgba(5,5,5,0.4) 30%, transparent 70%)
            `,
          }}
        />
        {/* Cinematic vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)',
          }}
        />
      </div>

      {/* Particle dust canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[2] pointer-events-none"
      />

      {/* Noise grain overlay */}
      <div className="noise-overlay z-[3]" />

      {/* Floating product images — right side */}
      <div className="absolute right-0 top-0 bottom-0 w-[45%] z-[4] hidden xl:block pointer-events-none">
        {/* Water tanks + pipes glimpse */}
        <div
          className="absolute right-4 top-1/2 w-64 h-56 rounded-2xl overflow-hidden"
          style={{
            transform: 'translateY(-60%) rotate(2deg)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
            border: '1px solid rgba(255,255,255,0.08)',
            animation: 'floatSlow 7s ease-in-out infinite',
          }}
        >
          <Image
            src="/photos/WhatsApp Image 2026-07-30 at 11.53.29 PM.jpeg"
            alt="TMT steel rebars and pipes at Vijay Traders"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.2), transparent)' }}
          />
        </div>
        {/* Sanitary ware */}
        <div
          className="absolute right-48 bottom-[20%] w-48 h-40 rounded-2xl overflow-hidden"
          style={{
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.08)',
            animation: 'floatSlow 9s ease-in-out infinite 1s',
          }}
        >
          <Image
            src="/photos/WhatsApp Image 2026-07-30 at 11.53.28 PM.jpeg"
            alt="Sanitary ware showroom at Vijay Traders"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="container-xl relative z-[5] pt-20 pb-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className="section-badge mb-6"
            style={{ animation: 'float 4s ease-in-out infinite' }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: '#f5a623', boxShadow: '0 0 8px #f5a623' }}
            />
            Trusted Building Materials Since 1992
          </div>

          {/* Headline */}
          <div ref={headlineRef} style={{ transition: 'transform 0.1s ease' }}>
            <h1 className="hero-headline mb-6">
              <span className="block text-white">Building</span>
              <span className="block text-gradient">Trust.</span>
              <span className="block text-white">Supplying</span>
              <span
                className="block"
                style={{
                  background: 'linear-gradient(135deg, #e8e8e8, rgba(255,255,255,0.6))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Quality.
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl mb-10 leading-relaxed max-w-xl"
            style={{ color: 'rgba(255,255,255,0.65)', fontWeight: 400 }}
          >
            Your one-stop destination for premium building materials, hardware, plumbing,
            paints & construction supplies.{' '}
            <span style={{ color: '#f5a623', fontWeight: 600 }}>Yawal, Maharashtra.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#products" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <span>Explore Products</span>
              <ChevronDown size={16} />
            </a>
            <a href="#gallery" className="btn-secondary" onClick={(e) => { e.preventDefault(); document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Visit Store
            </a>
            <a href="tel:9422773072" className="btn-ghost">
              <Phone size={16} />
              Call Now
            </a>
          </div>

          {/* Quick Info Strip */}
          <div className="flex flex-wrap gap-4 lg:gap-6 bg-black/40 backdrop-blur-md border border-white/10 p-3 rounded-2xl inline-flex">
            <div className="flex items-center gap-2">
              <MapPin size={14} style={{ color: '#f5a623' }} />
              <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Yawal, Maharashtra
              </span>
            </div>
            <div className="w-px h-4 bg-white/10 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Phone size={14} style={{ color: '#f5a623' }} />
              <a href="tel:9422773072" className="text-xs font-medium hover:text-yellow-400 transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }}>
                9422773072
              </a>
            </div>
            <div className="w-px h-4 bg-white/10 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#22c55e', boxShadow: '0 0 6px #22c55e' }} />
              <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>Open Today</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-14 right-10 z-[5] hidden md:flex flex-col items-center gap-2 group"
        aria-label="Scroll down"
      >
        <span className="text-[10px] font-bold tracking-[2px] uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Scroll
        </span>
        <div
          className="w-5 h-8 rounded-full border flex items-start justify-center pt-1.5"
          style={{ borderColor: 'rgba(255,255,255,0.2)' }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{
              background: '#f5a623',
              animation: 'float 2s ease-in-out infinite',
            }}
          />
        </div>
      </button>

      {/* Brand logos strip at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[5]"
        style={{
          background: 'linear-gradient(to right, rgba(5,5,5,0.9), rgba(5,5,5,0.7), rgba(5,5,5,0.9))',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="container-xl py-4">
          <div className="flex items-center gap-8 overflow-x-auto">
            <span className="text-xs tracking-widest whitespace-nowrap" style={{ color: 'rgba(255,255,255,0.3)' }}>
              TRUSTED BRANDS
            </span>
            {['Ambuja Cement', 'ACC Cement', 'Ultratech', 'DrFixit', 'Bangur', 'Rajuri Steel', 'Samruddhi'].map((brand) => (
              <span
                key={brand}
                className="text-xs font-semibold tracking-wider whitespace-nowrap"
                style={{ color: 'rgba(255,255,255,0.45)' }}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
