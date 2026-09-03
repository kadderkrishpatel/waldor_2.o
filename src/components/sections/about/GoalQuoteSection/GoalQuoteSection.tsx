"use client";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";
import { goalQuoteData } from "./GoalQuoteSection.data";

export default function GoalQuoteSection() {
  const sectionRef = useSectionReveal();

  return (
    <section
      ref={sectionRef}
      className="
        m-2
        mb-8
        rounded-[24px]
        bg-[#ECE0D1]
        py-12
        sm:m-3
        sm:mb-10
        sm:rounded-[28px]
        sm:py-14
        lg:m-4
        lg:mb-12
        lg:rounded-[32px]
        lg:py-16
      "
    >
      <div
        className="
          container
          mx-auto
          px-5
          text-center
          sm:px-8
        "
      >
        <h2
          data-reveal
          data-direction="left"
          className="
            mx-auto
            max-w-[820px]
            font-fraunces
            text-3xl
            font-[400]
            italic
            leading-[1.15]
            text-[#3D4844]
            sm:text-4xl
            lg:text-[44px]
          "
        >
          {goalQuoteData.title}
        </h2>

        <p
          data-reveal
          data-direction="left"
          className="
            mx-auto
            mt-6
            text-base
            text-[#7D6A4E]
            sm:mt-8
            sm:text-lg
          "
        >
          {goalQuoteData.caption}
        </p>
      </div>
    </section>
  );
}
