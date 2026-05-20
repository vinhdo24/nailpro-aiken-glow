import { useState } from "react";
import { Facebook, Plus, X } from "lucide-react";
import { LINKS, trackLink } from "@/components/sections/data";

const IGIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <defs>
      <linearGradient id="igg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#feda75" />
        <stop offset="25%" stopColor="#fa7e1e" />
        <stop offset="50%" stopColor="#d62976" />
        <stop offset="75%" stopColor="#962fbf" />
        <stop offset="100%" stopColor="#4f5bd5" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#igg)" />
    <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="1.8" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.3-.2-2H12v3.8h5.4c-.2 1.3-1 2.3-2 3v2.5h3.3c1.9-1.8 3-4.4 3-7.3z" />
    <path fill="#34A853" d="M12 22c2.7 0 5-.9 6.7-2.5l-3.3-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.7-5.6-4.1H3v2.6C4.7 19.7 8.1 22 12 22z" />
    <path fill="#FBBC05" d="M6.4 13.9a6 6 0 0 1 0-3.8V7.5H3a10 10 0 0 0 0 9z" />
    <path fill="#EA4335" d="M12 6c1.5 0 2.8.5 3.8 1.5l2.9-2.9C16.9 3 14.7 2 12 2 8.1 2 4.7 4.3 3 7.5l3.4 2.6C7.2 7.7 9.4 6 12 6z" />
  </svg>
);

const YelpIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#D32323">
    <path d="M13 2c1 0 4 .6 5 1.2.7.4.8 1.2.5 2L14.7 12c-.5 1-1.8.9-2.2-.2L10 4c-.3-1 .3-2 1.4-2zM13.5 14.7l5.2 3c.9.5.9 1.7.1 2.4l-1.6 1.6c-.7.7-1.9.6-2.4-.3L12 16.8c-.6-1 .4-2.2 1.5-2.1zM10.5 13.5c.5 1 0 2.2-1.1 2.4l-5.9 1.2c-1 .2-2-.6-1.9-1.7l.2-2.6c.1-1 1-1.7 2-1.5l5.8 1.2c.4.1.8.4 1 .8zM11 18.8v3.7c0 1-1 1.7-2 1.4l-2.4-.8c-1-.3-1.4-1.4-.8-2.3l2.4-3.7c.6-.9 2-.8 2.5.2.2.4.3.9.3 1.5z"/>
  </svg>
);

export const SocialDock = () => {
  const [open, setOpen] = useState(false);
  const items = [
    { label: "Facebook", href: LINKS.facebook, icon: <Facebook className="w-5 h-5 text-[#1877F2]" /> },
    { label: "Instagram", href: LINKS.instagram, icon: <IGIcon /> },
    { label: "Google", href: LINKS.google, icon: <GoogleIcon /> },
    { label: "Yelp", href: LINKS.yelp, icon: <YelpIcon /> },
  ];
  return (
    <div className="fixed right-4 bottom-24 md:bottom-6 z-40 flex flex-col items-end gap-2">
      {open && items.map((it) => (
        <button
          key={it.label}
          onClick={() => trackLink(`dock_${it.label.toLowerCase()}`, it.href)}
          aria-label={it.label}
          className="w-11 h-11 rounded-full bg-background shadow-gold-soft border border-border flex items-center justify-center hover:scale-110 transition-smooth"
        >
          {it.icon}
        </button>
      ))}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close social" : "Open social"}
        className="w-12 h-12 rounded-full bg-gold-gradient text-primary-foreground flex items-center justify-center shadow-gold hover:scale-110 transition-smooth"
      >
        {open ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
      </button>
    </div>
  );
};
