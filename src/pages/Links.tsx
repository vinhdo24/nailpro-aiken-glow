import { Calendar, MapPin, Phone, Facebook, Instagram, Star } from "lucide-react";
import { Seo } from "@/components/seo/Seo";
import { SPA, LINKS, openBooking, trackLink } from "@/components/sections/data";

const Btn = ({ onClick, icon, label, accent = false }: { onClick: () => void; icon: React.ReactNode; label: string; accent?: boolean }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-full border transition-smooth ${
      accent
        ? "bg-gold-gradient text-primary-foreground border-transparent shadow-gold"
        : "border-gold/40 hover:bg-gold/10"
    }`}
  >
    {icon} <span className="font-medium">{label}</span>
  </button>
);

const Links = () => {
  const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(SPA.address)}&output=embed`;
  return (
    <>
      <Seo
        title={`All Links — ${SPA.name}`}
        description="Quickly book, follow, review or visit Nail Pro & Spa."
        path="/links"
        includeLocalBusiness
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Links", url: "/links" }]}
      />
      <section className="container mx-auto px-4 py-14 max-w-md">
        <div className="text-center mb-8">
          <h1 className="font-display text-3xl text-gold-gradient mb-1">{SPA.name}</h1>
          <p className="text-sm text-muted-foreground">{SPA.tagline}</p>
        </div>

        <div className="space-y-3">
          <Btn accent onClick={() => openBooking("links_page")} icon={<Calendar className="w-4 h-4" />} label="Book Appointment" />
          <Btn onClick={() => trackLink("links_call", `tel:${SPA.phoneTel}`)} icon={<Phone className="w-4 h-4 text-gold" />} label={SPA.phone} />

          <p className="text-xs uppercase tracking-widest text-muted-foreground text-center pt-4">Follow</p>
          <Btn onClick={() => trackLink("links_fb", LINKS.facebook)} icon={<Facebook className="w-4 h-4 text-[#1877F2]" />} label="Facebook" />
          <Btn onClick={() => trackLink("links_ig", LINKS.instagram)} icon={<Instagram className="w-4 h-4 text-gold" />} label="Instagram" />

          <p className="text-xs uppercase tracking-widest text-muted-foreground text-center pt-4">Leave a Review</p>
          <Btn onClick={() => trackLink("review_google", LINKS.reviewGoogle)} icon={<Star className="w-4 h-4 text-gold fill-current" />} label="Review on Google" />
          <Btn onClick={() => trackLink("review_yelp", LINKS.reviewYelp)} icon={<Star className="w-4 h-4 text-gold fill-current" />} label="Review on Yelp" />
          <Btn onClick={() => trackLink("review_fb", LINKS.reviewFacebook)} icon={<Star className="w-4 h-4 text-gold fill-current" />} label="Review on Facebook" />
        </div>

        <div className="mt-10">
          <p className="text-sm flex items-center gap-2 text-muted-foreground mb-3">
            <MapPin className="w-4 h-4 text-gold" /> {SPA.address}
          </p>
          <iframe src={mapEmbed} title="Map" className="w-full h-48 rounded-xl border border-border" loading="lazy" />
        </div>
      </section>
    </>
  );
};

export default Links;
