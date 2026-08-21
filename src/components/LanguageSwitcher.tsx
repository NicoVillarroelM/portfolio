import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { languages } from "../constants/Languages";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1 p-2 border border-hairline text-ink-soft hover:text-vermilion hover:border-vermilion transition-all duration-200 cursor-pointer"
        aria-label="Change language"
      >
        <Globe className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-12 bg-paper border border-hairline shadow-sm z-50 overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`flex items-center justify-center w-full px-2 py-1.5 font-note text-sm text-center uppercase transition-colors cursor-pointer ${
                i18n.language === lang.code
                  ? "font-bold text-vermilion bg-paper-deep"
                  : "text-ink-soft hover:bg-paper-deep hover:text-ink"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;