"use client";
import Image from "next/image";
import { whyChooseUsData } from "./WhyChooseUsSection.data";
import Button from "@/src/components/ui/Button";
import { Description } from "@/src/components/ui/Typography";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";

export default function WhyChooseUsSection() {
  const sectionRef = useSectionReveal();

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24"
    >
      {/* Left Decorative Leaf */}
      {whyChooseUsData.leftImage && (
        <div className="pointer-events-none absolute left-0 top-0 z-0 hidden opacity-60 md:block">
          <div className="relative w-[140px] h-[240px] lg:w-[220px] lg:h-[380px]">
            <Image
              src={whyChooseUsData.leftImage}
              alt=""
              fill
              className="object-contain"
              sizes="(max-width:768px) 140px, 220px"
            />
          </div>
        </div>
      )}

      {/* Right Decorative Leaf */}
      {whyChooseUsData.rightImage && (
        <div className="pointer-events-none absolute right-0 bottom-0 z-0 hidden opacity-70 md:block">
          <div className="relative w-[110px] h-[196px] lg:w-[180px] lg:h-[321px]">
            <Image
              src={whyChooseUsData.rightImage}
              alt=""
              fill
              className="object-contain"
              sizes="(max-width:768px) 110px, 180px"
            />
          </div>
        </div>
      )}

      <div className="relative z-10 mx-auto flex max-w-[900px] flex-col items-center px-5 text-center">
        {/* Heading — before/highlight forced onto their own line each, so the word count per line never shifts across screen widths */}
        <h2 className="font-fraunces text-[26px] font-normal leading-[100%] tracking-[-1.76px] sm:text-[36px] md:text-[48px] lg:text-[56px]">
          <span className="block sm:whitespace-nowrap text-[#C5A375]">
            {whyChooseUsData.heading.before}
          </span>
          <span className="mt-2 block sm:whitespace-nowrap font-normal italic text-[#29302D]">
            {whyChooseUsData.heading.highlight}
          </span>
        </h2>

        {/* Description */}
        <Description className="mt-4 max-w-[850px] text-sm sm:text-base lg:text-lg text-[#4E4A3F]">
          {whyChooseUsData.description}
        </Description>

        {/* CTA */}
        <div data-reveal data-direction="top" className="mt-8 sm:mt-10">
          <Button href={whyChooseUsData.button.href}>
            {whyChooseUsData.button.label}
          </Button>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 mx-5 mt-14 sm:mt-16 lg:mt-20 border-t border-[#C8B99F]/50 sm:mx-10 lg:mx-16" />
    </section>
  );
}
