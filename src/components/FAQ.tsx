import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const faqs = [
  {
    question: "What nail services do you offer at Nail Pro & Spa?",
    answer: "We offer a complete range of professional nail services including signature manicures, luxury pedicures, gel manicures, nail art, French manicures, and spa treatments. All services are performed by experienced nail technicians using high-quality products."
  },
  {
    question: "How long do gel manicures last?",
    answer: "Our gel manicures typically last 2-3 weeks without chipping or peeling. The longevity depends on your daily activities and nail care routine. We use premium gel products and proper application techniques to ensure maximum durability."
  },
  {
    question: "Do I need an appointment or do you accept walk-ins?",
    answer: "We recommend making an appointment to guarantee your preferred time slot, especially on weekends. However, we do accept walk-ins based on availability. Call us at (803) 642-0096 to schedule your appointment."
  },
  {
    question: "What safety and sanitation protocols do you follow?",
    answer: "Your safety is our priority. We follow strict sanitation protocols including sterilizing all tools, using disposable items when possible, and maintaining clean workstations. Our spa equipment is thoroughly cleaned and disinfected between each client."
  },
  {
    question: "What are your hours and location?",
    answer: "We're located at 407 Fabian Dr, Aiken, SC 29803. Our hours are Monday-Thursday 10:00am-6:00pm, Friday-Saturday 9:30am-6:00pm, and we're closed on Sundays. We're easily accessible and offer convenient parking."
  },
  {
    question: "Do you offer nail art and custom designs?",
    answer: "Yes! Our skilled nail artists can create custom nail art, seasonal designs, and special occasion nails. From simple accent nails to intricate patterns, we can bring your vision to life. Ask about our nail art options during your visit."
  },
  {
    question: "What makes Nail Pro & Spa different from other nail salons in Aiken?",
    answer: "We pride ourselves on exceptional customer service, a clean and relaxing environment, and skilled technicians who stay current with the latest trends and techniques. Our luxury spa atmosphere and attention to detail set us apart in Aiken, SC."
  },
  {
    question: "How much do your services cost?",
    answer: "Our prices are competitive and vary by service. Basic manicures start at $20, luxury pedicures from $35, and gel manicures from $35. Contact us for current pricing on all services and any seasonal promotions we may be offering."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our nail salon services, appointments, and policies at Nail Pro & Spa in Aiken, SC.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-effect border-primary/10 p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </div>
    </section>
  );
};