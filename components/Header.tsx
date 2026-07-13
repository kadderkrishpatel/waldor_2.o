import React from 'react';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="fixed top-8 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50">
      <nav className="glass-nav rounded-full px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center">
            <span className="fraunces text-2xl font-bold tracking-tighter text-beige">WALDOR</span>
          </Link>
          <div className="hidden lg:flex items-center gap-8 text-[12px] font-medium tracking-[0.14em] uppercase text-cream">
            <Link href="#" className="hover:text-gold transition-colors">Treatments</Link>
            <Link href="#" className="hover:text-gold transition-colors">Concerns</Link>
            <Link href="#" className="hover:text-gold transition-colors">Success Stories</Link>
            <Link href="#" className="hover:text-gold transition-colors">Blog</Link>
            <Link href="#" className="hover:text-gold transition-colors">Contact us</Link>
          </div>
        </div>
        <button className="bg-[#29302d] text-cream px-6 py-2.5 rounded-full text-[12px] font-bold tracking-[0.14em] uppercase hover:bg-black transition-colors">
          Book a Consultation
        </button>
      </nav>
    </header>
  );
};
