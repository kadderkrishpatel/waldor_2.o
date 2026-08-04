"use client";
import { Description, Eyebrow, Heading } from "@/src/components/ui/Typography";
import Timeline from "./Timeline";
import { approachData } from "./OurApproach.data";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";

export default function OurApproach() {
  const sectionRef = useSectionReveal();

  return (
    <section ref={sectionRef} className="m-2 lg:m-4 pt-4">
      <div className="rounded-[40px] bg-[#F2E8DB] mx-auto px-6 px-[60px] py-[80px] lg:py-[120px]">
        <div className="mb-10 md:mb-12 lg:mb-16 max-w-[750px] flex flex-col gap-6">
          <Eyebrow variant="secondary">{approachData.eyebrow}</Eyebrow>

          <Heading
            as="h2"
            className="text-[#36403C] lg:text-[64px] leading-[115%]"
            before={approachData.heading.before}
            highlight={approachData.heading.highlight}
          />

          <Description className="text-[#6A655D]">
            {approachData.description}
          </Description>
        </div>

        <Timeline />
      </div>
    </section>
  );
}
