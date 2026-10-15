import type { IconType } from "react-icons";
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
  SiElectron,
  SiVite,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPrisma,
  SiSupabase,
  SiPostgresql,
  SiTrello,
  SiSonar,
  SiOwasp,
  SiGit,
  SiGithub,
  SiDocker,
  SiRender,
  SiPostman,
  SiOpenai,
  SiClaude,
  SiVercel,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import {
  MapPin,
  Hexagon,
  Boxes,
  Kanban,
  ShieldCheck,
  Webhook,
  Sparkles,
  Terminal,
  Workflow,
  Wrench,
  Cpu,
  Network,
  Languages,
  Globe,
  type LucideIcon,
} from "lucide-react";

export interface TechIconInfo {
  icon: IconType | LucideIcon;
  color: string;
}

export const getTechIcon = (name: string): TechIconInfo | null => {
  const normalized = name.toLowerCase().trim();

  switch (normalized) {
    // Frontend
    case "react":
    case "vite / react":
    case "vite/react":
      return { icon: SiReact, color: "text-[#61DAFB]" };
    case "vite":
      return { icon: SiVite, color: "text-[#646CFF]" };
    case "next.js":
    case "nextjs":
      return { icon: SiNextdotjs, color: "text-ink" };
    case "angular":
      return { icon: SiAngular, color: "text-[#DD0031]" };
    case "typescript":
      return { icon: SiTypescript, color: "text-[#3178C6]" };
    case "javascript":
      return { icon: SiJavascript, color: "text-[#F7DF1E]" };
    case "tailwind":
    case "tailwindcss":
    case "tailwind css":
      return { icon: SiTailwindcss, color: "text-[#06B6D4]" };
    case "html":
    case "html5":
      return { icon: SiHtml5, color: "text-[#E34F26]" };
    case "css":
    case "css3":
      return { icon: SiCss, color: "text-[#1572B6]" };
    case "webflow":
      return { icon: SiWebflow, color: "text-[#4353FF]" };
    case "electron":
    case "electron.js":
    case "electronjs":
      return { icon: SiElectron, color: "text-[#47848F] dark:text-[#9FEAF9]" };

    // Backend & Databases
    case "node.js":
    case "nodejs":
      return { icon: SiNodedotjs, color: "text-[#339933]" };
    case "express":
    case "express.js":
      return { icon: SiExpress, color: "text-ink" };
    case "nestjs":
      return { icon: SiNestjs, color: "text-[#E0234E]" };
    case "prisma":
      return { icon: SiPrisma, color: "text-[#2D3748] dark:text-[#5A67D8]" };
    case "supabase":
      return { icon: SiSupabase, color: "text-[#3ECF8E]" };
    case "firebase":
    case "firebase (firestore, auth)":
      return { icon: SiFirebase, color: "text-[#FFCA28]" };
    case "sql":
      return { icon: FaDatabase, color: "text-[#00758F]" };
    case "postgresql":
    case "postgres":
      return { icon: SiPostgresql, color: "text-[#4169E1]" };
    case "rest apis":
    case "rest api":
      return { icon: Webhook, color: "text-vermilion" };
    case "python":
      return { icon: SiPython, color: "text-[#3776AB]" };
    case "django":
      return { icon: SiDjango, color: "text-[#092E20] dark:text-[#44B78B]" };

    // Architecture, Methodologies & Management
    case "arquitectura hexagonal":
    case "hexagonal architecture":
      return { icon: Hexagon, color: "text-vermilion" };
    case "monorepo":
      return { icon: Boxes, color: "text-[#F69220]" };
    case "tableros kanban":
    case "kanban boards":
    case "kanban":
      return { icon: Kanban, color: "text-[#0079BF]" };
    case "trello":
      return { icon: SiTrello, color: "text-[#0052CC]" };
    case "ci/cd":
    case "ci/cd (owasp, sonarqube)":
      return { icon: ShieldCheck, color: "text-green" };
    case "sonarqube":
      return { icon: SiSonar, color: "text-[#4E9BCD]" };
    case "owasp":
      return { icon: SiOwasp, color: "text-ink" };

    // DevOps, Tools & Cloud
    case "git":
      return { icon: SiGit, color: "text-[#F05032]" };
    case "github":
      return { icon: SiGithub, color: "text-ink" };
    case "docker":
      return { icon: SiDocker, color: "text-[#2496ED]" };
    case "render":
      return { icon: SiRender, color: "text-[#46E3B7]" };
    case "vercel":
      return { icon: SiVercel, color: "text-ink" };
    case "postman":
      return { icon: SiPostman, color: "text-[#FF6C37]" };

    // Artificial Intelligence
    case "gpt":
    case "openai":
    case "gpt & claude":
    case "gpt y claude":
      return { icon: SiOpenai, color: "text-[#10A37F]" };
    case "claude":
      return { icon: SiClaude, color: "text-[#D97757]" };
    case "uso de skills":
    case "ai skills":
    case "skills":
      return { icon: Sparkles, color: "text-gold" };
    case "antigravity cli":
      return { icon: Terminal, color: "text-vermilion" };
    case "harness":
      return { icon: Workflow, color: "text-[#00ADE4]" };

    // IT Support & Systems
    case "mantenimiento hw/sw":
    case "mantenimiento preventivo/correctivo":
    case "hw/sw maintenance":
      return { icon: Wrench, color: "text-vermilion" };
    case "diagnóstico de fallas":
    case "fault diagnostics":
      return { icon: Cpu, color: "text-gold" };
    case "redes y periféricos":
    case "configuración de redes y periféricos":
    case "networks & peripherals":
      return { icon: Network, color: "text-green" };

    // Languages
    case "español (nativo)":
    case "spanish (native)":
      return { icon: Languages, color: "text-vermilion" };
    case "inglés (a2 – técnico)":
    case "english (a2 – technical)":
      return { icon: Globe, color: "text-[#3178C6]" };

    // Other
    case "here maps":
      return { icon: MapPin, color: "text-[#00B0FF]" };

    default:
      return null;
  }
};
