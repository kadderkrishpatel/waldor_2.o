"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import SocialPost from "./SocialPost";
import { socialPosts } from "./SocialSection.data";

export default function SocialFeed() {
  return (
    <div
      data-reveal
      data-direction="left"
      className="relative -mx-5 mt-8 sm:-mx-8 lg:-mx-10"
    >
      <Swiper
        slidesPerView="auto"
        spaceBetween={8}
        grabCursor
        watchOverflow
        breakpoints={{
          640: {
            spaceBetween: 10,
          },

          1024: {
            spaceBetween: 12,
          },

          1280: {
            spaceBetween: 16,
          },
        }}
        className="!overflow-visible"
      >
        {socialPosts.map((post) => (
          <SwiperSlide key={post.id} className="!h-auto !w-auto">
            <SocialPost post={post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
