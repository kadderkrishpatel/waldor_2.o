'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';

export const SectionEffect = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section className="mx-4 lg:mx-10 bg-cream rounded-[32px] py-24 lg:py-40 px-6 lg:px-20 text-green-dark relative overflow-hidden">
      <div className="mb-16 lg:mb-20 space-y-6">
        <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-gold-muted">
          The Transformation Archives
        </span>
        <h2 className="fraunces text-5xl lg:text-[64px] leading-none">
          Showcasing <span className="italic text-gold-muted font-light">The WALDOR Effect</span>
        </h2>
        <p className="max-w-2xl text-base lg:text-[17px] leading-relaxed opacity-80">
          We don't just promise a change; we document it. Explore the undeniable, unfiltered evolutions that prove exactly what happens when clinical precision meets couture radiance.
        </p>
      </div>

      <div 
        ref={containerRef}
        className="relative h-[400px] lg:h-[640px] rounded-[24px] overflow-hidden shadow-2xl group cursor-ew-resize select-none"
        onMouseMove={handleMove}
        onTouchMove={handleMove}
      >
        {/* Before Image (Bottom Layer) */}
        <div className="absolute inset-0">
          <Image 
            src="/assets/waldor/before-1.png" 
            alt="Before Treatment" 
            fill
            className="object-cover"
          />
          <span className="absolute top-6 left-6 lg:top-8 lg:left-8 bg-black/40 px-4 py-1.5 rounded-full text-[12px] lg:text-[14px] font-bold tracking-widest text-white uppercase backdrop-blur-md">
            Before
          </span>
        </div>

        {/* After Image (Top Layer with Clip) */}
        <div 
          className="absolute inset-0"
          style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
        >
          <Image 
            src="/assets/waldor/after-1.png" 
            alt="After Treatment" 
            fill
            className="object-cover"
          />
          <span className="absolute top-6 right-6 lg:top-8 lg:right-8 bg-white/20 px-4 py-1.5 rounded-full text-[12px] lg:text-[14px] font-bold tracking-widest text-white uppercase backdrop-blur-md">
            AFTER · WEEK 12
          </span>
        </div>

        {/* Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white z-10"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-2 border-gold flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M7 16l-4-4 4-4m10 0l4 4-4 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
