"use client";
import { useEffect, useRef, useState } from "react";
import { signatureTreatmentData } from "./SignatureTreatmentSection.data";
import TreatmentItem from "./TreatmentItem";
import FloatingTreatmentImage from "./FloatingTreatmentImage";
import { Eyebrow, Heading } from "@/src/components/ui/Typography";
import Button from "@/src/components/ui/Button";

export default function SignatureTreatmentSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageTop, setImageTop] = useState(0);

  const rowRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const activeTreatment = signatureTreatmentData.treatments[activeIndex];

  const updateImagePosition = (index: number) => {
    const row = rowRefs.current[index];
    if (!row) return;
    setImageTop(row.offsetTop + row.offsetHeight / 2 - 261.04 / 2);
  };

  useEffect(() => {
    updateImagePosition(0);

    const resize = () => updateImagePosition(activeIndex);
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section className="bg-[#3D4844] py-[120px] lg:m-4 overflow-hidden">
      <div className="mx-auto px-6 lg:px-[60px]">
        {/* Header */}

        <div className="mb-20 flex items-end justify-between">
          <div className="max-w-[80%]">
            <Eyebrow variant="secondary">
              {signatureTreatmentData.eyebrow}
            </Eyebrow>

            <Heading
              className="mt-5 text-[#BEC2C1] lg:text-[64px]"
              before={signatureTreatmentData.heading.before}
              highlight={signatureTreatmentData.heading.highlight}
            />
          </div>

          <Button href={signatureTreatmentData.button.href} variant="gold">
            {signatureTreatmentData.button.label}
          </Button>
        </div>

        <div className="relative">
          <FloatingTreatmentImage
            image={activeTreatment.image}
            top={imageTop}
          />

          <div className="border-t border-[#58605D]">
            {signatureTreatmentData.treatments.map((item, index) => (
              <TreatmentItem
                key={item.slug}
                ref={(el) => {
                  rowRefs.current[index] = el;
                }}
                item={item}
                active={activeIndex === index}
                onHover={() => {
                  setActiveIndex(index);
                  updateImagePosition(index);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
