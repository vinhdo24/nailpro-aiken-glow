import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SPA, LINKS, openBooking, trackLink } from "@/components/sections/data";

export const Footer = () => {
  const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(SPA.address)}&output=embed`;
  return (
    <footer className="border-t border-border bg-secondary/40 mt-20">
      <div className="container mx-auto px-4 py-12 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="font-display text-2xl text-gold-gradient mb-3">{SPA.name}</h3>
          <p className="text-sm text-muted-foreground mb-4">{SPA.tagline}</p>
          <div className="flex gap-3">
            <button onClick={() => trackLink("footer_fb", LINKS.facebook)} aria-label="Facebook"
              className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center hover:bg-gold/10 transition-smooth">
              <Facebook className="w-4 h-4 text-gold" />
            </button>
            <button onClick={() => trackLink("footer_ig", LINKS.instagram)} aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center hover:bg-gold/10 transition-smooth">
              <Instagram className="w-4 h-4 text-gold" />
            </button>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-display text-base mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/links" className="hover:text-gold">All Links</Link></li>
          </ul>
        </div>

        {/* Visit */}
        <div>
          <h4 className="font-display text-base mb-3">Visit Us</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />{SPA.address}</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-gold" />
              <a href={`tel:${SPA.phoneTel}`} className="hover:text-gold">{SPA.phone}</a>
            </li>
            <li className="flex items-start gap-2"><Clock className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" /><span className="text-xs leading-relaxed">{SPA.hours}</span></li>
          </ul>
          <iframe
            title="Map"
            src={mapEmbed}
            className="mt-3 w-full h-28 rounded-md border border-border"
            loading="lazy"
          />
        </div>

        {/* CTA */}
        <div className="rounded-xl border border-gold/40 bg-gold/5 p-5 flex flex-col">
          <h4 className="font-display text-lg mb-2">Ready For A Treat?</h4>
          <p className="text-sm text-muted-foreground mb-4">Book your appointment online — quick, easy and instantly confirmed.</p>
          <Button onClick={() => openBooking("footer_cta")} className="bg-gold-gradient text-primary-foreground mt-auto">
            Book Appointment
          </Button>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SPA.name}. All rights reserved.
      </div>
    </footer>
  );
};
