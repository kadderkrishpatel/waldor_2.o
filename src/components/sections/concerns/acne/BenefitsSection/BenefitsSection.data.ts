import type {
  AcneIndicationItem,
  PreventionItem,
} from "./BenefitsSection.types";

export const indications: AcneIndicationItem[] = [
  {
    id: "persistent-surface",
    number: "01",
    title: "Persistent Surface Papules and Pustules",
    subtitle: "Small inflamed bumps with visible pus.",
    description:
      "When localized pores become blocked, bacteria and trapped oil trigger inflamed reddish bumps that often develop white or yellow fluid-filled centres.",
  },
  {
    id: "deep-seated-painful-cystic-lesions",
    number: "02",
    title: "Deep-Seated Painful Cystic Lesions",
    subtitle: "Large nodules forming beneath the skin surface.",
    description:
      "Severe inflammation within dermal layers creates firm, tender lumps that remain buried under the surface and cause lasting tissue discomfort.",
  },
  {
    id: "widespread-blackheads",
    number: "03",
    title: "Widespread Congested Pores and Blackheads",
    subtitle: "Open comedones filled with oxidised debris.",
    description:
      "Surplus oil and trapped dead skin cells accumulate inside open pore openings, turning dark upon exposure to surrounding atmospheric oxygen.",
  },
  {
    id: "persistent-redness",
    number: "04",
    title: "Persistent Redness and Post-Inflammatory Erythema",
    subtitle: "Discoloured marks remaining after active breakouts.",
    description:
      "Capillaries near the dermal surface remain dilated following localized breakouts, leaving lingering pink, red or purplish spots across affected areas.",
  },
  {
    id: "texturt-irregularities",
    number: "05",
    title: "Texture Irregularities and Atrophic Scarring",
    subtitle: "Uneven dermal surface with subtle indentations.",
    description:
      "Deep tissue inflammation impairs structural collagen production during natural healing, leaving pitted depressions or uneven surface contour changes behind.",
  },
  {
    id: "continuous-sebum-production",
    number: "06",
    title: "Continuous Excess Surface Sebum Production",
    subtitle: "Constant oily shine across central facial zones.",
    description:
      "Overactive sebaceous glands continuously secrete surplus natural oils, causing visible surface shine, compromised makeup wear and rapid pore congestion throughout the day.",
  },
];

export const preventions: PreventionItem[] = [
  {
    id: "practitioner-guidance",
    number: "01",
    title: "Practitioner Guidance Adherence",
    description:
      "Follow your practitioner’s personalised instructions, including recommended products, treatment intervals and temporary skincare adjustments.",
  },
  {
    id: "apply-daily-spf",
    number: "02",
    title: "Apply Daily SPF",
    description:
      "Use broad-spectrum sun protection daily to help protect skin and minimise post-acne pigmentation.",
  },
  {
    id: "avoid-picking-blemishes",
    number: "03",
    title: "Avoid Picking Blemishes",
    description:
      "Do not pick, pop or squeeze blemishes, as this may increase irritation, pigmentation and scarring.",
  },
  {
    id: "clean-face-items",
    number: "04",
    title: "Clean Face-Contact Items",
    description:
      "Regularly clean pillowcases, phone screens and makeup brushes to minimise contact with accumulated oils and impurities.",
  },
  {
    id: "balance-exfoliation",
    number: "05",
    title: "Balance Exfoliation & Hydration",
    description:
      "Avoid over-exfoliating and moisturise regularly to support the skin barrier and maintain comfortable, balanced skin.",
  },
];

export const benefitSections = {
  indications: {
    eyebrow: "CLINICAL INDICATORS",
    heading: {
      before: "Primary Signs You May Have",
      highlight: "Active Acne",
    },
    tag: "indications",
    description:
      "The visible and physical signs our practitioners assess when identifying active acne.",
    items: indications,
  },

  preventions: {
    eyebrow: "PREVENTION & AFTERCARE",
    heading: {
      before: "Better Habits for",
      highlight: "Healthier Skin",
    },
    tag: "preventions",
    description: "",
    items: preventions,
  },
} as const;
