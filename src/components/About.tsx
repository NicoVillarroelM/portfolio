import { useTranslation } from "react-i18next";
import { motion, type Variants } from "framer-motion";
import techImage from "../assets/techImage.png";

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const cuts = [
  { name: "React", weight: 700, note: "COMPONENTES" },
  { name: "Angular", weight: 600, note: "MÓDULOS" },
  { name: "TypeScript", weight: 800, note: "TIPADO SEGURO" },
  { name: "Tailwind CSS", weight: 500, note: "ESTILOS ÁGILES" },
  { name: "Python · Django", weight: 900, note: "BACKEND" },
  { name: "Git · Swagger", weight: 400, note: "DOCUMENTACIÓN" },
];

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center bg-paper-deep text-ink transition-colors duration-300 py-24"
    >
      <span className="crop-mark top-3 left-3 border-t border-l" />
      <span className="crop-mark top-3 right-3 border-t border-r" />
      <span className="crop-mark bottom-3 left-3 border-b border-l" />
      <span className="crop-mark bottom-3 right-3 border-b border-r" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full">
        <div className="flex items-center gap-4 mb-10 font-note text-[11px] tracking-widest uppercase text-ink-soft">
          <span className="text-vermilion">{t("spec.anatomyKicker")}</span>
          <span className="tick-rule flex-1" />
          <span>
            {t("spec.sheet")} 2 {t("spec.of")} 4
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative"
          >
            {/* annotation: hairline pointer at the bio */}
            <div className="hidden md:block absolute -left-10 top-10 w-8">
              <div className="border-l border-hairline h-24 relative">
                <span className="absolute top-20 -left-10 w-24 font-note text-[10px] uppercase tracking-widest text-vermilion">
                  altura-x — el oficio
                </span>
              </div>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-xs font-note uppercase tracking-[0.3em] text-vermilion mb-4"
            >
              {t("hero.subtitle").toUpperCase()}
            </motion.p>

            <motion.h2
              variants={itemVariants}
              className="font-face font-bold text-4xl sm:text-5xl leading-none mb-8"
            >
              {t("about.title").split(" ")[0]}{" "}
              <span className="text-ink-soft">
                {t("about.title").split(" ").slice(1).join(" ")}
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-ink-soft mb-5 leading-relaxed max-w-prose"
            >
              {t("about.paragraph1")}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-ink-soft mb-8 leading-relaxed max-w-prose"
            >
              {t("about.paragraph2")}
            </motion.p>

            {/* annotation: contraforma — en progreso */}
            <div className="hidden md:block absolute -right-6 bottom-0 w-8">
              <div className="border-r border-hairline h-24 relative">
                <span className="absolute bottom-24 -right-6 w-32 text-right font-note text-[10px] uppercase tracking-widest text-ink-soft">
                  contraforma — en progreso
                </span>
              </div>
            </div>

            <motion.div variants={itemVariants} className="relative">
              <div className="reg-target absolute top-1/2 -left-3 w-3 h-3 -translate-y-1/2" />
              <div className="aspect-[4/3] border border-hairline overflow-hidden bg-paper">
                <img
                  src={techImage}
                  alt={t("about.imageAlt")}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <span className="absolute bottom-3 right-3 font-note text-[10px] uppercase tracking-widest text-ink bg-paper/90 px-2 py-1 border border-hairline">
                PÁGINA A
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.p
              variants={itemVariants}
              className="text-xs font-note uppercase tracking-[0.3em] text-vermilion mb-4"
            >
              {t("spec.weightsTitle")}
            </motion.p>

            <div className="border-t border-hairline">
              {cuts.map((cut, i) => (
                <motion.div
                  key={cut.name}
                  variants={itemVariants}
                  className="group flex items-baseline justify-between gap-4 border-b border-hairline-faint py-5 hover:bg-paper transition-colors duration-200 px-3 -mx-3"
                >
                  <div className="flex items-baseline gap-3 min-w-0">
                    <span className="font-note text-[10px] tabular-nums text-ink-soft w-6 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="font-face leading-none text-2xl sm:text-[1.7rem] text-ink truncate"
                      style={{ fontWeight: cut.weight }}
                    >
                      {cut.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-note text-[10px] uppercase tracking-widest text-ink-soft hidden sm:inline">
                      <span className="text-vermilion mr-2">·</span>
                      {cut.note}
                    </span>
                    <span className="font-note text-[10px] tabular-nums text-vermilion">
                      {cut.weight}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              variants={itemVariants}
              className="mt-6 font-note text-[11px] uppercase tracking-widest text-ink-soft"
            >
              {t("about.description")}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;