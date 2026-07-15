"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  CardTitle,
  Description,
  DisplayNumber,
} from "@/src/components/ui/Typography";

interface TreatmentItemProps {
  item: {
    slug: string;
    number: string;
    title: string;
    description: string;
  };
  active: boolean;
  onHover: () => void;
}

const TreatmentItem = forwardRef<HTMLAnchorElement, TreatmentItemProps>(
  ({ item, active, onHover }, ref) => {
    return (
      <Link
        ref={ref}
        href={`/treatments/${item.slug}`}
        onMouseEnter={onHover}
        onFocus={onHover}
        className={`
          relative
          flex
          items-center
          gap-8
          border-b
          border-[#59615E]
          py-10
          transition-all
          duration-500
          group
          ${active ? "bg-[#4B5551]" : "hover:bg-[#46504C]"}
        `}
      >
        {/* Number */}
        <div className="w-[80px] shrink-0 text-center">
          <DisplayNumber>{item.number}</DisplayNumber>
        </div>

        {/* Content */}
        <div className="flex-1 max-w-[800px] flex flex-col gap-[24px]">
          <CardTitle
            className={
              active
                ? "text-[#F2EEE7]"
                : "text-[#D8D7D2] group-hover:text-white"
            }
          >
            {item.title}
          </CardTitle>

          <Description className="leading-[24px] font-[100] opacity-70 text-[#BEC2C1] font-hanken lg:text-[15px]">
            {item.description}
          </Description>
        </div>

        {/* Arrow */}
        <div className="ml-auto flex h-12 w-12 items-center justify-center">
          <ArrowUpRight
            size={30}
            strokeWidth={1.5}
            className={`
                transform-gpu
                transition-transform
                duration-300
                ease-[cubic-bezier(0.22,1,0.36,1)]
                origin-center
                ${
                  active
                    ? "rotate-45 text-[#F2EEE7]"
                    : "rotate-0 text-[#AEB4B1] group-hover:rotate-0"
                }
            `}
          />
        </div>
      </Link>
    );
  },
);

TreatmentItem.displayName = "TreatmentItem";

export default TreatmentItem;
