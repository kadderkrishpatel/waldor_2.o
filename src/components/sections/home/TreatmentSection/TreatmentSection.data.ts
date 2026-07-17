import { TreatmentSectionProps } from "./TreatmentSection.types";

export const treatmentData: TreatmentSectionProps = {
  eyebrow: "YOUR SKIN. AS A CANVAS",
  topDecorationImg: "https://avnf4gmjhip1rpon.private.blob.vercel-storage.com/assets/waldor/begin-top-left.png",
  bottomDecorationImg: "https://avnf4gmjhip1rpon.private.blob.vercel-storage.com/assets/waldor/begin-bottom.png",
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
      image: "https://avnf4gmjhip1rpon.private.blob.vercel-storage.com/assets/waldor/skin-cat.jpg",
      href: "/treatments/skin",
    },
    {
      title: "Body",
      description: "Muscle Growth & Chiseled Physiqu",
      image: "https://avnf4gmjhip1rpon.private.blob.vercel-storage.com/assets/waldor/body-cat.jpg",
      href: "/treatments/face",
      offset: true,
    },
    {
      title: "Face",
      description: "Acne, Scarring & Wrinkles",
      image: "https://avnf4gmjhip1rpon.private.blob.vercel-storage.com/assets/waldor/body-cat.jpg",
      href: "/treatments/hair",
    },
  ],
};
