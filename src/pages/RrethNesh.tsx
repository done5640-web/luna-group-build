import Header from "@/components/Header";
import About from "@/components/About";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

const RrethNesh = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header isDark={false} toggleTheme={() => {}} />
      <main className="pt-20">
        <About />
        <Process />
      </main>
      <Footer />
    </div>
  );
};

export default RrethNesh;
