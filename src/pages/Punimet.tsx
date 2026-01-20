import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

// Import gallery images
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import whatsapp1 from "@/assets/WhatsApp Image 2026-01-20 at 20.18.16 (1).jpeg";
import whatsapp2 from "@/assets/WhatsApp Image 2026-01-20 at 20.18.16 (2).jpeg";
import whatsapp3 from "@/assets/WhatsApp Image 2026-01-20 at 20.18.16 (3).jpeg";
import whatsapp4 from "@/assets/WhatsApp Image 2026-01-20 at 20.18.16.jpeg";
import whatsapp5 from "@/assets/WhatsApp Image 2026-01-20 at 20.18.17 (1).jpeg";
import whatsapp6 from "@/assets/WhatsApp Image 2026-01-20 at 20.18.17 (2).jpeg";
import whatsapp7 from "@/assets/WhatsApp Image 2026-01-20 at 20.18.17 (3).jpeg";
import whatsapp8 from "@/assets/WhatsApp Image 2026-01-20 at 20.18.17 (4).jpeg";
import whatsapp9 from "@/assets/WhatsApp Image 2026-01-20 at 20.18.17 (5).jpeg";
import whatsapp10 from "@/assets/WhatsApp Image 2026-01-20 at 20.18.17.jpeg";

const galleryImages = [
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery6,
  whatsapp1, whatsapp2, whatsapp3, whatsapp4, whatsapp5,
  whatsapp6, whatsapp7, whatsapp8, whatsapp9, whatsapp10
];

const Punimet = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header isDark={false} toggleTheme={() => {}} />
      <main className="pt-20">
        <Gallery images={galleryImages} />
      </main>
      <Footer />
    </div>
  );
};

export default Punimet;
