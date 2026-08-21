import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { navItems } from "../constants/NavItems";
import type { NavigationProps } from "../types/Navigation";
import AnimatedLogo from "../utils/AnimatedLogo";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const folio = ["01", "02", "03", "04"];

const Navigation = ({ activeSection }: NavigationProps) => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* desktop folio bar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="hidden md:block fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[min(92vw,860px)]"
      >
        <div className="bg-paper/90 dark:bg-paper/90 backdrop-blur-md border border-hairline shadow-sm px-5 py-3">
          <div className="flex items-center justify-between gap-4">
            <AnimatedLogo size="sm" className="shrink-0" />

            <div className="flex items-center gap-1 font-note text-xs uppercase tracking-widest">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  style={{ cursor: "pointer" }}
                  className={`px-3 py-2 cursor-pointer border-l first:border-l-0 transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-vermilion font-bold"
                      : "text-ink-soft hover:text-ink dark:hover:text-ink"
                  }`}
                >
                  <span className="mr-1.5 tabular-nums text-[10px]">
                    {folio[i]}
                  </span>
                  {t(item.labelKey)}
                </motion.button>
              ))}
            </div>

            <div className="flex items-center gap-1">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* mobile — right controls */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-5 right-4 z-50 md:hidden"
      >
        <div className="flex flex-col items-center gap-2 bg-paper/90 dark:bg-paper/90 backdrop-blur-md border border-hairline shadow-sm px-2 py-2">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </motion.nav>

      {/* mobile — bottom folio */}
      <motion.nav
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed bottom-4 inset-x-0 z-50 md:hidden px-4"
      >
        <div className="bg-paper/90 dark:bg-paper/90 backdrop-blur-md border border-hairline shadow-sm px-2 py-2">
          <div className="flex items-center justify-between font-note text-[11px] uppercase tracking-widest">
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                style={{ cursor: "pointer" }}
                className={`flex-1 flex flex-col items-center gap-0.5 px-2 py-1.5 cursor-pointer border-l first:border-l-0 transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-vermilion font-bold"
                    : "text-ink-soft hover:text-ink dark:hover:text-ink"
                }`}
              >
                <span className="text-[9px] tabular-nums">{folio[i]}</span>
                {t(item.labelKey)}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation;