import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    slug: "portfolio",
    year: "2026",
    status: "completed",
    difficulty: "intermediate",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
    ],

    images: [
      "/images/projects/portfolio/portfolio.png",
    ],

    github: "https://github.com/SUITSHIMED/portfolio-v2",
    live: "",
    featured: true,
  },

  {
    id: 2,
    slug: "cardiolog",
    year: "2026",
    status: "completed",
    difficulty: "advanced",
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "JWT",
    ],

    images: [
      "/images/projects/cardiolog/history.jpeg",
      "/images/projects/cardiolog/trend.jpeg",
      "/images/projects/cardiolog/chart.jpeg",
    ],

    github: "https://github.com/SUITSHIMED/CardioLog",
    featured: true,
  },

  {
    id: 3,
    slug: "casalivraison",
    year: "2026",
    status: "completed",
    difficulty: "advanced",
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
    ],

    images: [
      "/images/projects/casalivraison/casaliv1.png",
      "/images/projects/casalivraison/casaliv3.png",
      "/images/projects/casalivraison/casaliv4.png",
    ],

    github: "https://github.com/SUITSHIMED/Casa-livraison",
    featured: true,
  },

  {
    id: 4,
    slug: "speakiq",
    year: "2026",
    status: "completed",
    difficulty: "advanced",
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Google Gemini",
      "Clerk",
    ],

    images: [
      "/images/projects/speakiq/speakiq1.jpeg",
      "/images/projects/speakiq/speakiq2.jpeg",
      "/images/projects/speakiq/speakiq3.jpeg",
    ],

    github: "https://github.com/SUITSHIMED/speakiq01",
    featured: true,
  },
];
