"use client";
import { Eyebrow, Heading } from "@/src/components/ui/Typography";
import { shopHeroData } from "./ShopHero.data";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";

export default function ShopHero() {
  const sectionRef = useSectionReveal();
  const { eyebrow, before, highlight, descriptionLines } = shopHeroData;

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-[1440px] px-5 pb-10 pt-[150px] lg:px-[60px] lg:pb-14 lg:pt-[180px]"
    >
      <Eyebrow variant="secondary">{eyebrow}</Eyebrow>

      <Heading as="h1" className="mt-4" before={before} highlight={highlight} />

      <p
        data-reveal
        data-direction="left"
        className="mt-5 w-full max-w-180 font-hanken text-base font-normal leading-7 text-[#9EA3A1]"
      >
        {descriptionLines.map((line, index) => (
          <span key={line}>
            {line}
            {index < descriptionLines.length - 1 && <br />}
          </span>
        ))}
      </p>
    </section>
  );
}
