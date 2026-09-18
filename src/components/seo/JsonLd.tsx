/**
 * Renders a JSON-LD structured data script tag for search engines.
 * Invisible to visitors — read only by Google, Bing, and AI crawlers.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
