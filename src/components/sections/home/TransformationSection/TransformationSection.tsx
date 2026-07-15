"use client";

import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { transformationData } from "./TransformationSection.data";
import TransformationCard from "./TransformationCard";

import { Description, Eyebrow, Heading } from "@/src/components/ui/Typography";

export default function TransformationSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="rounded-[40px] bg-[#EBE0D1] py-[120px] lg:m-4 overflow-hidden">
      <div className="mx-auto px-6 lg:px-[60px]">
        {/* Heading */}
        <div className="mb-16 flex flex-col gap-6">
          <Eyebrow variant="secondary">{transformationData.eyebrow}</Eyebrow>

          <Heading
            className="text-[#29302D]"
            before={transformationData.heading.before}
            highlight={transformationData.heading.highlight}
          />

          <Description className="max-w-[50%] text-[#423627]">
            {transformationData.description}
          </Description>
        </div>

        {/* Slider */}

        <Swiper
          modules={[Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1.35}
          spaceBetween={24}
          pagination={{
            clickable: true,
            el: ".transformation-pagination",
            bulletClass: "transformation-bullet",
            bulletActiveClass: "transformation-bullet-active",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 1.15,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 1.35,
              spaceBetween: 24,
            },
          }}
        >
          {transformationData.transformations.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="transformation-slide">
                <TransformationCard {...item} swiper={swiperRef} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}

        <div className="mt-[80px]">
          <div className="transformation-pagination flex items-center gap-2" />
        </div>
      </div>
    </section>
  );
}
