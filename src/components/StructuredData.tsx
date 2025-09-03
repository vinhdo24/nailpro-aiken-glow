import { Helmet } from "react-helmet-async";

export const StructuredData = () => {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "NailSalon",
    "name": "Nail Pro & Spa",
    "description": "Professional nail care salon in Aiken, SC offering manicures, pedicures, gel nails, nail art, and spa services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "407 Fabian Dr",
      "addressLocality": "Aiken",
      "addressRegion": "SC", 
      "postalCode": "29803",
      "addressCountry": "US"
    },
    "telephone": "(803) 642-0096",
    "url": "https://nailproandspa.com",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:30",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification", 
        "dayOfWeek": "Saturday",
        "opens": "09:30",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday", 
        "opens": "11:00",
        "closes": "17:00"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.5607",
      "longitude": "-81.7196"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Nail Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Signature Manicure",
            "description": "Complete nail care with shaping, cuticle treatment, and polish"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Luxury Pedicure",
            "description": "Relaxing foot treatment with exfoliation, massage, and polish"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Gel Manicure",
            "description": "Long-lasting gel polish application with UV curing"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "6",
      "bestRating": "5"
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://nailproandspa.com"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "Services",
        "item": "https://nailproandspa.com#services"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(businessData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </script>
    </Helmet>
  );
};