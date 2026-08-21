import { useTranslation } from "react-i18next";
import { projects } from "../constants/Projects";
import {
  SiReact,
  SiTypescript,
  SiAngular,
  SiFirebase,
  SiPython,
  SiDjango,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTailwindcss,
  SiWebflow,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { ExternalLink, MapPin } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useState } from "react";

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const getTagIcon = (tag: string) => {
  const normalized = tag.toLowerCase().trim();
  switch (normalized) {
    case "react":
      return { icon: SiReact, color: "text-[#61DAFB]" };
    case "typescript":
      return { icon: SiTypescript, color: "text-[#3178C6]" };
    case "angular":
      return { icon: SiAngular, color: "text-[#DD0031]" };
    case "firebase":
      return { icon: SiFirebase, color: "text-[#FFCA28]" };
    case "python":
      return { icon: SiPython, color: "text-[#3776AB]" };
    case "django":
      return { icon: SiDjango, color: "text-[#092E20] dark:text-[#44B78B]" };
    case "sql":
      return { icon: FaDatabase, color: "text-[#00758F]" };
    case "tailwind":
    case "tailwindcss":
      return { icon: SiTailwindcss, color: "text-[#06B6D4]" };
    case "html":
      return { icon: SiHtml5, color: "text-[#E34F26]" };
    case "css":
      return { icon: SiCss, color: "text-[#1572B6]" };
    case "javascript":
      return { icon: SiJavascript, color: "text-[#F7DF1E]" };
    case "here maps":
      return { icon: MapPin, color: "text-[#00B0FF]" };
    case "webflow":
      return { icon: SiWebflow, color: "text-[#4353FF]" };
    default:
      return null;
  }
};

const GlyphSheet = ({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) => {
  const { t } = useTranslation();
  const [flipped, setFlipped] = useState(false);
  const hasLink = project.link && project.link !== "#";

  return (
    <motion.div variants={cardVariants} className="h-full">
      <div
        className="perspective-1200 h-full"
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        <div
          className="preserve-3d relative h-full transition-transform duration-700 ease-out"
          style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
        >
          {/* FRONT — the glyph */}
          <div className="backface-hidden relative flex flex-col h-full bg-paper border border-hairline shadow-sm">
            <div className="relative overflow-hidden aspect-[16/10] bg-paper-deep border-b border-hairline-faint">
              <img
                src={project.image}
                alt={t(project.titleKey ?? "")}
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
              <span className="absolute top-3 left-3 font-note text-[10px] tabular-nums uppercase tracking-widest text-ink bg-paper/90 px-2 py-1 border border-hairline">
                PROYECTO {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="p-5 flex flex-col flex-grow">
              <h3 className="font-face font-bold text-xl sm:text-2xl leading-tight text-ink mb-3">
                {t(project.titleKey ?? "")}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => {
                  const iconInfo = getTagIcon(tag);
                  const Icon = iconInfo?.icon;
                  return (
                    <span
                      key={tag}
                      className="flex items-center gap-1.5 font-note text-[10px] uppercase tracking-widest text-ink-soft border border-hairline px-2 py-1"
                    >
                      {Icon && (
                        <Icon className={`w-3 h-3 ${iconInfo.color}`} />
                      )}
                      {tag}
                    </span>
                  );
                })}
              </div>

              <div className="mt-auto flex items-center justify-between border-t border-hairline-faint pt-3">
                <span className="font-note text-[10px] uppercase tracking-widest text-vermilion">
                  {flipped ? t("spec.reverse") : `▼ ${t("spec.reveal")}`}
                </span>
              </div>
            </div>
          </div>

          {/* BACK — the specs */}
          <div
            className="backface-hidden absolute inset-0 flex flex-col bg-ink text-paper border border-hairline shadow-sm"
            style={{ transform: "rotateY(180deg)" }}
          >
            <div className="p-5 sm:p-6 flex flex-col flex-grow">
              <span className="font-note text-[10px] uppercase tracking-widest text-vermilion mb-3">
                {t("spec.reverse")}
              </span>

              <h3 className="font-face font-bold text-xl leading-tight mb-4">
                {t(project.titleKey ?? "")}
              </h3>

              <p className="text-sm text-paper/80 leading-relaxed mb-5 flex-grow">
                {t(project.descriptionKey ?? "")}
              </p>

              <div className="border-t border-paper/20 pt-4 space-y-2 font-note text-[11px] uppercase tracking-widest">
                <div className="flex justify-between gap-4">
                  <span className="text-paper/60">{t("spec.setIn")}</span>
                  <span className="text-right text-paper tabular-nums">
                    {project.tags.join(" · ")}
                  </span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-paper/60">{t("spec.status")}</span>
                  <span
                    className={
                      hasLink ? "text-green font-bold" : "text-ink-soft"
                    }
                  >
                    {hasLink ? t("spec.open") : t("spec.private")}
                  </span>
                </div>
              </div>

              {hasLink && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 bg-vermilion text-paper font-bold font-note text-xs uppercase tracking-[0.25em] px-4 py-3 hover:bg-gold hover:text-ink transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t("spec.visit")}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="relative bg-paper text-ink transition-colors duration-300 py-24"
    >
      <span className="crop-mark top-3 left-3 border-t border-l" />
      <span className="crop-mark top-3 right-3 border-t border-r" />
      <span className="crop-mark bottom-3 left-3 border-b border-l" />
      <span className="crop-mark bottom-3 right-3 border-b border-r" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full">
        <div className="flex items-center gap-4 mb-4 font-note text-[11px] tracking-widest uppercase text-ink-soft">
          <span className="text-vermilion">{t("spec.glyphsKicker")}</span>
          <span className="tick-rule flex-1" />
          <span>
            {t("spec.sheet")} 3 {t("spec.of")} 4
          </span>
        </div>

        <motion.h2
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="font-face font-bold text-4xl sm:text-5xl leading-none mb-3"
        >
          {t("spec.glyphsTitle")}
        </motion.h2>

        <p className="font-note text-[11px] uppercase tracking-widest text-ink-soft mb-12">
          PASAR / TOCAR → {t("spec.reveal").toUpperCase()}
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
        >
          {projects.map((project, index) => (
            <GlyphSheet key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;