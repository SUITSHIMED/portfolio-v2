import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  AlertCircle,
  Lightbulb,
  Rocket,
} from "lucide-react";
import { projectDetails } from "@/data/projectDetails";
import Container from "@/components/ui/Container";
import Reveal from "@/components/common/Reveal";
import Button from "@/components/ui/Button";
import BrowserMockup from "@/components/ui/BrowserMockup";
import PhoneMockup from "@/components/ui/PhoneMockup";
import { EASE } from "@/lib/motion";
import { useTranslation } from "react-i18next";

function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const detail = projectDetails.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!detail) {
    return (
      <main id="main-content" className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <p className="text-7xl font-semibold tracking-tight text-text">404</p>
          <p className="mt-4 text-muted">{t("projectDetail.notFound")}</p>
          <div className="mt-8 flex justify-center">
            <Link to="/">
              <Button variant="ghost">
                <ArrowLeft size={15} />
                {t("projectDetail.back")}
              </Button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const content = {
    title: t(`projectDetail.${slug}.title`),
    category: t(`projectDetail.${slug}.category`),
    role: t(`projectDetail.${slug}.role`),
    overview: t(`projectDetail.${slug}.overview`),
    architecture: t(`projectDetail.${slug}.architecture`),
    features: t(`projectDetail.${slug}.features`, {
      returnObjects: true,
    }) as unknown as { title: string; description: string }[],
    challenges: t(`projectDetail.${slug}.challenges`, {
      returnObjects: true,
    }) as unknown as { challenge: string; solution: string }[],
    lessonsLearned: t(`projectDetail.${slug}.lessonsLearned`, {
      returnObjects: true,
    }) as unknown as string[],
    futureImprovements: t(`projectDetail.${slug}.futureImprovements`, {
      returnObjects: true,
    }) as unknown as string[],
  };

  const isBrowser = detail.slug === "portfolio";

  return (
    <main id="main-content" className="min-h-screen pb-24 pt-32">
      <Container size="wide">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <Link
            to="/#projects"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-text"
          >
            <ArrowLeft
              size={13}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            {t("projectDetail.backProjects")}
          </Link>
        </motion.div>

        {/* Header */}
        <div className="mt-10 grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
              className="flex items-center gap-4"
            >
              <span className="mono-label text-frost">{content.category}</span>
              <span className="h-px w-10 bg-line-strong" aria-hidden="true" />
              <span className="mono-label">{detail.year}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
              className="h-display mt-6 text-balance"
            >
              {content.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
              className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2"
            >
              <span className="font-mono text-xs text-faint">
                {t("projectDetail.role")} —{" "}
                <span className="text-muted">{content.role}</span>
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.26 }}
            className="flex flex-wrap items-center gap-3 lg:col-span-4 lg:justify-end"
          >
            {detail.github && (
              <Button
                href={detail.github}
                target="_blank"
                rel="noreferrer"
                variant="ghost"
              >
                {t("projectDetail.viewGitHub")}
                <ArrowUpRight />
              </Button>
            )}
            {detail.live && (
              <Button href={detail.live} target="_blank" rel="noreferrer">
                {t("projectDetail.liveDemo")}
                <ArrowUpRight />
              </Button>
            )}
          </motion.div>
        </div>

        {/* Gallery */}
        {detail.images.length > 0 && (
          <Reveal delay={0.1} y={32}>
            <div className="mt-14 flex justify-center gap-6 lg:justify-start">
              {detail.images.map((img, i) =>
                isBrowser ? (
                  <BrowserMockup
                    key={i}
                    src={img}
                    alt={`${content.title} screenshot ${i + 1}`}
                    className="w-full max-w-2xl"
                  />
                ) : (
                  <PhoneMockup
                    key={i}
                    src={img}
                    alt={`${content.title} screenshot ${i + 1}`}
                  />
                )
              )}
            </div>
          </Reveal>
        )}

        <div className="mt-20 grid gap-12 lg:grid-cols-3 lg:gap-14">
          {/* Main */}
          <div className="space-y-14 lg:col-span-2">
            {/* Overview */}
            <Reveal>
              <section aria-labelledby="overview-heading">
                <h2
                  id="overview-heading"
                  className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-faint"
                >
                  <span className="h-px w-6 bg-frost/60" aria-hidden="true" />
                  {t("projectDetail.overview")}
                </h2>
                <p className="mt-5 text-lg leading-8 text-text/85 text-pretty">
                  {content.overview}
                </p>
              </section>
            </Reveal>

            {/* Architecture */}
            <Reveal>
              <section aria-labelledby="arch-heading">
                <h2
                  id="arch-heading"
                  className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-faint"
                >
                  <span className="h-px w-6 bg-frost/60" aria-hidden="true" />
                  {t("projectDetail.architecture")}
                </h2>
                <p className="mt-5 border-l border-frost/30 pl-5 text-base leading-8 text-muted">
                  {content.architecture}
                </p>
              </section>
            </Reveal>

            {/* Features */}
            <Reveal>
              <section aria-labelledby="features-heading">
                <h2
                  id="features-heading"
                  className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-faint"
                >
                  <span className="h-px w-6 bg-frost/60" aria-hidden="true" />
                  {t("projectDetail.features")}
                </h2>
                <div className="mt-6 space-y-3">
                  {content.features.map((feat) => (
                    <div
                      key={feat.title}
                      className="card card-hover flex items-start gap-4 p-5"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-frost-dim text-frost">
                        <Check size={13} />
                      </span>
                      <div>
                        <h3 className="font-medium text-text">{feat.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-muted">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* Challenges */}
            <Reveal>
              <section aria-labelledby="challenges-heading">
                <h2
                  id="challenges-heading"
                  className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-faint"
                >
                  <span className="h-px w-6 bg-frost/60" aria-hidden="true" />
                  {t("projectDetail.challenges")}
                </h2>
                <div className="mt-6 space-y-3">
                  {content.challenges.map((c, i) => (
                    <div key={i} className="card card-hover p-5">
                      <div className="flex items-start gap-3">
                        <AlertCircle
                          size={15}
                          className="mt-0.5 shrink-0 text-violet"
                        />
                        <p className="font-medium text-text">{c.challenge}</p>
                      </div>
                      <div className="mt-4 flex items-start gap-3 border-l border-frost/25 pl-4">
                        <Lightbulb size={14} className="mt-0.5 shrink-0 text-frost" />
                        <p className="text-sm leading-6 text-muted">{c.solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Tech stack */}
            <Reveal>
              <div className="card p-6">
                <h3 className="mono-label">{t("projectDetail.techStack")}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {detail.technologies.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Lessons */}
            <Reveal delay={0.06}>
              <div className="card p-6">
                <h3 className="mono-label">{t("projectDetail.lessons")}</h3>
                <ul className="mt-4 space-y-3">
                  {content.lessonsLearned.map((lesson) => (
                    <li
                      key={lesson}
                      className="flex items-start gap-3 text-sm leading-6 text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-frost" />
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Future */}
            <Reveal delay={0.1}>
              <div className="card p-6">
                <h3 className="flex items-center gap-2 mono-label">
                  <Rocket size={12} className="text-frost" />
                  {t("projectDetail.future")}
                </h3>
                <ul className="mt-4 space-y-3">
                  {content.futureImprovements.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <Link to="/#projects" className="block">
                <Button variant="ghost" className="w-full">
                  <ArrowLeft size={15} />
                  {t("projectDetail.allProjects")}
                </Button>
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default ProjectDetail;
