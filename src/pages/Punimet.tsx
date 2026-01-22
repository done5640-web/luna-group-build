import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Import gallery images
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
import whatsapp11 from "@/assets/WhatsApp Image 2026-01-21 at 13.28.11.jpeg";
import construction1 from "@/assets/brett-jordan-jEP4vsHrSM8-unsplash.jpg";
import construction2 from "@/assets/gennifer-miller-Mb_r0CIDFh8-unsplash.jpg";
import construction3 from "@/assets/brett-jordan-pE9fOOJy5rA-unsplash.jpg";
import construction4 from "@/assets/jean-luc-benazet-oOvzE2L-n1A-unsplash.jpg";
import construction5 from "@/assets/pexels-ian-panelo-4567378.jpg";
import construction6 from "@/assets/pexels-ian-panelo-4567377.jpg";

const galleryImages = [
  whatsapp1, whatsapp2, whatsapp3, whatsapp4, whatsapp5,
  whatsapp6, whatsapp7, whatsapp8, whatsapp9, whatsapp10,
  whatsapp11, construction1, construction2, construction3,
  construction4, construction5, construction6
];

const Punimet = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header isDark={false} toggleTheme={() => {}} />
      <main className="pt-20">
        <Gallery images={galleryImages} />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Punimet;
