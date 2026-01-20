import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, Instagram } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Faleminderit! Do t'ju kontaktojmë së shpejti.");
    setFormData({ name: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="kontakt" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-sm font-semibold text-construction-gold uppercase tracking-wider">
              Kontakt
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-6">
              Na Kontaktoni
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Na kontaktoni për një ofertë falas. Jemi të gatshëm t'ju ndihmojmë me projektin tuaj.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <a
                href="tel:+355683371815"
                className="flex items-center gap-4 p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors group"
              >
                <div className="w-12 h-12 gold-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Telefon</div>
                  <div className="font-semibold">068 337 1815</div>
                </div>
              </a>

              <a
                href="https://wa.me/355683371815"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors group"
              >
                <div className="w-12 h-12 gold-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">WhatsApp</div>
                  <div className="font-semibold">Na shkruani në WhatsApp</div>
                </div>
              </a>

              <a
                href="https://www.instagram.com/luna.grupconstruction/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors group"
              >
                <div className="w-12 h-12 gold-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Instagram className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Instagram</div>
                  <div className="font-semibold">@luna.grupconstruction</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted">
                <div className="w-12 h-12 gold-gradient rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Adresa</div>
                  <div className="font-semibold">Tiranë, Shqipëri</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <h3 className="text-2xl font-heading font-bold mb-2">
              Kërkoni një Ofertë
            </h3>
            <p className="text-muted-foreground mb-6">
              Plotësoni formularin dhe do t'ju kontaktojmë së shpejti.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Emri juaj
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-construction-gold/50 transition-all"
                  placeholder="Emri dhe Mbiemri"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Numri i telefonit
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-construction-gold/50 transition-all"
                  placeholder="+355 6X XXX XXXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mesazhi juaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-construction-gold/50 transition-all resize-none"
                  placeholder="Përshkruani projektin tuaj..."
                />
              </div>

              <button type="submit" className="btn-secondary w-full">
                <Send className="w-5 h-5" />
                Dërgo Mesazhin
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
