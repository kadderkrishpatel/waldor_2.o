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
      "The number of sessions depends on your body composition, treatment goals, and the technology recommended. Following a comprehensive consultation, we create a personalised treatment plan, ensuring each session builds progressively towards natural, long-lasting improvements.",
  },
  {
    id: 3,
    category: "treatments",
    question: "How do I know which body treatment is right for me?",
    answer:
      "Selecting the right treatment begins with understanding your body rather than choosing a procedure. Our clinicians assess your concerns, skin quality, body composition and aesthetic goals before recommending the most appropriate treatment.",
  },
  {
    id: 4,
    category: "treatments",
    question: "Are body contouring treatments painful?",
    answer:
      "Most non-surgical body treatments are designed to be comfortable, allowing you to return to your daily routine with minimal interruption. Depending on the treatment, you may experience warmth, gentle muscle contractions, or temporary sensitivity during and shortly after your session.",
  },
  {
    id: 5,
    category: "treatments",
    question: "Are the treatments safe for all skin types?",
    answer:
      "Every treatment begins with a detailed clinical consultation to determine its suitability for your skin type, medical history, and individual concerns. Patient safety is central to every recommendation, ensuring your treatment is both appropriate and delivered with clinical precision.",
  },
];
