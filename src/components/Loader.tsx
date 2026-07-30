'use client';
import { useEffect, useRef, useState } from 'react';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'done'>('loading');
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current!);
          setPhase('done');
          setTimeout(onComplete, 600);
          return 100;
        }
        return prev + Math.random() * 4 + 1;
      });
    }, 50);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center transition-opacity duration-700"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0d0d0d 100%)',
        opacity: phase === 'done' ? 0 : 1,
        pointerEvents: phase === 'done' ? 'none' : 'all',
      }}
    >
      {/* Animated BG geometry */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              border: '1px solid rgba(245,166,35,0.08)',
              top: `${10 + i * 12}%`,
              left: `${5 + i * 15}%`,
              animation: `spin-slow ${10 + i * 5}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`,
            }}
          />
        ))}
        {/* Dust particles */}
        {[...Array(12)].map((_, i) => {
          const pseudoRandom = (i * 0.37) % 1;
          const pseudoRandom2 = (i * 0.61) % 1;
          return (
            <div
              key={`d${i}`}
              className="absolute rounded-full"
              style={{
                width: `${2 + pseudoRandom * 3}px`,
                height: `${2 + pseudoRandom * 3}px`,
                background: 'rgba(245,166,35,0.5)',
                left: `${10 + i * 7}%`,
                bottom: `${20 + (i % 4) * 15}%`,
                animation: `dust-particle ${3 + pseudoRandom2 * 4}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          );
        })}
      </div>

      {/* VT Monogram */}
      <div className="relative z-10 mb-10 text-center">
        <div
          className="w-24 h-24 mx-auto mb-6 rounded-2xl flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, rgba(245,166,35,0.15), rgba(232,98,26,0.1))',
            border: '1px solid rgba(245,166,35,0.3)',
            boxShadow: '0 0 40px rgba(245,166,35,0.2)',
          }}
        >
          <span
            className="font-display font-black text-4xl"
            style={{
              background: 'linear-gradient(135deg, #f5a623, #e8621a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            VT
          </span>
        </div>

        <h1 className="font-display font-black text-4xl tracking-widest text-white mb-2">
          VIJAY TRADERS
        </h1>
        <p className="text-sm tracking-[4px] uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Building Trust Since 1992
        </p>
      </div>

      {/* Progress Bar */}
      <div className="relative z-10 w-72">
        <div
          className="h-1 rounded-full overflow-hidden mb-3"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        >
          <div
            className="h-full rounded-full transition-all duration-100 ease-out"
            style={{
              width: `${Math.min(progress, 100)}%`,
              background: 'linear-gradient(90deg, #f5a623, #e8621a)',
              boxShadow: '0 0 10px rgba(245,166,35,0.6)',
            }}
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Loading Experience
          </span>
          <span
            className="text-sm font-bold font-display"
            style={{ color: '#f5a623' }}
          >
            {Math.min(Math.floor(progress), 100)}%
          </span>
        </div>
      </div>
    </div>
  );
}
