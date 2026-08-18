"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useSectionReveal() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const elements = gsap.utils.toArray<HTMLElement>(
        "[data-reveal]",
        sectionRef.current
      );

      if (!elements.length) return;

      elements.forEach((el) => {
        const direction = el.dataset.direction || "up";
        const delay = Number(el.dataset.delay || 0);

        let from: gsap.TweenVars = {};

        switch (direction) {
          case "left":
            from = {
              x: -80,
            };
            break;

          case "right":
            from = {
              x: 80,
            };
            break;

          case "down":
            from = {
              y: -80,
            };
            break;

          case "up":
          default:
            from = {
              y: 80,
            };
            break;
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

      // Recalculate ScrollTrigger positions
      ScrollTrigger.refresh();
    },
    {
      scope: sectionRef,
      dependencies: [pathname],
      revertOnUpdate: true,
    }
  );

  return sectionRef;
}