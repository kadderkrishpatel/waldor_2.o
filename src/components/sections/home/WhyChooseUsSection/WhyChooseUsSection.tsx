import Link from "next/link";
import { whyChooseUsData } from "./WhyChooseUsSection.data";
import Image from "next/image";
import Button from "@/src/components/ui/Button";
import { Description, Heading } from "@/src/components/ui/Typography";

export default function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-[#3D4844] py-5 lg:m-4">
      <div className="relative z-10 rounded-[32px] bg-[#C5A375] h-[750px] px-6 py-30 lg:px-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Heading */}
          <Heading
            highlightClassName="text-[#836D4E]"
            before={whyChooseUsData.heading.before}
            highlight={whyChooseUsData.heading.highlight}
          />

          {/* Description */}
          <Description className="mt-[16px]">
            {whyChooseUsData.description}
          </Description>

          {/* CTA */}
          <div className="mt-[40px]">
            <Button href={whyChooseUsData.button.href}>
              {whyChooseUsData.button.label}
            </Button>
          </div>
        </div>
      </div>

      {/* Left Decorative Image */}
      {whyChooseUsData.leftImage && (
        <div className="pointer-events-none absolute bottom-0 hidden lg:block z-10">
          <div className="relative w-[271.022px] h-[450.483px] blur-[7px]">
            <Image
              src={whyChooseUsData.leftImage}
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* Optional overlay */}
          <div className="absolute inset-0 from-[#3D4844] via-transparent to-transparent" />
        </div>
      )}

      {/* Right Decorative Image */}
      {whyChooseUsData.rightImage && (
        <div className="pointer-events-none absolute right-0 bottom-0 hidden lg:block z-10">
          <div className="relative w-[458px] h-[761px] blur-[7px]">
            <Image
              src={whyChooseUsData.rightImage}
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* Optional overlay */}
          <div className="absolute inset-0 from-[#3D4844] via-transparent to-transparent" />
        </div>
      )}
    </section>
  );
}
