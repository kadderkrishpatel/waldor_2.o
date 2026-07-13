import React from 'react';

export const CTABanner = () => {
  return (
    <section className="mx-4 lg:mx-10 my-16 lg:my-20 bg-gold rounded-[32px] py-24 lg:py-32 px-6 lg:px-20 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-10 lg:space-y-12 relative z-10">
        <h2 className="fraunces text-5xl lg:text-[88px] text-white leading-[1.0] max-w-3xl mx-auto">
          Why Choose Our London <span className="italic font-light">Skin And Hair Clinic?</span>
        </h2>
        <p className="text-base lg:text-[17px] leading-relaxed text-white/90 max-w-2xl mx-auto font-medium">
          At Waldor Clinic, we specialize in delivering personalized, judgment-free care with tailored treatment packages. Every journey starts with advanced AI face analysis and expert consultations to build a bespoke plan for your needs.
        </p>
        <button className="bg-[#3d4844] text-white px-10 py-5 rounded-full text-[14px] font-bold tracking-[0.2em] uppercase hover:bg-black transition-all duration-300 transform hover:scale-105 active:scale-95">
          Schedule Your Appointment
        </button>
      </div>

      {/* Decorative blurs */}
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-white/20 blur-[60px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute right-0 top-0 w-80 h-80 bg-white/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
};
