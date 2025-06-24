import proyecto1 from "../assets/proyecto1.png";
import proyecto2 from "../assets/proyecto2.png";
import proyecto3 from "../assets/proyecto3.png";
import logisticPlus from "../assets/logisticPlus.png";

export const projects = [
    {
    id: 1,
    image: proyecto1,
    titleKey: "projects.list.0.title",
    descriptionKey: "projects.list.0.description",
    tags: ["Python", "Django", "SQL"],
    link: "#",
    colors: {
      light: "text-blue-600",
      dark: "text-blue-400"
    }
  },
    {
      id: 2,
      titleKey: "projects.list.1.title",
      descriptionKey: "projects.list.1.description",
      image: proyecto2,
      tags: ["React", "Tailwind", "Typescript"],
      link: "https://talcadevs.vercel.app/",
       colors: {
      light: "text-blue-600",
      dark: "text-blue-400"
    }
    },
    {
      id: 3,
      titleKey: "projects.list.2.title",
      descriptionKey: "projects.list.2.description",
      image: proyecto3,
      tags: ["React", "Tailwind", "TypeScript"],
      link: "#",
       colors: {
      light: "text-blue-600",
      dark: "text-blue-400"
    }
    },
    {
      id: 4,
      titleKey: "projects.list.3.title",
      descriptionKey: "projects.list.3.description",
      image: logisticPlus,
      tags: ["html", "CSS", "JavaScript"],
      link: "https://www.logisticplus.cl/",
       colors: {
      light: "text-blue-600",
      dark: "text-blue-400"
    },
    }
  ];