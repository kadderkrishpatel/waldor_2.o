import { asset } from "@/src/lib/assets";
import { TreatmentSectionProps } from "./TreatmentSection.types";

export const treatmentData: TreatmentSectionProps = {
  eyebrow: "Target Treatment Path",
  topDecorationImg: asset("/assets/waldor/begin-top-left.png"),
  bottomDecorationImg: asset("/assets/waldor/begin-bottom.png"),
  heading: {
    before: "What is Your",
    highlight: "Focus Today?",
    after: "",
  },
  description:
    "Every cellular concern requires a targeted intervention. Select your focus area below to unlock a bespoke, result-driven solution designed exclusively for you. ",
  treatments: [
    {
      title: "Skin",
      description: "Dullness, Pigmentation & Texture",
      image: asset("/assets/waldor/skin-cat.jpg"),
      href: "#",
    },
    {
      title: "Body",
      description: "Muscle Growth & Chiseled Physiqu",
      image: asset("/assets/waldor/body-cat.jpg"),
      href: "#",
      offset: true,
    },
    {
      title: "Face",
      description: "Acne, Scarring & Wrinkles",
      image: asset("/assets/waldor/face-cat.jpg"),
      href: "#",
    },
  ],
};
