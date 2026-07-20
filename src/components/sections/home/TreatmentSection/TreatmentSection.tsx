"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { treatmentData } from "./TreatmentSection.data";
import TreatmentCard from "./TreatmentCard";
import { Description, Eyebrow, Heading } from "@/src/components/ui/Typography";
import useHorizontalScroll from "@/src/components/hooks/useHorizontalScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function TreatmentSection() {
  const [enableHorizontalScroll, setEnableHorizontalScroll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [ready, setReady] = useState(false);

  useHorizontalScroll({
    section: sectionRef,
    swiper: swiperRef,
    enabled: ready,
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#EBE0D1] rounded-3xl lg:rounded-[40px] py-14 sm:py-16 lg:py-24 xl:py-28 "
    >
      {/* Top Decoration */}
      <Image
        src={treatmentData.topDecorationImg}
        alt=""
        width={131}
        height={174}
        className="absolute top-0 left-1/2 -translate-x-1/2 lg:left-[12%] lg:translate-x-0 pointer-events-none z-10"
      />

      <div className="mx-auto px-5 sm:px-8 lg:px-[60px]">
        {/* Header */}
        <div className="mb-14 lg:mb-24 flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-3xl flex flex-col gap-5">
            <Eyebrow variant="secondary">{treatmentData.eyebrow}</Eyebrow>

            <Heading
              before={treatmentData.heading.before}
              highlight={treatmentData.heading.highlight}
              className="text-[#29302D] text-[36px] sm:text-[44px] lg:text-[56px] xl:text-[64px]"
            />
          </div>

          <Description className="max-w-lg text-[#423627]">
            {treatmentData.description}
          </Description>
        </div>

        {/* ============================= */}
        {/* MOBILE + TABLET HORIZONTAL */}
        {/* ============================= */}
        <div className="block lg:hidden">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setReady(true);
            }}
            allowTouchMove={false}
            slidesPerView={1.05}
            spaceBetween={20}
            speed={600}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              480: {
                slidesPerView: 1.15,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1.25,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.6,
                spaceBetween: 24,
              },
            }}
            className="!overflow-visible"
          >
            {treatmentData.treatments.map((item) => (
              <SwiperSlide key={item.title}>
                <div className="h-[560px] sm:h-[650px]">
                  <TreatmentCard {...item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ============================= */}
        {/* DESKTOP GRID */}
        {/* ============================= */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 items-start">
          {treatmentData.treatments.map((item, index) => (
            <div
              key={item.title}
              className={`w-full h-[760px] xl:h-[850px] ${index === 1 ? "lg:mt-28" : ""}`}
            >
              <TreatmentCard {...item} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Decoration */}
      <Image
        src={treatmentData.bottomDecorationImg}
        alt=""
        width={277}
        height={299}
        className="absolute right-0 bottom-0 hidden lg:block pointer-events-none"
      />
    </section>
  );
}
