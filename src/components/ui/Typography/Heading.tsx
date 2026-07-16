import { cn } from "@/src/lib/utils";

interface HeadingProps {
  before?: string;
  highlight?: string;
  after?: string;
  className?: string;
  highlightClassName?: string;
}

export default function Heading({
  before,
  highlight,
  after,
  className,
  highlightClassName,
}: HeadingProps) {
  return (
    <h1
      className={cn(
        "font-fraunces text-[32px] text-[#F3EDE3] text-5xl md:text-7xl lg:text-[90px] font-normal leading-[100%] tracking-[-1.76px]",
        className,
      )}
    >
      {before && <>{before} </>}

      {highlight && (
        <span
          className={cn(
            "text-[#C5A375] font-fraunces font-normal leading-[-1.76px] italic",
            highlightClassName,
          )}
        >
          {highlight}
        </span>
      )}

      {after && <> {after}</>}
    </h1>
  );
}
