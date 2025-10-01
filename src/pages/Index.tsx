import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Reviews } from "@/components/Reviews";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { ServicePages } from "@/components/ServicePages";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";

const Index = () => {
  return (
    <>
      <SEOHead />
      <StructuredData />
      <div className="min-h-screen">
        <Navigation />
        <div id="hero">
          <Hero />
        </div>
        <div id="services">
          <ServicePages />
        </div>
        <div id="reviews">
          <Reviews />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Index;
