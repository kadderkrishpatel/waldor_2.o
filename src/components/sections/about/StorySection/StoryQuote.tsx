"use client";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";

interface StoryQuoteData {
  title: string;
  description: string;
}

interface Props {
  quote: StoryQuoteData;
}

export default function StoryQuote({ quote }: Props) {
  const sectionRef = useSectionReveal();

  return (
    <section
      ref={sectionRef}
      className="
        m-2
        rounded-[24px]
        bg-[#ECE0D1]
        py-16
        sm:m-3
        sm:rounded-[28px]
        sm:py-20
        lg:m-4
        lg:rounded-[32px]
        lg:py-28
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
            max-w-[850px]
            font-fraunces
            text-3xl
            font-[400]
            italic
            leading-[1.15]
            text-[#3D4844]
            sm:text-4xl
            lg:text-[64px]
          "
        >
          {quote.title}
        </h2>

        <p
          data-reveal
          data-direction="left"
          className="
            mx-auto
            mt-6
            max-w-xl
            text-base
            leading-7
            text-[#7D6A4E]
            sm:mt-8
            sm:text-lg
            sm:leading-8
          "
        >
          {quote.description}
        </p>
      </div>
    </section>
  );
}
