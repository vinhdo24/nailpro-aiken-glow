import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-nails.jpg";
import gelImage from "@/assets/gel-manicure.jpg";
import pedicureImage from "@/assets/pedicure-luxury.jpg";

export const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-wide">
            Nail Pro & Spa
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-4 opacity-90">
            Professional Nail Care in Aiken, SC
          </p>
          <p className="text-xl mb-12 opacity-80 max-w-3xl mx-auto leading-relaxed">
            Experience luxury and elegance at our premier nail salon. From beautiful manicures to relaxing pedicures, we create the perfect look for every occasion.
          </p>
          
          {/* Quick Services Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-2xl">💅</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Gel Manicures</h3>
                <p className="text-sm opacity-80">Long-lasting, chip-resistant gel polish</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-2xl">🦶</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Luxury Pedicures</h3>
                <p className="text-sm opacity-80">Relaxing foot treatments & massage</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Nail Art</h3>
                <p className="text-sm opacity-80">Creative designs for special occasions</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-xl px-10 py-6"
              onClick={() => window.open('tel:+18036420096', '_self')}
            >
              📞 Call (803) 642-0096
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-xl px-10 py-6 text-white border-white hover:bg-white/20"
              onClick={() => window.open('https://maps.google.com/?q=407+Fabian+Dr,+Aiken,+SC+29803', '_blank')}
            >
              📍 Get Directions
            </Button>
          </div>
          
          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
            <h3 className="text-2xl font-light mb-6">Visit Us Today</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-medium mb-3">📍 Location</h4>
                <p className="opacity-90 leading-relaxed">
                  407 Fabian Dr<br />
                  Aiken, SC 29803
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-3">🕒 Hours</h4>
                <div className="opacity-90 space-y-1 text-sm">
                  <p>Mon-Sat: 9:00 AM - 7:00 PM</p>
                  <p>Sunday: 11:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};