import { HardHat, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding !pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center">
                <HardHat className="w-6 h-6 text-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-tight">
                  Luna Group
                </span>
                <span className="text-xs text-primary-foreground/60 uppercase tracking-wider">
                  Construction
                </span>
              </div>
            </a>
            <p className="text-primary-foreground/70 max-w-md mb-6">
              Ndërtime shtëpish dhe vilash nga themeli deri në çelës. 
              Cilësi, korrektësi dhe besim.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-4">Lidhje të Shpejta</h4>
            <ul className="space-y-3">
              <li>
                <a href="#sherbime" className="text-primary-foreground/70 hover:text-construction-gold transition-colors">
                  Shërbimet
                </a>
              </li>
              <li>
                <a href="#punimet" className="text-primary-foreground/70 hover:text-construction-gold transition-colors">
                  Punimet
                </a>
              </li>
              <li>
                <a href="#pse-ne" className="text-primary-foreground/70 hover:text-construction-gold transition-colors">
                  Pse Ne
                </a>
              </li>
              <li>
                <a href="#rreth-nesh" className="text-primary-foreground/70 hover:text-construction-gold transition-colors">
                  Rreth Nesh
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-primary-foreground/70 hover:text-construction-gold transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="w-4 h-4 text-construction-gold" />
                <span>+355 69 123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="w-4 h-4 text-construction-gold" />
                <span>info@lunagroup.al</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-construction-gold" />
                <span>Tiranë, Shqipëri</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Luna Group Construction. Të gjitha të drejtat e rezervuara.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Ndërtuar me dashuri në Shqipëri 🇦🇱
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
