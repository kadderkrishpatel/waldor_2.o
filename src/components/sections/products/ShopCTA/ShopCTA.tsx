"use client";
import { Eyebrow, Heading } from "@/src/components/ui/Typography";
import Button from "@/src/components/ui/Button";
import { shopCTAData } from "./ShopCTA.data";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";

export default function ShopCTA() {
  const sectionRef = useSectionReveal();
  const { eyebrow, before, highlight, description, button } = shopCTAData;

  return (
    <section ref={sectionRef} className="m-2 lg:m-4">
      <div
        data-reveal
        data-direction="up"
        className="flex flex-col gap-6 rounded-[24px] bg-[#29302D] p-8 sm:flex-row sm:items-center sm:justify-between lg:p-12"
      >
        <div className="max-w-xl">
          <Eyebrow variant="secondary">{eyebrow}</Eyebrow>

          <Heading
            as="h2"
            className="mt-3 text-[32px] lg:text-[40px]"
            before={before}
            highlight={highlight}
          />

          <p
            data-reveal
            data-direction="left"
            className="mt-3 font-hanken text-base font-normal leading-7 text-[#9EA3A1]"
          >
            {description}
          </p>
        </div>

        <Button
          variant="gold"
          href={button.href}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0"
        >
          {button.label}
        </Button>
      </div>
    </section>
  );
}
