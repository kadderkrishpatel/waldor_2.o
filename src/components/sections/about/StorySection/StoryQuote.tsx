"use client";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";

interface StoryQuoteData {
  title: string;
  description: string;
  author?: string;
  role?: string;
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
        py-12
        sm:m-3
        sm:rounded-[28px]
        sm:py-14
        lg:m-4
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
            max-w-[900px]
            font-fraunces
            text-3xl
            font-[400]
            italic
            leading-[1.15]
            text-[#3D4844]
            sm:text-4xl
            lg:text-[52px]
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
            sm:max-w-none
            sm:text-lg
            sm:leading-8
          "
        >
          {quote.description}
        </p>

        {quote.author && (
          <div
            data-reveal
            data-direction="left"
            className="
              mt-8
              sm:mt-9
              lg:mt-10
            "
          >
            <p
              className="
                font-fraunces
                text-xl
                font-medium
                text-[#3D4844]
                sm:text-2xl
              "
            >
              {quote.author}
            </p>

            {quote.role && (
              <p
                className="
                  mt-1
                  text-sm
                  text-[#7D6A4E]
                "
              >
                {quote.role}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
