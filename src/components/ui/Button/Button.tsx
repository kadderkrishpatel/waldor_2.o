"use client";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
import { ButtonProps } from "./Button.types";

const variants = {
  primary: "bg-[#323C38] text-[#EBE0D1] hover:bg-[#28302D]",
  secondary:
    "bg-white/10 border border-[#e4e6e5c7] text-white hover:bg-white/20",
  outline:
    "border border-[#323C38] text-[#323C38] hover:bg-[#323C38] hover:text-white",
  ghost: "text-[#323C38] hover:bg-black/5",
  gold: `bg-[#C6A26D] text-[#29302D] font-hanken font-bold tracking-[1.96px] hover:bg-[#D2B07C] active:bg-[#B58D53] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]`,
};

const sizes = {
  sm: "px-5 py-3 text-sm",
  md: "px-7 py-4 text-base",
  lg: "px-8 py-5 text-sm",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "lg",
  className,
  disabled,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center uppercase tracking-[1.96px] rounded-full font-semibold transition-all duration-300",
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
