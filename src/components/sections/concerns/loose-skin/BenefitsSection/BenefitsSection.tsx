"use client";
import { Eyebrow, Heading, Description } from "@/src/components/ui/Typography";
import BenefitList from "./BenefitList";
import { benefitSections } from "./BenefitsSection.data";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";
import clsx from "clsx";

interface BenefitsSectionProps {
  items: keyof typeof benefitSections;
}

export default function BenefitsSection({ items }: BenefitsSectionProps) {
  const sectionRef = useSectionReveal();
  const section = benefitSections[items];

  console.log(section);

  return (
    <section ref={sectionRef} className="m-2 py-5 lg:m-4">
      <div className="mx-auto rounded-[40px] bg-[#3D4945] px-6 pt-[80px] lg:px-[60px] lg:pt-[120px]">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 lg:mb-16">
          {/* Header */}
          <div
            className={clsx(
              section.tag == "preventions" ? "w-full" : "max-w-[1050px]",
            )}
          >
            <Eyebrow variant="secondary">{section.eyebrow}</Eyebrow>

            <Heading
              as="h2"
              className="mt-4 text-[#F1ECE4]"
              before={section.heading.before}
              highlight={section.heading.highlight}
            />

            {section.description && (
              <Description className="mt-5 max-w-[700px] text-[#F1ECE4]/70">
                {section.description}
              </Description>
            )}
          </div>

          {/* Benefits */}
          <BenefitList items={section.items} />
        </div>
      </div>
    </section>
  );
}
