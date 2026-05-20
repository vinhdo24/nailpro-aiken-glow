import { useSearchParams } from "react-router-dom";
import { Seo } from "@/components/seo/Seo";
import { SPA, buildBookingUrl } from "@/components/sections/data";
import { ExternalLink } from "lucide-react";

const Book = () => {
  const [params] = useSearchParams();
  const source = params.get("source") || "book_page";
  const url = buildBookingUrl(source);

  return (
    <>
      <Seo
        title={`Book Appointment — ${SPA.name}`}
        description="Book your nail appointment online — instant confirmation."
        path="/book"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Book", url: "/book" }]}
      />
      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-2">Online Booking</p>
          <h1 className="font-display text-3xl md:text-4xl text-gold-gradient">Book Your Appointment</h1>
          <div className="gold-divider w-24 mx-auto mt-3" />
          <p className="text-sm text-muted-foreground mt-3">
            Powered by NewLifePOS · Secure & instantly confirmed
          </p>
        </div>

        <div className="rounded-xl overflow-hidden border border-border shadow-gold-soft bg-card">
          <iframe
            src={url}
            title="Online booking"
            className="w-full h-[80vh] md:h-[85vh] border-0"
            loading="lazy"
            allow="payment; geolocation"
          />
        </div>

        <p className="text-center text-xs text-muted-foreground mt-4">
          Trouble loading the form?{" "}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline inline-flex items-center gap-1"
          >
            Open in a new tab <ExternalLink className="w-3 h-3" />
          </a>
        </p>
      </section>
    </>
  );
};

export default Book;
