import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SPA, openBooking } from "@/components/sections/data";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About Us" },
  { to: "/links", label: "Links" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm tracking-wide transition-smooth ${
      isActive ? "text-gold font-medium" : "text-foreground/80 hover:text-gold"
    }`;

  return (
    <header className="fixed top-0 inset-x-0 z-40 glass-effect">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex-shrink-0">
          <h1 className="font-display text-xl md:text-2xl text-gold-gradient font-semibold tracking-wide">
            {SPA.name}
          </h1>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === "/"} className={linkClass}>
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a href={`tel:${SPA.phoneTel}`}>
            <Button variant="outline" size="sm" className="border-gold/40 text-foreground hover:bg-gold/10">
              <Phone className="w-4 h-4 mr-1.5" /> Call Us
            </Button>
          </a>
          <Button
            size="sm"
            onClick={() => openBooking("header_cta")}
            className="bg-gold-gradient text-primary-foreground hover:opacity-90 shadow-gold-soft"
          >
            <Calendar className="w-4 h-4 mr-1.5" /> Book Now
          </Button>
        </div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="flex flex-col gap-6 pt-8">
              <h2 className="font-display text-2xl text-gold-gradient">{SPA.name}</h2>
              <nav className="flex flex-col gap-3">
                {NAV.map((n) => (
                  <NavLink
                    key={n.to}
                    to={n.to}
                    end={n.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `py-2 text-base ${isActive ? "text-gold font-medium" : "text-foreground"}`
                    }
                  >
                    {n.label}
                  </NavLink>
                ))}
              </nav>
              <div className="flex flex-col gap-2 mt-4">
                <a href={`tel:${SPA.phoneTel}`} onClick={() => setOpen(false)}>
                  <Button variant="outline" className="w-full border-gold/40">
                    <Phone className="w-4 h-4 mr-1.5" /> {SPA.phone}
                  </Button>
                </a>
                <Button
                  className="w-full bg-gold-gradient text-primary-foreground"
                  onClick={() => { openBooking("mobile_menu"); setOpen(false); }}
                >
                  <Calendar className="w-4 h-4 mr-1.5" /> Book Now
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
