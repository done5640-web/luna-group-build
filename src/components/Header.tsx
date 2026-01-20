import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoLuna from "@/assets/logo-luna.png";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header = ({ isDark, toggleTheme }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/sherbime", label: "Shërbimet" },
    { href: "/punimet", label: "Punimet" },
    { href: "/pse-ne", label: "Pse Ne" },
    { href: "/rreth-nesh", label: "Rreth Nesh" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background ${
        isScrolled
          ? "backdrop-blur-md shadow-lg"
          : ""
      }`}
    >
      <div className="container-custom section-padding !py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img src={logoLuna} alt="Luna Group Construction" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-medium text-sm hover:text-construction-gold transition-colors ${
                  location.pathname === link.href ? 'text-construction-gold' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              to="/kontakt"
              className="hidden sm:inline-flex btn-secondary text-sm"
            >
              Na Kontaktoni
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in bg-background/95 backdrop-blur-md rounded-lg px-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium hover:text-construction-gold transition-colors ${
                    location.pathname === link.href ? 'text-construction-gold' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/kontakt"
                onClick={() => setIsMenuOpen(false)}
                className="btn-secondary text-center mt-2"
              >
                Na Kontaktoni
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
