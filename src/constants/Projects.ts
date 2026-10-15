import proyecto1 from "../assets/proyecto1.png";
import proyecto2 from "../assets/proyecto2.png";
import proyecto3 from "../assets/proyecto3.png";
import proyecto4 from "../assets/proyecto4.png";
import proyecto5 from "../assets/proyecto5.png";
import clipDevImg from "../assets/ClipDevRed.png";
import fidelityWalletImg from "../assets/FidelityWalletRed.png";

export interface ProjectItem {
  id: number;
  image?: string;
  placeholderCode?: string;
  titleKey: string;
  descriptionKey: string;
  tags: string[];
  link: string;
  colors: {
    light: string;
    dark: string;
  };
}

export const projects: ProjectItem[] = [
  {
    id: 1,
    image: clipDevImg,
    placeholderCode: "CLIPDEV · DESKTOP APP",
    titleKey: "projects.list.0.title",
    descriptionKey: "projects.list.0.description",
    tags: ["Electron.js", "React", "TypeScript", "Tailwind CSS", "Vite"],
    link: "https://github.com/NicoVillarroelM/clipDev",
    colors: {
      light: "text-blue-600",
      dark: "text-blue-400",
    },
  },
  {
    id: 2,
    image: fidelityWalletImg,
    placeholderCode: "FIDELITY WALLET · SAAS MONOREPO",
    titleKey: "projects.list.1.title",
    descriptionKey: "projects.list.1.description",
    tags: [
      "React",
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "Docker",
      "Render",
      "Vercel",
    ],
    link: "https://fidelity-wallet-two.vercel.app/",
    colors: {
      light: "text-blue-600",
      dark: "text-blue-400",
    },
  },
  {
    id: 3,
    image: proyecto5,
    titleKey: "projects.list.2.title",
    descriptionKey: "projects.list.2.description",
    tags: ["Angular", "TypeScript", "Firebase", "HERE maps"],
    link: "https://sociosaltyro.cl/login",
    colors: {
      light: "text-blue-600",
      dark: "text-blue-400",
    },
  },
  {
    id: 4,
    image: proyecto1,
    titleKey: "projects.list.3.title",
    descriptionKey: "projects.list.3.description",
    tags: ["Python", "Django", "SQL"],
    link: "#",
    colors: {
      light: "text-blue-600",
      dark: "text-blue-400",
    },
  },
  {
    id: 5,
    titleKey: "projects.list.4.title",
    descriptionKey: "projects.list.4.description",
    image: proyecto2,
    tags: ["React", "Tailwind CSS", "TypeScript"],
    link: "https://talcadevs.vercel.app/",
    colors: {
      light: "text-blue-600",
      dark: "text-blue-400",
    },
  },
  {
    id: 6,
    titleKey: "projects.list.5.title",
    descriptionKey: "projects.list.5.description",
    image: proyecto3,
    tags: ["React", "Tailwind CSS", "TypeScript"],
    link: "#",
    colors: {
      light: "text-blue-600",
      dark: "text-blue-400",
    },
  },
  {
    id: 7,
    titleKey: "projects.list.6.title",
    descriptionKey: "projects.list.6.description",
    image: proyecto4,
    tags: ["HTML5", "CSS3", "JavaScript", "Webflow"],
    link: "https://www.logisticplus.cl/",
    colors: {
      light: "text-blue-600",
      dark: "text-blue-400",
    },
  },
];