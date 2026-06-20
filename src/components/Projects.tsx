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
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { ExternalLink, MapPin } from "lucide-react";

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
    default:
      return null;
  }
};

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center bg-white dark:bg-gray-900 transition-colors duration-300 py-16 sm:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 dark:text-white mb-4 sm:mb-6 pt-8">
            {t("projects.title").split(" ")[0]}{" "}
            <span className="font-bold">
              {t("projects.title").split(" ").slice(1).join(" ")}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
            {t("projects.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col h-full bg-gray-50 dark:bg-gray-950 border border-gray-200/60 dark:border-gray-800/80 rounded-3xl shadow-sm hover:shadow-2xl hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-500 overflow-hidden group hover:-translate-y-2"
            >
              {/* Image Container flush to top and sides */}
              <div className="relative overflow-hidden aspect-[16/10] bg-white dark:bg-gray-900">
                <img
                  src={project.image}
                  alt={t(project.titleKey ?? "")}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]"
                  >
                    <span className="bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out flex items-center justify-center">
                      <ExternalLink className="w-5 h-5" />
                    </span>
                  </a>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {t(project.titleKey ?? "")}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5 flex-grow font-light">
                  {t(project.descriptionKey ?? "")}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => {
                    const iconInfo = getTagIcon(tag);
                    const Icon = iconInfo?.icon;
                    return (
                      <span
                        key={tag}
                        className="flex items-center gap-1.5 bg-white dark:bg-gray-900/60 text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-gray-800/40 px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-default group/tag"
                      >
                        {Icon && (
                          <Icon
                            className={`w-3.5 h-3.5 ${iconInfo.color} transition-transform duration-300 group-hover/tag:rotate-6`}
                          />
                        )}
                        {tag}
                      </span>
                    );
                  })}
                </div>

                {/* Card Footer Link */}
                {project.link && project.link !== "#" ? (
                  <div className="border-t border-gray-100 dark:border-gray-800/80 pt-4 mt-2 flex justify-end">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 group/link"
                    >
                      {t("projects.viewProject")}
                      <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                ) : (
                  <div className="border-t border-gray-100 dark:border-gray-800/80 pt-4 mt-2 flex justify-end">
                    <span className="text-xs text-gray-400 dark:text-gray-500 font-medium italic cursor-default">
                      {t("projects.comingSoon")}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
