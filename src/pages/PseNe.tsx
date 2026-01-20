import Header from "@/components/Header";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const PseNe = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header isDark={false} toggleTheme={() => {}} />
      <main className="pt-20">
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default PseNe;
