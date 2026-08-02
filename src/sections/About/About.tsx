import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Code2, BookOpen, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/common/Reveal";

/* animated counter */
function AnimatedCounter({
  target,
  suffix = "",
  duration = 1.4,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

/* ── Stats data ───────────────────────────────────────────── */
const aboutStats = [
  { target: 3, suffix: "+", label: "Projects Built" },
  { target: 1, suffix: "+", label: "Years Learning" },
  { target: 3, suffix: "",  label: "Languages Spoken" },
];

/* ── Quick facts ──────────────────────────────────────────── */
const quickFacts = [
  { icon: MapPin,   label: "Location",  value: "Morocco" },
  { icon: Code2,    label: "Stack",     value: "React Native · Node.js" },
  { icon: BookOpen, label: "Training",  value: "Simplon Maghreb" },
  { icon: Globe,    label: "Languages", value: "Arabic · English · French" },
];

/* ── Philosophy highlights ────────────────────────────────── */
const philosophy = [
  "I believe clean code is as important as working code.",
  "Every project is an opportunity to learn something new.",
  "I prefer shipping and iterating over waiting for perfection.",
];

/* ── Component ────────────────────────────────────────────── */
function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="relative py-24 sm:py-28 lg:py-36"
    >
      {/* Section divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-800/60 to-transparent" />

      <Container>
        {/* Header */}
        <Reveal>
          <div className="mb-14 sm:mb-18">
            <span className="section-label">{t("about.label")}</span>
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ── Left — bio + philosophy ── */}
          <Reveal delay={0.05}>
            <div className="space-y-6 text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              <p>
                {t("about.body1")}
              </p>

              <p>
                {t("about.body2")}
              </p>

              <p>
                {t("about.body3")}
              </p>

              {/* Philosophy */}
              <div className="pt-4 border-t border-zinc-800/50">
                <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-4">
                  {t("about.philosophyTitle")}
                </p>
                <ul className="space-y-3">
                  {philosophy.map((_, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                      className="flex items-start gap-3 text-sm text-zinc-400"
                    >
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      {t(`about.philosophy.${i}`)}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* ── Right — stats + quick facts ── */}
          <Reveal delay={0.12}>
            <div className="space-y-6">

              {/* Animated stat cards */}
              <div className="grid grid-cols-3 gap-3">
                {aboutStats.map((stat) => (
                  <div key={stat.label} className="stat-card">
                    <p className="text-2xl font-bold gradient-text sm:text-3xl">
                      <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                    </p>
                    <p className="mt-1 text-xs text-zinc-500 font-medium leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Quick facts glass card */}
              <div className="glass-card p-6 sm:p-8">
                <h3 className="mb-6 text-base font-semibold text-zinc-200 uppercase tracking-widest text-sm">
                  {t("about.quickFactsTitle")}
                </h3>

                <dl className="space-y-4">
                  {quickFacts.map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="flex items-center gap-4 border-b border-zinc-800/50 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-zinc-800/60 text-blue-400">
                        <Icon size={14} />
                      </div>
                      <dt className="text-sm text-zinc-500 min-w-[80px]">{t(`about.quickFacts.${label.toLowerCase()}`)}</dt>
                      <dd className="text-sm text-zinc-200 font-medium">{value}</dd>
                    </div>
                  ))}

                  {/* Availability row */}
                  <div className="flex items-center gap-4 border-t border-zinc-800/50 pt-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-500/10">
                      <span className="availability-dot" />
                    </div>
                    <dt className="text-sm text-zinc-500 min-w-[80px]">Status</dt>
                    <dd className="text-sm text-green-400 font-semibold">
                      {t("about.status")}
                    </dd>
                  </div>
                </dl>
              </div>

            </div>
          </Reveal>

        </div>
      </Container>

      {/* Section divider */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-800/60 to-transparent" />
    </section>
  );
}

export default About;