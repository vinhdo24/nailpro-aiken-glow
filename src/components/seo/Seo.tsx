import { Helmet } from "react-helmet-async";
import { SPA } from "@/components/sections/data";

const SITE = "https://nailproinaiken.us";

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  includeLocalBusiness?: boolean;
  breadcrumbs?: { name: string; url: string }[];
}

export const Seo = ({
  title = `${SPA.name} — Professional Nail Care in Aiken, SC`,
  description = `Experience luxury nail care at ${SPA.name} in Aiken, SC. Manicures, pedicures, gel nails, and nail art. Call ${SPA.phone}.`,
  path = "/",
  image = `${SITE}/og-image.jpg`,
  includeLocalBusiness = false,
  breadcrumbs,
}: SeoProps) => {
  const url = `${SITE}${path}`;

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "NailSalon",
    name: SPA.name,
    description,
    image,
    telephone: SPA.phone,
    url: SITE,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "407 Fabian Dr",
      addressLocality: "Aiken",
      addressRegion: "SC",
      postalCode: "29803",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: SPA.geo.lat, longitude: SPA.geo.lng },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "10:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: "09:30", closes: "18:00" },
    ],
    areaServed: "Aiken, SC",
  };

  const breadcrumbList = breadcrumbs && {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.name,
      item: `${SITE}${b.url}`,
    })),
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {includeLocalBusiness && (
        <script type="application/ld+json">{JSON.stringify(localBusiness)}</script>
      )}
      {breadcrumbList && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbList)}</script>
      )}
    </Helmet>
  );
};
