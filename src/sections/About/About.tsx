import { MapPin, Code2, BookOpen, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/Container";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/common/Reveal";
import { EASE } from "@/lib/motion";
import { motion } from "framer-motion";

const quickFacts = [
  { icon: MapPin, label: "location", value: "Morocco" },
  { icon: Code2, label: "stack", value: "React Native · Node.js" },
  { icon: BookOpen, label: "training", value: "Simplon Maghreb" },
  { icon: Globe, label: "languages", value: "Arabic · English · French" },
];

const stats = [
  { target: 3, suffix: "+", key: "projects" },
  { target: 1, suffix: "+", key: "learning" },
  { target: 3, suffix: "", key: "languages" },
];

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative py-24 sm:py-32 lg:py-40">
      <Container size="wide">
        <div className="grid gap-y-14 lg:grid-cols-12 lg:gap-x-8">
          {/* ── Sticky editorial column ── */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <Reveal y={20}>
              <div className="flex items-center gap-4">
                <span className="mono-label">01</span>
                <span className="h-px w-10 bg-line-strong" aria-hidden="true" />
                <span className="mono-label">{t("about.label")}</span>
              </div>

              <h2 className="h-display mt-6 text-balance">{t("about.heading")}</h2>

              <dl className="mt-10 space-y-0">
                {quickFacts.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-4 border-t border-line py-3.5"
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={13} className="text-faint" />
                      <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                        {t(`about.quickFacts.${label}`)}
                      </dt>
                    </div>
                    <dd className="text-right text-sm text-text">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 flex items-center gap-2.5 border-t border-line pt-5">
                <span className="availability-dot" />
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                  {t("about.status")}
                </p>
              </div>
            </Reveal>
          </div>

          {/* ── Narrative ── */}
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={0.1} y={24}>
              <p className="text-2xl font-medium leading-[1.35] tracking-tight text-text text-pretty sm:text-3xl sm:leading-[1.3]">
                {t("about.body1")}
              </p>
            </Reveal>

            <Reveal delay={0.18} y={20}>
              <div className="mt-8 space-y-5">
                <p className="lede max-w-xl text-pretty">{t("about.body2")}</p>
                <p className="lede max-w-xl text-pretty">{t("about.body3")}</p>
              </div>
            </Reveal>

            {/* Philosophy — numbered editorial rows */}
            <Reveal delay={0.24} y={20}>
              <div className="mt-16">
                <h3 className="mono-label mb-6">{t("about.philosophyTitle")}</h3>
                <div>
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-15% 0px" }}
                      transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
                      className="group flex items-baseline gap-5 border-t border-line py-5 transition-colors duration-300 last:border-b hover:bg-surface/60"
                    >
                      <span className="font-mono text-xs text-faint transition-colors duration-300 group-hover:text-frost">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-base leading-relaxed text-muted transition-colors duration-300 group-hover:text-text sm:text-lg">
                        {t(`about.philosophy.${i}`)}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── Stats band ── */}
        <Reveal delay={0.1}>
          <div className="mt-24 grid grid-cols-1 border-y border-line sm:grid-cols-3">
            {stats.map((stat, i) => (
              <div
                key={stat.key}
                className={`flex flex-col gap-2 py-10 sm:items-center sm:py-14 ${
                  i > 0 ? "sm:border-l sm:border-line" : ""
                } ${i > 0 ? "border-t border-line sm:border-t-0" : ""}`}
              >
                <Counter
                  target={stat.target}
                  suffix={stat.suffix}
                  className="text-5xl font-semibold tracking-tight sm:text-6xl"
                />
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                  {t(`about.stats.${stat.key}`)}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default About;
