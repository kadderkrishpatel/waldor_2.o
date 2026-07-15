import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/src/lib/utils";

interface DisplayNumberProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export default function DisplayNumber({
  children,
  className,
  ...props
}: DisplayNumberProps) {
  return (
    <span
      className={cn(
        "font-fraunces text-[32px] italic leading-none tracking-[-0.02em] text-[#C6A26D]",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
