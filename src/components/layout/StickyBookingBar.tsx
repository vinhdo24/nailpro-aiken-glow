import { Phone, Calendar } from "lucide-react";
import { SPA, openBooking } from "@/components/sections/data";

export const StickyBookingBar = () => (
  <div className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-background/95 backdrop-blur border-t border-border p-3 flex gap-2">
    <a href={`tel:${SPA.phoneTel}`} className="flex-1">
      <button className="w-full h-11 rounded-md border border-gold/40 text-foreground flex items-center justify-center gap-1.5 text-sm font-medium">
        <Phone className="w-4 h-4" /> Call
      </button>
    </a>
    <button
      onClick={() => openBooking("sticky_bar")}
      className="flex-1 h-11 rounded-md bg-gold-gradient text-primary-foreground flex items-center justify-center gap-1.5 text-sm font-medium shadow-gold-soft"
    >
      <Calendar className="w-4 h-4" /> Book Now
    </button>
  </div>
);
