import type {
  AcneIndicationItem,
  PreventionItem,
} from "./BenefitsSection.types";

export const indications: AcneIndicationItem[] = [
  {
    id: "loose-skin-indication-1",
    number: "01",
    title: "Softer Jawline Contour",
    subtitle: "The lower face appears less sharply defined.",
    description:
      "Reduced skin firmness can soften the lower facial contour, making the jawline appear less structured or clearly defined.",
  },
  {
    id: "loose-skin-indication-2",
    number: "02",
    title: "Early Jowl Formation",
    subtitle: "Small areas of looseness appear around the lower cheeks.",
    description:
      "As the skin loses firmness, tissue may begin to gather around the jawline, creating subtle fullness beside the mouth and chin.",
  },
  {
    id: "loose-skin-indication-3",
    number: "03",
    title: "Deeper Facial Folds",
    subtitle: "Lines around the nose and mouth become more pronounced.",
    description:
      "Changes in skin structure can make established nasolabial and marionette folds appear deeper, particularly when the face is relaxed.",
  },
  {
    id: "loose-skin-indication-4",
    number: "04",
    title: "Crepey Skin Texture",
    subtitle: "The surface develops finer lines and a crinkled appearance.",
    description:
      "Thinner, less resilient skin can develop a delicate, finely wrinkled texture particularly across the cheeks, under-eye area and neck.",
  },
  {
    id: "loose-skin-indication-5",
    number: "05",
    title: "Less Defined Cheek Contours",
    subtitle: "The mid-face appears flatter or less sculpted.",
    description:
      "Changes in skin firmness and facial volume can soften the transition between the cheekbones and lower facial contour.",
  },
  {
    id: "loose-skin-indication-6",
    number: "06",
    title: "Delayed Elasticity and Tissue Rebound",
    subtitle: "Slow skin snap-back when gently pinched.",
    description:
      "Compromised elastic fibers reduce tissue resilience, causing pinched skin to return to place slowly rather than snapping instantly.",
  },
];

export const preventions: PreventionItem[] = [
  {
    id: "loose-skin-prevention-1",
    number: "01",
    title: "Practitioner Guidance Adherence",
    description:
      "Follow your practitioner’s personalised aftercare, product recommendations and review schedule to support your skin throughout treatment.",
  },
  {
    id: "loose-skin-prevention-2",
    number: "02",
    title: "Daily Sun Protection",
    description:
      "Daily broad-spectrum SPF helps limit UV exposure, an important factor in collagen breakdown and visible changes in skin firmness.",
  },
  {
    id: "loose-skin-prevention-3",
    number: "03",
    title: "Keep Skin Nourished",
    description:
      "Regular moisturisation supports the skin barrier and helps maintain a comfortable, supple-looking complexion between treatments.",
  },
  {
    id: "loose-skin-prevention-4",
    number: "04",
    title: "Be Gentle With Skin",
    description:
      "Avoid aggressive exfoliation and harsh products that may cause unnecessary irritation or compromise your skin barrier.",
  },
  {
    id: "loose-skin-prevention-5",
    number: "05",
    title: "Maintain Healthy Skin Habits",
    description:
      "Adequate hydration, balanced nutrition and protecting your skin from environmental stressors can support its overall condition over time.",
  },
];

export const benefitSections = {
  indications: {
    eyebrow: "CLINICAL INDICATORS",
    heading: {
      before: "Primary Signs You May Have",
      highlight: "Sagging and Loose Skin",
    },
    tag: "indications",
    description:
      "The visible and physical signs our practitioners assess when identifying sagging and loose skin.",
    items: indications,
  },

  preventions: {
    eyebrow: "PREVENTION & AFTERCARE",
    heading: {
      before: "Essential Habits for",
      highlight: "Firm, Resilient Skin",
    },
    tag: "preventions",
    description: "",
    items: preventions,
  },
} as const;
