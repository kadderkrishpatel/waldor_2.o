import { Hero } from '@/components/Hero';
import { SectionBegin } from '@/components/SectionBegin';
import { CTABanner } from '@/components/CTABanner';
import { SectionShift } from '@/components/SectionShift';
import { SectionVanguards } from '@/components/SectionVanguards';
import { SectionEffect } from '@/components/SectionEffect';
import { SectionServices } from '@/components/SectionServices';
import { SectionSuccess } from '@/components/SectionSuccess';
import { SectionHowItWorks } from '@/components/SectionHowItWorks';
import { SectionBlog } from '@/components/SectionBlog';

export default function Home() {
  return (
    <main className="flex-grow space-y-16 lg:space-y-24">
      <Hero />
      <SectionBegin />
      <CTABanner />
      <SectionShift />
      <SectionVanguards />
      <SectionEffect />
      <SectionServices />
      <SectionSuccess />
      <SectionHowItWorks />
      <SectionBlog />
    </main>
  );
}
