"use client";
import { mapSectionData } from "./MapSection.data";
import { Eyebrow, Heading } from "@/src/components/ui/Typography";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";

export default function MapSection() {
  const sectionRef = useSectionReveal();

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#3D4844] py-16 md:py-20 lg:py-[40px] m-2 lg:m-4 overflow-hidden"
    >
      <div className="mx-auto px-2 sm:px-6 lg:px-[60px]">
        <div data-reveal data-direction="up" className="mb-8 lg:mb-10">
          <Eyebrow variant="secondary">{mapSectionData.eyebrow}</Eyebrow>

          <Heading
            className="mt-4 text-[#ECE0D1] lg:text-[48px]"
            before={mapSectionData.heading.before}
            highlight={mapSectionData.heading.highlight}
          />
        </div>

        <div
          data-reveal
          data-direction="up"
          className="overflow-hidden rounded-[24px] lg:rounded-[32px] border border-[#7E858240] bg-[#1a1f1d]"
        >
          <iframe
            src={mapSectionData.embedSrc}
            title={mapSectionData.address}
            width="100%"
            height="450"
            style={{ border: 0, filter: "invert(92%) hue-rotate(180deg) contrast(90%)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[350px] w-full sm:h-[420px] lg:h-[450px]"
          />
        </div>
      </div>
    </section>
  );
}
