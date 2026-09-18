import { ElementType } from "react";
import { cn } from "@/src/lib/utils";

interface HeadingProps {
  before?: string;
  highlight?: string;
  after?: string;
  className?: string;
  highlightClassName?: string;
  as?: ElementType;
}

export default function Heading({
  before,
  highlight,
  after,
  className,
  highlightClassName,
  as: Component = "h2",
}: HeadingProps) {
  return (
    <Component
      data-reveal
      data-direction="left"
      className={cn(
        "font-fraunces text-[#F3EDE3] text-[32px] md:text-7xl lg:text-[88px] font-normal leading-[100%] tracking-[-1.76px]",
        className,
      )}
    >
      {before && <>{before} </>}

      {highlight && (
        <span
          className={cn(
            "font-fraunces font-normal italic text-[#C5A375]",
            highlightClassName,
          )}
        >
          {highlight}
        </span>
      )}

      {after && <> {after}</>}
    </Component>
  );
}
