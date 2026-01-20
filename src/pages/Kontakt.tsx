import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Kontakt = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header isDark={false} toggleTheme={() => {}} />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;
