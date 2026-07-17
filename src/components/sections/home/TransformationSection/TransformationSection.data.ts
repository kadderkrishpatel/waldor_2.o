import { asset } from "@/src/lib/assets";
import { TransformationSectionProps } from "./TransformationSection.types";

export const transformationData: TransformationSectionProps = {
  eyebrow: "THE TRANSFORMATION ARCHIVES",
  heading: {
    before: "Showcasing",
    highlight: "The WALDOR Effect",
    after: "",
  },
  description:
    "We don't just promise a change; we document it. Explore the undeniable, unfiltered evolutions that prove exactly what happens when clinical precision meets couture radiance.",
  transformations: [
    {
      title: "HydraGlass™ Skin Transformation",
      category: "GLASS SKIN",
      beforeImage: asset("/assets/waldor/before-1.png"),
      afterImage: asset("/assets/waldor/after-1.png"),
      duration: "AFTER · WEEK 12",
    },
    {
      title: "Pigmentation Correction",
      category: "PIGMENTATION",
      beforeImage: asset("/assets/waldor/before-2.png"),
      afterImage: asset("/assets/waldor/after-2.png"),
      duration: "8 WEEK PROGRAM",
    },
  ],
};
