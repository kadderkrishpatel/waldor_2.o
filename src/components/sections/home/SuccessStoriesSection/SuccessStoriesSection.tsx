"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Eyebrow, Heading } from "@/src/components/ui/Typography";
import { successStoriesData } from "./SuccessStoriesSection.data";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function SuccessStoriesSection() {
  return (
    <section className="relative bg-[#3D4844] lg:m-4">
      <Image
        src={successStoriesData.successRightImg}
        alt=""
        width={320}
        height={371}
        className="absolute right-0 top-0"
      />

      <div className="bg-[#515D59] rounded-[32px] py-[120px] overflow-hidden">
        {/* Heading */}
        <div className="px-6 lg:px-[60px] flex flex-col gap-6 mb-[80px]">
          <Eyebrow variant="secondary">{successStoriesData.eyebrow}</Eyebrow>

          <Heading
            className="text-[#29302D] lg:text-[64px]"
            before={successStoriesData.heading.before}
            highlight={successStoriesData.heading.highlight}
          />
        </div>

        {/* Swiper */}

        <Swiper
          modules={[Pagination]}
          slidesPerView={1.35}
          spaceBetween={24}
          loop
          pagination={{
            el: ".success-pagination",
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
            },
            1024: {
              slidesPerView: 1.35,
            },
          }}
          className="!overflow-visible px-6 lg:!pl-[60px]"
        >
          {successStoriesData.testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <article className="flex min-h-[490px] flex-col justify-between rounded-[24px] bg-[#3D4844] p-10">
                <div>
                  {/* Review */}
                  <p className="font-fraunces text-[28px] leading-[1.45] text-[#E3E5E5]">
                    “{item.review}”
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-12 pt-6">
                  <p className="mt-2 text-[17px] tracking-[2px] text-[#7D8582]">
                    {item.name} - {item.treatment}
                  </p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}

        <div className="mt-12 flex justify-start px-6 lg:px-[60px]">
          <div className="success-pagination flex items-center gap-3" />
        </div>
      </div>
    </section>
  );
}
