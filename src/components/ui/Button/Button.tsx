"use client";

import Link from "next/link";
import { cn } from "@/src/lib/utils";
import { ButtonProps } from "./Button.types";

const variants = {
  primary: "bg-[#323C38] text-[#EBE0D1] hover:bg-[#28302D] active:bg-[#28302D]",

  secondary:
    "border border-[#E4E6E5]/80 bg-white/10 text-white hover:bg-white/20",

  outline:
    "border border-[#323C38] text-[#323C38] hover:bg-[#323C38] hover:text-white",

  ghost: "text-[#323C38] hover:bg-black/5",

  gold: "bg-[#C6A26D] text-[#29302D] hover:bg-[#D2B07C] active:bg-[#B58D53]",
};

const sizes = {
  sm: `min-h-10 px-4 py-2 text-[11px] tracking-[1.4px] sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 lg:text-xs lg:tracking-[1.6px]`,
  md: `min-h-11 px-5 py-3 text-xs tracking-[1.6px] sm:px-6 lg:px-7 lg:py-4 lg:text-sm lg:tracking-[1.8px]`,
  lg: `min-h-12 px-6 py-3 text-xs tracking-[1.8px] sm:px-7 sm:py-3.5 lg:px-8 lg:py-5 lg:text-sm lg:tracking-[1.96px] xl:px-9 2xl:px-10`,
};

export default function Button({
  children,
  href,
  target,
  rel,
  onClick,
  variant = "primary",
  size = "lg",
  className,
  disabled,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    `inline-flex items-center justify-center rounded-full font-hanken font-semibold uppercase whitespace-nowrap transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A26D] focus-visible:ring-offset-2`,
    variants[variant],
    sizes[size],
    disabled && "pointer-events-none opacity-50",
    className,
  );

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
