import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import Button from "../buttons/Button";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleDownload = () => {
    window.open("/cv.pdf", "_blank");
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 dark:text-white mb-6">
            Hola, soy <br />
            <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
              Nicolás Villarroel
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Diseñador UX/UI y desarrollador frontend apasionado por crear
            experiencias digitales excepcionales y funcionales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button
              label="Conoce mi trabajo"
              variant="dark"
              onClick={scrollToAbout}
            />

            <Button
              label="Descargar CV"
              icon={Download}
              iconPosition="left"
              onClick={handleDownload}
              variant="outline"
            />
          </div>

          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/NicoVillarroelM"
              className="p-3 rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-400 transition-all duration-300 transform hover:scale-105"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/nicol%C3%A1s-villarroel-meza-045b71257/"
              className="p-3 rounded-full border border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400 
               dark:border-gray-600 dark:text-gray-300 dark:hover:text-white dark:hover:border-gray-400 
               transition-all duration-300 transform hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-500 transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
