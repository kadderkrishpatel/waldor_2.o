"use client";
import { careersSectionData } from "./CareersSection.data";
import CareersForm from "./CareersForm";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";

export default function CareersSection() {
  const sectionRef = useSectionReveal();

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#3D4844] py-16 md:py-20 lg:py-[40px] m-2 lg:m-4 overflow-hidden"
    >
      <div className="mx-auto px-2 sm:px-6 lg:px-[60px] flex justify-center">
        <div data-reveal data-direction="left" className="w-full">
          <CareersForm
            heading={careersSectionData.heading}
            disclaimer={careersSectionData.disclaimer}
          />
        </div>
      </div>
    </section>
  );
}
