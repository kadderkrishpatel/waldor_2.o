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
    question: "Which hair restoration treatment is right for my concerns?",
    answer:
      "Every hair loss journey is different. During your consultation, we assess your scalp health, hair density, medical history and the underlying cause of hair thinning before recommending the treatment best suited to your individual needs.",
  },
  {
    id: 2,
    category: "treatments",
    question:
      "How long does it take to see results from hair restoration treatments?",
    answer:
      "Some treatments provide visible improvements within days, while others may take several weeks depending on your treatment plan.",
  },
  {
    id: 3,
    category: "treatments",
    question: "Will I need multiple hair restoration sessions?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
  {
    id: 4,
    category: "treatments",
    question: "Am I a suitable candidate for hair restoration treatments?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
  {
    id: 5,
    category: "treatments",
    question: "How many hair restoration sessions will I need?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
];
