"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import DoctorCard from "./DoctorCard";
import { doctorSectionData } from "./DoctorSection.data";
import { Description, Eyebrow, Heading } from "@/src/components/ui/Typography";

export default function DoctorSection() {
  return (
    <section className="rounded-[40px] bg-[#3D4844] py-[120px] lg:m-4">
      <div className="mx-auto px-6 lg:px-[60px]">
        {/* Heading */}
        <div className="mb-16 max-w-[800px] flex flex-col gap-[24px]">
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
          spaceBetween={32}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
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
