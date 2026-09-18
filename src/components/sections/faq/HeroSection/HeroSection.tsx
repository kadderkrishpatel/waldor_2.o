import Image from "next/image";
import { heroData } from "./HeroSection.data";
import { Description, Eyebrow, Heading } from "@/src/components/ui/Typography";

export default function HeroSection() {
  return (
    <section className="overflow-hidden lg:rounded-[32px] min-h-[400px] sm:min-h-[400px]">
      {/* right Decorative Image */}
      {heroData.decorationImg && (
        <Image
          src={heroData.decorationImg}
          alt=""
          height={350.512}
          width={211.538}
          className="absolute top-50 right-0 pointer-events-none z-10"
          sizes="(max-width:768px) 160px, 271px"
          priority
        />
      )}

      <div className="relative z-10 flex min-h-[400px] sm:min-h-[400px] flex-col pt-6 sm:pt-8 lg:pt-[60px] pb-[20px]">
        <div className="mt-20 lg:mt-40 flex flex-1 flex-col justify-end gap-12 2xl:flex-row 2xl:items-end 2xl:justify-between">
          {/* Left */}
          <div className="max-w-full">
            <Eyebrow variant="secondary" className="mb-4 lg:mb-6">
              {heroData.eyebrow}
            </Eyebrow>

            <Heading
              as="h1"
              className="text-[#29302D]"
              before={heroData.heading.before}
              highlight={heroData.heading.highlight}
              after={heroData.heading.after}
            />

            <Description className="mt-6 lg:mt-8 max-w-[640px] text-[#423627]">
              {heroData.description}
            </Description>
          </div>
        </div>
      </div>
    </section>
  );
}
