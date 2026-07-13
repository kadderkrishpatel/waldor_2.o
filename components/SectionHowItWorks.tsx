import React from 'react';

export const SectionHowItWorks = () => {
  const steps = [
    {
      id: '01',
      title: 'Reservation',
      description: 'Book via our platform or contact us directly',
      icon: (
        <svg className="w-8 h-8 text-gold-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: '02',
      title: 'Diagnostic',
      description: 'Begin with your 45-minute in-person skin analysis',
      icon: (
        <svg className="w-8 h-8 text-gold-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: '03',
      title: 'Strategy',
      description: 'Receive your bespoke written treatment plan',
      icon: (
        <svg className="w-8 h-8 text-gold-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: '04',
      title: 'Procedure',
      description: 'Experience your tailored, clinical skin transformation',
      icon: (
        <svg className="w-8 h-8 text-gold-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 4v1m6 4h1m-7 7l1.293-1.293a2.414 2.414 0 013.414 3.414L15.414 18.293A2.414 2.414 0 0112 14.879l1.293-1.293z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="mx-4 lg:mx-10 bg-cream rounded-[32px] py-24 lg:py-40 px-6 lg:px-20 text-green-dark relative overflow-hidden">
      <div className="mb-20 lg:mb-24 space-y-6">
        <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-gold-muted">
          How it works
        </span>
        <h2 className="fraunces text-5xl lg:text-[64px] leading-none">
          Four steps, <span className="italic text-gold-muted font-light">no pressure.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold-muted/10 border border-gold-muted/10 rounded-3xl overflow-hidden">
        {steps.map((step) => (
          <div key={step.id} className="bg-cream p-8 lg:p-12 space-y-8 hover:bg-beige transition-colors duration-500">
            <span className="fraunces italic text-2xl lg:text-[28px] text-gold-muted opacity-40">
              {step.id}
            </span>
            <div className="w-16 h-16 bg-beige rounded-2xl flex items-center justify-center shadow-sm">
              {step.icon}
            </div>
            <div className="space-y-4">
              <h4 className="fraunces text-2xl lg:text-[28px]">{step.title}</h4>
              <p className="text-[14px] lg:text-[15px] text-gold-muted leading-relaxed opacity-80 font-medium">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
