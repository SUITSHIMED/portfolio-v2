export interface ProjectDetail {
  slug: string;
  title: string;
  category: string;
  year: string;
  overview: string;
  role: string;
  technologies: string[];
  images: string[];
  github: string;
  live?: string;

  architecture: string;
  features: { title: string; description: string }[];
  challenges: { challenge: string; solution: string }[];
  lessonsLearned: string[];
  futureImprovements: string[];
}

export const projectDetails: ProjectDetail[] = [
  {
    slug: "cardiolog",
    title: "CardioLog",
    category: "Full-Stack Mobile Application",
    year: "2026",
    role: "Full Stack Developer",
    github: "https://github.com/SUITSHIMED/CardioLog",

    overview:
      "CardioLog is a mobile health application designed to help users track their blood pressure readings over time. It provides visual analytics through interactive charts, generates exportable PDF medical reports, and secures all data behind JWT-based authentication. The goal was to create a genuinely useful medical tool — not just a demo.",

    architecture:
      "The app is a React Native (Expo) frontend communicating with a Node.js/Express REST API. User data is persisted in a PostgreSQL database managed via Sequelize ORM. Authentication uses a JWT access+refresh token pattern with secure storage on the mobile side. The backend is containerized with Docker for consistent deployments.",

    technologies: [
      "React Native", "Expo", "Node.js", "Express",
      "PostgreSQL", "Sequelize", "JWT", "Docker",
    ],

    images: [
      "/images/projects/cardiolog/history.jpeg",
      "/images/projects/cardiolog/trend.jpeg",
      "/images/projects/cardiolog/chart.jpeg",
    ],

    features: [
      {
        title: "Blood Pressure Tracking",
        description: "Users log systolic, diastolic, and pulse readings with timestamps. All entries are stored securely per user account.",
      },
      {
        title: "Interactive Charts",
        description: "Visual trend analysis using line and bar charts to display reading history and identify patterns over days, weeks, or months.",
      },
      {
        title: "PDF Medical Reports",
        description: "Users can generate formatted PDF reports of their reading history — suitable for sharing with healthcare providers.",
      },
      {
        title: "JWT Authentication",
        description: "Secure sign-up and login using JSON Web Tokens with access + refresh token rotation for persistent sessions.",
      },
    ],

    challenges: [
      {
        challenge: "Implementing a secure JWT refresh token flow without leaking tokens.",
        solution: "Stored refresh tokens in Expo SecureStore (encrypted on-device storage) and rotated them on every use, invalidating old tokens on the backend.",
      },
      {
        challenge: "Generating formatted PDF reports on mobile.",
        solution: "Used a library to render HTML templates with the user's data and export them as downloadable PDFs.",
      },
      {
        challenge: "Keeping chart performance smooth with large datasets.",
        solution: "Implemented data pagination and limited chart display to a maximum window of 30 entries, with navigation controls.",
      },
    ],

    lessonsLearned: [
      "Token storage security on mobile is fundamentally different from web — Expo SecureStore is the right solution.",
      "Designing a medical data schema requires planning for user ownership, data isolation, and privacy from day one.",
      "Docker made the backend-to-deployment workflow dramatically more consistent.",
    ],

    futureImprovements: [
      "Add health alerts when readings exceed user-defined thresholds.",
      "Implement background sync to allow offline logging.",
      "Add a doctor-facing view mode with read-only report access via shareable link.",
    ],
  },

  {
    slug: "casalivraison",
    title: "CasaLivraison",
    category: "Food Delivery Platform",
    year: "2026",
    role: "Full Stack Developer",
    github: "https://github.com/SUITSHIMED/Casa-livraison",

    overview:
      "CasaLivraison is a full-stack food delivery mobile application that allows users in Casablanca to browse restaurants, explore menus, and place online orders. It was built to practice end-to-end mobile development including user auth, relational data modeling, and REST API design.",

    architecture:
      "React Native (Expo) frontend with a Node.js/Express REST API backend. PostgreSQL manages restaurants, menus, users, and orders through a normalized schema using Sequelize ORM. Authentication uses JWT tokens stored securely on the device.",

    technologies: [
      "React Native", "Expo", "Node.js", "Express",
      "PostgreSQL", "Sequelize", "JWT",
    ],

    images: [
      "/images/projects/casalivraison/casaliv1.png",
      "/images/projects/casalivraison/casaliv3.png",
      "/images/projects/casalivraison/casaliv4.png",
    ],

    features: [
      {
        title: "Restaurant Browser",
        description: "Users browse a list of restaurants with filtering options. Each restaurant shows key info: name, cuisine type, and delivery details.",
      },
      {
        title: "Menu Exploration",
        description: "Detailed menu pages with items, descriptions, and prices. Category-based filtering within each restaurant.",
      },
      {
        title: "Online Ordering",
        description: "Cart management, order placement, and order history. Orders are persisted to the database and linked to the authenticated user.",
      },
      {
        title: "JWT Authentication",
        description: "Secure sign-up, login, and protected routes ensuring only authenticated users can place orders.",
      },
    ],

    challenges: [
      {
        challenge: "Designing the relational schema for restaurants, menus, and orders.",
        solution: "Modeled it as: Restaurant → Categories → Items and User → Orders → OrderItems, using Sequelize associations to enforce integrity.",
      },
      {
        challenge: "Managing cart state across screens without a state management library.",
        solution: "Used React Context with a reducer pattern to maintain cart state globally, persisting it to AsyncStorage for session continuity.",
      },
    ],

    lessonsLearned: [
      "Relational data modeling for e-commerce requires careful thought about ownership and cascading deletes.",
      "React Context works well for cart state at this scale — Redux would have been overkill.",
      "Proper API error handling and user-facing error messages significantly improve UX.",
    ],

    futureImprovements: [
      "Add real-time order tracking with WebSockets.",
      "Implement a restaurant admin dashboard for menu management.",
      "Add payment gateway integration (Stripe).",
    ],
  },

  {
    slug: "speakiq",
    title: "SpeakIQ",
    category: "AI Learning Platform",
    year: "2026",
    role: "Full Stack Developer",
    github: "https://github.com/SUITSHIMED/speakiq01",

    overview:
      "SpeakIQ is an AI-powered English speaking practice application. Users record themselves speaking on a given topic, and the app uses Google Gemini to analyze pronunciation, grammar, confidence, and sentence structure, then provides detailed, personalized feedback. Sessions are saved for progress tracking.",

    architecture:
      "React Native (Expo) frontend using Clerk for authentication. The backend is a Node.js/Express API that receives audio transcriptions and prompt context, calls the Google Gemini API for analysis, and stores session history in PostgreSQL.",

    technologies: [
      "React Native", "Expo", "Node.js", "Express",
      "PostgreSQL", "Google Gemini", "Clerk",
    ],

    images: [
      "/images/projects/speakiq/speakiq1.jpeg",
      "/images/projects/speakiq/speakiq2.jpeg",
      "/images/projects/speakiq/speakiq3.jpeg",
    ],

    features: [
      {
        title: "Voice Recording & Playback",
        description: "Users record their spoken responses using Expo AV. Recordings can be played back before submission.",
      },
      {
        title: "AI Pronunciation Feedback",
        description: "Google Gemini analyzes the transcribed speech and returns structured feedback on grammar, vocabulary, fluency, and confidence.",
      },
      {
        title: "Session History",
        description: "All practice sessions are stored per user, allowing learners to review past feedback and track improvement over time.",
      },
      {
        title: "Clerk Authentication",
        description: "Secure user authentication using Clerk, including social login options, removing the need to build custom auth.",
      },
    ],

    challenges: [
      {
        challenge: "Getting consistent, structured AI feedback from Gemini.",
        solution: "Engineered precise prompts that instruct Gemini to return JSON-structured feedback with specific fields (score, grammar notes, suggestions), making parsing reliable.",
      },
      {
        challenge: "Audio transcription accuracy on mobile.",
        solution: "Used Expo Speech and combined it with manual text input as a fallback to ensure feedback quality regardless of audio quality.",
      },
      {
        challenge: "Managing Clerk + custom backend authentication together.",
        solution: "Used Clerk's JWT verification middleware on the Express backend to authenticate requests, bridging Clerk's auth with our own user records.",
      },
    ],

    lessonsLearned: [
      "Prompt engineering is a real skill — structured prompts with explicit output formats are essential for production AI features.",
      "Using Clerk instead of building auth from scratch saved significant development time.",
      "AI APIs can be slow — always show loading states and never block the UI.",
    ],

    futureImprovements: [
      "Add a spaced repetition system for vocabulary building.",
      "Support multiple languages for non-English speakers learning English.",
      "Add a leaderboard or social features to encourage daily practice.",
    ],
  },
];
