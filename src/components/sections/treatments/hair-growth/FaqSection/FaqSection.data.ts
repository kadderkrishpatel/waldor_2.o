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
      "Hair restoration is a gradual process that follows your natural hair growth cycle. While some patients notice early improvements within a few months, optimal results typically develop progressively with a personalised course of treatment.",
  },
  {
    id: 3,
    category: "treatments",
    question: "Will I need multiple hair restoration sessions?",
    answer:
      "Yes. Hair restoration is a gradual process and most patients achieve the best results through a personalised course of treatments. During your consultation, we'll recommend the ideal number of sessions based on your hair condition, treatment goals and how your scalp is expected to respond over time.",
  },
  {
    id: 4,
    category: "treatments",
    question: "Am I a suitable candidate for hair restoration treatments?",
    answer:
      "Hair restoration is often suitable for patients experiencing early to moderate hair thinning or weakened hair density. A detailed clinical assessment allows us to determine the underlying cause of your hair concerns and recommend the most appropriate treatment.",
  },
  {
    id: 5,
    category: "treatments",
    question: "How many hair restoration sessions will I need?",
    answer:
      "The number of sessions varies according to your hair condition, treatment goals and chosen therapy. Following a comprehensive consultation, we'll create a personalised treatment plan designed to encourage healthier, stronger and more sustainable hair growth.",
  },
];
