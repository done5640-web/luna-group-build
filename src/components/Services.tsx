import { Building2, Hammer, BrickWall, Droplets, Paintbrush, Home } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Ndërtim shtëpish & vilash",
    description: "Ndërtim i plotë i shtëpive dhe vilave sipas dëshirës suaj."
  },
  {
    icon: Building2,
    title: "Punime strukturore",
    description: "Themele, beton armë dhe punime strukturore të sigurta."
  },
  {
    icon: BrickWall,
    title: "Muraturë & suvatime",
    description: "Punime murature dhe suvatime profesionale me materiale cilësore."
  },
  {
    icon: Droplets,
    title: "Izolime termike & hidroizolim",
    description: "Izolim termik dhe hidroizolim për mbrojtje maksimale."
  },
  {
    icon: Paintbrush,
    title: "Punime fasade",
    description: "Fasada moderne dhe të qëndrueshme për pamje profesionale."
  },
  {
    icon: Hammer,
    title: "Rifinitura & punime të brendshme",
    description: "Rifinitura dhe punime të brendshme me cilësi të lartë."
  }
];

const Services = () => {
  return (
    <section id="sherbime" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-construction-gold uppercase tracking-wider">
            Shërbimet Tona
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-6">
            Çfarë Ofrojmë
          </h2>
          <p className="text-muted-foreground">
            Ofrojmë shërbime të plota ndërtimi, nga planifikimi deri në dorëzim të projektit.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-6 card-hover border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 gold-gradient rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing & Permits Section */}
        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-construction-gold/10 border-2 border-construction-gold rounded-2xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Informacion i Rëndësishëm
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background rounded-xl p-6">
                <h4 className="font-heading font-bold text-lg mb-2 text-construction-gold">
                  Leje Ndërtimi
                </h4>
                <p className="text-muted-foreground">
                  Merr përsipër lejen e ndërtimit për projektin tuaj.
                </p>
              </div>
              <div className="bg-background rounded-xl p-6">
                <h4 className="font-heading font-bold text-lg mb-2 text-construction-gold">
                  Çmimi
                </h4>
                <p className="text-muted-foreground">
                  <span className="text-2xl font-bold text-foreground">400€</span> për metër katror
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
