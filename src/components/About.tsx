'use client';
import Image from 'next/image';
import { Award, Users, Shield, Truck } from 'lucide-react';

const timeline = [
  { year: '1992', title: 'Foundation', desc: 'Vijay Traders was established in Yawal, Maharashtra, with a vision to serve local builders and contractors.' },
  { year: '2000', title: 'Expansion', desc: 'Added dedicated cement godowns, expanded TMT steel and pipe inventory to meet growing demand.' },
  { year: '2010', title: 'Sanitary & Tiles', desc: 'Launched a full showroom for sanitary ware, tiles, and bathroom accessories.' },
  { year: '2024', title: 'Today', desc: 'A complete one-stop shop with 200+ products, trusted by 5000+ customers across the region.' },
];

const values = [
  { icon: Award, title: 'Quality First', desc: 'We stock only certified brands — Ambuja, ACC, Ultratech, DrFixit, Bangur and more.' },
  { icon: Users, title: 'Expert Team', desc: 'Our experienced staff provides honest advice and personalized service to every customer.' },
  { icon: Shield, title: 'Trusted Supplier', desc: 'Authorized dealers for all major brands. Genuine products, genuine prices.' },
  { icon: Truck, title: 'Fast Delivery', desc: 'Quick delivery to your construction site across Yawal and surrounding areas.' },
];

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ background: '#0d0d0d' }}>
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-badge mx-auto">Our Story</div>
          <h2
            className="font-display font-black mb-4"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', lineHeight: 1.1 }}
          >
            Three Decades of{' '}
            <span className="text-gradient">Trust & Quality</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Since 1992, Vijay Traders has been the backbone of construction in Yawal —
            delivering quality materials, reliable service and expert guidance.
          </p>
        </div>

        {/* Main Split */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Stacked photos */}
          <div className="relative">
            {/* Main exterior photo */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                height: '480px',
                boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <Image
                src="/photos/WhatsApp Image 2026-07-30 at 11.53.26 PM.jpeg"
                alt="Vijay Traders store front - full view with signage and products"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)',
                }}
              />
              <div
                className="absolute bottom-6 left-6 right-6 px-5 py-4 rounded-xl"
                style={{
                  background: 'rgba(0,0,0,0.7)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <div className="text-xs tracking-widest uppercase mb-1" style={{ color: '#f5a623' }}>
                  Vijay Traders — Yawal
                </div>
                <div className="font-semibold text-white text-sm">
                  The store that builders trust
                </div>
              </div>
            </div>

            {/* Floating corner photo: interior counter */}
            <div
              className="absolute -bottom-8 -right-8 w-52 h-40 rounded-xl overflow-hidden"
              style={{
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                border: '2px solid rgba(245,166,35,0.3)',
                animation: 'floatSlow 8s ease-in-out infinite',
              }}
            >
              <Image
                src="/photos/WhatsApp Image 2026-07-30 at 11.53.28 PM (2).jpeg"
                alt="Inside the Vijay Traders main counter"
                fill
                className="object-cover"
              />
            </div>

            {/* Experience badge */}
            <div
              className="absolute -top-6 -left-6 w-28 h-28 rounded-2xl flex flex-col items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #f5a623, #e8621a)',
                boxShadow: '0 10px 30px rgba(245,166,35,0.4)',
                animation: 'float 5s ease-in-out infinite 1s',
              }}
            >
              <span className="font-display font-black text-3xl text-white">30+</span>
              <span className="text-xs font-semibold text-white opacity-80 text-center leading-tight">
                Years<br />Experience
              </span>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h3
              className="font-display font-bold mb-6"
              style={{ fontSize: '1.8rem', lineHeight: 1.2 }}
            >
              Your Neighbourhood{' '}
              <span style={{ color: '#f5a623' }}>Building Partner</span>
            </h3>
            <p className="mb-6 leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Vijay Traders has been serving the people of Yawal and surrounding areas since 1992.
              What started as a modest building materials shop has grown into a comprehensive
              construction supply hub — stocking everything from Ambuja cement to premium tiles,
              TMT steel, plumbing fittings, sanitary ware and beyond.
            </p>
            <p className="mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              We are authorized dealers for India&apos;s leading brands and take pride in providing
              genuine products at honest prices — backed by expert advice from our experienced team.
            </p>

            {/* Value cards */}
            <div className="grid grid-cols-2 gap-4">
              {values.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="p-4 rounded-xl"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(245,166,35,0.25)';
                    (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.05)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)';
                    (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.03)';
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: 'rgba(245,166,35,0.12)' }}
                  >
                    <Icon size={18} style={{ color: '#f5a623' }} />
                  </div>
                  <div className="font-semibold text-sm text-white mb-1">{title}</div>
                  <div className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <div className="section-badge mx-auto">Our Journey</div>
            <h3 className="font-display font-bold text-3xl">The Vijay Traders Timeline</h3>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div
              className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
              style={{ background: 'linear-gradient(180deg, transparent, rgba(245,166,35,0.4), rgba(232,98,26,0.4), transparent)' }}
            />

            <div className="space-y-8 md:space-y-0">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`flex flex-col md:flex-row items-center gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`md:w-5/12 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div
                      className="inline-block px-5 py-4 rounded-xl"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.07)',
                      }}
                    >
                      <span
                        className="font-display font-black text-2xl block mb-1"
                        style={{ color: '#f5a623' }}
                      >
                        {item.year}
                      </span>
                      <span className="font-bold text-white block mb-2">{item.title}</span>
                      <span className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        {item.desc}
                      </span>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="md:w-2/12 flex justify-center">
                    <div
                      className="w-5 h-5 rounded-full border-2 border-yellow-400 flex items-center justify-center z-10 relative"
                      style={{ background: '#111', boxShadow: '0 0 15px rgba(245,166,35,0.5)' }}
                    >
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    </div>
                  </div>

                  <div className="md:w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-12">
            <div className="section-badge mx-auto">Meet The Team</div>
            <h3 className="font-display font-bold text-3xl">
              The People Behind <span className="text-gradient">Vijay Traders</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Shop Owners */}
            <div
              className="relative rounded-2xl overflow-hidden group"
              style={{
                height: '400px',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <Image
                src="/photos/WhatsApp Image 2026-07-30 at 11.53.28 PM (2).jpeg"
                alt="Shop owners at Vijay Traders counter providing expert advice"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: 'center 30%' }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }}
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="font-display font-bold text-xl text-white mb-1">Shop Owners</div>
                <div className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  Expert guidance, quality service — the heart of Vijay Traders
                </div>
              </div>
            </div>

            {/* Field Workers */}
            <div
              className="relative rounded-2xl overflow-hidden group"
              style={{
                height: '400px',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <Image
                src="/photos/WhatsApp Image 2026-07-30 at 11.53.29 PM (1).jpeg"
                alt="Vijay Traders field workers ready to serve"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: 'center 20%' }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }}
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="font-display font-bold text-xl text-white mb-1">Our Field Team</div>
                <div className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  Dedicated workers ensuring swift delivery and handling of materials
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
