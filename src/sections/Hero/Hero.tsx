import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight, GitBranch, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/Container";

/* phone slides */
const phoneSlides = [
  {
    src: "/images/projects/cardiolog/chart.jpeg",
    label: "CardioLog",
    sub: "Blood Pressure Tracker",
  },
  {
    src: "/images/projects/casalivraison/casaliv1.png",
    label: "CasaLivraison",
    sub: "Food Delivery App",
  },
  {
    src: "/images/projects/speakiq/speakiq1.jpeg",
    label: "SpeakIQ",
    sub: "AI English Speaking",
  },
];

/* Tech stack  */
const techPills = [
  "React Native",
  "TypeScript",
  "Node.js",
  "Expo",
  "PostgreSQL",
  "Docker",
];

/** Hero stats */
const stats = [
  { value: "3+", key: "projects" },
  { value: "1+", key: "learning" },
  { value: "3", key: "languages" },
];

function PhoneMockup() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % phoneSlides.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex flex-col items-center">
      {/* Outer glow ring */}
      <div
        className="relative"
        style={{ filter: "drop-shadow(0 0 40px rgba(59,130,246,0.15))" }}
      >
        {/* Phone frame */}
        <div className="phone-mockup">
          <div className="phone-screen">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={phoneSlides[current].src}
                alt={phoneSlides[current].label}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="h-full w-full object-cover object-top"
                loading="eager"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Project label below phone */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3 }}
          className="mt-5 text-center"
        >
          <p className="text-sm font-semibold text-zinc-200">
            {phoneSlides[current].label}
          </p>
          <p className="text-xs text-zinc-500 mt-0.5">
            {phoneSlides[current].sub}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Slide dots */}
      <div className="mt-3 flex gap-1.5" aria-label="Project slides">
        {phoneSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`View ${phoneSlides[i].label}`}
            className={`h-1 rounded-full transition-all duration-300 ${i === current
              ? "w-5 bg-blue-400"
              : "w-1.5 bg-zinc-600 hover:bg-zinc-400"
              }`}
          />
        ))}
      </div>

      {/* Floating tech badges */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-14 top-16 glass rounded-xl px-3 py-2 text-xs font-medium text-zinc-300 shadow-lg hidden lg:block"
      >
        <span className="text-blue-400">⚛</span> React Native
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -right-12 top-28 glass rounded-xl px-3 py-2 text-xs font-medium text-zinc-300 shadow-lg hidden lg:block"
      >
        <span className="text-green-400">▶</span> Node.js
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -left-16 bottom-32 glass rounded-xl px-3 py-2 text-xs font-medium text-zinc-300 shadow-lg hidden lg:block"
      >
        <span className="text-blue-300">🐘</span> PostgreSQL
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute -right-14 bottom-40 glass rounded-xl px-3 py-2 text-xs font-medium text-zinc-300 shadow-lg hidden lg:block"
      >
        <span className="text-sky-400">🐳</span> Docker
      </motion.div>
    </div>
  );
}

function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-20 pb-16"
    >
      <Container>
        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── LEFT SIDE ── */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

           

            {/* Name */}
            <motion.h1
              className="mt-7 font-heading text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
            >
              Mohamed{" "}
              <span className="gradient-text">Lakhrouf</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              className="mt-4 text-lg font-medium text-zinc-400 sm:text-xl"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.18 }}
            >
              {t("hero.title")}
            </motion.p>

            {/* Bio */}
            <motion.p
              className="mt-5 max-w-lg text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8"
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.26 }}
            >
              {t("hero.intro")}
            </motion.p>

            {/* Stats */}
            <motion.div
              className="mt-8 flex gap-4 flex-wrap justify-center lg:justify-start"
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.34 }}
            >
              {stats.map((stat) => (
                <div key={stat.key} className="stat-card min-w-[90px]">
                  <p className="text-2xl font-bold gradient-text leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs text-zinc-500 mt-1 font-medium">
                    {t(`hero.stats.${stat.key}`)}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Tech pills */}
            <motion.div
              className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.42 }}
            >
              {techPills.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.06, duration: 0.3 }}
                  className="skill-badge text-xs"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.52 }}
            >
              <a href="#projects" className="btn-primary">
                {t("hero.cta")}
                <ArrowRight size={15} />
              </a>

            </motion.div>

            {/* Social links */}
            <motion.div
              className="mt-7 flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.62 }}
            >
              <a
                href="https://github.com/SUITSHIMED"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700/70 text-zinc-400 transition hover:border-zinc-500 hover:text-white hover:bg-zinc-800/50"
              >
                <GitBranch size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-l-216670212/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700/70 text-zinc-400 transition hover:border-blue-500/50 hover:text-blue-400 hover:bg-blue-500/05"
              >
                <Send size={16} />
              </a>
              <a
                href="mailto:mohamedlakhrouf@gmail.com"
                aria-label="Send email"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700/70 text-zinc-400 transition hover:border-zinc-500 hover:text-white hover:bg-zinc-800/50"
              >
                <Mail size={16} />
              </a>

              <span className="ml-2 text-xs text-zinc-600">
                mohamedlakhrouf@gmail.com
              </span>
            </motion.div>
          </div>

          {/* ── RIGHT SIDE — Phone Mockup ── */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <PhoneMockup />
            </motion.div>
          </motion.div>

        </div>
      </Container>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-950/60 to-transparent" />
    </section>
  );
}

export default Hero;