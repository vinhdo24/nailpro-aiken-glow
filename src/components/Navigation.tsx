import { useState, useEffect } from "react";
import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const sections = [
    { id: "hero", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "reviews", label: "Reviews" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  // Instant scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'auto', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: [0.5], rootMargin: "-80px 0px -80px 0px" }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-light text-primary tracking-wide">
              Nail Pro & Spa
            </h1>
          </div>

          {/* Tab Navigation */}
          <div className="flex-1 flex justify-center overflow-x-auto scrollbar-hide">
            <Tabs value={activeSection} className="w-full max-w-3xl">
              <TabsList className="inline-flex h-10 w-full bg-muted/50 p-1 rounded-lg">
                {sections.map(({ id, label }) => (
                  <TabsTrigger
                    key={id}
                    value={id}
                    onClick={() => scrollToSection(id)}
                    className="flex-1 min-w-[70px] text-xs md:text-sm font-light data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all"
                  >
                    {label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Book Now Button */}
          <div className="flex-shrink-0">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="hero" size="sm" className="h-9">
                  <Phone className="h-3 w-3 md:mr-2 md:h-4 md:w-4" />
                  <span className="hidden md:inline">Book Now</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-center text-primary">Book Your Appointment</DialogTitle>
                  <DialogDescription className="text-center text-muted-foreground">
                    Contact us to schedule your professional nail care service
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col items-center space-y-4 py-4">
                  <Phone className="h-12 w-12 text-primary" />
                  <p className="text-center text-muted-foreground">
                    Call us to schedule your appointment
                  </p>
                  <a href="tel:+18036420096" className="text-2xl font-light text-primary hover:text-primary-glow transition-smooth">
                    (803) 642-0096
                  </a>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-1 h-4 w-4" />
                    407 Fabian Dr, Aiken, SC 29803
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </nav>
  );
};