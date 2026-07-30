'use client';
import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: 'Ramesh Patil',
    location: 'Yawal',
    rating: 5,
    text: 'Vijay Traders has been our go-to for all construction materials for years. The quality of cement and steel is always top notch, and the pricing is very fair. Highly recommend to anyone building in Yawal.',
    project: 'Residential Construction',
    initials: 'RP',
    color: '#f5a623',
  },
  {
    name: 'Suresh Mahajan',
    location: 'Chopda',
    rating: 5,
    text: 'Excellent service! Ordered TMT steel and plumbing pipes — they delivered on time and the quality was perfect. The staff is knowledgeable and helped me choose the right materials for my project.',
    project: 'Commercial Building',
    initials: 'SM',
    color: '#3b82f6',
  },
  {
    name: 'Anita Deshmukh',
    location: 'Yawal',
    rating: 5,
    text: 'I bought all tiles and sanitary ware from Vijay Traders for my home renovation. The showroom has a great collection and prices are much better than the city. Very happy with the bathroom setup!',
    project: 'Home Renovation',
    initials: 'AD',
    color: '#ec4899',
  },
  {
    name: 'Vijay Shelar',
    location: 'Faizpur',
    rating: 5,
    text: 'As a contractor, I need reliable suppliers. Vijay Traders never lets me down — quality materials, quick delivery, honest prices. I\'ve been buying from them for over 10 years now.',
    project: 'Contractor (Multiple Projects)',
    initials: 'VS',
    color: '#22c55e',
  },
  {
    name: 'Prakash Borse',
    location: 'Yawal',
    rating: 5,
    text: 'Got waterproofing chemicals (DrFixit) and roofing sheets from here. Very genuine products, no adulteration. The staff explained exactly how to apply the waterproofing — excellent after-service too.',
    project: 'Terrace Waterproofing',
    initials: 'PB',
    color: '#8b5cf6',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < count ? '#f5a623' : 'transparent'}
          stroke={i < count ? '#f5a623' : 'rgba(255,255,255,0.2)'}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!isAutoPlaying) return;
    intervalRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % reviews.length);
    }, 4500);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isAutoPlaying]);

  const go = (idx: number) => {
    setActiveIdx(idx);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prev = () => go((activeIdx - 1 + reviews.length) % reviews.length);
  const next = () => go((activeIdx + 1) % reviews.length);

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: '#0d0d0d' }}
    >
      {/* BG accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(245,166,35,0.3), transparent)' }}
      />

      <div className="container-lg relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-badge mx-auto">Customer Reviews</div>
          <h2
            className="font-display font-black mb-4"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', lineHeight: 1.1 }}
          >
            What Our{' '}
            <span className="text-gradient">Customers Say</span>
          </h2>
          {/* Google-style rating */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="#f5a623" stroke="#f5a623" />
              ))}
            </div>
            <span className="font-bold text-white text-xl">5.0</span>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>/ 5.0</span>
            <span
              className="text-xs px-2 py-1 rounded-full"
              style={{ background: 'rgba(245,166,35,0.1)', color: '#f5a623', border: '1px solid rgba(245,166,35,0.3)' }}
            >
              Google Rating
            </span>
          </div>
        </div>

        {/* Main Review Card */}
        <div className="max-w-3xl mx-auto mb-8">
          <div
            key={activeIdx}
            className="review-card"
            style={{ animation: 'fadeInUp 0.4s ease-out' }}
          >
            <style>{`@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }`}</style>

            {/* Stars */}
            <div className="mb-4">
              <StarRating count={reviews[activeIdx].rating} />
            </div>

            {/* Review text */}
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
              &ldquo;{reviews[activeIdx].text}&rdquo;
            </p>

            {/* Reviewer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-white text-lg flex-shrink-0"
                  style={{ background: reviews[activeIdx].color }}
                >
                  {reviews[activeIdx].initials}
                </div>
                <div>
                  <div className="font-semibold text-white">{reviews[activeIdx].name}</div>
                  <div className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {reviews[activeIdx].location}
                  </div>
                </div>
              </div>
              <div
                className="text-xs px-3 py-1.5 rounded-full"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.45)',
                }}
              >
                {reviews[activeIdx].project}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
            aria-label="Previous review"
          >
            <ChevronLeft size={18} className="text-white" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === activeIdx ? '24px' : '8px',
                  height: '8px',
                  background: i === activeIdx ? '#f5a623' : 'rgba(255,255,255,0.15)',
                }}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
            aria-label="Next review"
          >
            <ChevronRight size={18} className="text-white" />
          </button>
        </div>

        {/* All review pills */}
        <div className="flex flex-wrap gap-3 justify-center">
          {reviews.map((r, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200"
              style={
                i === activeIdx
                  ? { background: 'rgba(245,166,35,0.15)', border: '1px solid rgba(245,166,35,0.4)', color: '#f5a623' }
                  : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)' }
              }
            >
              <div
                className="w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center text-white"
                style={{ background: r.color, fontSize: '9px' }}
              >
                {r.initials}
              </div>
              <span className="text-xs font-medium">{r.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
