import { ArrowRight, Building2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Ndërtime Shtëpish
            <span className="block text-gold-gradient">&amp; Vilash</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Cilësi, korrektësi, besim. Nga themeli deri në çelës.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a href="#kontakt" className="btn-secondary w-full sm:w-auto">
              Na Kontaktoni
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#punimet" className="btn-outline w-full sm:w-auto">
              <Building2 className="w-5 h-5" />
              Shiko Punimet
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-gold-gradient">10+</div>
              <div className="text-sm text-muted-foreground mt-1">Vite Eksperiencë</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-gold-gradient">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Projekte të Përfunduara</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-gold-gradient">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Klientë të Kënaqur</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground">Zbrit</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-construction-gold" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
