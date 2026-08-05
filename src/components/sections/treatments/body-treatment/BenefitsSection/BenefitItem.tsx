import type { BenefitItem as BenefitItemType } from "./BenefitsSection.types";

interface Props {
  benefit: BenefitItemType;
}

export default function BenefitItem({ benefit }: Props) {
  return (
    <div
      data-reveal
      data-direction="left"
      className="grid grid-cols-[48px_1fr] gap-6 border-t border-white/10 py-6 md:grid-cols-[48px_120px_1fr] md:gap-8 lg:grid-cols-[68px_420px_1fr] lg:gap-10"
    >
      {/* Number */}
      <div>
        <span className="font-fraunces text-[36px] italic leading-none text-[#C5A375]">
          {benefit.number}
        </span>
      </div>

      {/* Title */}
      <div>
        <h3 className="font-fraunces text-[22px] leading-6 text-[#F1ECE4]">
          {benefit.title}
        </h3>
      </div>

      {/* Description */}
      <div className="col-span-2 md:col-span-1">
        <p className="max-w-[780px] text-[15px] leading-[1.7] text-[#B5B8B3] lg:text-[15px]">
          {benefit.description}
        </p>
      </div>
    </div>
  );
}
