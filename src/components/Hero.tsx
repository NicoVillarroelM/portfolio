import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Button from "../buttons/Button";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [showName, setShowName] = useState(false);
  const fullText = "Hola, soy";
  const name = "Nicolás Villarroel";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowName(true), 300);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleDownload = () => {
    window.open("/CV-NicolasVM.pdf", "_blank");
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div>
          <div className="text-5xl md:text-7xl font-light text-gray-900 dark:text-white mb-6">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="border-r-2 border-gray-900 dark:border-white ml-1"
              >
                |
              </motion.span>
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={showName ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400"
            >
              {name}
            </motion.span>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={showName ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Diseñador UX/UI y desarrollador frontend apasionado por crear
            experiencias digitales excepcionales y funcionales.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={showName ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                label="Conoce mi trabajo"
                variant="dark"
                onClick={scrollToAbout}
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                label="Descargar CV"
                icon={Download}
                iconPosition="left"
                onClick={handleDownload}
                variant="outline"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={showName ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.3 }}
            className="flex gap-4 justify-center"
          >
            <motion.a
              initial={{ opacity: 0, scale: 0 }}
              animate={showName ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.6, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/NicoVillarroelM"
              className="p-3 rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-400 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              initial={{ opacity: 0, scale: 0 }}
              animate={showName ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.8, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/nicol%C3%A1s-villarroel-meza-045b71257/"
              className="p-3 rounded-full border border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400 
               dark:border-gray-600 dark:text-gray-300 dark:hover:text-white dark:hover:border-gray-400 
               transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-500 transition-colors duration-300" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;