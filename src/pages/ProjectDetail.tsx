import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft, Code2, ExternalLink, CheckCircle2,
  Lightbulb, AlertCircle, Rocket, ChevronRight,
} from "lucide-react";
import { projectDetails } from "@/data/projectDetails";
import Container from "@/components/ui/Container";
import Reveal from "@/components/common/Reveal";
import { useTranslation } from "react-i18next";

function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const detail = projectDetails.find((p) => p.slug === slug);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!detail) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-6xl font-bold gradient-text mb-4">404</p>
          <p className="text-zinc-400 mb-8">{t("projectDetail.notFound")}</p>
          <Link to="/" className="btn-primary">
            <ArrowLeft size={16} />
            {t("projectDetail.back")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <Container>

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition"
          >
            <ArrowLeft size={15} />
            {t("projectDetail.backProjects")}
          </Link>
        </motion.div>

        {/* Hero header */}
        <Reveal>
          <div className="mb-12 border-b border-zinc-800/60 pb-10">
            <span className="section-label mb-4 inline-flex">{detail.category}</span>
            <h1 className="mt-4 text-5xl font-bold sm:text-6xl gradient-text-subtle">
              {detail.title}
            </h1>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-zinc-500">
              <span>{t("projectDetail.role")}: <span className="text-zinc-300">{detail.role}</span></span>
              <span className="text-zinc-700">·</span>
              <span>{t("projectDetail.year")}: <span className="text-zinc-300">{detail.year}</span></span>
            </div>

            {/* Action buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              {detail.github && (
                <a
                  href={detail.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary text-sm py-2.5 px-5"
                >
                  <Code2 size={14} />
                  {t("projectDetail.viewGitHub")}
                </a>
              )}
              {detail.live && (
                <a
                  href={detail.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary text-sm py-2.5 px-5"
                >
                  <ExternalLink size={14} />
                  {t("projectDetail.liveDemo")}
                </a>
              )}
            </div>
          </div>
        </Reveal>

        {/* Image gallery */}
        {detail.images.length > 0 && (
          <Reveal delay={0.05}>
            <div className="mb-16">
              <h2 className="text-lg font-semibold text-zinc-300 mb-5">{t("projectDetail.gallery")}</h2>
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                {detail.images.map((img, i) => (
                  <div
                    key={i}
                    className={
                      detail.slug === "portfolio"
                        ? "desktop-mockup"
                        : "phone-mockup scale-75 origin-top"
                    }
                    style={
                      detail.slug === "portfolio"
                        ? { width: 680, height: 400, maxWidth: "100%" }
                        : { width: 180, height: 366 }
                    }
                  >
                    <div className={detail.slug === "portfolio" ? "desktop-screen" : "phone-screen"}>
                      <img
                        src={img}
                        alt={`${detail.title} screenshot ${i + 1}`}
                        className="h-full w-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">

          {/* Main content — 2 cols */}
          <div className="lg:col-span-2 space-y-14">

            {/* Overview */}
            <Reveal>
              <section aria-labelledby="overview-heading">
                <h2 id="overview-heading" className="flex items-center gap-2 text-xl font-bold mb-4">
                  <ChevronRight size={18} className="text-blue-400" />
                  {t("projectDetail.overview")}
                </h2>
                <p className="text-base leading-8 text-zinc-400">{detail.overview}</p>
              </section>
            </Reveal>

            {/* Architecture */}
            <Reveal delay={0.05}>
              <section aria-labelledby="arch-heading">
                <h2 id="arch-heading" className="flex items-center gap-2 text-xl font-bold mb-4">
                  <ChevronRight size={18} className="text-blue-400" />
                  {t("projectDetail.architecture")}
                </h2>
                <div className="glass-card p-6">
                  <p className="text-sm leading-7 text-zinc-400">{detail.architecture}</p>
                </div>
              </section>
            </Reveal>

            {/* Features */}
            <Reveal delay={0.08}>
              <section aria-labelledby="features-heading">
                <h2 id="features-heading" className="flex items-center gap-2 text-xl font-bold mb-6">
                  <ChevronRight size={18} className="text-blue-400" />
                  {t("projectDetail.features")}
                </h2>
                <div className="space-y-4">
                  {detail.features.map((feat) => (
                    <div key={feat.title} className="glass-card p-5">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-zinc-200 mb-1">{feat.title}</h3>
                          <p className="text-sm text-zinc-400 leading-6">{feat.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* Challenges */}
            <Reveal delay={0.1}>
              <section aria-labelledby="challenges-heading">
                <h2 id="challenges-heading" className="flex items-center gap-2 text-xl font-bold mb-6">
                  <ChevronRight size={18} className="text-blue-400" />
                  {t("projectDetail.challenges")}
                </h2>
                <div className="space-y-5">
                  {detail.challenges.map((c, i) => (
                    <div key={i} className="glass-card p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <AlertCircle size={15} className="text-amber-400 mt-0.5 flex-shrink-0" />
                        <p className="text-sm font-semibold text-zinc-200">{c.challenge}</p>
                      </div>
                      <div className="flex items-start gap-3 pl-1 border-l-2 border-blue-500/20 ml-4">
                        <Lightbulb size={14} className="text-blue-400 mt-0.5 flex-shrink-0 ml-1" />
                        <p className="text-sm text-zinc-400 leading-6">{c.solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

          </div>

          {/* Sidebar — 1 col */}
          <div className="space-y-8">

            {/* Tech stack */}
            <Reveal delay={0.12}>
              <div className="glass-card p-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-4">
                  {t("projectDetail.techStack")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {detail.technologies.map((tech) => (
                    <span key={tech} className="skill-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Lessons learned */}
            <Reveal delay={0.14}>
              <div className="glass-card p-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-4">
                  {t("projectDetail.lessons")}
                </h3>
                <ul className="space-y-3">
                  {detail.lessonsLearned.map((lesson, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-400">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Future improvements */}
            <Reveal delay={0.16}>
              <div className="glass-card p-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-2">
                  <Rocket size={13} className="text-blue-400" />
                  {t("projectDetail.future")}
                </h3>
                <ul className="space-y-3">
                  {detail.futureImprovements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-400">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Back CTA */}
            <Reveal delay={0.2}>
              <Link to="/#projects" className="btn-secondary w-full justify-center text-sm">
                <ArrowLeft size={14} />
                {t("projectDetail.allProjects")}
              </Link>
            </Reveal>

          </div>
        </div>

      </Container>
    </div>
  );
}

export default ProjectDetail;
