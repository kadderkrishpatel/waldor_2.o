import React from 'react';
import Image from 'next/image';

export const SectionServices = () => {
  const services = [
    {
      id: '01',
      title: 'HydraGlass™ Facial',
      description: 'A smoothing dermal treatment that gently refines texture and locks in moisture to instantly unveil a flawless, poreless glass-skin glow.',
    },
    {
      id: '02',
      title: 'Salmon Sperm Polynucleotide',
      description: 'Experience regenerative DNA therapy that repairs deep cellular damage, instantly boosting your skin’s hydration and youthful bounce.',
    },
    {
      id: '03',
      title: 'Waldor™ Peptide Signature Blends',
      description: 'Cellular molecules engineered to trigger collagen production, fortify your skin barrier and drive deep structural regeneration.',
    },
    {
      id: '04',
      title: 'Hair Growth Treatment',
      description: 'Advanced biological growth factors awaken resting roots, boosting circulation to deliver visibly thicker, fuller and healthier hair.',
    },
  ];

  return (
    <section className="py-24 lg:py-40 px-6 lg:px-20 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-20 lg:mb-24 gap-8">
        <div className="space-y-4">
          <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-gold">
            Signature skincare treatments
          </span>
          <h2 className="fraunces text-5xl lg:text-[64px] leading-none text-ink-light/80">
            Our Most <span className="italic text-gold font-light">Obsessed-Over Services</span>
          </h2>
        </div>
        <button className="text-[14px] font-bold tracking-widest uppercase text-gold hover:text-white transition-colors underline underline-offset-8 decoration-gold/30 hover:decoration-white">
          View full menu
        </button>
      </div>

      <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
        <div className="lg:col-span-7 divide-y divide-beige/10">
          {services.map((service) => (
            <div key={service.id} className="group flex items-start gap-8 lg:gap-10 py-10 lg:py-12 cursor-pointer">
              <span className="fraunces italic text-3xl lg:text-[36px] text-gold opacity-40 group-hover:opacity-100 transition-opacity pt-2">
                {service.id}
              </span>
              <div className="flex-1">
                <h4 className="fraunces text-3xl lg:text-[36px] text-ink-light group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-sm lg:text-[15px] text-ink-light opacity-60 mt-4 leading-relaxed max-w-xl group-hover:opacity-90 transition-opacity">
                  {service.description}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full border border-beige/20 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-300 transform group-hover:rotate-45">
                <svg className="w-5 h-5 text-beige group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        
        <div className="lg:col-span-5 hidden lg:block">
          <div className="sticky top-40 rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform hover:scale-[1.02] transition-transform duration-700 aspect-[4/5] relative">
            <Image 
              src="/assets/waldor/service-thumb.jpg" 
              alt="Signature Service" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
