'use client';
import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';

const categories = [
  'All', 'Cement', 'Steel & Metal', 'Pipes & Fittings', 'Sanitary Ware',
  'Tiles', 'Roofing', 'Waterproofing', 'Hardware', 'Water Tanks',
];

const products = [
  {
    id: 1,
    name: 'Ambuja Cement',
    category: 'Cement',
    description: 'No.1 cement in India. OPC & PPC grades available. Superior strength for all construction.',
    image: '/photos/WhatsApp Image 2026-07-30 at 11.53.27 PM (1).jpeg',
    badge: 'Best Seller',
    badgeColor: '#f5a623',
  },
  {
    id: 2,
    name: 'ACC Cement',
    category: 'Cement',
    description: "India's 1st Cement Company. ISO certified quality with superior durability.",
    image: '/photos/WhatsApp Image 2026-07-30 at 11.53.29 PM.jpeg',
    badge: 'Premium',
    badgeColor: '#2d6ab3',
  },
  {
    id: 3,
    name: 'TMT Steel Rebars',
    category: 'Steel & Metal',
    description: 'Rajuri Steel TMT bars for reinforced concrete structures. All diameters available.',
    image: '/photos/WhatsApp Image 2026-07-30 at 11.53.29 PM.jpeg',
    badge: 'In Stock',
    badgeColor: '#22c55e',
  },
  {
    id: 4,
    name: 'GI Roofing Sheets',
    category: 'Roofing',
    description: 'Galvanized corrugated iron sheets in silver and color-coated variants. Durable and lightweight.',
    image: '/photos/WhatsApp Image 2026-07-30 at 11.53.28 PM (1).jpeg',
    badge: 'Popular',
    badgeColor: '#f5a623',
  },
  {
    id: 5,
    name: 'Sanitary Ware',
    category: 'Sanitary Ware',
    description: 'Indian WC pans and Western commodes in multiple colors. Premium ceramic quality.',
    image: '/photos/WhatsApp Image 2026-07-30 at 11.53.28 PM.jpeg',
    badge: 'Wide Range',
    badgeColor: '#8b5cf6',
  },
  {
    id: 6,
    name: 'Wash Basins',
    category: 'Sanitary Ware',
    description: 'Stylish wash basins in multiple sizes and colors to suit any bathroom design.',
    image: '/photos/WhatsApp Image 2026-07-30 at 11.53.29 PM (2).jpeg',
    badge: 'New Arrivals',
    badgeColor: '#ec4899',
  },
  {
    id: 7,
    name: 'Wall & Floor Tiles',
    category: 'Tiles',
    description: 'Extensive tile collection — geometric, marble, mosaic patterns for every interior.',
    image: '/photos/WhatsApp Image 2026-07-30 at 11.53.29 PM (2).jpeg',
    badge: 'Latest Designs',
    badgeColor: '#06b6d4',
  },
  {
    id: 8,
    name: 'DrFixit Waterproofing',
    category: 'Waterproofing',
    description: 'Complete waterproofing solutions. Protect your terrace, basement and walls.',
    image: '/photos/WhatsApp Image 2026-07-30 at 11.53.27 PM (3).jpeg',
    badge: 'Trusted Brand',
    badgeColor: '#f5a623',
  },
  {
    id: 9,
    name: 'PVC/CPVC Pipes',
    category: 'Pipes & Fittings',
    description: 'Bangur PVC, CPVC, UPVC pipes and fittings. ISI marked, since 1992.',
    image: '/photos/WhatsApp Image 2026-07-30 at 11.53.36 PM.jpeg',
    badge: 'ISI Marked',
    badgeColor: '#22c55e',
  },
  {
    id: 10,
    name: 'Water Tanks',
    category: 'Water Tanks',
    description: 'Overhead and underground water storage tanks in various capacities.',
    image: '/photos/WhatsApp Image 2026-07-30 at 11.53.26 PM.jpeg',
    badge: 'Durable',
    badgeColor: '#2d6ab3',
  },
  {
    id: 11,
    name: 'Hardware & Fasteners',
    category: 'Hardware',
    description: 'Complete range of screws, bolts, nuts, hinges and construction hardware.',
    image: '/photos/WhatsApp Image 2026-07-30 at 11.53.28 PM (2).jpeg',
    badge: 'All Types',
    badgeColor: '#f5a623',
  },
  {
    id: 12,
    name: 'Steel Pipes & Sections',
    category: 'Steel & Metal',
    description: 'GI pipes, hollow sections, flat bars and structural steel for construction.',
    image: '/photos/WhatsApp Image 2026-07-30 at 11.53.29 PM.jpeg',
    badge: 'In Stock',
    badgeColor: '#22c55e',
  },
];

function ProductCard({ product }: { product: typeof products[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    card.style.transform = `perspective(600px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateY(-8px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  }, []);

  return (
    <div
      ref={cardRef}
      className="product-card flex-shrink-0 cursor-pointer"
      style={{ width: '280px', transition: 'transform 0.15s ease, box-shadow 0.3s ease, border-color 0.3s ease' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="product-card-shine" />

      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: '200px' }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500"
          style={{ objectPosition: 'center' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)' }}
        />
        {/* Badge */}
        <div
          className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-bold"
          style={{ background: product.badgeColor, color: 'white' }}
        >
          {product.badge}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-bold text-white text-lg mb-2">{product.name}</h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs tracking-widest uppercase" style={{ color: '#f5a623' }}>
            {product.category}
          </span>
          <a
            href="tel:9422773072"
            className="text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 hover:scale-105"
            style={{
              background: 'rgba(245,166,35,0.15)',
              color: '#f5a623',
              border: '1px solid rgba(245,166,35,0.3)',
            }}
          >
            Enquire
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="section-padding" style={{ background: '#111111' }}>
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-badge mx-auto">Our Products</div>
          <h2
            className="font-display font-black mb-4"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', lineHeight: 1.1 }}
          >
            Everything You Need to{' '}
            <span className="text-gradient">Build</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            From foundation cement to finish tiles — explore our complete range of
            200+ premium construction products.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={
                activeCategory === cat
                  ? {
                      background: 'linear-gradient(135deg, #f5a623, #e8621a)',
                      color: 'white',
                      boxShadow: '0 4px 20px rgba(245,166,35,0.4)',
                    }
                  : {
                      background: 'rgba(255,255,255,0.05)',
                      color: 'rgba(255,255,255,0.6)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal Scroll Product Row */}
        <div
          ref={scrollRef}
          className="horizontal-scroll pb-4"
          style={{ paddingBottom: '20px' }}
        >
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Can&apos;t find what you&apos;re looking for?
          </p>
          <a href="tel:9422773072" className="btn-primary">
            <span>Call for Custom Requirements</span>
          </a>
        </div>
      </div>
    </section>
  );
}
