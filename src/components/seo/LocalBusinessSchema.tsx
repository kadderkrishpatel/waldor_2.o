import JsonLd from "./JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://waldorclinic.com";

/**
 * LocalBusiness structured data — required on every page (client review, Sep 2026).
 * Tells Google this is a real, physical clinic: name, address, phone, hours.
 */
export default function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "WALDOR Clinic",
    image: `${SITE_URL}/icon.png`,
    url: SITE_URL,
    telephone: "+447464745114",
    email: "info@waldorclinic.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "35 Great Portland Street",
      addressLocality: "London",
      postalCode: "W1W 8QQ",
      addressCountry: "GB",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "18:00",
      },
    ],
  };

  return <JsonLd data={data} />;
}
