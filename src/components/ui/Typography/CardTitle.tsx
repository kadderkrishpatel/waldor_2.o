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
      className={cn(
        "text-[36px] font-[300] font-fraunces leading-[46.8px] tracking-[-0.18px] transition-colors duration-300 text-[#ECE0D1]",
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
}
