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
    question: "[FAQ 1 — question about what injectables can and can’t achieve.]",
    answer:
      "[Answer to be supplied — two to four sentences. Must not make efficacy claims that cannot be substantiated, and must not promote prescription-only medicines.]",
  },
  {
    id: 2,
    category: "treatments",
    question: "[FAQ 2 — question about comfort and anaesthetic.]",
    answer:
      "Some treatments provide visible improvements within days, while others may take several weeks depending on your treatment plan.",
  },
  {
    id: 3,
    category: "treatments",
    question:
      "[FAQ 3 — question about how long results last.]",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
  {
    id: 4,
    category: "treatments",
    question: "[FAQ 4 — question about swelling, bruising and downtime.]",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
  {
    id: 5,
    category: "treatments",
    question: "[FAQ 5 — question about who administers the treatment and their qualifications.]",
    answer:
      "Downtime varies by treatment. Many treatments allow you to return to your routine immediately.",
  },
];
