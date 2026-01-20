import { ArrowRight, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-construction-gold/5" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-construction-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container-custom section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted mb-8 animate-fade-up">
            <Building2 className="w-4 h-4 text-construction-gold" />
            <span className="text-sm font-medium">Ndërtim Profesional</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-heading font-black mb-8 animate-fade-up px-4" style={{ animationDelay: "0.05s" }}>
            Ndërtime Shtëpish
            <span className="block text-gold-gradient">&amp; Vilash</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up px-4" style={{ animationDelay: "0.1s" }}>
            Cilësi, korrektësi, besim. Nga themeli deri në çelës.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up px-4" style={{ animationDelay: "0.15s" }}>
            <Link to="/kontakt" className="btn-secondary w-full sm:w-auto">
              Na Kontaktoni
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/punimet" className="btn-outline w-full sm:w-auto">
              <Building2 className="w-5 h-5" />
              Shiko Punimet
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
