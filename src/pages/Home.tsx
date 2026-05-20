import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/seo/Seo";
import { SPA, TESTIMONIALS, openBooking } from "@/components/sections/data";
import heroImg from "@/assets/hero-nails.jpg";
import manicure from "@/assets/manicure-service.jpg";
import pedicure from "@/assets/pedicure-luxury.jpg";
import gel from "@/assets/gel-manicure.jpg";
import extensions from "@/assets/nail-extensions.jpg";
import waxing from "@/assets/waxing-service.jpg";
import lash from "@/assets/eyelash-service.jpg";

const featured = [
  { title: "Luxury Pedicure", img: pedicure, desc: "Hot stones, paraffin, collagen socks." },
  { title: "Gel Manicure", img: gel, desc: "Long-lasting gel that wows for weeks." },
  { title: "Nail Extensions", img: extensions, desc: "Acrylic, Solar, Gel X — flawless full sets." },
];

const galleryPreview = [manicure, pedicure, gel, extensions, waxing, lash];

const Home = () => (
  <>
    <Seo includeLocalBusiness path="/" />

    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
        role="img"
        aria-label="Luxury nail salon interior"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30" />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">{SPA.tagline}</p>
          <h1 className="font-display text-5xl md:text-7xl mb-6 leading-tight">
            <span className="text-gold-gradient">Professional Nail Care</span>
            <br />in Aiken, SC
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            From signature manicures to luxury spa pedicures, discover an elevated experience designed for elegance and relaxation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" onClick={() => openBooking("hero")} className="bg-gold-gradient text-primary-foreground shadow-gold">
              <Calendar className="w-4 h-4 mr-2" /> Book Appointment
            </Button>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-gold/40 hover:bg-gold/10">
                View Services <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Best Services */}
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <p className="text-gold uppercase tracking-[0.3em] text-xs mb-2">Best Services</p>
        <h2 className="font-display text-4xl md:text-5xl mb-3">Signature Treatments</h2>
        <div className="gold-divider w-32 mx-auto" />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {featured.map((f, i) => (
          <motion.article
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-xl overflow-hidden border border-border bg-card shadow-gold-soft hover:shadow-gold transition-luxury"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={f.img} alt={f.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-luxury" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{f.desc}</p>
              <Link to="/services" className="text-gold text-sm inline-flex items-center hover:gap-2 gap-1 transition-all">
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>

    {/* About preview */}
    <section className="bg-secondary/40 py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">About Us</p>
          <h2 className="font-display text-4xl mb-4">Where craftsmanship meets calm.</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {SPA.name} is Aiken's destination for premium nail care. Our experienced technicians combine artistry with the highest standards of sanitation in a serene, beautifully designed space.
          </p>
          <Link to="/about"><Button variant="outline" className="border-gold/40">More about us</Button></Link>
        </motion.div>
        <div className="grid grid-cols-2 gap-3">
          <img src={manicure} alt="Manicure" className="rounded-lg aspect-square object-cover" loading="lazy" />
          <img src={pedicure} alt="Pedicure" className="rounded-lg aspect-square object-cover mt-8" loading="lazy" />
        </div>
      </div>
    </section>

    {/* Gallery preview */}
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-10">
        <p className="text-gold uppercase tracking-[0.3em] text-xs mb-2">Our Work</p>
        <h2 className="font-display text-4xl">Recent Looks</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {galleryPreview.map((g, i) => (
          <img key={i} src={g} alt={`Gallery ${i + 1}`} loading="lazy" className="rounded-lg aspect-square object-cover hover:opacity-90 transition-smooth" />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/gallery"><Button variant="outline" className="border-gold/40">View Full Gallery</Button></Link>
      </div>
    </section>

    {/* Testimonials */}
    <section className="bg-secondary/40 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-2">Testimonials</p>
          <h2 className="font-display text-4xl">Loved by Our Clients</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 6).map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-xl bg-card border border-border p-6 shadow-gold-soft"
            >
              <div className="flex gap-0.5 mb-3 text-gold">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm text-muted-foreground italic mb-4">"{t.text}"</p>
              <p className="text-sm font-medium">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="container mx-auto px-4 py-20 text-center">
      <Sparkles className="w-10 h-10 text-gold mx-auto mb-4" />
      <h2 className="font-display text-4xl md:text-5xl mb-4">Ready to be pampered?</h2>
      <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Book your appointment in seconds — instant online confirmation.</p>
      <Button size="lg" onClick={() => openBooking("home_final")} className="bg-gold-gradient text-primary-foreground shadow-gold">
        Book Online Now
      </Button>
    </section>
  </>
);

export default Home;
