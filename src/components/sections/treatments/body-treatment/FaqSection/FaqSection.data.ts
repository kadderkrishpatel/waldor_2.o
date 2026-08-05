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
    question: "Can body contouring treatments help with weight loss?",
    answer:
      "Body contouring is not a weight-loss solution. Instead, it is designed to reduce stubborn pockets of fat, improve body definition, and enhance natural contours that may not respond to diet and exercise alone, creating a more sculpted and balanced silhouette.",
  },
  {
    id: 2,
    category: "treatments",
    question: "How many sessions will I need to achieve the best results?",
    answer:
      "Some treatments provide visible improvements within days, while others may take several weeks depending on your treatment plan.",
  },
  {
    id: 3,
    category: "treatments",
    question: "How do I know which body treatment is right for me?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
  {
    id: 4,
    category: "treatments",
    question: "Are body contouring treatments painful?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
  {
    id: 5,
    category: "treatments",
    question: "Are the treatments safe for all skin types?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
];
