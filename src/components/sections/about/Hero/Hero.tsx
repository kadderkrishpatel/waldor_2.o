"use client";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";
import { heroData } from "./Hero.data";
import { Eyebrow, Heading, Description } from "@/src/components/ui/Typography";

export default function Hero() {
  const sectionRef = useSectionReveal();

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden lg:rounded-[32px] m-2 lg:m-4 min-h-[400px] sm:min-h-[400px]"
    >
      <div className="relative z-10 flex min-h-[400px] sm:min-h-[400px] flex-col px-5 py-6 sm:px-8 sm:py-8 lg:px-[60px] lg:py-[60px]">
        <div className="mt-30 lg:mt-40 flex flex-1 flex-col justify-end gap-12 2xl:flex-row 2xl:items-end 2xl:justify-between">
          <div className="max-w-full">
            <Eyebrow variant="secondary">{heroData.eyebrow}</Eyebrow>

            <Heading
              as="h1"
              before={heroData.before}
              highlight={heroData.highlight}
            />

            <Description className="mt-6 lg:mt-8 max-w-4xl">
              {heroData.description}
            </Description>
          </div>
        </div>
      </div>
    </section>
  );
}
