import React from 'react';
import Image from 'next/image';
import { Leaf } from './Hero';

export const SectionShift = () => {
  return (
    <section className="mx-4 lg:mx-10 bg-cream rounded-[32px] py-24 lg:py-40 px-6 lg:px-20 text-green-dark relative overflow-hidden">
      <div className="max-w-3xl mb-24 lg:mb-32 space-y-6 relative z-10">
        <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-gold-muted">
          Beyond The Surface
        </span>
        <h2 className="fraunces text-5xl lg:text-[64px] leading-none text-green-dark">
          Experience <span className="italic text-gold-muted font-light">The Waldor Shift</span>
        </h2>
        <p className="text-base lg:text-[17px] leading-relaxed opacity-80 max-w-2xl">
          We didn’t enter the industry to follow the rules; we came to redefine them. Here is how we elevate your experience beyond the ordinary
        </p>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 min-h-[600px] lg:min-h-[800px] z-10">
        <div className="lg:col-span-3 flex flex-col gap-16 lg:gap-40 lg:pt-20">
          <ShiftCard 
            icon="✦"
            title="Opulent Ritual"
            description="Unrivaled, elevated care that completely transforms your standard clinical experience."
          />
          <ShiftCard 
            icon="✧"
            title="Radical Transparency"
            description="No trend-chasing or empty promises just undeniable results for your visage."
          />
        </div>

        <div className="lg:col-span-6 flex items-center justify-center py-12 lg:py-0">
          <div className="relative w-full max-w-[500px] lg:max-w-[600px] aspect-square rounded-full overflow-hidden border-4 lg:border-8 border-gold/10 shadow-2xl">
            <Image 
              src="/assets/waldor/hero-bg.png" 
              alt="Experience" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-dark/20 to-transparent"></div>
          </div>
        </div>

        <div className="lg:col-span-3 flex flex-col gap-16 lg:gap-40 lg:pt-60">
          <ShiftCard 
            icon="✵"
            title="Molecular Longevity"
            description="We manipulate skin health at a cellular level, so your glow never checks out."
          />
          <ShiftCard 
            icon="♥"
            title="Personalised Treatments"
            description="Every treatment plan is completely tailored to your defining traits."
          />
        </div>
      </div>

      <Leaf src="/assets/waldor/leaf-5.svg" className="top-10 right-10 w-64 h-64 rotate-12" />
    </section>
  );
};

const ShiftCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => (
  <div className="bg-beige p-8 lg:p-10 rounded-[20px] shadow-sm space-y-4 w-full max-w-[320px] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
    <div className="w-10 h-10 border border-gold-muted/30 rounded-lg flex items-center justify-center text-gold-muted text-xl">
      {icon}
    </div>
    <h4 className="fraunces text-2xl lg:text-[28px]">{title}</h4>
    <p className="text-[14px] lg:text-[15px] text-gold-muted leading-relaxed opacity-80 font-medium">{description}</p>
  </div>
);
