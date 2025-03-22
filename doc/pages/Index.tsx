
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Publications from "@/components/Publications";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-100 text-white">
      <Navbar />
      <Hero />
      <Publications />
      <Experience />
      <Footer />
    </div>
  );
};

export default Index;
