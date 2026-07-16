import Image from "next/image";
import { whyChooseUsData } from "./WhyChooseUsSection.data";
import Button from "@/src/components/ui/Button";
import { Description, Heading } from "@/src/components/ui/Typography";

export default function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-[#3D4844] py-4 sm:py-6 m-2 lg:m-4 rounded-none lg:rounded-[40px]">
      {/* Content Card */}
      <div className="relative z-10 rounded-[24px] sm:rounded-[32px] bg-[#C5A375] min-h-[520px] sm:min-h-[600px] lg:min-h-[750px] px-5 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-30 flex items-center justify-center">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Heading */}
          <Heading
            highlightClassName="text-[#836D4E]"
            before={whyChooseUsData.heading.before}
            highlight={whyChooseUsData.heading.highlight}
          />

          {/* Description */}
          <Description className="mt-4 max-w-[650px] text-sm sm:text-base lg:text-lg">
            {whyChooseUsData.description}
          </Description>

          {/* CTA */}
          <div className="mt-8 sm:mt-10">
            <Button href={whyChooseUsData.button.href}>
              {whyChooseUsData.button.label}
            </Button>
          </div>
        </div>
      </div>

      {/* Left Decorative Image */}
      {whyChooseUsData.leftImage && (
        <div className="pointer-events-none absolute left-0 bottom-0 z-10 md:block">
          <div className="relative w-[160px] h-[280px] lg:w-[271px] lg:h-[450px] blur-[5px] lg:blur-[7px]">
            <Image
              src={whyChooseUsData.leftImage}
              alt=""
              fill
              className="object-contain"
              sizes="(max-width:768px) 160px, 271px"
              priority
            />
          </div>

          <div className="absolute inset-0 from-[#3D4844] via-transparent to-transparent" />
        </div>
      )}

      {/* Right Decorative Image */}
      {whyChooseUsData.rightImage && (
        <div className="pointer-events-none absolute right-0 bottom-0 z-10 sm:block">
          <div className="relative w-[220px] h-[380px] md:w-[320px] md:h-[540px] lg:w-[458px] lg:h-[761px] blur-[5px] lg:blur-[7px]">
            <Image
              src={whyChooseUsData.rightImage}
              alt=""
              fill
              className="object-contain"
              sizes="(max-width:768px) 320px, 458px"
              priority
            />
          </div>

          <div className="absolute inset-0 from-[#3D4844] via-transparent to-transparent" />
        </div>
      )}
    </section>
  );
}
