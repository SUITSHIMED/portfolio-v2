export interface ProjectDetail {
  slug: string;
  year: string;
  technologies: string[];
  images: string[];
  github: string;
  live?: string;
}

export const projectDetails: ProjectDetail[] = [
  {
    slug: "portfolio",
    year: "2026",
    technologies: [
      "React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion",
    ],

    images: [
      "/images/projects/portfolio/portfolio.png",
    ],

    github: "https://github.com/SUITSHIMED/portfolio-v2",
  },

  {
    slug: "cardiolog",
    year: "2026",
    technologies: [
      "React Native", "Expo", "Node.js", "Express",
      "PostgreSQL", "Sequelize", "JWT", "Docker",
    ],

    images: [
      "/images/projects/cardiolog/history.jpeg",
      "/images/projects/cardiolog/trend.jpeg",
      "/images/projects/cardiolog/chart.jpeg",
    ],

    github: "https://github.com/SUITSHIMED/CardioLog",
  },

  {
    slug: "casalivraison",
    year: "2026",
    technologies: [
      "React Native", "Expo", "Node.js", "Express",
      "PostgreSQL", "Sequelize", "JWT",
    ],

    images: [
      "/images/projects/casalivraison/casaliv1.png",
      "/images/projects/casalivraison/casaliv3.png",
      "/images/projects/casalivraison/casaliv4.png",
    ],

    github: "https://github.com/SUITSHIMED/Casa-livraison",
  },

  {
    slug: "speakiq",
    year: "2026",
    technologies: [
      "React Native", "Expo", "Node.js", "Express",
      "PostgreSQL", "Google Gemini", "Clerk",
    ],

    images: [
      "/images/projects/speakiq/speakiq1.jpeg",
      "/images/projects/speakiq/speakiq2.jpeg",
      "/images/projects/speakiq/speakiq3.jpeg",
    ],

    github: "https://github.com/SUITSHIMED/speakiq01",
  },
];
