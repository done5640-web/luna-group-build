import { Phone, Mail, MapPin, MessageCircle, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logoLuna from "@/assets/logo-luna.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding !pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-block mb-4"
            >
              <img src={logoLuna} alt="Luna Grup Construction" className="h-12 w-auto" />
            </Link>
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
                <Link to="/sherbime" className="text-primary-foreground/70 hover:text-construction-gold transition-colors">
                  Shërbimet
                </Link>
              </li>
              <li>
                <Link to="/punimet" className="text-primary-foreground/70 hover:text-construction-gold transition-colors">
                  Punimet
                </Link>
              </li>
              <li>
                <Link to="/pse-ne" className="text-primary-foreground/70 hover:text-construction-gold transition-colors">
                  Pse Ne
                </Link>
              </li>
              <li>
                <Link to="/rreth-nesh" className="text-primary-foreground/70 hover:text-construction-gold transition-colors">
                  Rreth Nesh
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-primary-foreground/70 hover:text-construction-gold transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-heading font-bold mb-4">Zonë Shërbimi</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/70">Vlorë</li>
              <li className="text-primary-foreground/70">Gjirokastër</li>
              <li className="text-primary-foreground/70">Sarandë</li>
              <li className="text-primary-foreground/70">Himarë</li>
              <li className="text-primary-foreground/70">Tepelenë</li>
              <li className="text-primary-foreground/70">Përmet</li>
              <li className="text-primary-foreground/70">Delvinë</li>
              <li className="text-primary-foreground/70">Konispol</li>
              <li className="text-primary-foreground/70">Memaliaj</li>
              <li className="text-primary-foreground/70">Selenicë</li>
              <li className="text-primary-foreground/70">Këlcyrë</li>
              <li className="text-primary-foreground/70">Libohovë</li>
              <li className="text-primary-foreground/70">Finiq</li>
              <li className="text-primary-foreground/70">Poliçan</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+355683371815" className="flex items-center gap-3 text-primary-foreground/70 hover:text-construction-gold transition-colors">
                  <Phone className="w-4 h-4 text-construction-gold" />
                  <span>068 337 1815</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/355683371815" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary-foreground/70 hover:text-construction-gold transition-colors">
                  <MessageCircle className="w-4 h-4 text-construction-gold" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/luna.grupconstruction/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary-foreground/70 hover:text-construction-gold transition-colors">
                  <Instagram className="w-4 h-4 text-construction-gold" />
                  <span>Instagram</span>
                </a>
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
            © {currentYear} Luna Grup Construction. Të gjitha të drejtat e rezervuara.
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
