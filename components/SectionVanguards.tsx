import React from 'react';
import Image from 'next/image';
import { Leaf } from './Hero';

export const SectionVanguards = () => {
  const estheticians = [
    { name: 'Sara Todd', role: 'Skin care specialist', image: '/assets/waldor/est-1.jpg' },
    { name: 'Sara Todd', role: 'Skin care specialist', image: '/assets/waldor/est-2.jpg' },
    { name: 'Sara Todd', role: 'Skin care specialist', image: '/assets/waldor/est-3.jpg' },
    { name: 'Sara Todd', role: 'Skin care specialist', image: '/assets/waldor/est-4.jpg' },
  ];

  return (
    <section className="py-24 lg:py-40 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 lg:mb-20 space-y-6">
          <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-gold">
            Our Skin Vanguards
          </span>
          <h2 className="fraunces text-5xl lg:text-[64px] leading-[1.1] text-ink-light">
            Meet the Estheticians <br className="hidden lg:block" /> Behind <span className="italic text-gold font-light">Your Best Skin Days</span>
          </h2>
          <p className="max-w-2xl text-base lg:text-[17px] text-ink-light leading-relaxed opacity-70">
            Great skin isn’t luck; it’s a discipline. Discover the specialists who sculpt, refine and deliver the glowing transformations our clients rave about.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {estheticians.map((est, i) => (
            <div key={i} className="relative group aspect-[4/5] rounded-[24px] overflow-hidden">
              <Image 
                src={est.image} 
                alt={est.name} 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute bottom-8 left-8 text-beige transform group-hover:translate-y-[-4px] transition-transform duration-500">
                <h4 className="fraunces text-2xl lg:text-[28px]">{est.name}</h4>
                <p className="text-[14px] lg:text-[15px] text-ink-muted mt-1">{est.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Leaf src="/assets/waldor/leaf-6.svg" className="bottom-0 left-0 w-48 h-48 -translate-x-1/2 translate-y-1/2 opacity-30" />
    </section>
  );
};
