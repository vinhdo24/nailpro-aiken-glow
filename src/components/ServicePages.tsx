import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Clock, Star } from "lucide-react";

interface ServiceDetail {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  duration: string;
  priceRange: string;
  benefits: string[];
  process: string[];
}

const serviceDetails: ServiceDetail[] = [
  {
    id: "signature-manicure",
    name: "Signature Manicure",
    shortDescription: "Complete nail care with shaping, cuticle treatment, and polish",
    fullDescription: "Our signature manicure is a comprehensive nail care service that includes nail shaping, cuticle care, hand massage, and your choice of premium polish. Perfect for maintaining healthy, beautiful nails.",
    features: ["Nail shaping & filing", "Cuticle treatment", "Hand exfoliation", "Relaxing hand massage", "Base coat, color & top coat", "Quick dry finish"],
    duration: "45-60 minutes",
    priceRange: "$25-$35",
    benefits: ["Healthier cuticles", "Smoother hands", "Long-lasting polish", "Professional appearance"],
    process: ["Consultation & color selection", "Nail shaping & cuticle care", "Hand exfoliation & massage", "Polish application", "Finishing touches"]
  },
  {
    id: "luxury-pedicure", 
    name: "Luxury Pedicure",
    shortDescription: "Relaxing foot treatment with exfoliation, massage, and polish",
    fullDescription: "Indulge in our luxury pedicure featuring a relaxing foot soak, callus removal, exfoliation, extended foot and calf massage, and premium polish application in our comfortable spa chairs.",
    features: ["Warm foot soak", "Callus removal", "Foot & leg exfoliation", "Extended massage", "Nail shaping & cuticle care", "Premium polish application"],
    duration: "60-75 minutes", 
    priceRange: "$35-$50",
    benefits: ["Softer, smoother feet", "Improved circulation", "Stress relief", "Professional foot care"],
    process: ["Foot soak preparation", "Callus & dead skin removal", "Exfoliation treatment", "Massage therapy", "Nail care & polish"]
  },
  {
    id: "gel-manicure",
    name: "Gel Manicure", 
    shortDescription: "Long-lasting gel polish that won't chip for weeks",
    fullDescription: "Our gel manicure uses high-quality gel polish that's cured under UV light for a durable, glossy finish that lasts 2-3 weeks without chipping or peeling.",
    features: ["Professional nail prep", "Gel base coat", "Two coats of gel color", "UV light curing", "Glossy top coat", "Cuticle oil finish"],
    duration: "60-75 minutes",
    priceRange: "$40-$55", 
    benefits: ["2-3 week durability", "Chip-resistant finish", "High gloss shine", "Instant dry time"],
    process: ["Nail preparation & shaping", "Base coat application", "Color application & curing", "Top coat & final cure", "Finishing treatment"]
  },
  {
    id: "nail-art",
    name: "Custom Nail Art",
    shortDescription: "Creative designs and artistic nail decorations", 
    fullDescription: "Express your style with our custom nail art services. From simple accent nails to intricate designs, our talented nail artists can create the perfect look for any occasion.",
    features: ["Custom design consultation", "Hand-painted artwork", "Decorative elements", "Seasonal themes", "Special occasion designs", "Trend-inspired looks"],
    duration: "75-90 minutes",
    priceRange: "$50-$80",
    benefits: ["Unique personal expression", "Professional artistry", "Instagram-worthy nails", "Conversation starters"],
    process: ["Design consultation", "Base preparation", "Artistic application", "Detail work", "Protective top coat"]
  }
];

export const ServicePages = () => {
  return (
    <section className="py-20" id="detailed-services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-primary">
            Our Professional Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our complete range of nail care services, each designed to provide exceptional results and a luxurious experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {serviceDetails.map((service) => (
            <Card key={service.id} className="glass-effect border-primary/10 hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold text-primary">{service.name}</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">{service.shortDescription}</p>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{service.duration}</span>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {service.priceRange}
                  </Badge>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium mb-2 text-primary">What's Included:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Star className="w-3 h-3 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-primary text-sm">+ {service.features.length - 3} more features</li>
                    )}
                  </ul>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full" variant="outline">
                      Learn More & Book
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-primary flex items-center gap-2">
                        <Sparkles className="w-6 h-6" />
                        {service.name}
                      </DialogTitle>
                    </DialogHeader>
                    
                    <div className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">{service.fullDescription}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-primary">Service Details</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Duration:</span>
                              <span>{service.duration}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Price Range:</span>
                              <span>{service.priceRange}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3 text-primary">Key Benefits</h4>
                          <ul className="text-sm space-y-1">
                            {service.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <Star className="w-3 h-3 text-primary flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Complete Service Includes</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <Star className="w-3 h-3 text-primary flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Service Process</h4>
                        <ol className="space-y-2">
                          {service.process.map((step, index) => (
                            <li key={index} className="flex items-start gap-3 text-sm">
                              <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center">
                                {index + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
                        <Button 
                          className="flex-1"
                          onClick={() => window.open('tel:(803) 642-0096', '_self')}
                        >
                          Call to Book: (803) 642-0096
                        </Button>
                        <Button variant="outline" className="flex-1">
                          View Location & Hours  
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};