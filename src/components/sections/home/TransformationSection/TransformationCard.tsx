"use client";

import type { MutableRefObject } from "react";
import type { Swiper as SwiperType } from "swiper";

import BeforeAfterSlider from "./BeforeAfterSlider";
import { Eyebrow } from "@/src/components/ui/Typography";

interface TransformationCardProps {
  category: string;
  title: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
  swiper: MutableRefObject<SwiperType | null>;
}

export default function TransformationCard({
  duration,
  beforeImage,
  afterImage,
  swiper,
}: TransformationCardProps) {
  return (
    <div className="relative overflow-hidden rounded-[32px] bg-[#F3ECE3]">
      {/* Before / After Image */}
      <div className="relative h-[700px]">
        <BeforeAfterSlider
          beforeImage={beforeImage}
          afterImage={afterImage}
          swiper={swiper}
        />
      </div>

      {beforeImage && (
        <div className="absolute top-6 left-6 bg-[#F3ECE3] px-4 py-2 rounded-[8px] z-1">
          <Eyebrow className="text-[#997B4E] text-[14px]">Before</Eyebrow>
        </div>
      )}

      {afterImage && (
        <div className="absolute top-6 right-6 bg-[#F3ECE3] px-4 py-2 rounded-[8px]">
          <Eyebrow className="text-[#997B4E] text-[14px]">{duration}</Eyebrow>
        </div>
      )}
    </div>
  );
}
