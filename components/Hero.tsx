import React from 'react';
import Image from 'next/image';

export const Leaf = ({ src, className }: { src: string; className?: string }) => (
  <img 
    src={src} 
    className={`leaf-svg ${className}`} 
    alt="" 
    aria-hidden="true"
  />
);

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 px-4 lg:px-10 overflow-hidden">
      <div className="absolute inset-4 lg:inset-10 rounded-[40px] overflow-hidden">
        <Image 
          src="/assets/waldor/hero-bg.png" 
          alt="Waldor Clinic Hero" 
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 px-6 lg:px-20">
        <div className="space-y-12">
          <div className="space-y-6">
            <span className="text-[14px] font-bold tracking-[0.14em] uppercase text-beige/80">
              London Hair and Skin Clinic
            </span>
            <h1 className="fraunces text-6xl lg:text-[88px] leading-[0.95] text-beige">
              Re-Code Your <br />
              <span className="italic font-light">Skin Chemistry</span> at Waldor
            </h1>
            <p className="max-w-xl text-lg lg:text-[20px] font-semibold leading-relaxed text-beige/90">
              No two skins are the same hence, your journey shouldn’t be either. Powered by AI and advanced South Korean and Japanese innovations, we deliver a luxury experience that’s redefining modern London beauty aesthetics.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button className="btn-gold px-10 py-5 text-[14px] font-bold tracking-[0.14em] uppercase w-full sm:w-auto text-center">
              Book a Consultation
            </button>
            <button className="btn-outline px-10 py-5 text-[14px] font-bold tracking-[0.14em] uppercase w-full sm:w-auto text-center">
              Explore Plans
            </button>
          </div>
          
          <div className="flex flex-wrap items-center gap-8 lg:gap-16 pt-12 border-t border-beige/10">
            <div>
              <span className="block text-[13px] text-gold/80 mb-1">Trusted by clients</span>
              <span className="fraunces text-2xl lg:text-[28px]">1000+</span>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gold/30"></div>
            <div>
              <span className="block text-[13px] text-gold/80 mb-1">Google Ratings</span>
              <div className="flex items-center gap-2">
                <span className="fraunces text-2xl lg:text-[28px]">4.9</span>
                <div className="flex text-gold text-xs">★★★★★</div>
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gold/30"></div>
            <div>
              <span className="block text-[13px] text-gold/80 mb-1">Years of Experience</span>
              <span className="fraunces text-2xl lg:text-[28px]">15+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
