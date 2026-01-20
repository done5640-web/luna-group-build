import { MessageSquare, Layers, Building, Paintbrush, Key } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Konsultim & Planifikim",
    description: "Diskutojmë kërkesat tuaja dhe krijojmë planin e projektit."
  },
  {
    icon: Layers,
    number: "02",
    title: "Themelet & Struktura",
    description: "Ndërtojmë themelet e forta dhe strukturën e ndërtesës."
  },
  {
    icon: Building,
    number: "03",
    title: "Ndërtimi & Punimet",
    description: "Realizojmë punimet kryesore të ndërtimit me cilësi."
  },
  {
    icon: Paintbrush,
    number: "04",
    title: "Rifinitura",
    description: "Përfundojmë detajet e brendshme dhe të jashtme."
  },
  {
    icon: Key,
    number: "05",
    title: "Dorëzim 'Çelësa në Dorë'",
    description: "Ju dorëzojmë shtëpinë tuaj gati për të jetuar."
  }
];

const Process = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-construction-gold uppercase tracking-wider">
            Procesi Ynë
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-6">
            Si Punojmë
          </h2>
          <p className="text-muted-foreground">
            Procesi i thjeshtë dhe transparent nga fillimi deri në fund
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-border" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                {/* Icon */}
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 gold-gradient rounded-2xl flex items-center justify-center relative z-10 mx-auto">
                    <step.icon className="w-8 h-8 text-foreground" />
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold z-20">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
