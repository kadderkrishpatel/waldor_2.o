import Image from "next/image";

import {
  CardTitle,
  Description,
  DisplayNumber,
} from "@/src/components/ui/Typography";

import { cn } from "@/src/lib/utils";

import { StepCardProps } from "./types";

export default function StepCard({
  number,
  title,
  description,
  icon,
  className,
}: StepCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-10 border-l border-[#D8C2A3] px-8 py-6",
        className,
      )}
    >
      <DisplayNumber
        className="
          text-sm
          font-bold
          not-italic
          tracking-[0.08em]
          text-[#3D4844]
        "
      >
        {number}
      </DisplayNumber>

      <div className="relative h-20 w-20">
        <Image src={icon} alt={title} fill className="object-contain" />
      </div>

      <div className="flex flex-col gap-[14px]">
        <CardTitle
          className="
            text-[28px]
            leading-[36px]
            text-[#3D4844]
          "
        >
          {title}
        </CardTitle>

        <Description
          className="
            text-[15px]
            leading-6
            text-[#836D4E]
          "
        >
          {description}
        </Description>
      </div>
    </div>
  );
}
