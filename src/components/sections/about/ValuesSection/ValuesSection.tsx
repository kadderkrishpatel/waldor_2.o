"use client";
import { Eyebrow, Heading } from "@/src/components/ui/Typography";
import ValueCard from "./ValueCard";
import { valueData, values } from "./ValuesSection.data";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";

export default function ValuesSection() {
  const sectionRef = useSectionReveal();

  return (
    <section ref={sectionRef} className="bg-[#3D4844] pt-32 pb-0">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-24 max-w-4xl text-center">
          <Eyebrow variant="secondary">{valueData.eyebrow}</Eyebrow>

          <Heading
            as="h2"
            className="mt-5 lg:text-[64px]"
            before={valueData.before}
            highlight={valueData.highlight}
          />
        </div>

        {values.map((value, index) => (
          <ValueCard
            key={value.id}
            value={value}
            reverse={index % 2 !== 0}
            isLast={index === values.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
