// Single source of truth — chỉ cần sửa file này để rebrand.

export const SPA = {
  name: "Nail Pro & Spa",
  tagline: "Where Beauty Meets Relaxation",
  address: "407 Fabian Dr, Aiken, SC 29803",
  phone: "(803) 642-0096",
  phoneTel: "+18036420096",
  hours: "Mon – Thu: 10:00 AM – 6:00 PM · Fri – Sat: 9:30 AM – 6:00 PM · Sun: Closed",
  hoursList: [
    { day: "Mon – Thu", time: "10:00 AM – 6:00 PM" },
    { day: "Fri – Sat", time: "9:30 AM – 6:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  bookingUrl: "https://www.newlifepos.com/web/appt/VTBOZk9EZ3dNRGM9",
  geo: { lat: 33.5607, lng: -81.7196 },
};

export const LINKS = {
  website: "/",
  google: "https://share.google/",
  facebook: "https://facebook.com/",
  instagram: "https://instagram.com/",
  yelp: "https://yelp.com/",
  reviewGoogle: "https://g.page/r/review",
  reviewYelp: "https://yelp.com/writeareview",
  reviewFacebook: "https://facebook.com/reviews",
  messenger: "https://m.me/",
  facebookPageId: "",
};

export type ServiceItem = { name: string; price: string; desc?: string };
export type ServiceCategory =
  | { id: string; label: string; layout: "detailed" | "compact"; items: ServiceItem[] }
  | { id: string; label: string; layout: "list"; groups: { label: string; items: ServiceItem[] }[] };

export const SERVICE_MENU: ServiceCategory[] = [
  {
    id: "pedicure",
    label: "Pedicure",
    layout: "detailed",
    items: [
      { name: "Basic Pedicure", price: "$35", desc: "Soak, shaping, cuticle care, massage and polish." },
      { name: "Deluxe Pedicure", price: "$45", desc: "Basic + sugar scrub and hydrating mask." },
      { name: "Luxury Spa Pedicure", price: "$55", desc: "Deluxe + paraffin wax, hot stone massage and collagen socks." },
      { name: "Gel Pedicure", price: "$50", desc: "Long-lasting gel polish with full pedicure service." },
    ],
  },
  {
    id: "manicure",
    label: "Manicure",
    layout: "detailed",
    items: [
      { name: "Basic Manicure", price: "$20", desc: "Shaping, cuticle treatment, hand massage and polish." },
      { name: "Gel Manicure", price: "$35", desc: "Premium gel polish that lasts 2–3 weeks chip-free." },
      { name: "French Manicure", price: "$30", desc: "Classic French tips with regular or gel polish." },
      { name: "Spa Manicure", price: "$40", desc: "Manicure with sugar scrub, mask and extended massage." },
    ],
  },
  {
    id: "enhancements",
    label: "Enhancements",
    layout: "list",
    groups: [
      {
        label: "Acrylic",
        items: [
          { name: "Full Set", price: "$45" },
          { name: "Fill", price: "$30" },
          { name: "Pink & White Full Set", price: "$60" },
          { name: "Pink & White Fill", price: "$45" },
        ],
      },
      {
        label: "Solar / SNS",
        items: [
          { name: "Solar Full Set", price: "$65" },
          { name: "Solar Fill", price: "$50" },
          { name: "Dip Powder", price: "$45" },
        ],
      },
      {
        label: "Gel X / Builder",
        items: [
          { name: "Gel X Full Set", price: "$55" },
          { name: "Builder Gel", price: "$50" },
        ],
      },
    ],
  },
  {
    id: "addons",
    label: "Add-Ons",
    layout: "compact",
    items: [
      { name: "Polish Change (Hands)", price: "$12" },
      { name: "Polish Change (Feet)", price: "$15" },
      { name: "Gel Polish Add-On", price: "$15" },
      { name: "Nail Art (per nail)", price: "$3+" },
      { name: "French Tips Add-On", price: "$5" },
      { name: "Nail Repair", price: "$5" },
    ],
  },
  {
    id: "kids",
    label: "Kids & Students",
    layout: "compact",
    items: [
      { name: "Kids Manicure (under 10)", price: "$15" },
      { name: "Kids Pedicure (under 10)", price: "$25" },
      { name: "Student Manicure", price: "$18" },
      { name: "Student Pedicure", price: "$30" },
    ],
  },
  {
    id: "waxing",
    label: "Waxing",
    layout: "compact",
    items: [
      { name: "Eyebrow", price: "$10" },
      { name: "Upper Lip", price: "$8" },
      { name: "Chin", price: "$10" },
      { name: "Full Face", price: "$35" },
      { name: "Underarm", price: "$20" },
    ],
  },
  {
    id: "additional",
    label: "Additional",
    layout: "compact",
    items: [
      { name: "Eyelash Extensions", price: "$35+" },
      { name: "Lash Lift & Tint", price: "$45" },
      { name: "Paraffin Wax Treatment", price: "$10" },
    ],
  },
];

export const TESTIMONIALS = [
  { name: "Sarah M.", text: "Absolutely the best nail salon in Aiken! The staff is friendly and the service is impeccable." },
  { name: "Jessica T.", text: "My gel manicure lasted three full weeks without a chip. Beautiful, clean and relaxing." },
  { name: "Amanda K.", text: "Luxury pedicure was heavenly — hot stone massage and paraffin were the perfect treat." },
  { name: "Megan R.", text: "I love the attention to detail. My nail art turned out exactly as I imagined." },
  { name: "Lauren B.", text: "Clean, modern and welcoming. The team always makes me feel pampered." },
  { name: "Rachel D.", text: "Hands down my go-to spot. Quality work at fair prices, every single time." },
];

export const SALON_POLICY = [
  "Please inform your nail technician of any health concerns before service.",
  "Appointments are recommended; walk-ins are welcome based on availability.",
  "Please arrive 5 minutes before your scheduled appointment.",
  "A 24-hour notice is appreciated to cancel or reschedule.",
  "Children under 10 must be supervised by an adult at all times.",
  "We reserve the right to refuse service to anyone.",
];

// Helpers — best-effort tracking, never throws
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackLink = (label: string, href: string) => {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "link_click", label, href });
    window.gtag?.("event", "link_click", { label, href });
  } catch { /* no-op */ }
  if (typeof window !== "undefined") window.open(href, "_blank", "noopener,noreferrer");
};

export const buildBookingUrl = (source: string) => {
  try {
    const url = new URL(SPA.bookingUrl);
    url.searchParams.set("utm_source", "website");
    url.searchParams.set("utm_medium", source);
    url.searchParams.set("utm_campaign", "booking");
    return url.toString();
  } catch {
    return SPA.bookingUrl;
  }
};

export const openBooking = (source: string) => {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "booking_click", source });
    window.gtag?.("event", "booking_click", { source });
  } catch { /* no-op */ }
  if (typeof window !== "undefined") window.open(buildBookingUrl(source), "_blank", "noopener,noreferrer");
};
