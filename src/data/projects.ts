import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    slug: "portfolio",
    title: "Portfolio V2",
    category: "Developer Portfolio",
    role: "Frontend Developer",
    year: "2026",
    status: "completed",
    difficulty: "intermediate",
    architecture: "Single-page React app with Vite, TypeScript, Tailwind CSS v4, and Framer Motion animations.",

    description:
      "A modern developer portfolio built with React, TypeScript, and Tailwind CSS to showcase projects, skills, and experience through a clean, responsive interface.",

    features: [
      "Responsive Design",
      "Dark Theme",
      "Framer Motion Animations",
      "Reusable Component Architecture",
    ],

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
    title: "CardioLog",
    category: "Full-Stack Mobile Application",
    role: "Full Stack Developer",
    year: "2026",
    status: "completed",
    difficulty: "advanced",
    architecture: "React Native (Expo) frontend + Node.js/Express REST API + PostgreSQL database with Sequelize ORM. JWT-based authentication with refresh tokens.",

    description:
      "A cardiac health tracking application for monitoring blood pressure readings with secure authentication, analytics, and exportable medical reports.",

    features: [
      "Blood Pressure Tracking",
      "Interactive Charts",
      "PDF Medical Reports",
      "JWT Authentication",
    ],

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
    title: "CasaLivraison",
    category: "Food Delivery Platform",
    role: "Full Stack Developer",
    year: "2026",
    status: "completed",
    difficulty: "advanced",
    architecture: "React Native (Expo) mobile app with a Node.js/Express backend. PostgreSQL + Sequelize for restaurant, menu, and order management.",

    description:
      "A full-stack food delivery application allowing users to browse restaurants, explore menus, and place secure online orders.",

    features: [
      "Restaurant Browser",
      "Menu Exploration",
      "Online Ordering",
      "JWT Authentication",
    ],

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
    title: "SpeakIQ",
    category: "AI Learning Platform",
    role: "Full Stack Developer",
    year: "2026",
    status: "completed",
    difficulty: "advanced",
    architecture: "React Native (Expo) + Clerk Auth + Node.js/Express backend. Google Gemini API for AI pronunciation feedback. PostgreSQL for session history.",

    description:
      "An AI-powered English speaking practice application that analyzes pronunciation, confidence, and sentence structure using Google Gemini.",

    features: [
      "Voice Recording & Playback",
      "AI Pronunciation Feedback",
      "Session History",
      "Clerk Authentication",
    ],

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