import Navbar from "public/src/components/Navbar";
import Hero from "public/src/components/Hero";
import Skills from "public/src/components/Skills";
import Projects from "public/src/components/Projects";
import Contact from "public/src/components/Contact";
import Footer from "public/src/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
