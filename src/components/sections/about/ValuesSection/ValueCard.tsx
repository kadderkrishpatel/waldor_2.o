import clsx from "clsx";
import { DisplayNumber } from "@/src/components/ui/Typography";
import { Value } from "./ValuesSection.data";

interface Props {
  value: Value;
  reverse?: boolean;
}

export default function ValueCard({ value, reverse = false }: Props) {
  return (
    <div
      data-reveal
      data-direction="left"
      className="grid grid-cols-[180px_1fr_120px] items-start gap-8 border-b border-white/10 py-20"
    >
      {/* Left Number */}
      <div
        className={clsx(
          "flex justify-start lg:justify-center",
          reverse && "invisible",
        )}
      >
        {!reverse && (
          <DisplayNumber className="text-[80px] lg:text-[140px] leading-none">
            {value.number}
          </DisplayNumber>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-5">
        <h3 className="font-fraunces text-3xl text-[#ECE0D1] lg:text-4xl">
          {value.title}
        </h3>

        <p className="text-xl text-white">{value.subtitle}</p>

        <p className="max-w-4xl leading-8 text-[#A5AAA8]">
          {value.description}
        </p>
      </div>

      {/* Right Number */}
      <div
        className={clsx(
          "flex justify-end lg:justify-center",
          !reverse && "invisible",
        )}
      >
        {reverse && (
          <DisplayNumber className="text-[80px] lg:text-[140px] leading-none">
            {value.number}
          </DisplayNumber>
        )}
      </div>
    </div>
  );
}
