import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Clock, Star } from "lucide-react";
import manicureImage from "@/assets/manicure-service.jpg";
import pedicureImage from "@/assets/pedicure-service.jpg";
import extensionsImage from "@/assets/nail-extensions.jpg";
import waxingImage from "@/assets/waxing-service.jpg";
import eyelashImage from "@/assets/eyelash-service.jpg";

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
  image: string;
}

const serviceDetails: ServiceDetail[] = [
  {
    id: "manicure-services",
    name: "Manicure Services",
    shortDescription: "Professional nail care and gel polish applications",
    fullDescription: "Complete manicure services from basic nail care to premium gel applications. All services include nail shaping, cuticle care, and professional polish application.",
    features: ["Basic Manicure - $20", "Manicure with Gel Color - $35", "Manicure with Gel French - $40", "Take off + Basic Manicure - $30+", "Gel Soak off with Gel Color - $35"],
    duration: "30-60 minutes",
    priceRange: "$20-$40",
    benefits: ["Professional nail shaping", "Long-lasting gel polish", "Cuticle care", "Clean, polished look"],
    process: ["Nail preparation & shaping", "Cuticle treatment", "Polish application", "Finishing touches", "Quick dry or UV cure"],
    image: manicureImage
  },
  {
    id: "pedicure-services", 
    name: "Pedicure Services",
    shortDescription: "Relaxing foot treatments with optional gel polish",
    fullDescription: "Comprehensive pedicure services featuring foot soaks, exfoliation, massage, and professional polish. Add gel color for longer-lasting results.",
    features: ["Basic Pedicure - $35", "Deluxe Pedicure - $50", "Gel Color on Toes - $20+", "Add Paraffin Wax - $7", "Add Hot Stone - $5", "Toes with French - $35+"],
    duration: "45-75 minutes", 
    priceRange: "$35-$50",
    benefits: ["Soft, smooth feet", "Relaxing foot massage", "Professional pedicure care", "Long-lasting results"],
    process: ["Foot soak", "Callus removal", "Exfoliation", "Massage therapy", "Nail care & polish"],
    image: pedicureImage
  },
  {
    id: "nail-extensions",
    name: "Nail Extensions & Enhancements", 
    shortDescription: "Full sets, fills, and specialty nail applications",
    fullDescription: "Professional nail extensions and enhancements including Solar, SNS, Gel Powder, and Ombre techniques. Full sets and regular fill-ins available.",
    features: ["Solar (Pink & White) Full Set - $65+", "Solar Pink Only Full Set - $35+", "Gel Powder Full Set - $35+", "SNS - $45+", "Ombre Full Set - $65+", "Fill-ins available"],
    duration: "60-90 minutes",
    priceRange: "$35-$65+", 
    benefits: ["Extended nail length", "Durable finish", "Custom designs", "Professional strength"],
    process: ["Nail preparation", "Extension application", "Shaping & filing", "Polish application", "Final inspection"],
    image: extensionsImage
  },
  {
    id: "waxing-services",
    name: "Waxing Services",
    shortDescription: "Complete body waxing for smooth, hair-free skin", 
    fullDescription: "Professional waxing services for face and body. From eyebrow shaping to full leg waxing, we provide comfortable and effective hair removal.",
    features: ["Eyebrows - $10", "Facial Waxing - $30+", "Bikini - $30+", "Full Legs - $60+", "Half Legs - $35+", "Under Arms - $25"],
    duration: "15-60 minutes",
    priceRange: "$6-$60+",
    benefits: ["Smooth, hair-free skin", "Long-lasting results", "Professional technique", "Comfortable experience"],
    process: ["Skin preparation", "Wax application", "Hair removal", "Soothing treatment", "Aftercare advice"],
    image: waxingImage
  },
  {
    id: "eyelash-services",
    name: "Eyelash Services",
    shortDescription: "Professional eyelash treatments for enhanced beauty",
    fullDescription: "Enhance your natural beauty with our professional eyelash services designed to give you fuller, more defined lashes.",
    features: ["Professional Eyelash Service - $35", "Expert application", "Quality materials", "Natural-looking results"],
    duration: "30-45 minutes",
    priceRange: "$35",
    benefits: ["Enhanced eye appearance", "Professional application", "Quality results", "Confidence boost"],
    process: ["Consultation", "Preparation", "Application", "Final touch-ups", "Aftercare instructions"],
    image: eyelashImage
  }
];

export const ServicePages = () => {
  return (
    <section className="py-20" id="detailed-services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-primary">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our complete range of nail care services, each designed to provide exceptional results and a luxurious experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {serviceDetails.map((service) => (
            <Card key={service.id} className="group hover:shadow-luxury transition-luxury border-border/50 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={`Professional ${service.name.toLowerCase()} at Nail Pro & Spa Aiken SC - ${service.shortDescription}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-luxury"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
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