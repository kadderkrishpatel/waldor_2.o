import React from 'react';
import Link from 'next/link';
import { Leaf } from './Hero';

export const Footer = () => {
  return (
    <footer className="mx-4 lg:mx-10 mt-20 mb-10 bg-[#29302d] rounded-[32px] pt-24 lg:pt-40 px-6 lg:px-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-24 lg:mb-40 relative z-10">
        <h2 className="fraunces text-5xl lg:text-[88px] text-beige leading-[1.0] mb-8">
          Ready for <span className="italic font-light text-gold">lasting vitality?</span>
        </h2>
        <p className="text-base lg:text-[17px] text-beige/80 mb-12">At WALDOR Clinic, every treatment is designed around one thing…YOU!</p>
        <button className="btn-gold px-12 py-6 text-[14px] font-bold tracking-widest uppercase">
          Book Your Glow Session
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 pb-20 border-b border-white/10 relative z-10">
        <div className="space-y-8">
          <h5 className="text-[12px] font-bold tracking-widest text-gold uppercase">Treatments</h5>
          <ul className="space-y-4 text-[13px] text-[#9ea3a1]">
            <li><Link href="#" className="hover:text-white transition-colors">Waldor Signature</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Skin</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Face</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Body</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Hair</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Injectables consultation</Link></li>
          </ul>
        </div>
        <div className="space-y-8">
          <h5 className="text-[12px] font-bold tracking-widest text-gold uppercase">Concerns</h5>
          <ul className="space-y-4 text-[13px] text-[#9ea3a1]">
            <li><Link href="#" className="hover:text-white transition-colors">Acne</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Acne Scarring</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Dull Skin</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Fine Lines & Wrinkles</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Uneven Skin Tone</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Sagging & Loose Skin</Link></li>
          </ul>
        </div>
        <div className="space-y-8">
          <h5 className="text-[12px] font-bold tracking-widest text-gold uppercase">Clinic</h5>
          <ul className="space-y-4 text-[13px] text-[#9ea3a1]">
            <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Book a Consultation</Link></li>
          </ul>
        </div>
        <div className="space-y-8">
          <h5 className="text-[12px] font-bold tracking-widest text-gold uppercase">Contact us</h5>
          <ul className="space-y-6 text-sm lg:text-[15px] text-[#9ea3a1]">
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold">☏</span>
              07464 745 114
            </li>
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold">✉</span>
              info@waldorclinic.com
            </li>
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold mt-1">⚲</span>
              <span>35 Great Portland Street <br/> London W1W 8QQ</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-10 flex flex-col lg:flex-row lg:justify-between items-center gap-6 lg:gap-0 text-[12px] text-gold relative z-10">
        <p className="text-center lg:text-left text-[#9ea3a1]">© 2026 Waldor Clinic · Privacy · Terms · Complaints Injectables are prescription-only medicines and are discussed at consultation only.</p>
        <div className="flex gap-6 text-[20px]">
          <Link href="#" className="hover:text-white transition-colors">🝓</Link>
          <Link href="#" className="hover:text-white transition-colors">🝔</Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none select-none pointer-events-none translate-y-1/4">
        <span className="fraunces text-[150px] lg:text-[400px] text-white/5 font-bold tracking-tighter">WALDOR</span>
      </div>

      <Leaf src="/assets/waldor/leaf-9.svg" className="top-20 right-10 w-64 h-64 rotate-45 opacity-20" />
      <Leaf src="/assets/waldor/leaf-8.svg" className="bottom-20 left-10 w-48 h-48 -rotate-12 opacity-10" />
    </footer>
  );
};
