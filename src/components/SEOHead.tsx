import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string;
}

export const SEOHead = ({ 
  title = "Nail Pro & Spa - Professional Nail Care in Aiken, SC",
  description = "Experience luxury nail care at Nail Pro & Spa in Aiken, SC. Professional manicures, pedicures, gel nails, and nail art. Located at 407 Fabian Dr. Call (803) 642-0096 to book.",
  canonical = "https://nailproinaiken.us",
  keywords = "nail salon Aiken SC, manicure pedicure Aiken, gel nails Aiken, nail art South Carolina, professional nail care, luxury nail spa"
}: SEOHeadProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content="https://nailproinaiken.us/hero-nails.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Nail Pro & Spa" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://nailproinaiken.us/hero-nails.jpg" />
      
      {/* Local Business */}
      <meta name="geo.region" content="US-SC" />
      <meta name="geo.placename" content="Aiken" />
      <meta name="geo.position" content="33.5607;-81.7196" />
      <meta name="ICBM" content="33.5607, -81.7196" />
      
      {/* Mobile */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    </Helmet>
  );
};