"use client";
import { Eyebrow, Heading } from "@/src/components/ui/Typography";
import BenefitList from "./BenefitList";
import { benefitData } from "./BenefitsSection.data";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";

export default function BenefitsSection() {
  const sectionRef = useSectionReveal();

  return (
    <section ref={sectionRef} className="m-2 lg:m-4 py-5">
      <div className="rounded-[40px] bg-[#3D4945] mx-auto px-6 lg:px-[60px] lg:pt-[120px] pt-[80px]">
        <div className="mb-10 md:mb-12 lg:mb-16 flex flex-col gap-6">
          {/* Header */}
          <div className="max-w-[850px]">
            <Eyebrow variant="secondary">{benefitData.eyebrow}</Eyebrow>

            <Heading
              as="h2"
              className="mt-4 text-[#F1ECE4]"
              before={benefitData.heading.before}
              highlight={benefitData.heading.highlight}
            />
          </div>

          {/* Benefits */}
          <BenefitList />
        </div>
      </div>
    </section>
  );
}
