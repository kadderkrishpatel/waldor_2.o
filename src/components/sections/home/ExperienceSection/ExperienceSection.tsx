import Image from "next/image";
import { experienceData } from "./ExperienceSection.data";
import ExperienceCard from "./ExperienceCard";
import { Eyebrow, Heading, Description } from "@/src/components/ui/Typography";

export default function ExperienceSection() {
  const cardPosition = {
    top: "top-[-40%] left-1/2 -translate-x-1/2 -translate-y-10",
    left: "left-0 top-1/2 -translate-x-20 -translate-y-1/2",
    right: "right-0 top-1/2 translate-x-20 -translate-y-1/2",
    bottom: "bottom-[-40%] left-1/2 -translate-x-1/2 translate-y-10",
  };

  return (
    <section className="relative rounded-[40px] bg-[#EBE0D1] py-[120px] lg:m-4 overflow-hidden">
      <Image
        src="/assets/waldor/exp-leaf-top.png"
        alt=""
        width={254.672}
        height={421.983}
        className="absolute right-0 top-0"
      />

      <div className="mx-auto px-6 lg:px-[60px]">
        {/* Heading */}

        <div className="max-w-full">
          <Eyebrow variant="secondary">{experienceData.eyebrow}</Eyebrow>

          <Heading
            className="mt-4 text-[#29302D]"
            before={experienceData.heading.before}
            highlight={experienceData.heading.highlight}
          />

          <Description className="mt-6 text-[#423627]">
            {experienceData.description}
          </Description>
        </div>

        {/* Main Area */}

        <div className="relative mt-[300px] mb-[250px] flex justify-center">
          <div className="relative h-[554.107px] w-[1064.215px]">
            <Image
              src="/assets/waldor/exp-star.svg"
              alt=""
              width={80}
              height={80}
              className="absolute right-[13%] top-[-30%] bg-[#ebe0d1] opacity-100 z-2"
            />

            {/* Golden Border */}
            <div
              className="absolute inset-0 border-[3px] border-[#C8A66B] z-1"
              style={{
                borderRadius: "50%",
                transform: "rotate(-49deg)",
                borderRightWidth: "0",
              }}
            />

            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: "ellipse(46% 48% at 50% 50%)",
                transform: "rotate(-40deg)",
              }}
            >
              {/* Counter Rotate Image */}
              <div
                className="relative h-[800px] w-full"
                style={{
                  transform: "rotate(40deg) scale(1.2)",
                }}
              >
                <Image
                  src={experienceData.image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Cards */}

            {experienceData.cards.map((card) => (
              <ExperienceCard
                key={card.id}
                title={card.title}
                description={card.description}
                icon={card.icon}
                className={cardPosition[card.id as keyof typeof cardPosition]}
              />
            ))}
          </div>
        </div>
      </div>

      <Image
        src="/assets/waldor/exp-leaf-bottom.png"
        alt=""
        width={343.993}
        height={371.024}
        className="absolute right-0 bottom-0"
      />
    </section>
  );
}
