import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Reviews } from "@/components/Reviews";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { ServicePages } from "@/components/ServicePages";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";

const Index = () => {
  return (
    <>
      <SEOHead />
      <StructuredData />
      <div className="min-h-screen">
        <Hero />
        <Services />
        <ServicePages />
        <Reviews />
        <About />
        <FAQ />
        <Contact />
      </div>
    </>
  );
};

export default Index;
