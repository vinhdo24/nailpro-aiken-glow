export const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-primary">
              About Nail Pro & Spa
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Located in the heart of Aiken, South Carolina, Nail Pro & Spa has been serving the community with exceptional nail care services. Our skilled technicians are dedicated to providing you with a luxurious and relaxing experience.
              </p>
              <p className="leading-relaxed">
                We pride ourselves on using only the highest quality products and maintaining the strictest sanitation standards. Every tool is sterilized and we follow all health department guidelines to ensure your safety and comfort.
              </p>
              <p className="leading-relaxed">
                Whether you're preparing for a special occasion or simply treating yourself to some well-deserved pampering, our team is committed to making your visit memorable and leaving you feeling beautiful and confident.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-light text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-primary mb-2">5000+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Sanitized Tools</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="glass-effect rounded-2xl p-8 shadow-luxury">
              <h3 className="text-2xl font-light mb-6 text-primary">Why Choose Us?</h3>
              <div className="space-y-4">
                {[
                  "Expert technicians with years of experience",
                  "Premium quality products and tools",
                  "Strict sanitation and safety protocols", 
                  "Relaxing and luxurious atmosphere",
                  "Competitive pricing with exceptional value",
                  "Personalized service for every client"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};