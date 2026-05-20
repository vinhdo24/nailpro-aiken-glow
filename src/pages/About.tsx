import { MapPin, Phone, Clock } from "lucide-react";
import { Seo } from "@/components/seo/Seo";
import { SPA } from "@/components/sections/data";
import salonImg from "@/assets/hero-nails.jpg";

const About = () => {
  const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(SPA.address)}&output=embed`;
  return (
    <>
      <Seo
        title={`About — ${SPA.name}`}
        description={`Discover ${SPA.name}, Aiken's premier nail spa. Skilled artists, hospital-grade sanitation, calm atmosphere.`}
        path="/about"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "About", url: "/about" }]}
      />
      <section className="container mx-auto px-4 py-14 max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-2">About Us</p>
          <h1 className="font-display text-4xl md:text-5xl text-gold-gradient">{SPA.name}</h1>
          <div className="gold-divider w-32 mx-auto mt-3" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <img src={salonImg} alt="Salon interior" className="rounded-xl shadow-gold-soft" />
          <div>
            <h2 className="font-display text-2xl mb-4">A calm, refined retreat in Aiken.</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At {SPA.name}, we believe nail care should feel like a true escape. Every appointment is performed with meticulous attention to detail, premium products and a warm, welcoming atmosphere.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our experienced technicians stay current with the latest trends and techniques, from classic French manicures to intricate custom nail art and long-lasting gel and acrylic enhancements.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h3 className="font-display text-xl">Visit Us</h3>
            <p className="flex items-start gap-2 text-muted-foreground"><MapPin className="w-5 h-5 mt-0.5 text-gold flex-shrink-0" />{SPA.address}</p>
            <p className="flex items-center gap-2 text-muted-foreground"><Phone className="w-5 h-5 text-gold" />
              <a href={`tel:${SPA.phoneTel}`} className="hover:text-gold">{SPA.phone}</a>
            </p>
            <div className="flex items-start gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 mt-0.5 text-gold flex-shrink-0" />
              <div className="space-y-1">
                {SPA.hoursList.map((h) => (
                  <p key={h.day} className="text-sm"><span className="font-medium">{h.day}:</span> {h.time}</p>
                ))}
              </div>
            </div>
          </div>
          <iframe
            title="Salon location map"
            src={mapEmbed}
            className="w-full h-72 rounded-xl border border-border"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
};

export default About;
