import { cn } from "@/src/lib/utils";

interface DescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Description({ children, className }: DescriptionProps) {
  return (
    <p
      className={cn(
        "font-hanken text-lg lg:text-xl leading-[150%] text-[#F3ECE3]",
        className,
      )}
    >
      {children}
    </p>
  );
}
