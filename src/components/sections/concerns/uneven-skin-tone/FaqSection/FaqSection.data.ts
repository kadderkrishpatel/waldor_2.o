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
    category: "concerns",
    question:
      "Why is my skin tone uneven despite having a consistent skincare routine?",
    answer:
      "Uneven tone can be influenced by several factors, including sun exposure, previous breakouts, hormonal changes, inflammation and individual skin characteristics. A consistent skincare routine can support skin health, but persistent pigmentation may require a more targeted approach based on its underlying cause.",
  },
  {
    id: 2,
    category: "concerns",
    question: "How long does uneven skin tone treatment take to show results?",
    answer:
      "Some treatments provide visible improvements within days, while others may take several weeks depending on your treatment plan.",
  },
  {
    id: 3,
    category: "concerns",
    question:
      "Can WALDOR treatments be personalised to my skin type and concerns?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
  {
    id: 4,
    category: "concerns",
    question:
      "Can uneven skin tone treatments improve pigmentation and post-acne marks?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
  {
    id: 5,
    category: "concerns",
    question: "Can I have uneven skin tone treatment if I have sensitive skin?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
];
