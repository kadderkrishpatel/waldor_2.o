import { heroData } from "./HeroSection.data";
import HeroBackgroundVideo from "./HeroBackgroundVideo";
import { Description, Eyebrow, Heading } from "@/src/components/ui/Typography";
import Button from "@/src/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#3D4844] rounded-[32px] lg:m-4">
      {/* Background Image/video */}

      <div className="absolute inset-0">
        <HeroBackgroundVideo
          src="/assets/waldor/hero-bg.mp4"
          poster="/assets/waldor/hero-bg.png"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#66666696]" />
      <div className="relative z-10 w-[100%] px-[16px] py-[16px] lg:px-[60px] lg:py-[60px] flex flex-col min-h-screen">
        {/* Hero Content */}

        <div className="flex flex-1 items-end justify-between mt-20 lg:flex-row">
          <div className="max-w-3xl">
            <Eyebrow className="mb-6">{heroData.eyebrow}</Eyebrow>
            <Heading
              before={heroData.heading.before}
              highlight={heroData.heading.highlight}
              after={heroData.heading.after}
            />
            <Description className="mt-8 max-w-2xl">
              {heroData.description}
            </Description>

            <div className="flex flex-wrap gap-5 mt-20">
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

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 h-[84px]">
            {heroData.stats.map((stat) => (
              <div
                key={stat.label}
                className={`
                relative
                pr-10
                mr-10
                ${
                  stat.showDivider
                    ? "after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-[84px] after:bg-gradient-to-b after:from-transparent after:via-[#E2D1BA] after:to-transparent"
                    : ""
                }
              `}
              >
                <p className="text-[#E2D1BA] text-sm font-hanken">
                  {stat.label}
                </p>
                <p className="text-[#F3ECE3] text-3xl mt-2 font-heading">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
