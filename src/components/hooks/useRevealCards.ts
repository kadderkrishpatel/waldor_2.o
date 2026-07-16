"use client";

import { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseRevealCardsProps {
  section: RefObject<HTMLElement | null>;
  cards: RefObject<(HTMLDivElement | null)[]>;
}

export default function useRevealCards({
  section,
  cards,
}: UseRevealCardsProps) {
  useGSAP(
    () => {
      if (!section.current) return;

      const ctx = gsap.context(() => {
        cards.current.forEach((card) => {
          if (!card) return;

          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 120,
              scale: 0.95,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              ease: "power3.out",
              overwrite: "auto",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "bottom 65%",
                toggleActions: "play none none none",
                once: true,
              },
            },
          );
        });
      }, section);

      return () => ctx.revert();
    },
    {
      scope: section,
    },
  );
}
