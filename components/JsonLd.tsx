/**
 * JSON-LD (ТЗ п.7.3). Server Component.
 * <script type="application/ld+json"> с эскейпом "<" (ТЗ п.7.3 + Next 16 JSON-LD guide).
 */
import { SITE, VISIT } from "@/lib/constants";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: SITE.name,
    servesCuisine: "Cuban coffee",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1512 SW 8th St",
      addressLocality: "Miami",
      addressRegion: "FL",
      postalCode: "33135",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    telephone: "+13055550187",
    url: SITE.url,
    priceRange: "$",
    image: `${SITE.url}/images/hero-bg.jpg`,
    description: SITE.description,
  };
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      // Эскейп сделан выше (заменяем "<" на "<"), чтобы исключить
      // XSS-инъекцию через поля вроде name/address.
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
