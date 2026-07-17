import { HeroSectionProps } from "./HeroSection.types";

export const heroData: HeroSectionProps = {
  eyebrow: "London Hair and Skin Clinic",

  heading: {
    before: "Re-Code Your",
    highlight: "Skin Chemistry",
    after: "at Waldor",
  },

  description:
    "No two skins are the same hence, your journey shouldn’t be either. Powered by AI and advanced South Korean and Japanese innovations, we deliver a luxury experience that’s redefining modern London beauty aesthetics.",

  buttons: [
    {
      label: "Book a Consultation",
      href: "/contact",
      variant: "primary",
    },
    {
      label: "Explore Plans",
      href: "/treatments",
      variant: "secondary",
    },
  ],

  backgroundImage: "https://avnf4gmjhip1rpon.private.blob.vercel-storage.com/assets/waldor/hero-bg.png",

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
