import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const Sherbime = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header isDark={false} toggleTheme={() => {}} />
      <main className="pt-20">
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default Sherbime;
