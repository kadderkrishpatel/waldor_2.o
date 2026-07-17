import Image from "next/image";
import { experienceData } from "./ExperienceSection.data";
import ExperienceCard from "./ExperienceCard";
import { Eyebrow, Heading, Description } from "@/src/components/ui/Typography";

export default function ExperienceSection() {
  const cardPosition = {
    top: "lg:top-[-40%] lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-10",
    left: "lg:left-0 lg:top-1/2 lg:-translate-x-20 lg:-translate-y-1/2",
    right: "lg:right-0 lg:top-1/2 lg:translate-x-20 lg:-translate-y-1/2",
    bottom:
      "lg:bottom-[-40%] lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-10",
  };

  return (
    <section className="relative overflow-hidden rounded-[24px] lg:rounded-[40px] bg-[#EBE0D1] py-16 md:py-20 lg:py-[120px] m-2 lg:m-4">
      <Image
        src={experienceData.topDecorationImage}
        alt=""
        width={254.672}
        height={421.983}
        className="absolute right-0 top-0 w-[120px] md:w-[180px] lg:w-auto"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading="eager"
      />

      <div className="mx-auto px-6 lg:px-[60px]">
        {/* Heading */}
        <div className="max-w-full">
          <Eyebrow variant="secondary">{experienceData.eyebrow}</Eyebrow>

          <Heading
            className="mt-4 text-[#29302D] lg:text-[64px]"
            before={experienceData.heading.before}
            highlight={experienceData.heading.highlight}
          />

          <Description className="mt-6 text-[#423627] max-w-[800px]">
            {experienceData.description}
          </Description>
        </div>

        {/* Main Area */}
        <div className="relative mt-12 md:mt-16 lg:mt-[300px] mb-12 md:mb-16 lg:mb-[250px] flex justify-center">
          <div className="relative w-full max-w-[1064px] lg:h-[554px]">
            <Image
              src="https://avnf4gmjhip1rpon.private.blob.vercel-storage.com/assets/waldor/exp-star.svg"
              alt=""
              width={80}
              height={80}
              className="hidden lg:block absolute right-[13%] top-[-30%] bg-[#ebe0d1] z-20"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="eager"
            />

            {/* Golden Border */}
            <div
              className="hidden lg:block absolute inset-0 border-[3px] border-[#C8A66B] z-10"
              style={{
                borderRadius: "50%",
                transform: "rotate(-49deg)",
                borderRightWidth: "0",
              }}
            />

            <div
              className="hidden lg:block absolute inset-0 overflow-hidden"
              style={{
                clipPath: "ellipse(46% 48% at 50% 50%)",
                transform: "rotate(-40deg)",
              }}
            >
              {/* Counter Rotate Image */}
              <div
                className="relative h-[800px] w-full hidden sm:block"
                style={{
                  transform: "rotate(40deg) scale(1.2)",
                }}
              >
                <Image
                  src={experienceData.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="eager"
                />
              </div>
            </div>

            {/* Cards */}
            <div className="grid justify-items-center grid-cols-1 gap-5 md:grid-cols-2 lg:block">
              {experienceData.cards.map((card) => (
                <ExperienceCard
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  className={`relative lg:absolute ${cardPosition[card.id as keyof typeof cardPosition]}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Image
        src={experienceData.bottomDecorationImage}
        alt=""
        width={343.993}
        height={371.024}
        className="absolute right-0 bottom-0 w-[160px] md:w-[220px] lg:w-auto"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading="eager"
      />
    </section>
  );
}
