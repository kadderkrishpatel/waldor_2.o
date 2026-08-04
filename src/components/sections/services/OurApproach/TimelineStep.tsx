import { TimelineStep as TimelineStepType } from "./types";

interface Props {
  step: TimelineStepType;
}

export default function TimelineStep({ step }: Props) {
  return (
    <div
      data-reveal
      data-direction="left"
      className="relative border-b border-[#D8C9B4]"
    >
      <div className="hidden mb-8 h-2 w-2 rounded-full bg-[#C5A375] lg:relative top-[2px]" />

      <div className="font-fraunces text-[52px] font-light italic leading-none text-[#C5A375]">
        {step.number}
      </div>

      <h3 className="font-fraunces mt-6 max-w-[280px] text-[22px] leading-[1.15] tracking-[-0.03em] text-[#36403C]">
        {step.title}
      </h3>

      <p className="font-hanken mt-5 text-[15px] leading-7 text-[#6A655D] md:mb-10">
        {step.description}
      </p>
    </div>
  );
}
