import { cn } from "@/src/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

const variants = {
  primary: "text-[#333C39]",
  secondary: "text-[#C5A375]",
};

export default function Eyebrow({
  children,
  className,
  variant = "primary",
}: EyebrowProps) {
  return (
    <p
      data-reveal
      data-direction="left"
      className={cn(
        "font-hanken text-sm font-bold uppercase tracking-[0.16em]",
        variants[variant],
        className,
      )}
    >
      {children}
    </p>
  );
}
