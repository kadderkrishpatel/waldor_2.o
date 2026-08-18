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
    question: "How long does acne treatment take to show results?",
    answer:
      "The timeframe varies depending on the type, severity and underlying factors contributing to your acne. Some changes may become noticeable within several weeks, while more persistent concerns can require longer-term management. Your practitioner can recommend a suitable treatment plan and review progress over time.",
  },
  {
    id: 2,
    category: "concerns",
    question: "Can acne be treated permanently, or can it come back?",
    answer:
      "Some treatments provide visible improvements within days, while others may take several weeks depending on your treatment plan.",
  },
  {
    id: 3,
    category: "concerns",
    question: "Can WALDOR acne treatment be personalised to my skin type and severity?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
  {
    id: 4,
    category: "concerns",
    question: "Is adult acne different from teenage acne?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
  {
    id: 5,
    category: "concerns",
    question: "Can I have acne treatment if I have sensitive skin?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
];
