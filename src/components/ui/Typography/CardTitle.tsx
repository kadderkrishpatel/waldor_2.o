import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/src/lib/utils";

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export default function CardTitle({
  children,
  className,
  ...props
}: CardTitleProps) {
  return (
    <h3
      data-reveal
      data-direction="left"
      className={cn(
        "text-[28px] font-[300] font-fraunces leading-[36.4px] tracking-[-0.18px] transition-colors duration-300 text-[#ECE0D1]",
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
}
