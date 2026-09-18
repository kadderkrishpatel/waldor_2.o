"use client";

import { forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
    image?: string;
    href: string;
  };
  active: boolean;
  onHover: () => void;
}

const TreatmentItem = forwardRef<HTMLAnchorElement, TreatmentItemProps>(
  ({ item, active, onHover }, ref) => {
    return (
      <Link
        ref={ref}
        href={item.href}
        onMouseEnter={onHover}
        onFocus={onHover}
        className={`group relative flex flex-col lg:flex-row items-start lg:items-center gap-5 lg:gap-8 border-b border-[#59615E] py-6 md:py-8 lg:py-10 transition-all duration-500 ${active ? "bg-[#4B5551]" : "hover:bg-[#46504C]"}`}
      >
        {/* Number */}
        <div
          data-reveal
          data-direction="left"
          className="w-full lg:w-[80px] shrink-0 text-left lg:text-center"
        >
          <DisplayNumber>{item.number}</DisplayNumber>
        </div>

        {/* Mobile / Tablet Image */}
        {item.image && (
          <div className="relative block lg:hidden w-full aspect-[16/10] overflow-hidden rounded-2xl">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width:768px) 100vw, (max-width:1024px) 90vw, 0vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex-1 max-w-full lg:max-w-[800px] flex flex-col gap-3 lg:gap-6">
          <CardTitle
            className={
              active
                ? "text-[#F2EEE7]"
                : "text-[#D8D7D2] group-hover:text-white"
            }
          >
            {item.title}
          </CardTitle>

          <Description className="font-hanken font-light text-[#BEC2C1] opacity-70 leading-6 text-sm lg:text-[15px]">
            {item.description}
          </Description>
        </div>

        {/* Arrow */}
        <div className="self-end lg:self-center lg:ml-auto flex items-center justify-center h-10 w-10 lg:h-12 lg:w-12">
          <ArrowUpRight
            size={24}
            strokeWidth={1.5}
            className={`transform-gpu transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${active ? "rotate-45 text-[#F2EEE7]" : "rotate-0 text-[#AEB4B1]"}`}
          />
        </div>
      </Link>
    );
  },
);

TreatmentItem.displayName = "TreatmentItem";

export default TreatmentItem;
