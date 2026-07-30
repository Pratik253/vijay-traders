'use client';
import Image from 'next/image';

const workers = [
  {
    photo: '/photos/WhatsApp Image 2026-07-30 at 11.53.29 PM (1).jpeg',
    title: 'Our Dedicated Field Team',
    description: 'These three hardworking team members are the backbone of Vijay Traders — handling heavy materials, loading deliveries, arranging inventory, and keeping the yard in perfect order every single day.',
    stats: [
      { label: 'Materials Handled', value: 'Daily' },
      { label: 'Deliveries Made', value: '1000s' },
    ],
    side: 'left',
  },
  {
    photo: '/photos/WhatsApp Image 2026-07-30 at 11.53.30 PM (1).jpeg',
    title: 'Always Ready to Serve',
    description: 'With years of experience handling building materials, our team knows every product inside out. Whether it\'s loading TMT steel, arranging pipe sections or unloading cement bags — they do it with dedication and care.',
    stats: [
      { label: 'Experience', value: 'Years' },
      { label: 'Commitment', value: '100%' },
    ],
    side: 'right',
  },
];

const ownerFeatures = [
  'Expert product recommendations',
  'Transparent pricing',
  'Quick order processing',
  'Trusted for 30+ years',
];

export default function Workers() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #111111 0%, #0a0a0a 50%, #0f0f0f 100%)',
      }}
    >
      {/* Background accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(245,166,35,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="container-xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-badge mx-auto">Our Team</div>
          <h2
            className="font-display font-black mb-4"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', lineHeight: 1.1 }}
          >
            The Hands Behind{' '}
            <span className="text-gradient">Every Order</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Real people, real dedication. Meet the team that makes Vijay Traders work every day.
          </p>
        </div>

        {/* Worker Showcase Cards */}
        <div className="space-y-16 mb-20">
          {workers.map((worker, i) => (
            <div
              key={i}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                worker.side === 'right' ? 'lg:flex-row-reverse' : ''
              }`}
              style={{ direction: worker.side === 'right' ? 'rtl' : 'ltr' }}
            >
              {/* Photo */}
              <div style={{ direction: 'ltr' }}>
                <div
                  className="relative rounded-2xl overflow-hidden group"
                  style={{
                    height: '460px',
                    border: '1px solid rgba(255,255,255,0.07)',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                  }}
                >
                  <Image
                    src={worker.photo}
                    alt={worker.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: 'center 15%' }}
                  />
                  {/* Cinematic overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to ${worker.side === 'right' ? 'right' : 'left'}, rgba(0,0,0,0.4), transparent 50%, rgba(0,0,0,0.2))`,
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)' }}
                  />

                  {/* Bottom label */}
                  <div
                    className="absolute bottom-6 left-6 right-6 flex gap-4"
                  >
                    {worker.stats.map((s) => (
                      <div
                        key={s.label}
                        className="flex-1 rounded-xl px-4 py-3 text-center"
                        style={{
                          background: 'rgba(0,0,0,0.7)',
                          backdropFilter: 'blur(16px)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                      >
                        <div
                          className="font-display font-black text-xl mb-0.5"
                          style={{ color: '#f5a623' }}
                        >
                          {s.value}
                        </div>
                        <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div style={{ direction: 'ltr' }}>
                <div
                  className="w-12 h-1 rounded-full mb-6"
                  style={{ background: 'linear-gradient(90deg, #f5a623, #e8621a)' }}
                />
                <h3
                  className="font-display font-bold mb-4"
                  style={{ fontSize: '2rem', lineHeight: 1.2 }}
                >
                  {worker.title}
                </h3>
                <p
                  className="text-lg leading-relaxed mb-8"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                >
                  {worker.description}
                </p>

                {/* Quote decoration */}
                <blockquote
                  className="p-6 rounded-xl italic text-base"
                  style={{
                    background: 'rgba(245,166,35,0.07)',
                    border: '1px solid rgba(245,166,35,0.15)',
                    borderLeft: '3px solid #f5a623',
                    color: 'rgba(255,255,255,0.65)',
                  }}
                >
                  &quot;Every bag of cement, every bundle of steel — handled with care and delivered with pride.&quot;
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        {/* Shop Owner Highlight */}
        <div
          className="rounded-2xl overflow-hidden relative"
          style={{
            border: '1px solid rgba(255,255,255,0.07)',
            boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
          }}
        >
          <div className="grid lg:grid-cols-2">
            {/* Photo */}
            <div className="relative" style={{ minHeight: '420px' }}>
              <Image
                src="/photos/WhatsApp Image 2026-07-30 at 11.53.30 PM (1).jpeg"
                alt="Vijay Traders senior staff member at the counter"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 20%' }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to right, transparent 60%, rgba(17,17,17,1) 100%)' }}
              />
            </div>

            {/* Content */}
            <div
              className="flex flex-col justify-center p-10 lg:p-14"
              style={{ background: '#111111' }}
            >
              <div className="section-badge mb-4">Senior Staff</div>
              <h3 className="font-display font-bold text-3xl text-white mb-4">
                Decades of Expertise at Your Service
              </h3>
              <p className="leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
                With over 30 years in the building materials business, our senior team members
                have seen it all — and know exactly what you need for any construction project.
                Come in, describe your project, and walk out with the right products at the right price.
              </p>
              <ul className="space-y-3">
                {ownerFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                      style={{ background: 'rgba(245,166,35,0.15)', color: '#f5a623' }}
                    >
                      ✓
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.75)' }}>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a href="tel:9422773072" className="btn-primary">
                  Speak with Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
