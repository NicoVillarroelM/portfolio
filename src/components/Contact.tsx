import { Mail, Github, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 dark:text-white mb-4 sm:mb-6">
            {t("contact.title").split(" ").length === 1 ? (
              <span className="font-bold">{t("contact.title")}</span>
            ) : (
              <>
                {t("contact.title").split(" ")[0]}{" "}
                <span className="font-bold">
                  {t("contact.title").split(" ").slice(1).join(" ")}
                </span>
              </>
            )}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a
            href="https://github.com/NicoVillarroelM"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 text-center group"
          >
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Github className="w-8 h-8 text-gray-700 dark:text-gray-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {t("contact.cards.github.label")}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {" "}
              {t("contact.cards.github.username")}
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/nicol%C3%A1s-villarroel-meza-045b71257/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 text-center group"
          >
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Linkedin className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {t("contact.cards.linkedin.label")}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t("contact.cards.linkedin.username")}
            </p>
          </a>

          <a
            href="mailto:mezanicolas10@gmail.com"
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 text-center group"
          >
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {t("contact.cards.email.label")}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t("contact.cards.email.address")}
            </p>
          </a>
        </div>

        <div className="text-center">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t("contact.footerText")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
