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
      "Fine lines in your 20s or 30s can occur for various reasons and are not automatically a sign of premature ageing. Their appearance, progression and contributing factors are individual. If you have concerns about changes in your skin, a professional assessment can help determine whether they may be associated with accelerated ageing or other factors.",
  },
  {
    id: 3,
    category: "concerns",
    question: "How long does premature ageing treatment take to show results?",
    answer:
      "The timeframe varies depending on the treatment selected, the concerns being addressed and your individual response. Some improvements may become noticeable sooner, while others can develop gradually. Your practitioner can discuss realistic expectations and an appropriate timeframe following an assessment.",
  },
  {
    id: 4,
    category: "concerns",
    question:
      "Can WALDOR premature ageing treatments be personalised to my skin?",
    answer:
      "Yes. WALDOR can tailor treatment considerations according to your skin condition, visible concerns, lifestyle factors and individual needs. A consultation allows your practitioner to assess your skin and determine which treatment approach, or combination of approaches, may be appropriate.",
  },
  {
    id: 5,
    category: "concerns",
    question: "How can I maintain healthier-looking skin after treatment?",
    answer:
      "Consistent skincare, daily sun protection, appropriate lifestyle habits and following your practitioner's recommended aftercare can help support your skin over time. Depending on your individual needs, periodic professional reviews or maintenance treatments may also be considered to adapt your approach as your skin changes.",
  },
];
