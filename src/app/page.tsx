'use client';
import { useState, useEffect } from 'react';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Products from '@/components/Products';
import Workers from '@/components/Workers';
import Gallery from '@/components/Gallery';
import WhyUs from '@/components/WhyUs';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  // Initialize Lenis smooth scroll after load
  useEffect(() => {
    if (!loaded) return;

    let lenis: import('@studio-freight/lenis').default | null = null;

    (async () => {
      const Lenis = (await import('@studio-freight/lenis')).default;
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function raf(time: number) {
        if (lenis) lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    })();

    return () => {
      if (lenis) lenis.destroy();
    };
  }, [loaded]);

  // Floating WhatsApp Button
  const FloatingCTA = () => (
    <div
      className="fixed bottom-6 right-6 z-[900] flex flex-col gap-3"
      style={{ display: loaded ? 'flex' : 'none' }}
    >
      {/* WhatsApp */}
      <a
        href="https://wa.me/919422773072"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 animate-float"
        style={{
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          boxShadow: '0 8px 25px rgba(37,211,102,0.4)',
        }}
        aria-label="WhatsApp Vijay Traders"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Call Button */}
      <a
        href="tel:9422773072"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
        style={{
          background: 'linear-gradient(135deg, #f5a623, #e8621a)',
          boxShadow: '0 8px 25px rgba(245,166,35,0.4)',
          animationDelay: '1s',
        }}
        aria-label="Call Vijay Traders"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      </a>
    </div>
  );

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}

      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.6s ease',
        }}
      >
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <About />
          <Products />
          <Workers />
          <Gallery />
          <WhyUs />
          <Reviews />
          <Contact />
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </>
  );
}
