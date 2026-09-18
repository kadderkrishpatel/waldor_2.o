import JsonLd from "./JsonLd";

interface FAQEntry {
  question: string;
  answer: string;
}

/** FAQPage structured data — reuses a page's existing question/answer list. */
export default function FAQSchema({ items }: { items: FAQEntry[] }) {
  if (!items.length) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return <JsonLd data={data} />;
}
