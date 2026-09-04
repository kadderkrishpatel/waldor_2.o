"use client";
import Image from "next/image";
import { serviceHeroData } from "./ServiceHero.data";
import { Description, Eyebrow, Heading } from "@/src/components/ui/Typography";
import Button from "@/src/components/ui/Button";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";

export default function ServiceHero() {
  const sectionRef = useSectionReveal();
  const { eyebrow, before, highlight, description, image, imageAlt, cta } =
    serviceHeroData;

  return (
    <section ref={sectionRef} className="bg-[#3D4844] m-2 lg:m-4">
      <div className="flex flex-col lg:flex-row lg:min-h-[900px] overflow-hidden rounded-[24px] bg-[#A48761] md:min-h-[800px] lg:rounded-[32px] pt-[150px] px-5 pb-12 sm:px-8 sm:pb-16 lg:px-[60px] lg:pb-[40px] gap-20">
        {/* Hero content */}
        <div className="flex justify-start items-center w-full lg:w-[50%]">
          <div className="w-[600px] flex flex-col gap-5 lg:gap-10">
            <Eyebrow>{eyebrow}</Eyebrow>

            <Heading as="h1" before={before} highlight={highlight} />

            <Description>{description}</Description>

            <div
              data-reveal
              data-direction="left"
              className="mt-10 lg:mt-5 flex flex-col sm:flex-row sm:flex-wrap gap-4 lg:gap-5"
            >
              <Button variant="primary" href={cta.href}>
                {cta.label}
              </Button>
            </div>
          </div>
        </div>

        {/* Treatment Image */}
        <div data-reveal data-direction="right" className="flex h-[500px] justify-center sm:h-[560px] lg:my-20 lg:ml-auto lg:h-[650px] lg:w-[38%] items-center rounded-[24px]">
          <Image
            src={image}
            alt={imageAlt}
            height={794}
            width={640}
            priority
            sizes="(max-width: 1024px) 100vw, 38vw"
            className="object-cover object-center w-full rounded-[24px] h-full"
          />

          {/* Image overlay */}
          <div className="inset-0 bg-gradient-to-b from-transparent via-transparent to-[#3D4844]/70 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#3D4844]/20" />
        </div>
      </div>
    </section>
  );
}
