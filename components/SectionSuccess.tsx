import React from 'react';

export const SectionSuccess = () => {
  return (
    <section className="mx-4 lg:mx-10 my-16 lg:my-20 bg-green-muted rounded-[32px] py-24 lg:py-40 px-6 lg:px-20 relative overflow-hidden">
      <div className="mb-16 lg:mb-20 text-center">
        <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-gold">
          Success Stories
        </span>
        <h2 className="fraunces text-5xl lg:text-[64px] text-beige leading-none mt-4">
          Refined Results, <span className="italic text-gold font-light">Natural Beauty</span>
        </h2>
      </div>

      <div className="max-w-5xl mx-auto bg-green-dark/80 backdrop-blur-sm p-10 lg:p-20 rounded-[24px] shadow-2xl relative border border-white/5">
        <p className="fraunces text-2xl lg:text-[32px] text-beige/90 leading-relaxed font-light italic">
          "The first clinic I visited was refreshing. They explained which treatments I didn’t need, which was a relief. Their conservative care approach led to visible results, and I truly valued their honesty and expertise on my path to better health."
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
              <span className="text-gold font-bold">AK</span>
            </div>
            <span className="text-base lg:text-[17px] text-gold font-medium">A.K. — HydraGlass™ course</span>
          </div>
          
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-white hover:border-gold transition-all duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-white hover:border-gold transition-all duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Decorative quotes */}
        <span className="absolute top-10 left-10 text-9xl text-white/5 fraunces pointer-events-none">“</span>
      </div>

      <div className="absolute right-0 bottom-0 w-96 h-96 bg-gold/5 blur-[100px] rounded-full"></div>
    </section>
  );
};
