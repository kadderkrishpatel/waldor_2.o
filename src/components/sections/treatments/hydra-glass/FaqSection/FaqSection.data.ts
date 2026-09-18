export type FAQCategory = "all" | "treatments" | "concerns" | "clinic";

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: Exclude<FAQCategory, "all">;
}

export const faqSectionData = {
  eyebrow: "FAQ",
  heading: {
    before: "Questions We're ",
    highlight: "Often Asked",
  },
};

export const faqData: FAQItem[] = [
  {
    id: 1,
    category: "treatments",
    question: "What makes the WALDOR HydraGlass™ Facial different from others?",
    answer:
      "Unlike standard surface-level protocols, the WALDOR HydraGlass™ Facial is a tailored clinical experience. Powered by South Korean and Japanese aesthetic engineering, we use advanced non-invasive devices to restore your skin barrier and deliver an effortless, translucent glass-skin finish.",
  },
  {
    id: 2,
    category: "treatments",
    question: "Is the HydraGlass™ Facial Treatment painful?",
    answer:
      "Not at all. We prioritise both clinical efficacy and supreme client comfort. Utilising gentle vortex technology rather than abrasive manual extractions. While sensation levels vary by individual sensitivity, the treatment is non-invasive, deeply soothing and designed to offer a relaxing, virtually pain-free experience. ",
  },
  {
    id: 3,
    category: "treatments",
    question: "Is there any downtime after treatment, and when will I see results?",
    answer:
      "Most clients notice a refreshed, hydrated luminosity right after their session. While response times vary based on individual skin profiles, our gentle approach is designed to minimise visible irritation, helping you return to your daily routine uninterrupted.",
  },
  {
    id: 4,
    category: "treatments",
    question: "How long does the 'glass skin' glow actually last?",
    answer:
      "The immediate surface dewiness often persists for several days, though longevity depends on skin type, lifestyle and at-home skincare regime. Following your practitioner’s tailored advice and recommended routine helps optimize these results, supporting sustained texture refinement and a healthy-looking complexion over time.",
  },
  {
    id: 5,
    category: "treatments",
    question: "Will I experience breakouts or 'skin purging' after the facial?",
    answer:
      "While rare, skin with underlying congestion may occasionally undergo a brief, natural clearing process as cellular turnover accelerates. This transient response simply indicates that your skin is purifying itself, quickly making way for a clearer, smoother complexion. ",
  },
];
