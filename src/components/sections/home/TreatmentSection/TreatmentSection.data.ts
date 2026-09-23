import { asset } from "@/src/lib/assets";
import { TreatmentSectionProps } from "./TreatmentSection.types";

export const treatmentData: TreatmentSectionProps = {
  eyebrow: "Target Treatment Path",
  topDecorationImg: asset("/assets/waldor/begin-top-left.png"),
  bottomDecorationImg: asset("/assets/waldor/begin-bottom.png"),
  heading: {
    before: "What is Your Main Focus",
    highlight: "Today?",
    after: "",

     
  },
  description:
    "Every cellular concern requires a targeted treatment. Select your focus area below to unlock a costume, result-driven solution designed exclusively for you. ",
  treatments: [
    {
      title: "Skin",
      description: "Dullness, Pigmentation & Texture",
      image: asset("/assets/waldor/skin-cat.jpg"),
      href: "/treatments/hydra-glass",
    },
    {
      title: "Body",
      description: "Muscle Growth & Chiselled Physique",
      image: asset("/assets/waldor/body-cat.jpg"),
      href: "/treatments/body-treatment",
      offset: true,
    },
    {
      title: "Face",
      description: "Acne, Scarring & Wrinkles",
      image: asset("/assets/waldor/face-cat.jpg"),
      href: "/treatments/waldor-signature",
    },
  ],
};
