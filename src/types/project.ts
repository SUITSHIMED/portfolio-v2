export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  images: string[];
  github: string;
  live?: string;
  featured?: boolean;

  // new fields
  role: string;
  year: string;
  status: "completed" | "in-progress";
  difficulty: "advanced" | "intermediate" | "beginner";
  architecture?: string;
}