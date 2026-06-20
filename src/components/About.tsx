import { useTranslation } from "react-i18next";
import {
  SiReact,
  SiTypescript,
  SiPython,
  SiDjango,
  SiTailwindcss,
  SiGithub,
  SiAngular
} from "react-icons/si";
import techImage from "../assets/techImage.png";

const skills = [
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "Angular", icon: SiAngular, color: "text-[#DD0031]" },
  { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
  { name: "Django", icon: SiDjango, color: "text-[#092E20] dark:text-[#44B78B]" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "GitHub", icon: SiGithub, color: "text-[#181717] dark:text-white" },
];

const About = () => {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 dark:text-white mb-4 sm:mb-6">
              {t("about.title").split(" ")[0]}{" "}
              <span className="font-bold">
                {t("about.title").split(" ").slice(1).join(" ")}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              {t("about.paragraph1")}
            </p>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              {t("about.paragraph2")}
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <span
                    key={skill.name}
                    className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default group"
                  >
                    <Icon className={`w-4 h-4 ${skill.color} transition-transform duration-300 group-hover:rotate-6`} />
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-full md:aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 overflow-hidden border border-gray-200 dark:border-gray-700">
              <img
                src={techImage}
                alt={t("about.imageAlt")}
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
