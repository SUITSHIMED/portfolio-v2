export type SkillLevel = "advanced" | "intermediate" | "beginner";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export type SkillCategoryKey =
  | "frontend"
  | "mobile"
  | "backend"
  | "database"
  | "tools"
  | "ai";

export interface SkillCategory {
  key: SkillCategoryKey;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    key: "frontend",
    icon: "Monitor",
    skills: [
      { name: "HTML",         level: "advanced" },
      { name: "CSS",          level: "advanced" },
      { name: "JavaScript",   level: "advanced" },
      { name: "TypeScript",   level: "intermediate" },
      { name: "React",        level: "advanced" },
      { name: "Tailwind CSS", level: "advanced" },
    ],
  },
  {
    key: "mobile",
    icon: "Smartphone",
    skills: [
      { name: "React Native", level: "advanced" },
      { name: "Expo",         level: "advanced" },
    ],
  },
  {
    key: "backend",
    icon: "Server",
    skills: [
      { name: "Node.js",      level: "intermediate" },
      { name: "Express",      level: "intermediate" },
      { name: "REST APIs",    level: "intermediate" },
      { name: "JWT Auth",     level: "intermediate" },
    ],
  },
  {
    key: "database",
    icon: "Database",
    skills: [
      { name: "PostgreSQL",   level: "intermediate" },
      { name: "Sequelize",    level: "intermediate" },
    ],
  },
  {
    key: "tools",
    icon: "Wrench",
    skills: [
      { name: "Git",          level: "advanced" },
      { name: "GitHub",       level: "advanced" },
      { name: "Docker",       level: "beginner" },
      { name: "VS Code",      level: "advanced" },
      { name: "Figma",        level: "intermediate" },
    ],
  },
  {
    key: "ai",
    icon: "Sparkles",
    skills: [
      { name: "Google Gemini", level: "intermediate" },
      { name: "Clerk Auth",    level: "intermediate" },
      { name: "PDF Export",    level: "intermediate" },
    ],
  },
];
