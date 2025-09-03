import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import gelImage from "@/assets/gel-manicure.jpg";
import pedicureImage from "@/assets/pedicure-luxury.jpg";

const services = [
  {
    title: "Gel Manicures",
    description: "Long-lasting, chip-resistant gel polish in a rainbow of colors",
    features: ["Chip-resistant finish", "2-3 week wear", "UV light cured", "Healthy nail care"],
    image: gelImage
  },
  {
    title: "Luxury Pedicures", 
    description: "Relaxing foot treatments with exfoliation, massage, and polish",
    features: ["Foot soak & scrub", "Cuticle care", "Relaxing massage", "Perfect polish"],
    image: pedicureImage
  },
  {
    title: "Acrylic Nails",
    description: "Durable extensions and overlays for length and strength",
    features: ["Custom length", "Nail art designs", "Strong & durable", "Regular fills available"],
    image: gelImage
  },
  {
    title: "Nail Art & Design",
    description: "Creative designs and artistic touches for special occasions",
    features: ["Custom artwork", "Seasonal designs", "Special occasion", "French manicures"],
    image: pedicureImage
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-primary">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional nail care services designed to pamper and beautify. Each service includes meticulous attention to detail and the highest quality products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-luxury transition-luxury border-border/50">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={`Professional ${service.title.toLowerCase()} service at Nail Pro & Spa Aiken SC - ${service.description}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-luxury"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-primary group-hover:text-primary-glow transition-luxury">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};