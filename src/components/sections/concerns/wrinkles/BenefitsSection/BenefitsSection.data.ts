import type {
  AcneIndicationItem,
  PreventionItem,
} from "./BenefitsSection.types";

export const indications: AcneIndicationItem[] = [
  {
    id: "superficial-surface",
    number: "01",
    title: "Superficial Surface Fine Line Formation",
    subtitle: "Lattice-like creasing visible across delicate areas.",
    description:
      "Dehydrated surface tissue displays faint, web-like creases that gradually become permanent features as foundational skin hydration levels drop steadily.",
  },
  {
    id: "persistent-facial-expression",
    number: "02",
    title: "Persistent Dynamic Facial Expression Lines",
    subtitle: "Expression lines remaining after muscle relaxation.",
    description:
      "Repeated facial movements cause temporary movement lines to gradually settle into permanent, visible surface folds across key expression zones.",
  },
  {
    id: "persistent-pillow-creases",
    number: "03",
    title: "Persistent Pillow Creases Upon Waking",
    subtitle: "Sleep lines take hours to dissipate.",
    description:
      "Sleep compression lines lingering on cheeks reflect reduced hyaluronic acid and a diminished dermal capacity to bounce back rapidly.",
  },
  {
    id: "progressive-structural-dermal-layer",
    number: "04",
    title: "Progressive Structural Dermal Layer Thinning",
    subtitle: "Fragile tissue texture exposing underlying structures.",
    description:
      "Accelerated collagen loss causes the primary dermal layer to thin, creating fragile, paper-like surface texture across vulnerable facial areas.",
  },
  {
    id: "deepening-folds",
    number: "05",
    title: "Deepening Mid-Face Folds and Shadows",
    subtitle: "Pronounced shadows around nose and mouth.",
    description:
      "Mid-face volume depletion causes natural skin folds to deepen significantly, creating prominent shadows along nasolabial and marionette crease lines.",
  },
  {
    id: "uneven-texture",
    number: "06",
    title: "Uneven Dermal Texture and Roughness",
    subtitle: "Coarse surface feel from slowed turnover.",
    description:
      "Sluggish cellular renewal creates an uneven, dull surface texture, accentuating fine lines and preventing optimal light reflection across skin.",
  },
];

export const preventions: PreventionItem[] = [
  {
    id: "practitioner-guidance",
    number: "01",
    title: "Practitioner Guidance Adherence",
    description:
      "Strict compliance with individualised clinician instructions guarantees optimal tissue recovery while preventing unwanted complications or delayed healing.",
  },
  {
    id: "daily-sun-protection",
    number: "02",
    title: "Daily Sun Protection",
    description:
      "Daily broad-spectrum SPF helps defend against photoageing and collagen degradation, helping preserve skin firmness and reduce the premature appearance of fine lines.",
  },
  {
    id: "maintain-hydration",
    number: "03",
    title: "Maintain Consistent Skin Hydration",
    description:
      "A well-hydrated skin barrier helps maintain suppleness and smoothness, supporting a fresher appearance while reducing the visibility of dehydration-related fine lines.",
  },
  {
    id: "avoid-skin-trauma",
    number: "04",
    title: "Avoid Unnecessary Skin Trauma",
    description:
      "Minimising excessive rubbing and aggressive facial treatments helps protect the skin barrier and avoid unnecessary irritation that may compromise its appearance.",
  },
  {
    id: "support-skin-health",
    number: "05",
    title: "Support Long-Term Skin Health",
    description:
      "Balanced nutrition, adequate hydration and healthy lifestyle habits can complement professional treatments by supporting the skin’s overall condition as it naturally ages.",
  },
];

export const benefitSections = {
  indications: {
    eyebrow: "CLINICAL INDICATORS",
    heading: {
      before: "Primary Signs You May Have",
      highlight: "Fine Lines and Wrinkles",
    },
    tag: "indications",
    description:
      "The visible and physical signs our practitioners assess when identifying fine lines and wrinkles.",
    items: indications,
  },

  preventions: {
    eyebrow: "PREVENTION & AFTERCARE",
    heading: {
      before: "Essential Habits for",
      highlight: "Resilient Skin",
    },
    tag: "preventions",
    description: "",
    items: preventions,
  },
} as const;
