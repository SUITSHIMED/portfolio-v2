export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;

  features: string[];

  technologies: string[];

  images: string[];

  github: string;

  live?: string;

  featured?: boolean;
}