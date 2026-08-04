import { useRef } from "react";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { EASE } from "@/lib/motion";

interface TimelineItem {
  group: "education" | "experience";
  year: string;
  title: string;
  company: string;
  description: string;
  skills?: string[];
}

const timeline: TimelineItem[] = [
  {
    group: "education",
    year: "2013",
    title: "Baccalaureate — Science",
    company: "Education",
    description:
      "Earned my Baccalaureate in Science, where I built a rigorous, analytical approach to solving problems.",
  },
  {
    group: "education",
    year: "2020",
    title: "Bachelor's Degree (Licence) in Fundamental Biology",
    company: "University",
    description:
      "Graduated with a Bachelor's Degree (Licence) in Fundamental Biology — a scientific background that shaped my analytical mindset before I turned to software development.",
  },
  {
    group: "experience",
    year: "2023",
    title: "Teaching Assistant / Children's Educator",
    company: "Educational Environment",
    description:
      "Taught and supervised children in an educational environment — planning learning activities, supporting students in their daily progress, and strengthening communication, patience, organization, and problem-solving skills.",
    skills: ["Communication", "Organization", "Problem Solving"],
  },
  {
    group: "experience",
    year: "2024 — 2025",
    title: "Self-Taught Frontend Developer",
    company: "Independent Learning",
    description:
      "Dedicated to intensive self-learning in modern web development. Built personal projects while mastering HTML, CSS, JavaScript, React, Vite, Tailwind CSS, Git, and responsive design — focused on real-world applications and building a strong development foundation.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Vite", "Tailwind CSS", "Git"],
  },
  {
    group: "experience",
    year: "Sep 2025 — Jan 2026",
    title: "Full Stack Mobile Development Training",
    company: "Simplon Maghreb",
    description:
      "Completed an intensive full-stack mobile development program covering modern JavaScript development, React Native, backend development with Node.js and Express, relational databases with PostgreSQL, Git, Agile collaboration, and mobile application architecture through practical projects.",
    skills: ["React Native", "JavaScript", "Node.js", "Express", "PostgreSQL", "Git"],
  },
  {
    group: "experience",
    year: "2026",
    title: "Full Stack Mobile Developer",
    company: "Personal Projects",
    description:
      "Designed and developed full-stack mobile applications from concept to deployment using React Native, Expo, Node.js, Express, and PostgreSQL. Focused on authentication, API integration, state management, and responsive user experiences.",
    skills: ["React Native", "Expo", "Node.js", "Express", "PostgreSQL", "Docker"],
  },
];

function TimelineRow({ item }: { item: TimelineItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-25% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.85, ease: EASE }}
      className="group relative pl-12 pb-14 last:pb-0 sm:pl-16"
    >
      {/* Dot */}
      <span className="absolute left-0 top-2 flex h-[18px] w-[18px] items-center justify-center">
        <span
          className={`absolute inset-0 rounded-full border transition-all duration-500 ${
            inView ? "border-frost/70" : "border-line"
          }`}
        />
        <span
          className={`h-[6px] w-[6px] rounded-full transition-all duration-500 ${
            inView ? "bg-frost shadow-[0_0_12px_rgb(163_171_242/0.6)]" : "bg-faint"
          }`}
        />
      </span>

      <span className="mono-label text-frost">{item.year}</span>

      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-text sm:text-3xl">
        {item.title}
      </h3>
      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
        {item.company}
      </p>
      <p className="mt-5 max-w-xl text-[0.95rem] leading-7 text-muted">
        {item.description}
      </p>

      {item.skills && (
        <div className="mt-6 flex flex-wrap gap-2">
          {item.skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: EASE, delay: 0.08 * i }}
              className="tag"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function Experience() {
  const { t } = useTranslation();
  const listRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.75", "end 0.55"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });

  const groups = [
    { key: "education" as const, label: t("experience.groupEducation") },
    { key: "experience" as const, label: t("experience.groupExperience") },
  ];

  return (
    <section id="experience" className="relative py-24 sm:py-32 lg:py-40">
      <Container size="wide">
        <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-4">
            <SectionHeading
              index="04"
              label={t("experience.title")}
              title={t("experience.title")}
              description={t("experience.description")}
            />
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div ref={listRef} className="relative">
              {/* Track */}
              <div
                className="absolute left-[8px] top-1 bottom-1 w-px bg-line"
                aria-hidden="true"
              />
              {/* Filled progress */}
              <motion.div
                style={{ scaleY: progress }}
                className="absolute left-[8px] top-1 bottom-1 w-px origin-top bg-gradient-to-b from-frost to-violet/60"
                aria-hidden="true"
              />

              <div className="space-y-2 pt-1">
                {groups.map((group, groupIndex) => (
                  <div key={group.key}>
                    <div
                      className={`flex items-center gap-4 pl-12 sm:pl-16 ${
                        groupIndex > 0 ? "mt-12" : ""
                      } mb-4`}
                    >
                      <span className="mono-label text-frost">{group.label}</span>
                      <span className="h-px flex-1 bg-line-strong" aria-hidden="true" />
                    </div>
                    {timeline
                      .filter((item) => item.group === group.key)
                      .map((item) => (
                        <TimelineRow key={item.title} item={item} />
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Experience;
