import Image from "next/image";
import { howItWorksData } from "./HowItWorksSection.data";
import { Eyebrow, Heading } from "@/src/components/ui/Typography";
import { StepCard } from "@/src/components/ui/Cards";

export default function HowItWorksSection() {
  return (
    <section className="bg-[#EBE0D1] rounded-[32px] lg:m-4">
      <div className="mx-auto px-6 lg:px-[60px] lg:py-[120px]">
        {/* Header */}
        <div className="flex flex-col gap-[20px] mb-[80px]">
          <Eyebrow variant="secondary">{howItWorksData.eyebrow}</Eyebrow>

          <Heading
            className="text-[#29302D] lg:text-[64px]"
            before={howItWorksData.heading.before}
            highlight={howItWorksData.heading.highlight}
          />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {howItWorksData.steps.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
