import { asset } from "@/src/lib/assets";

export const experienceData = {
  eyebrow: "BEYOND THE SURFACE",
  bottomDecorationImage: asset("/assets/waldor/exp-leaf-bottom.png"),
  topDecorationImage: asset("/assets/waldor/exp-leaf-top.png"),

  heading: {
    before: "Experience",
    highlight: "The Waldor Shift",
  },

  description:
    "We didn't enter the industry to follow the rules; we came to redefine them. Here is how we elevate your experience beyond the ordinary.",

  image: asset("/assets/waldor/experience-image.png"),

  cards: [
    {
      id: "top",
      title: "Opulent Ritual",
      icon: asset("/assets/waldor/ritual-icon.png"),
      description:
        "Unrivaled, elevated care that completely transforms your standard clinical experience.",
    },
    {
      id: "left",
      title: "Radical Transparency",
      icon: asset("/assets/waldor/transparency-icon.png"),
      description:
        "No trend-chasing or empty promises just undeniable results for your visage.",
    },
    {
      id: "right",
      title: "Molecular Longevity",
      icon: asset("/assets/waldor/molecule-icon.png"),
      description:
        "We manipulate skin health at a cellular level, so your glow never checks out.",
    },
    {
      id: "bottom",
      title: "Personalised Treatments",
      icon: asset("/assets/waldor/personalised-icon.png"),
      description:
        "Every treatment plan is completely tailored to your defining traits.",
    },
  ],
};
