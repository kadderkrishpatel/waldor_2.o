"use client";
import Image from "next/image";
import { heroData } from "./HeroSection.data";
import { Description, Eyebrow, Heading } from "@/src/components/ui/Typography";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";

export default function HeroSection() {
  const sectionRef = useSectionReveal();

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden lg:rounded-[32px] m-2 lg:m-4 min-h-[400px] sm:min-h-[400px]"
    >
      {/* right Decorative Image */}
      {heroData.decorationImg && (
        <Image
          src={heroData.decorationImg}
          alt=""
          height={350.512}
          width={211.538}
          className="absolute top-50 right-0 pointer-events-none z-10"
          sizes="(max-width:768px) 160px, 271px"
          priority
        />
      )}

      <div className="relative z-10 flex min-h-[400px] sm:min-h-[400px] flex-col px-5 py-6 sm:px-8 sm:py-8 lg:px-[60px] lg:py-[60px]">
        <div className="mt-30 lg:mt-40 flex flex-1 flex-col justify-end gap-12 2xl:flex-row 2xl:items-end 2xl:justify-between">
          {/* Left */}
          <div className="max-w-full">
            <Eyebrow variant="secondary" className="mb-4 lg:mb-6">
              {heroData.eyebrow}
            </Eyebrow>

            <Heading
              as="h1"
              before={heroData.heading.before}
              highlight={heroData.heading.highlight}
              after={heroData.heading.after}
            />

            <Description className="mt-6 lg:mt-8 max-w-2xl">
              {heroData.description}
            </Description>
          </div>
        </div>
      </div>
    </section>
  );
}
