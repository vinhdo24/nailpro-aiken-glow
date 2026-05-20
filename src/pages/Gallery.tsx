import { Seo } from "@/components/seo/Seo";
import hero from "@/assets/hero-nails.jpg";
import manicure from "@/assets/manicure-service.jpg";
import pedicure from "@/assets/pedicure-luxury.jpg";
import pedicure2 from "@/assets/pedicure-service.jpg";
import gel from "@/assets/gel-manicure.jpg";
import extensions from "@/assets/nail-extensions.jpg";
import waxing from "@/assets/waxing-service.jpg";
import lash from "@/assets/eyelash-service.jpg";

const items = [
  { src: hero, alt: "Salon interior" },
  { src: manicure, alt: "Manicure" },
  { src: pedicure, alt: "Luxury pedicure" },
  { src: gel, alt: "Gel manicure" },
  { src: extensions, alt: "Nail extensions" },
  { src: pedicure2, alt: "Pedicure" },
  { src: waxing, alt: "Waxing service" },
  { src: lash, alt: "Eyelash service" },
];

const Gallery = () => (
  <>
    <Seo
      title="Gallery — Nail Pro & Spa Aiken, SC"
      description="Browse our gallery of manicures, pedicures, nail art and spa moments."
      path="/gallery"
      breadcrumbs={[{ name: "Home", url: "/" }, { name: "Gallery", url: "/gallery" }]}
    />
    <section className="container mx-auto px-4 py-14">
      <div className="text-center mb-10">
        <p className="text-gold uppercase tracking-[0.3em] text-xs mb-2">Gallery</p>
        <h1 className="font-display text-4xl md:text-5xl text-gold-gradient">Our Work</h1>
        <div className="gold-divider w-32 mx-auto mt-3" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {items.map((it, i) => (
          <img
            key={i}
            src={it.src}
            alt={it.alt}
            loading="lazy"
            className="rounded-lg aspect-square object-cover hover:opacity-90 transition-smooth"
          />
        ))}
      </div>
    </section>
  </>
);

export default Gallery;
