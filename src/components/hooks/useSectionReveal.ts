"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useSectionReveal() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray<HTMLElement>("[data-reveal]");

      elements.forEach((el) => {
        const direction = el.dataset.direction || "up";
        const delay = Number(el.dataset.delay || 0);

        let from = {};

        switch (direction) {
          case "left":
            from = { x: -80 };
            break;
          case "right":
            from = { x: 80 };
            break;
          case "down":
            from = { y: -80 };
            break;
          default:
            from = { y: 80 };
        }

        gsap.from(el, {
          ...from,
          opacity: 0,
          duration: 0.9,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return sectionRef;
}
