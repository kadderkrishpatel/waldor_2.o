import type {
  AcneIndicationItem,
  PreventionItem,
} from "./BenefitsSection.types";

export const indications: AcneIndicationItem[] = [
  {
    id: "uneven-skin-tone-indication-1",
    number: "01",
    title: "Visible Sun Spots",
    subtitle: "Distinct brown marks become visible across exposed areas.",
    description:
      "Individual spots may become more noticeable over time, particularly across the cheeks, forehead, nose and other sun-exposed areas.",
  },
  {
    id: "uneven-skin-tone-indication-2",
    number: "02",
    title: "Distinct Melasma Patches",
    subtitle: "Broader patches create a visibly inconsistent complexion.",
    description:
      "Pigmentation may appear in larger, symmetrical areas, commonly across the cheeks, forehead or upper lip.",
  },
  {
    id: "uneven-skin-tone-indication-3",
    number: "03",
    title: "Lingering Blemish Marks",
    subtitle: "Previous breakouts leave behind noticeable discolouration.",
    description:
      "Once blemishes have settled, residual marks can remain visible and take time to blend naturally with surrounding skin.",
  },
  {
    id: "uneven-skin-tone-indication-4",
    number: "04",
    title: "Persistent Facial Redness",
    subtitle: "Pink or flushed areas remain noticeable within the complexion.",
    description:
      "Redness may linger around the cheeks, nose or other areas, creating visible contrast with the surrounding skin.",
  },
  {
    id: "uneven-skin-tone-indication-5",
    number: "05",
    title: "Mottled Skin Appearance",
    subtitle: "Subtle variations create an irregular overall appearance.",
    description:
      "Rather than one defined area of concern, pigmentation may appear dispersed, giving the complexion a less consistent and harmonious appearance.",
  },
  {
    id: "uneven-skin-tone-indication-6",
    number: "06",
    title: "Uneven Makeup Finish",
    subtitle: "Foundation appears less seamless across the face.",
    description:
      "Pigmentation and redness can remain noticeable beneath makeup, while certain areas may require additional coverage to create a more even finish.",
  },
];

export const preventions: PreventionItem[] = [
  {
    id: "uneven-skin-tone-prevention-1",
    number: "01",
    title: "Follow Practitioner Guidance",
    description:
      "Follow your practitioner’s personalised recommendations, particularly around skincare, treatment intervals and products suitable for your skin.",
  },
  {
    id: "uneven-skin-tone-prevention-2",
    number: "02",
    title: "Prioritise Daily SPF",
    description:
      "Use broad-spectrum sun protection every day to help limit UV exposure, which can contribute to visible pigmentation.",
  },
  {
    id: "uneven-skin-tone-prevention-3",
    number: "03",
    title: "Avoid Unnecessary Irritation",
    description:
      "Be gentle with your skin and avoid picking, rubbing or using products that may cause unnecessary irritation or sensitivity.",
  },
  {
    id: "uneven-skin-tone-prevention-4",
    number: "04",
    title: "Gentle Physical Shielding",
    description:
      "Wearing wide-brimmed hats and large sunglasses minimises direct solar exposure on vulnerable cheekbones and forehead pigment zones daily.",
  },
  {
    id: "uneven-skin-tone-prevention-5",
    number: "05",
    title: "Maintain Skin Hydration",
    description:
      "Regular moisturisation helps support the skin barrier, keeping your complexion comfortable and better equipped to tolerate appropriate skincare.",
  },
];

export const benefitSections = {
  indications: {
    eyebrow: "CLINICAL INDICATORS",
    heading: {
      before: "Primary Signs You May Have",
      highlight: "Uneven Skin Tone",
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
      highlight: "Balanced Skin",
    },
    tag: "preventions",
    description: "",
    items: preventions,
  },
} as const;
