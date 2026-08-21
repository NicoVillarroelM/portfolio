import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "about", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen h-screen overflow-y-auto bg-paper text-ink transition-colors duration-300">
      <Navigation activeSection={activeSection} />

      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;