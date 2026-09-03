import clsx from "clsx";
import { DisplayNumber } from "@/src/components/ui/Typography";
import { Value } from "./ValuesSection.data";

interface Props {
  value: Value;
  reverse?: boolean;
  isLast?: boolean;
}

export default function ValueCard({
  value,
  reverse = false,
  isLast = false,
}: Props) {
  return (
    <div
      data-reveal
      data-direction={reverse ? "right" : "left"}
      className={clsx(
        "grid items-start",
        "grid-cols-1 gap-6",
        !isLast && "border-b border-white/10",
        "px-0 pt-12",
        isLast ? "pb-8" : "pb-12",
        isLast ? "sm:pt-16 sm:pb-10" : "sm:py-16",
        "lg:grid-cols-[140px_minmax(0,1fr)_100px] lg:gap-8 lg:pt-20",
        isLast ? "lg:pb-12" : "lg:pb-20",
        "xl:grid-cols-[180px_minmax(0,1fr)_120px]",
      )}
    >
      {/* Left Number */}
      <div
        className={clsx(
          "flex items-center",
          "justify-start lg:justify-center",
          reverse && "lg:invisible",
          reverse && "hidden lg:flex",
        )}
      >
        {!reverse && (
          <DisplayNumber
            className="
              leading-none
              text-[64px]
              sm:text-[90px]
              lg:text-[110px]
              xl:text-[140px]
            "
          >
            {value.number}
          </DisplayNumber>
        )}
      </div>

      {/* Mobile Number - Reverse */}
      {reverse && (
        <div className="flex lg:hidden">
          <DisplayNumber
            className="
              leading-none
              text-[64px]
              sm:text-[90px]
            "
          >
            {value.number}
          </DisplayNumber>
        </div>
      )}

      {/* Content */}
      <div className="min-w-0">
        <h3
          className="
            font-fraunces
            text-[28px]
            leading-[1.15]
            text-[#ECE0D1]
            sm:text-[32px]
            lg:text-4xl
          "
        >
          {value.title}
        </h3>

        <p
          className="
            mt-4
            text-base
            leading-7
            text-white
            sm:text-lg
            sm:leading-8
            lg:text-xl
          "
        >
          {value.subtitle}
        </p>

        <p
          className="
            mt-4
            max-w-4xl
            text-sm
            leading-6
            text-[#A5AAA8]
            sm:text-base
            sm:leading-7
            lg:mt-5
            lg:leading-8
          "
        >
          {value.description}
        </p>
      </div>

      {/* Right Number - Desktop */}
      <div
        className={clsx(
          "hidden",
          "items-center justify-center",
          "lg:flex",
          !reverse && "invisible",
        )}
      >
        {reverse && (
          <DisplayNumber
            className="
              leading-none
              text-[110px]
              xl:text-[140px]
            "
          >
            {value.number}
          </DisplayNumber>
        )}
      </div>
    </div>
  );
}
