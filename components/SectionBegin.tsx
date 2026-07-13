import React from 'react';
import Image from 'next/image';
import { Leaf } from './Hero';

export const SectionBegin = () => {
  return (
    <section className="mx-4 lg:mx-10 bg-cream rounded-[32px] py-24 lg:py-32 px-6 lg:px-20 text-green-dark relative overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-start mb-16 lg:mb-20 relative z-10">
        <div className="space-y-4">
          <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-gold-muted">
            Your skin. As a canvas
          </span>
          <h2 className="fraunces text-5xl lg:text-[64px] leading-none">
            Where shall we <span className="italic text-gold-muted font-light">begin?</span>
          </h2>
        </div>
        <p className="max-w-md text-base lg:text-[17px] leading-relaxed opacity-80 pt-6 lg:pt-10">
          Our diagnosis-first approach ensures every routine is as unique as the canvas it treats. Refined luxury, scientifically proven.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-10 lg:gap-12 relative z-10">
        <CategoryCard 
          image="/assets/waldor/skin-cat.jpg"
          title="Skin"
          description="Dullness, Pigmentation & Texture"
        />
        <CategoryCard 
          image="/assets/waldor/body-cat.jpg"
          title="Body"
          description="Muscle Growth & Chiseled Physique"
          className="lg:mt-20"
        />
        <CategoryCard 
          image="/assets/waldor/body-cat.jpg"
          title="Face"
          description="Acne, Scarring & Wrinkles"
        />
      </div>

      {/* Real leaf assets from design */}
      <Leaf src="/assets/waldor/leaf-1.svg" className="top-0 left-1/4 w-32 h-32 opacity-20" />
      <Leaf src="/assets/waldor/leaf-2.svg" className="bottom-0 right-0 w-64 h-64 translate-x-1/4 translate-y-1/4" />
    </section>
  );
};

const CategoryCard = ({ image, title, description, className = "" }: { image: string, title: string, description: string, className?: string }) => (
  <div className={`space-y-8 group cursor-pointer ${className}`}>
    <div className="oval-card">
      <Image 
        src={image} 
        alt={title} 
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-700" 
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
      <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/40 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-300">
        <svg className="w-5 h-5 text-white rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
    <div className="text-center">
      <h3 className="fraunces italic text-4xl lg:text-[48px] font-light text-green-dark">{title}</h3>
      <p className="text-[14px] lg:text-[15px] text-gold-muted uppercase tracking-wider mt-2">{description}</p>
    </div>
  </div>
);
