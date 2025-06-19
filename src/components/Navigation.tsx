import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { navItems } from "../constants/NavItems";
import type { NavigationProps } from "../types/Navigation";
import AnimatedLogo from "../utils/AnimatedLogo";

const Navigation = ({ activeSection }: NavigationProps) => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-full shadow-lg border border-gray-200/20 dark:border-gray-700/20 px-6 py-3">
        <div className="flex items-center space-x-8">
          <AnimatedLogo size="sm" speed="normal" />

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm font-medium transition-colors duration-200 cursor-pointer px-3 py-2 rounded-full ${
                    activeSection === item.id
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
