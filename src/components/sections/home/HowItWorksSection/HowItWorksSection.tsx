"use client";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { howItWorksData } from "./HowItWorksSection.data";
import { Eyebrow, Heading } from "@/src/components/ui/Typography";
import { StepCard } from "@/src/components/ui/Cards";
import useHorizontalScroll from "@/src/components/hooks/useHorizontalScroll";

export default function HowItWorksSection() {
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
      className="overflow-hidden rounded-[24px] lg:rounded-[32px] bg-[#EBE0D1] "
    >
      <div className="mx-auto px-5 sm:px-6 lg:px-[60px] py-16 md:py-20 lg:py-[120px]">
        {/* Header */}
        <div className="mb-10 md:mb-14 lg:mb-20 flex flex-col gap-4 lg:gap-5">
          <Eyebrow variant="secondary">{howItWorksData.eyebrow}</Eyebrow>

          <Heading
            className="text-[#29302D] lg:text-[64px]"
            before={howItWorksData.heading.before}
            highlight={howItWorksData.heading.highlight}
          />
        </div>

        {/* Swiper */}
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setReady(true);
          }}
          navigation
          pagination={{
            clickable: true,
          }}
          speed={600}
          spaceBetween={24}
          slidesPerView={1.05}
          watchOverflow
          breakpoints={{
            480: {
              slidesPerView: 1.15,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1.3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
            1536: {
              slidesPerView: 4,
              spaceBetween: 32,
            },
          }}
        >
          {howItWorksData.steps.map((step) => (
            <SwiperSlide key={step.number}>
              <StepCard
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
