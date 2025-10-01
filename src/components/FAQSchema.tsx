import { Helmet } from "react-helmet-async";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What nail services do you offer at Nail Pro & Spa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer a complete range of professional nail services including signature manicures, luxury pedicures, gel manicures, nail art, French manicures, and spa treatments. All services are performed by experienced nail technicians using high-quality products."
      }
    },
    {
      "@type": "Question",
      "name": "How long do gel manicures last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our gel manicures typically last 2-3 weeks without chipping or peeling. The longevity depends on your daily activities and nail care routine. We use premium gel products and proper application techniques to ensure maximum durability."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need an appointment or do you accept walk-ins?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend making an appointment to guarantee your preferred time slot, especially on weekends. However, we do accept walk-ins based on availability. Call us at (803) 642-0096 to schedule your appointment."
      }
    },
    {
      "@type": "Question",
      "name": "What safety and sanitation protocols do you follow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your safety is our priority. We follow strict sanitation protocols including sterilizing all tools, using disposable items when possible, and maintaining clean workstations. Our spa equipment is thoroughly cleaned and disinfected between each client."
      }
    },
    {
      "@type": "Question",
      "name": "What are your hours and location?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We're located at 407 Fabian Dr, Aiken, SC 29803. Our hours are Monday-Thursday 10:00am-6:00pm, Friday-Saturday 9:30am-6:00pm, and we're closed on Sundays. We're easily accessible and offer convenient parking."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer nail art and custom designs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Our skilled nail artists can create custom nail art, seasonal designs, and special occasion nails. From simple accent nails to intricate patterns, we can bring your vision to life. Ask about our nail art options during your visit."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Nail Pro & Spa different from other nail salons in Aiken?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We pride ourselves on exceptional customer service, a clean and relaxing environment, and skilled technicians who stay current with the latest trends and techniques. Our luxury spa atmosphere and attention to detail set us apart in Aiken, SC."
      }
    },
    {
      "@type": "Question",
      "name": "How much do your services cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our prices are competitive and vary by service. Basic manicures start at $20, luxury pedicures from $35, and gel manicures from $35. Contact us for current pricing on all services and any seasonal promotions we may be offering."
      }
    }
  ]
};

export const FAQSchema = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};
