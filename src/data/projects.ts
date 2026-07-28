import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio V2",
    category: "Developer Portfolio",

    description:
      "A modern developer portfolio built with React, TypeScript, and Tailwind CSS to showcase projects, skills, and experience through a clean, responsive interface.",

    features: [
      "Responsive Design",
      "Dark UI",
      "Modern Animations",
      "Reusable Components",
    ],

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
    ],

    images: [
  "/images/projects/portfolio/portfolio.jpeg",
],

    github: "https://github.com/SUITSHIMED/portfolio-v2",

    live: "",

    featured: true,
  },

  {
    id: 2,
    title: "CardioLog",

    category: "Full-Stack Mobile Application",

    description:
      "A cardiac health tracking application for monitoring blood pressure readings with secure authentication, analytics, and exportable medical reports.",

    features: [
      "Blood Pressure Tracking",
      "Interactive Charts",
      "PDF Export",
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
    title: "CasaLivraison",

    category: "Food Delivery Platform",

    description:
      "A full-stack food delivery application allowing users to browse restaurants, explore menus, and place secure online orders.",

    features: [
      "Restaurant Browser",
      "Online Ordering",
      "JWT Authentication",
      "REST API",
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
    title: "SpeakIQ",

    category: "AI Learning Platform",

    description:
      "An AI-powered English speaking practice application that analyzes pronunciation, confidence, and sentence structure using Google Gemini.",

    features: [
      "Voice Recording",
      "AI Feedback",
      "Google Gemini",
      "Session History",
    ],

    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Gemini",
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