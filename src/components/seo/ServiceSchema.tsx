import JsonLd from "./JsonLd";

interface ServiceOffer {
  name: string;
  price?: string;
  description?: string;
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  offers?: ServiceOffer[];
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://waldorclinic.com";

function parsePrice(price?: string): number | undefined {
  if (!price) return undefined;
  const match = price.replace(/,/g, "").match(/(\d+(\.\d+)?)/);
  return match ? Number(match[1]) : undefined;
}

/** Service structured data for a treatment page, with its priced variants as offers. */
export default function ServiceSchema({
  name,
  description,
  offers,
}: ServiceSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "MedicalBusiness",
      name: "WALDOR Clinic",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "City",
      name: "London",
    },
    ...(offers && offers.length
      ? {
          offers: offers.map((offer) => {
            const price = parsePrice(offer.price);
            return {
              "@type": "Offer",
              name: offer.name,
              ...(price !== undefined
                ? { price, priceCurrency: "GBP" }
                : {}),
              ...(offer.description
                ? { description: offer.description }
                : {}),
            };
          }),
        }
      : {}),
  };

  return <JsonLd data={data} />;
}
