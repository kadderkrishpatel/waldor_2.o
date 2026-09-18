import { asset } from "@/src/lib/assets";
import { HeroSectionProps } from "./HeroSection.types";

export const heroData: HeroSectionProps = {
  eyebrow: "London Hair and Skin Clinic",

  heading: {
    before: "Korean Glass Skin",
    highlight: "with Longevity",
    after: "Clinic Expertise ", 

  },

  description:
    "No two skins are the same hence, your journey shouldn’t be either. Powered by AI and advanced South Korean and Japanese innovations, we deliver a luxury experience that’s redefining modern London beauty aesthetics.",

  buttons: [
    {
      label: "Start the Conversation",
      href: "/contact",
      variant: "primary",
    },
    
  ],

  backgroundImage: asset("/assets/waldor/hero-bg.png"),

  stats: [
    {
      label: "Trusted by clients",
      value: "1000+",
      showDivider: true,
    },
    {
      label: "Google Ratings",
      value: "4.9",
      specialValue: "★★★★★",
      showDivider: true,
    },
    {
      label: "Years of Experience",
      value: "15+",
      showDivider: false,
    },
  ],
};
