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
      "Results can vary depending on the treatment selected, the degree of laxity and your individual response. Some changes may become noticeable relatively early, while other improvements can develop progressively. Your practitioner can provide a more personalised timeframe following assessment.",
  },
  {
    id: 3,
    category: "concerns",
    question:
      "Can WALDOR skin tightening treatments be personalised to my skin?",
    answer:
      "Yes. WALDOR can tailor treatment considerations according to your skin condition,firmness, facial structure and individual aesthetic concerns. A consultation allows your practitioner to assess your skin and determine which treatment approach may be most appropriate for you.",
  },
  {
    id: 4,
    category: "concerns",
    question: "How long can I expect skin tightening results to last?",
    answer:
      "The longevity of results varies according to the treatment, individual skin characteristics and the natural ageing process. Results may be supported through appropriate skincare, lifestyle measures and maintenance treatments where recommended. Your practitioner can discuss what may be appropriate for your individual needs.",
  },
  {
    id: 5,
    category: "concerns",
    question: "Can skin tightening improve loose skin after weight loss?",
    answer:
      "Yes, skin tightening treatments may help improve the appearance of loose or less firm skin following weight loss, depending on the amount of excess skin and its underlying characteristics. A consultation can help establish whether treatment is suitable and what level of improvement may be realistic.",
  },
  {
    id: 6,
    category: "concerns",
    question: "How can I maintain firmer-looking skin after treatment?",
    answer:
      "Following your practitioner's recommended aftercare, maintaining consistent skincare and using daily sun protection can help support your skin following treatment. Depending on your individual needs, periodic maintenance treatments may also be considered as part of a longer-term skin health approach.",
  },
];
