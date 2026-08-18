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
      "Why am I developing fine lines despite having a good skincare routine?",
    answer:
      "Fine lines can develop for various reasons, including natural ageing, repeated facial movement, sun exposure, genetics and individual skin characteristics. A consistent skincare routine can support skin health, but it cannot necessarily prevent every visible sign of ageing.",
  },
  {
    id: 2,
    category: "concerns",
    question: "Are fine lines normal in your 20s or 30s?",
    answer:
      "Fine lines can become visible at different ages and are not necessarily an indication of premature ageing. Factors such as genetics, facial movement, sun exposure and skin characteristics can influence when they appear. If you have concerns about changes in your skin, a professional assessment can help provide appropriate guidance.",
  },
  {
    id: 3,
    category: "concerns",
    question:
      "How long does fine line and wrinkle treatment take to show results?",
    answer:
      "The timeframe varies according to the treatment selected, the extent of the concern and individual skin response. Some treatments may produce an initial visible change, while others are designed to support more gradual improvements over time. Your practitioner can discuss realistic expectations during your consultation.",
  },
  {
    id: 4,
    category: "concerns",
    question:
      "How can I maintain the results of fine line and wrinkle treatment?",
    answer:
      "Maintaining results can involve a combination of appropriate skincare, daily sun protection and treatments recommended according to your skin’s changing needs. Regular professional reviews can also help refine your approach over time and support the continued appearance, health and quality of your skin.",
  },
  {
    id: 5,
    category: "concerns",
    question:
      "Can WALDOR fine line and wrinkle treatments be personalised to my skin?",
    answer:
      "Yes. WALDOR can tailor treatment considerations according to your skin's condition, concerns, facial characteristics and treatment history. Your practitioner can assess your individual needs before recommending an appropriate approach, including whether a single treatment or combination of options may be suitable.",
  },
];
