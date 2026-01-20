import { Award, CheckCircle2, Clock, Shield, Users, Wrench } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Eksperiencë në ndërtim",
    description: "Vite eksperiencë në fushën e ndërtimit"
  },
  {
    icon: CheckCircle2,
    title: "Punë korrekte & e kontrolluar",
    description: "Çdo projekt kontrollohet me kujdes"
  },
  {
    icon: Wrench,
    title: "Materiale cilësore",
    description: "Përdorim vetëm materiale të certifikuara"
  },
  {
    icon: Clock,
    title: "Respektim afatesh",
    description: "Dorëzojmë projektet në kohë"
  },
  {
    icon: Users,
    title: "Punëtorë profesionistë",
    description: "Ekip i trajnuar dhe me eksperiencë"
  },
  {
    icon: Shield,
    title: "Projekte të sigurta",
    description: "Ndërtime të qëndrueshme dhe të sigurta"
  }
];

const WhyChooseUs = () => {
  return (
    <section id="pse-ne" className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-construction-gold uppercase tracking-wider">
            Përparësitë Tona
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-6">
            Pse Të Zgjidhni Ne?
          </h2>
          <p className="text-primary-foreground/70">
            Besimi dhe cilësia janë vlerat tona kryesore
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex gap-4 p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 gold-gradient rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-foreground" />
                </div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
