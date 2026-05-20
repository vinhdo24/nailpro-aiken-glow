import { Button } from "@/components/ui/button";
import { Seo } from "@/components/seo/Seo";
import { SERVICE_MENU, SALON_POLICY, openBooking } from "@/components/sections/data";

const Services = () => (
  <>
    <Seo
      title="Services & Pricing — Nail Pro & Spa Aiken, SC"
      description="Full nail service menu: manicures, pedicures, enhancements (acrylic, gel-x, dip powder), waxing, lashes and more."
      path="/services"
      breadcrumbs={[{ name: "Home", url: "/" }, { name: "Services", url: "/services" }]}
    />

    <section className="container mx-auto px-4 py-14 max-w-4xl">
      <div className="text-center mb-12">
        <p className="text-gold uppercase tracking-[0.3em] text-xs mb-2">Menu</p>
        <h1 className="font-display text-4xl md:text-5xl mb-3 text-gold-gradient">Services & Pricing</h1>
        <div className="gold-divider w-32 mx-auto" />
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          All services include attentive care, premium products and our luxury spa experience.
        </p>
      </div>

      <div className="space-y-14">
        {SERVICE_MENU.map((cat) => (
          <section key={cat.id} id={cat.id}>
            <h2 className="font-display text-2xl md:text-3xl mb-1">{cat.label}</h2>
            <div className="gold-divider mb-6" />

            {cat.layout === "detailed" && (
              <div className="space-y-5">
                {cat.items.map((it) => (
                  <div key={it.name} className="border-b border-border/60 pb-4">
                    <div className="flex items-baseline gap-2">
                      <h3 className="font-display text-lg">{it.name}</h3>
                      <span className="dotted-leader" />
                      <span className="font-medium text-gold">{it.price}</span>
                    </div>
                    {it.desc && <p className="text-sm text-muted-foreground mt-1">{it.desc}</p>}
                  </div>
                ))}
              </div>
            )}

            {cat.layout === "list" && (
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
                {cat.groups.map((g) => (
                  <div key={g.label}>
                    <h3 className="font-display text-lg mb-3 text-gold-dark">{g.label}</h3>
                    <ul className="space-y-2">
                      {g.items.map((it) => (
                        <li key={it.name} className="flex items-baseline">
                          <span>{it.name}</span>
                          <span className="dotted-leader" />
                          <span className="font-medium text-gold">{it.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {cat.layout === "compact" && (
              <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-2">
                {cat.items.map((it) => (
                  <li key={it.name} className="flex items-baseline">
                    <span>{it.name}</span>
                    <span className="dotted-leader" />
                    <span className="font-medium text-gold">{it.price}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <div className="mt-16 p-6 rounded-xl bg-secondary/60 border border-border">
        <h3 className="font-display text-xl mb-3">Salon Policies</h3>
        <ul className="text-sm text-muted-foreground space-y-1.5 list-disc list-inside">
          {SALON_POLICY.map((p) => <li key={p}>{p}</li>)}
        </ul>
      </div>

      <div className="text-center mt-12">
        <Button size="lg" onClick={() => openBooking("services_page")} className="bg-gold-gradient text-primary-foreground shadow-gold">
          Book Your Service
        </Button>
      </div>
    </section>
  </>
);

export default Services;
