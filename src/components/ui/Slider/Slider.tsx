"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Slider({
  items,
  renderItem,
}: {
  items: any[];
  renderItem: (item: any) => React.ReactNode;
}) {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },

        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>{renderItem(item)}</SwiperSlide>
      ))}
    </Swiper>
  );
}
