import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-light text-primary tracking-wide">
              Nail Pro & Spa
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-foreground hover:text-primary transition-smooth px-3 py-2 text-sm font-light"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary transition-smooth px-3 py-2 text-sm font-light"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-smooth px-3 py-2 text-sm font-light"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="text-foreground hover:text-primary transition-smooth px-3 py-2 text-sm font-light"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-foreground hover:text-primary transition-smooth px-3 py-2 text-sm font-light"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-smooth px-3 py-2 text-sm font-light"
              >
                Contact
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="hero" size="sm">
                  <Phone className="mr-2 h-4 w-4" />
                  Book Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-center text-primary">Book Your Appointment</DialogTitle>
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
                    123 Beauty Street, Spa City, SC 12345
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-sm rounded-lg mt-2 shadow-soft">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-3 py-2 text-base font-light text-foreground hover:text-primary transition-smooth"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-base font-light text-foreground hover:text-primary transition-smooth"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-base font-light text-foreground hover:text-primary transition-smooth"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="block w-full text-left px-3 py-2 text-base font-light text-foreground hover:text-primary transition-smooth"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left px-3 py-2 text-base font-light text-foreground hover:text-primary transition-smooth"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-base font-light text-foreground hover:text-primary transition-smooth"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="hero" size="sm" className="w-full">
                      <Phone className="mr-2 h-4 w-4" />
                      Book Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-center text-primary">Book Your Appointment</DialogTitle>
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
                        123 Beauty Street, Spa City, SC 12345
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};