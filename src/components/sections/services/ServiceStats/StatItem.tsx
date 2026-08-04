import clsx from "clsx";
import type { ServiceStat } from "./ServiceStats.data";

interface StatItemProps {
  stat: ServiceStat;
}

export default function StatItem({ stat }: StatItemProps) {
  return (
    <div
      data-reveal
      data-direction="left"
      className={clsx(stat.isLast ? "" : "md:border-r md:border-[#ECE0D1]")}
    >
      <div className="flex flex-col gap-3">
        <span className="text-sm leading-6 text-[#ECE0D1]/70 sm:text-base">
          {stat.label}
        </span>

        <span className="font-fraunces text-[38px] lg:text-[48px] leading-none tracking-[-0.04em] text-[#C5A375] sm:text-[64px] lg:text-[80px] flex gap-4 flex-col lg:flex-row items-center">
          {stat.value}

          {stat.specialValue && (
            <span className="text-[#E5B115] text-[28px]">
              {" "}
              {stat.specialValue}
            </span>
          )}
        </span>
      </div>
    </div>
  );
}
