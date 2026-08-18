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
    question: "Can sagging and loose skin be improved without surgery?",
    answer:
      "Depending on the degree of sagging, certain non-surgical treatments may help improve the appearance of firmness and definition. Suitability varies between individuals, so a professional assessment can help determine whether a non-surgical approach is appropriate for your skin.",
  },
  {
    id: 2,
    category: "concerns",
    question: "How long does skin tightening treatment take to show results?",
    answer:
      "Some treatments provide visible improvements within days, while others may take several weeks depending on your treatment plan.",
  },
  {
    id: 3,
    category: "concerns",
    question:
      "Can WALDOR skin tightening treatments be personalised to my skin?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
  {
    id: 4,
    category: "concerns",
    question: "How long can I expect skin tightening results to last?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
  {
    id: 5,
    category: "concerns",
    question: "Can skin tightening improve loose skin after weight loss?",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
];
