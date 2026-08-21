import { Mail, Github, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const cards = [
  {
    key: "github",
    valueKey: "contact.cards.github.username",
    icon: Github,
    href: "https://github.com/NicoVillarroelM",
  },
  {
    key: "linkedin",
    valueKey: "contact.cards.linkedin.username",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/nicol%C3%A1s-villarroel-meza-045b71257/",
  },
  {
    key: "email",
    valueKey: "contact.cards.email.address",
    icon: Mail,
    href: "mailto:mezanicolas10@gmail.com",
  },
];

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center bg-paper-deep text-ink transition-colors duration-300 py-24"
    >
      <span className="crop-mark top-3 left-3 border-t border-l" />
      <span className="crop-mark top-3 right-3 border-t border-r" />
      <span className="crop-mark bottom-3 left-3 border-b border-l" />
      <span className="crop-mark bottom-3 right-3 border-b border-r" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full">
        <div className="flex items-center gap-4 mb-4 font-note text-[11px] tracking-widest uppercase text-ink-soft">
          <span className="text-vermilion">{t("spec.orderKicker")}</span>
          <span className="tick-rule flex-1" />
          <span>
            {t("spec.sheet")} 4 {t("spec.of")} 4
          </span>
        </div>

        <motion.h2
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="font-face font-bold text-4xl sm:text-5xl leading-none mb-4"
        >
          {t("spec.orderTitle")}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-xl text-base md:text-lg text-ink-soft leading-relaxed mb-12"
        >
          {t("contact.footerText")}
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.a
                key={card.key}
                variants={itemVariants}
                href={card.href}
                target={card.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  card.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group bg-paper p-8 border border-hairline shadow-sm relative overflow-hidden hover:-translate-y-1 transition-transform duration-300 flex flex-col gap-4"
              >
                <div className="reg-target absolute top-3 right-3 w-3 h-3" />
                <span className="font-note text-[10px] uppercase tracking-widest text-ink-soft">
                  {t(`contact.cards.${card.key}.label`)}
                </span>
                <Icon className="w-8 h-8 text-vermilion group-hover:text-gold transition-colors duration-200" />
                <span className="font-face font-bold text-lg leading-tight text-ink break-all">
                  {t(card.valueKey)}
                </span>
                <span className="font-note text-[10px] uppercase tracking-widest text-vermilion mt-auto">
                  {t("contact.cards.contact")}
                </span>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="border-t border-hairline pt-8 max-w-3xl"
        >
          <p className="text-sm text-ink-soft leading-relaxed">
            {t("spec.lede")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;