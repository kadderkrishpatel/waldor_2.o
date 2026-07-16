"use client";

import { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Swiper as SwiperType } from "swiper";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  section: RefObject<HTMLElement | null>;

  // For normal horizontal sections
  track?: RefObject<HTMLDivElement | null>;

  // For Swiper sections
  swiper?: RefObject<SwiperType | null>;
  enabled?: boolean;
}

export default function useHorizontalScroll({
  section,
  track,
  swiper,
  enabled = true,
}: Props) {
  useGSAP(() => {
    const sectionEl = section.current;

    if (!enabled) return;
    if (!sectionEl) return;

    /**
     * ---------------------------------------
     * Swiper Mode
     * ---------------------------------------
     */
    if (swiper?.current) {
      const swiperInstance = swiper.current;

      const trigger = ScrollTrigger.create({
        trigger: sectionEl,

        start: "top top",

        end: () =>
          "+=" + window.innerHeight * (swiperInstance.slides.length + 1),

        pin: true,

        scrub: 1,

        anticipatePin: 1,

        invalidateOnRefresh: true,

        onUpdate(self) {
          const totalSlides = swiperInstance.slides.length - 1;

          const index = Math.min(
            totalSlides,
            Math.round(self.progress * totalSlides),
          );

          if (swiperInstance.activeIndex !== index) {
            swiperInstance.slideTo(index);
          }
        },
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => {
        trigger.kill();
      };
    }

    /**
     * ---------------------------------------
     * Normal Horizontal Track
     * ---------------------------------------
     */
    if (track?.current) {
      const trackEl = track.current;

      const getDistance = () =>
        Math.max(0, trackEl.scrollWidth - sectionEl.clientWidth);

      const tween = gsap.to(trackEl, {
        x: () => -getDistance(),

        ease: "none",

        invalidateOnRefresh: true,

        scrollTrigger: {
          trigger: sectionEl,

          start: "top top",

          end: () => "+=" + (getDistance() + window.innerHeight),

          pin: true,

          scrub: 1,

          anticipatePin: 1,

          invalidateOnRefresh: true,
        },
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    }
  }, [enabled]);
}
