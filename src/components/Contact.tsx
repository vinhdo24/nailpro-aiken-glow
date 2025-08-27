import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Contact = () => {
  const hours = [
    { day: "Monday", time: "10:00 AM - 6:00 PM" },
    { day: "Tuesday", time: "10:00 AM - 6:00 PM" },
    { day: "Wednesday", time: "10:00 AM - 6:00 PM" },
    { day: "Thursday", time: "10:00 AM - 6:00 PM" },
    { day: "Friday", time: "9:30 AM - 6:00 PM" },
    { day: "Saturday", time: "9:30 AM - 6:00 PM" },
    { day: "Sunday", time: "Closed" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-primary">
            Visit Our Salon
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Located conveniently in Aiken, South Carolina. We welcome walk-ins and appointments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <Card className="shadow-luxury border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Contact Info</CardTitle>
              <CardDescription>Get in touch with us</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 text-primary mt-1 mr-3">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-primary">Address</h4>
                  <p className="text-muted-foreground">407 Fabian Dr<br />Aiken, SC 29803</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 text-primary mt-1 mr-3">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-primary">Phone</h4>
                  <p className="text-muted-foreground">(803) 642-0096</p>
                </div>
              </div>
              
              <div className="pt-4">
                <Button className="w-full luxury-gradient text-white hover:shadow-glow transition-luxury">
                  Call to Book
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Hours */}
          <Card className="shadow-luxury border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Business Hours</CardTitle>
              <CardDescription>We're here when you need us</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {hours.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border/30 last:border-0">
                    <span className="font-medium text-foreground">{item.day}</span>
                    <span className={`text-sm ${item.time === 'Closed' ? 'text-muted-foreground' : 'text-primary'}`}>
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Map Placeholder */}
          <Card className="shadow-luxury border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Find Us</CardTitle>
              <CardDescription>Easy to locate and plenty of parking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="w-12 h-12 mx-auto mb-2 text-primary">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm">407 Fabian Dr<br />Aiken, SC 29803</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Get Directions
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};