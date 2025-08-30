import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import heroImage from "@/assets/hero-nails.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
          Nail Pro & Spa
        </h1>
        <p className="text-xl md:text-2xl font-light mb-4 opacity-90">
          Professional Nail Care in Aiken, SC
        </p>
        <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto leading-relaxed">
          Experience luxury and elegance at our premier nail salon. From beautiful manicures to relaxing pedicures, we create the perfect look for every occasion.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-4"
              >
                Book Appointment
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="text-center text-primary">Book Your Appointment</DialogTitle>
                <DialogDescription className="text-center">
                  Call us now to schedule your visit
                </DialogDescription>
              </DialogHeader>
              <div className="text-center py-6">
                <a 
                  href="tel:+18036420096"
                  className="text-3xl font-bold text-primary hover:text-primary/80 transition-colors block"
                >
                  (803) 642-0096
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Available during business hours
                </p>
              </div>
            </DialogContent>
          </Dialog>
          <Button 
            variant="ghost" 
            size="lg" 
            className="text-lg px-8 py-4 text-white border-white hover:bg-white/20"
            onClick={() => {
              const servicesSection = document.getElementById('services');
              servicesSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Services
          </Button>
        </div>
      </div>
      
      {/* Elegant scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};