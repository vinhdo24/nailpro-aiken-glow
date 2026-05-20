import { LINKS, trackLink } from "@/components/sections/data";

export const MessengerButton = () => (
  <button
    onClick={() => {
      try {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "messenger_open" });
        window.gtag?.("event", "messenger_open");
      } catch { /* no-op */ }
      trackLink("messenger", LINKS.messenger);
    }}
    aria-label="Message us on Messenger"
    className="fixed left-4 bottom-24 md:bottom-6 z-40 w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold hover:scale-110 transition-smooth"
  >
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
      <path d="M12 2C6.5 2 2 6.1 2 11.2c0 2.9 1.5 5.5 3.8 7.2V22l3.5-1.9c.9.3 1.8.4 2.7.4 5.5 0 10-4.1 10-9.3S17.5 2 12 2zm1 12.5l-2.6-2.7L5.5 14.5l5.4-5.7 2.6 2.7 4.9-2.7-5.4 5.7z" />
    </svg>
  </button>
);
