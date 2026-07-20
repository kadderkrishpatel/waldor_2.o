"use client";
import { heroData } from "./HeroSection.data";
import HeroBackgroundVideo from "./HeroBackgroundVideo";
import { Description, Eyebrow, Heading } from "@/src/components/ui/Typography";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";
import Button from "@/src/components/ui/Button";

export default function HeroSection() {
  const sectionRef = useSectionReveal();

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#3D4844] rounded-2xl lg:rounded-[32px] m-2 lg:m-4 min-h-[700px] sm:min-h-[760px] lg:min-h-screen"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <HeroBackgroundVideo
          src="https://xymgm1c0nsa3pqkd.public.blob.vercel-storage.com/assets/waldor/hero-bg.mp4"
          poster="https://xymgm1c0nsa3pqkd.public.blob.vercel-storage.com/assets/waldor/hero-bg.png"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#2d2d2d70]" />

      <div className="relative z-10 flex min-h-[700px] sm:min-h-[760px] lg:min-h-screen flex-col px-5 py-6 sm:px-8 sm:py-8 lg:px-[60px] lg:py-[60px]">
        <div className="mt-80 lg:mt-24 flex flex-1 flex-col justify-end gap-12 lg:flex-row lg:items-end lg:justify-between">
          {/* Left */}
          <div className="max-w-[620px]">
            <Eyebrow className="mb-4 lg:mb-6">{heroData.eyebrow}</Eyebrow>

            <Heading
              before={heroData.heading.before}
              highlight={heroData.heading.highlight}
              after={heroData.heading.after}
            />

            <Description className="mt-6 lg:mt-8 max-w-2xl">
              {heroData.description}
            </Description>

            <div
              data-reveal
              data-direction="top"
              className="mt-10 lg:mt-20 flex flex-col sm:flex-row sm:flex-wrap gap-4 lg:gap-5"
            >
              {heroData.buttons.map((button) => (
                <Button
                  key={button.label}
                  href={button.href}
                  variant={button.variant}
                >
                  {button.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div
            data-reveal
            data-direction="top"
            className="grid w-full grid-cols-3 gap-6 sm:grid-cols-3 lg:w-auto lg:gap-6"
          >
            {heroData.stats.map((stat) => (
              <div
                key={stat.label}
                className={`
                  relative
                  pr-3
                  2xl:pr-10
                  2xl:mr-10
                  ${
                    stat.showDivider
                      ? "after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-[84px] after:w-px after:bg-gradient-to-b after:from-transparent after:via-[#E2D1BA] after:to-transparent"
                      : ""
                  }
                `}
              >
                <p className="text-[#E2D1BA] text-[13px] font-hanken">
                  {stat.label}
                </p>

                <p className="mt-2 text-[28px] sm:text-3xl font-fraunces text-[#F3ECE3]">
                  {stat.value}

                  {stat.specialValue && (
                    <span className="text-[#E5B115] text-[28px]">
                      {" "}
                      {stat.specialValue}
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
