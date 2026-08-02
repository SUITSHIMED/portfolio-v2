export type SkillLevel = "advanced" | "intermediate" | "beginner";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  title: string;
  icon: string; 
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
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
    title: "Mobile",
    icon: "Smartphone",
    skills: [
      { name: "React Native", level: "advanced" },
      { name: "Expo",         level: "advanced" },
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js",      level: "intermediate" },
      { name: "Express",      level: "intermediate" },
      { name: "REST APIs",    level: "intermediate" },
      { name: "JWT Auth",     level: "intermediate" },
    ],
  },
  {
    title: "Database",
    icon: "Database",
    skills: [
      { name: "PostgreSQL",   level: "intermediate" },
      { name: "Sequelize",    level: "intermediate" },
    ],
  },
  {
    title: "Tools & DevOps",
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
    title: "AI & Integrations",
    icon: "Sparkles",
    skills: [
      { name: "Google Gemini", level: "intermediate" },
      { name: "Clerk Auth",    level: "intermediate" },
      { name: "PDF Export",    level: "intermediate" },
    ],
  },
];