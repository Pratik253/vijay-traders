'use client';
import { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    src: '/vijay-traders/photos/WhatsApp Image 2026-07-30 at 11.53.26 PM.jpeg',
    alt: 'Vijay Traders shop exterior with product display',
    caption: 'Store Exterior — Vijay Traders, Yawal',
    span: 'col-span-2',
  },
  {
    src: '/vijay-traders/photos/WhatsApp Image 2026-07-30 at 11.53.27 PM (3).jpeg',
    alt: 'Vijay Traders main shopfront with signage',
    caption: 'Main Shopfront',
    span: '',
  },
  {
    src: '/vijay-traders/photos/WhatsApp Image 2026-07-30 at 11.53.27 PM.jpeg',
    alt: 'Wide compound view of Vijay Traders',
    caption: 'The Compound',
    span: '',
  },
  {
    src: '/vijay-traders/photos/WhatsApp Image 2026-07-30 at 11.53.27 PM (1).jpeg',
    alt: 'Ambuja Cement godowns at Vijay Traders',
    caption: 'Cement Godowns',
    span: '',
  },
  {
    src: '/vijay-traders/photos/WhatsApp Image 2026-07-30 at 11.53.27 PM (2).jpeg',
    alt: 'Vijay Traders storage units numbered 1-4',
    caption: 'Material Storage Yards',
    span: '',
  },
  {
    src: '/vijay-traders/photos/WhatsApp Image 2026-07-30 at 11.53.28 PM.jpeg',
    alt: 'Colorful sanitary ware showroom',
    caption: 'Sanitary Ware Showroom',
    span: '',
  },
  {
    src: '/vijay-traders/photos/WhatsApp Image 2026-07-30 at 11.53.28 PM (1).jpeg',
    alt: 'GI roofing sheets in storage',
    caption: 'Roofing Sheets Stock',
    span: '',
  },
  {
    src: '/vijay-traders/photos/WhatsApp Image 2026-07-30 at 11.53.28 PM (2).jpeg',
    alt: 'Shop interior with counter and staff',
    caption: 'Main Counter & Staff',
    span: 'col-span-2',
  },
  {
    src: '/vijay-traders/photos/WhatsApp Image 2026-07-30 at 11.53.29 PM.jpeg',
    alt: 'TMT steel rebars and construction materials',
    caption: 'TMT Steel Yard',
    span: '',
  },
  {
    src: '/vijay-traders/photos/WhatsApp Image 2026-07-30 at 11.53.29 PM (1).jpeg',
    alt: 'Dedicated field workers at Vijay Traders',
    caption: 'Our Field Workers',
    span: '',
  },
  {
    src: '/vijay-traders/photos/WhatsApp Image 2026-07-30 at 11.53.29 PM (2).jpeg',
    alt: 'Tile showroom with extensive display',
    caption: 'Tile Showroom',
    span: '',
  },
  {
    src: '/vijay-traders/photos/WhatsApp Image 2026-07-30 at 11.53.30 PM.jpeg',
    alt: 'Vijay Traders main building rear view',
    caption: 'Main Building',
    span: '',
  },
  {
    src: '/vijay-traders/photos/WhatsApp Image 2026-07-30 at 11.53.30 PM (1).jpeg',
    alt: 'Senior staff member at outdoor counter',
    caption: 'Expert Staff',
    span: '',
  },
  {
    src: '/vijay-traders/photos/WhatsApp Image 2026-07-30 at 11.53.36 PM.jpeg',
    alt: 'Tree-lined driveway to Vijay Traders',
    caption: 'Compound Driveway',
    span: 'col-span-2',
  },
  {
    src: '/vijay-traders/photos/WhatsApp Image 2026-07-30 at 11.53.37 PM.jpeg',
    alt: 'Workers at Vijay Traders shopfront',
    caption: 'Our Dedicated Team',
    span: '',
  },
];

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIdx(i);
  const closeLightbox = () => setLightboxIdx(null);
  const prevImg = () => setLightboxIdx((p) => (p !== null ? (p - 1 + galleryImages.length) % galleryImages.length : 0));
  const nextImg = () => setLightboxIdx((p) => (p !== null ? (p + 1) % galleryImages.length : 0));

  return (
    <section id="gallery" className="section-padding" style={{ background: '#0d0d0d' }}>
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-badge mx-auto">Photo Gallery</div>
          <h2
            className="font-display font-black mb-4"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', lineHeight: 1.1 }}
          >
            Inside{' '}
            <span className="text-gradient">Vijay Traders</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            A visual tour of our store, materials, showrooms and team.
            Every photo is from the real Vijay Traders.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${img.span}`}
              onClick={() => openLightbox(i)}
              style={{
                border: '1px solid rgba(255,255,255,0.06)',
                gridRow: img.span === 'col-span-2' ? 'span 2' : 'span 1',
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'rgba(0,0,0,0.55)' }}
              >
                <ZoomIn size={28} className="text-white mb-2" />
                <span className="text-white text-xs font-semibold px-3 text-center">
                  {img.caption}
                </span>
              </div>
              {/* Always-visible bottom gradient */}
              <div
                className="absolute bottom-0 left-0 right-0 px-3 py-2 opacity-0 group-hover:opacity-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-5xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                height: 'min(75vh, 600px)',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 40px 80px rgba(0,0,0,0.8)',
              }}
            >
              <Image
                src={galleryImages[lightboxIdx].src}
                alt={galleryImages[lightboxIdx].alt}
                fill
                className="object-contain"
                quality={90}
              />
            </div>

            {/* Caption */}
            <div className="text-center mt-4">
              <p className="font-semibold text-white">{galleryImages[lightboxIdx].caption}</p>
              <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {lightboxIdx + 1} / {galleryImages.length}
              </p>
            </div>

            {/* Navigation */}
            <button
              onClick={prevImg}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
              aria-label="Previous"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            <button
              onClick={nextImg}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
              aria-label="Next"
            >
              <ChevronRight size={20} className="text-white" />
            </button>

            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: 'rgba(255,255,255,0.1)' }}
              aria-label="Close"
            >
              <X size={18} className="text-white" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
