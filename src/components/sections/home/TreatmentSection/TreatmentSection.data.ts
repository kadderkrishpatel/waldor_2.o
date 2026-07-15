import { TreatmentSectionProps } from "./TreatmentSection.types";

export const treatmentData: TreatmentSectionProps = {
  eyebrow: "YOUR SKIN. AS A CANVAS",
  heading: {
    before: "Where shall we",
    highlight: "begin?",
    after: "",
  },
  description:
    "Our diagnosis-first approach ensures every routine is as unique as the canvas it treats. Refined luxury, scientifically proven.",
  treatments: [
    {
      title: "Skin",
      description: "Dullness, Pigmentation & Texture",
      image: "/assets/waldor/skin-cat.jpg",
      href: "/treatments/skin",
    },
    {
      title: "Body",
      description: "Muscle Growth & Chiseled Physiqu",
      image: "/assets/waldor/body-cat.jpg",
      href: "/treatments/face",
      offset: true,
    },
    {
      title: "Face",
      description: "Acne, Scarring & Wrinkles",
      image: "/assets/waldor/body-cat.jpg",
      href: "/treatments/hair",
    },
  ],
};
