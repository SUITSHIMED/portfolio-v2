export interface Project {
  id: number;
  slug: string;
  technologies: string[];
  images: string[];
  github: string;
  live?: string;
  featured?: boolean;

  year: string;
  status: "completed" | "in-progress";
  difficulty: "advanced" | "intermediate" | "beginner";
}
