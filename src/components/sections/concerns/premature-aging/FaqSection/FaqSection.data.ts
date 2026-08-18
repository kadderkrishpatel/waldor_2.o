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
    question: "Why do I have fine lines even though I am still young?",
    answer:
      "Fine lines can appear at different stages of life and do not necessarily indicate premature ageing. Factors such as genetics, facial movement, sun exposure, hydration, lifestyle and individual skin characteristics can influence their appearance. A professional assessment can help identify relevant contributing factors.",
  },
  {
    id: 2,
    category: "concerns",
    question:
      "Can fine lines in your 20s or 30s be a sign of premature ageing?",
    answer:
      "Some treatments provide visible improvements within days, while others may take several weeks depending on your treatment plan.",
  },
  {
    id: 3,
    category: "concerns",
    question: "How long does premature ageing treatment take to show results?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
  {
    id: 4,
    category: "concerns",
    question:
      "Can WALDOR premature ageing treatments be personalised to my skin?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
  {
    id: 5,
    category: "concerns",
    question: "How can I maintain healthier-looking skin after treatment?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
];
