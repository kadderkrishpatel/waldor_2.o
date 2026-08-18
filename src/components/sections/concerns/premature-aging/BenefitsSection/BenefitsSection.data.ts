import type {
  AcneIndicationItem,
  PreventionItem,
} from "./BenefitsSection.types";

export const indications: AcneIndicationItem[] = [
  {
    id: "premature-aging-indication-1",
    number: "01",
    title: "Early Surface Fine Lines",
    subtitle: "Faint creasing appearing around eyes and mouth.",
    description:
      "Dehydrated dermal layers begin developing shallow, static lines earlier than expected due to premature structural collagen depletion.",
  },
  {
    id: "premature-aging-indication-2",
    number: "02",
    title: "Premature Solar Macules",
    subtitle: "Uneven brown spots appearing on high points.",
    description:
      "Accumulated ultraviolet exposure triggers irregular melanin deposits, creating noticeable dark patches across cheeks and forehead areas.",
  },
  {
    id: "premature-aging-indication-3",
    number: "03",
    title: "Loss of Firmness",
    subtitle: "Delayed tissue recovery after gentle surface pinching.",
    description:
      "Degraded elastin fibers reduce the skin’s natural resilience, leaving tissue looking subtly relaxed and less firm prematurely.",
  },
  {
    id: "premature-aging-indication-4",
    number: "04",
    title: "Persistent Dermal Texture",
    subtitle: "Stalled cell turnover creates dull and uneven skin.",
    description:
      "Sluggish cellular renewal causes dead skin cells to accumulate, creating a coarse, shadow-casting surface that diffuses light.",
  },
  {
    id: "premature-aging-indication-5",
    number: "05",
    title: "Surface Dehydration Creases",
    subtitle: "Lattice-like surface lines from depleted water retention.",
    description:
      "Impaired barrier lipid layers fail to seal moisture, exaggerating fine surface creases across cheeks and forehead.",
  },
  {
    id: "premature-aging-indication-6",
    number: "06",
    title: "Diffuse Surface Redness",
    subtitle: "Expanded capillaries and lingering flush on cheeks.",
    description:
      "Environmental stress weakens delicate blood vessels, causing persistent redness and making skin look prematurely fragile.",
  },
];

export const preventions: PreventionItem[] = [
  {
    id: "premature-aging-prevention-1",
    number: "01",
    title: "Practitioner Guidance Adherence",
    description:
      "Following your practitioner’s exact post-treatment instructions optimises cellular recovery, ensuring deep dermal repair while preventing unexpected tissue sensitivity.",
  },
  {
    id: "premature-aging-prevention-2",
    number: "02",
    title: "Daily Sun Protection",
    description:
      "Applying high-SPF, broad-spectrum sun protection daily guards vulnerable post-treatment tissue, preventing photo-induced pigmentation and shielding new collagen fibers.",
  },
  {
    id: "premature-aging-prevention-3",
    number: "03",
    title: "Surface Friction & Pressure Avoidance",
    description:
      "Refraining from unnecessary facial rubbing, aggressive pinching or tugging protects fragile micro-vessels and prevents mechanical stress on newly forming elastin structures.",
  },
  {
    id: "premature-aging-prevention-4",
    number: "04",
    title: "Contact Surface Hygiene",
    description:
      "Sanitising phone screens, makeup brushes and pillowcases minimises daily pollution transfer, surface friction and oxidative stress on renewing skin.",
  },
  {
    id: "premature-aging-prevention-5",
    number: "05",
    title: "Balanced Barrier Hydration",
    description:
      "Focusing on lipid-replenishing moisture over harsh active exfoliants stabilises your natural skin barrier, sealing in moisture to support lasting dermal density.",
  },
];

export const benefitSections = {
  indications: {
    eyebrow: "CLINICAL INDICATORS",
    heading: {
      before: "Primary Signs You May Have",
      highlight: "Premature Ageing",
    },
    tag: "indications",
    description:
      "The visible and physical signs our practitioners assess when identifying premature ageing.",
    items: indications,
  },

  preventions: {
    eyebrow: "PREVENTION & AFTERCARE",
    heading: {
      before: "Essential Habits for",
      highlight: "Youthful Skin",
    },
    tag: "preventions",
    description: "",
    items: preventions,
  },
} as const;
