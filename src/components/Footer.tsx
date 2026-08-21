import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-ink text-paper py-8 pb-28 md:pb-8">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="tick-rule mb-6 opacity-40" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="font-note text-[11px] uppercase tracking-widest text-paper/70">
            {t("spec.colophon")}
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/NicoVillarroelM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper/70 hover:text-vermilion transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/nicol%C3%A1s-villarroel-meza-045b71257/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper/70 hover:text-vermilion transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:mezanicolas10@gmail.com"
              className="text-paper/70 hover:text-vermilion transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="font-note text-[11px] uppercase tracking-widest text-paper/50 tabular-nums">
            © 2026 · {t("spec.masthead")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;