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
    question: "How are WALDOR Signature Treatments different?",
    answer:
      "WALDOR Signature Treatments are different because they’re never built around a single technology or a standard protocol. Every treatment is thoughtfully personalised using a carefully selected combination of advanced Korean and Japanese technologies, chosen to suit your skin’s unique needs, concerns, and long-term goals.",
  },
  {
    id: 2,
    category: "treatments",
    question: "Are WALDOR Signature Treatments painful?",
    answer:
      "Some treatments provide visible improvements within days, while others may take several weeks depending on your treatment plan.",
  },
  {
    id: 3,
    category: "treatments",
    question:
      "Is there any downtime after treatment and when will I see results?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
  {
    id: 4,
    category: "treatments",
    question: "Are these treatments suitable for sensitive skin?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
  {
    id: 5,
    category: "treatments",
    question: "Can different technologies be combined during one appointment?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
];
