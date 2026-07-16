"use client";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import DoctorCard from "./DoctorCard";
import { doctorSectionData } from "./DoctorSection.data";
import { Description, Eyebrow, Heading } from "@/src/components/ui/Typography";
import useHorizontalScroll from "@/src/components/hooks/useHorizontalScroll";

export default function DoctorSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useHorizontalScroll({
    section: sectionRef,
    swiper: swiperRef,
  });

  return (
    <section
      ref={sectionRef}
      className="rounded-[24px] lg:rounded-[40px] bg-[#3D4844] m-2 py-16 md:py-20 lg:py-[120px] overflow-hidden "
    >
      <div className="mx-auto px-6 lg:px-[60px]">
        {/* Heading */}
        <div className="mb-10 md:mb-12 lg:mb-16 max-w-[800px] flex flex-col gap-4 md:gap-5 lg:gap-6">
          <Eyebrow variant="secondary">{doctorSectionData.eyebrow}</Eyebrow>

          <Heading
            className="text-[#BEC2C1] lg:text-[64px]"
            before={doctorSectionData.heading.before}
            highlight={doctorSectionData.heading.highlight}
          />

          <Description className="text-[#E4E6E5]">
            {doctorSectionData.description}
          </Description>
        </div>

        {/* Swiper */}
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          navigation
          pagination={{
            clickable: true,
          }}
          spaceBetween={24}
          slidesPerView={1.05}
          speed={500}
          allowTouchMove={true}
          watchOverflow={true}
          breakpoints={{
            480: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 1.4,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2.5,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >
          {doctorSectionData.doctors.map((doctor) => (
            <SwiperSlide key={doctor.slug}>
              <DoctorCard {...doctor} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
