import { Phone, MapPin, Clock, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="space-y-4">
            <h3 className="text-2xl font-light text-primary tracking-wide">
              Nail Pro & Spa
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional nail care and spa services in a luxurious, relaxing environment. Your beauty and wellness is our priority.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-foreground">
                <Phone className="mr-3 h-4 w-4 text-primary" />
                <a href="tel:+18036420096" className="hover:text-primary transition-smooth">
                  (803) 642-0096
                </a>
              </div>
              <div className="flex items-center text-sm text-foreground">
                <Mail className="mr-3 h-4 w-4 text-primary" />
                <a href="mailto:info@nailproinaiken.us" className="hover:text-primary transition-smooth">
                  info@nailproinaiken.us
                </a>
              </div>
              <div className="flex items-start text-sm text-foreground">
                <MapPin className="mr-3 h-4 w-4 text-primary mt-0.5" />
                <span>407 Fabian Dr<br />Aiken, SC 29803</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-light text-foreground">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Manicures & Pedicures
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Gel & Solar Nails
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Nail Extensions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Waxing Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Eyelash Services
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-light text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('reviews')}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="/sitemap.xml" className="text-muted-foreground hover:text-primary transition-smooth">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-light text-foreground">Hours & Social</h4>
            <div className="space-y-2">
              <div className="flex items-start text-sm text-foreground">
                <Clock className="mr-3 h-4 w-4 text-primary mt-0.5" />
                <div>
                  <div className="text-muted-foreground">Mon - Thu: 10:00 AM - 6:00 PM</div>
                  <div className="text-muted-foreground">Fri - Sat: 9:30 AM - 6:00 PM</div>
                  <div className="text-muted-foreground">Sunday: Closed</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h5 className="text-sm font-light text-foreground">Follow Us</h5>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com/nailproinaiken" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://instagram.com/nailprospa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com/nailprospa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Nail Pro & Spa. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};