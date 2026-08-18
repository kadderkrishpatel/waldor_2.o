import type {
  AcneIndicationItem,
  PreventionItem,
} from "./BenefitsSection.types";

export const indications: AcneIndicationItem[] = [
  {
    id: "dull-skin-indication-1",
    number: "01",
    title: "Coarse Surface Texture Build-Up",
    subtitle: "Roughness can affect how evenly light reflects from the skin.",
    description:
      "A build-up of dead skin cells can leave the surface feeling rough and make the complexion appear less smooth and luminous.",
  },
  {
    id: "dull-skin-indication-2",
    number: "02",
    title: "Persistent Lacklustre Muted Tone",
    subtitle: "Complexion appears flat, tired or less naturally radiant.",
    description:
      "Dehydration, uneven texture and environmental factors can contribute to a complexion that looks flat, muted or visibly fatigued.",
  },
  {
    id: "dull-skin-indication-3",
    number: "03",
    title: "Uneven Skin Tone After Inflammation",
    subtitle:
      "Patches of pigmentation can interrupt overall complexion uniformity.",
    description:
      "Uneven pigmentation can create areas of darker tone, making the complexion appear less even and diminishing its overall sense of radiance.",
  },
  {
    id: "dull-skin-indication-4",
    number: "04",
    title: "Persistent Tired-Looking Skin",
    subtitle: "Complexion appears pale, sallow or visibly fatigued.",
    description:
      "Poor capillary blood flow limits vital nutrient supply to surface cells, resulting in a pale, drained and sallow appearance.",
  },
  {
    id: "dull-skin-indication-5",
    number: "05",
    title: "Visible Skin Dehydration Lines",
    subtitle: "Lattice-like creasing from depleted moisture.",
    description:
      "Low water content in the outer epidermal layers creates fine surface shadow lines that accentuate dullness and fatigue.",
  },
  {
    id: "dull-skin-indication-6",
    number: "06",
    title: "Uneven Makeup Application",
    subtitle: "Cosmetics clinging to dry surface patches.",
    description:
      "Uneven shedding causes the foundation to settle into rough areas, flaking prematurely rather than gliding smoothly over the skin surface.",
  },
];

export const preventions: PreventionItem[] = [
  {
    id: "dull-skin-prevention-1",
    number: "01",
    title: "Practitioner Guidance Adherence",
    description:
      "Following your specialist’s personalised recommendations can help maintain your skin’s condition and support your treatment journey.",
  },
  {
    id: "dull-skin-prevention-2",
    number: "02",
    title: "Daily Sun Protection",
    description:
      "Daily broad-spectrum SPF helps protect against UV exposure, which can contribute to uneven pigmentation, texture and a lacklustre complexion.",
  },
  {
    id: "dull-skin-prevention-3",
    number: "03",
    title: "Avoid Over-Exfoliation",
    description:
      "Excessive exfoliation can disrupt the skin barrier and leave your complexion feeling sensitive, dry or visibly less balanced.",
  },
  {
    id: "dull-skin-prevention-4",
    number: "04",
    title: "Maintain Skin Hydration",
    description:
      "Regularly moisturising helps support the skin barrier and maintain a smoother, more comfortable and healthy-looking complexion.",
  },
  {
    id: "dull-skin-prevention-5",
    number: "05",
    title: "Keep Skin Contact Items Clean",
    description:
      "Regularly cleaning pillowcases, mobile screens and makeup brushes helps reduce the accumulation of oils, residue and everyday impurities.",
  },
];

export const benefitSections = {
  indications: {
    eyebrow: "CLINICAL INDICATORS",
    heading: {
      before: "Primary Signs You May Have",
      highlight: "Dull Skin",
    },
    tag: "indications",
    description:
      "The visible and physical signs our practitioners assess when identifying fine lines and wrinkles.",
    items: indications,
  },

  preventions: {
    eyebrow: "PREVENTION & AFTERCARE",
    heading: {
      before: "Better Habits for",
      highlight: "Radiant Skin",
    },
    tag: "preventions",
    description: "",
    items: preventions,
  },
} as const;
