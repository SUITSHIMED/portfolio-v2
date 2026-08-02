import { useEffect, useRef, useState } from "react";
import {
  Code2, ExternalLink, CheckCircle2, X,
  ChevronLeft, ChevronRight, ArrowRight,
  User, Calendar,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "@/components/common/Tilt";
import { useTranslation } from "react-i18next";
import type { Project } from "@/types/project";

interface ProjectItemProps {
  project: Project;
  reverse?: boolean;
  index: number;
}

function ProjectItem({ project, reverse = false, index }: ProjectItemProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState<number>(0);
  const { t } = useTranslation();
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  /* ── Lightbox keyboard handling ───────────────────────── */
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowRight") {
        const next = (selectedIndex + 1) % project.images.length;
        setDirection(1);
        setSelectedIndex(next);
        setSelectedImage(project.images[next]);
      } else if (e.key === "ArrowLeft") {
        const prev = (selectedIndex - 1 + project.images.length) % project.images.length;
        setDirection(-1);
        setSelectedIndex(prev);
        setSelectedImage(project.images[prev]);
      }
    };

    previousActiveElement.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    setTimeout(() => closeButtonRef.current?.focus(), 0);

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const container = modalRef.current;
      if (!container) return;
      const focusable = Array.from(
        container.querySelectorAll<HTMLElement>(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute("disabled") && el.offsetParent !== null);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keydown", trapFocus);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keydown", trapFocus);
      document.body.style.overflow = "";
      previousActiveElement.current?.focus();
    };
  }, [selectedImage, selectedIndex, project.images]);

  const openImage = (image: string, idx: number) => {
    setSelectedImage(image);
    setSelectedIndex(idx);
  };

  const showNext = () => {
    const next = (selectedIndex + 1) % project.images.length;
    setDirection(1);
    setSelectedIndex(next);
    setSelectedImage(project.images[next]);
  };

  const showPrev = () => {
    const prev = (selectedIndex - 1 + project.images.length) % project.images.length;
    setDirection(-1);
    setSelectedIndex(prev);
    setSelectedImage(project.images[prev]);
  };

  /* ── Project number (01 02 03 04) ─────────────────────── */
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7 }}
    >
      <article
        className={`grid items-start gap-10 lg:grid-cols-2 lg:gap-16 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >

        {/* ── LEFT — text content ── */}
        <div className="flex flex-col">

          {/* Project number */}
          <div className="mb-4">
            <span className="project-number">{number}</span>
          </div>

          {/* Category + metadata */}
          <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-2">
            {project.category}
          </p>

          <h3 className="text-3xl font-bold sm:text-4xl">
            {project.title}
          </h3>

          {/* Meta row: role, year */}
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-zinc-500">
            <span className="flex items-center gap-1.5">
              <User size={11} />
              {project.role}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={11} />
              {project.year}
            </span>
          </div>

          {/* Description */}
          <p className="mt-5 text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            {project.description}
          </p>

          {/* Architecture */}
          {project.architecture && (
            <p className="mt-3 text-xs leading-6 text-zinc-500 border-l-2 border-blue-500/30 pl-3">
              <span className="text-zinc-400 font-medium">{t("projects.architecture")}: </span>
              {project.architecture}
            </p>
          )}

          {/* Features */}
          <ul className="mt-6 space-y-2.5" aria-label="Key features">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <CheckCircle2 size={15} className="text-blue-400 flex-shrink-0" />
                <span className="text-sm text-zinc-300 sm:text-base">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Tech badges */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="skill-badge text-xs">
                {tech}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary text-sm py-2.5 px-5"
              >
                <Code2 size={15} />
                {t("projects.github")}
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary text-sm py-2.5 px-5"
              >
                <ExternalLink size={15} />
                {t("projects.liveDemo")}
              </a>
            )}

            <a
              href={`/projects/${project.slug}`}
              className="btn-primary text-sm py-2.5 px-5"
            >
              {t("projects.viewDetails")}
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* ── RIGHT — Project image gallery ── */}
        <div className="flex justify-center">
          <div
            className="relative w-full max-w-xl"
            style={{ filter: "drop-shadow(0 0 30px rgba(59,130,246,0.1))" }}
          >
            {project.slug === "portfolio" && index === 0 ? (
              <div className="overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/70 p-2 sm:p-3">
                {project.images?.length > 0 ? (
                  <button
                    type="button"
                    onClick={() => openImage(project.images[0], 0)}
                    className="block w-full"
                    aria-label={`View ${project.title} screenshots`}
                  >
                    <Tilt className="w-full">
                      <img
                        src={project.images[0]}
                        alt={`${project.title} main screenshot`}
                        loading="lazy"
                        className="h-full w-full rounded-xl object-cover object-top"
                      />
                    </Tilt>
                  </button>
                ) : (
                  <div className="flex h-full min-h-[280px] items-center justify-center text-xs text-zinc-600">
                    No preview
                  </div>
                )}
              </div>
            ) : (
              <>
                {/* Phone frame */}
                <div className="phone-mockup">
                  <div className="phone-screen">
                    {project.images?.length > 0 ? (
                      <button
                        type="button"
                        onClick={() => openImage(project.images[0], 0)}
                        className="block w-full h-full"
                        aria-label={`View ${project.title} screenshots`}
                      >
                        <Tilt className="w-full h-full">
                          <img
                            src={project.images[0]}
                            alt={`${project.title} main screenshot`}
                            loading="lazy"
                            className="h-full w-full object-cover object-top"
                          />
                        </Tilt>
                      </button>
                    ) : (
                      <div className="flex h-full items-center justify-center text-xs text-zinc-600">
                        {t("projects.noPreview")}
                      </div>
                    )}
                  </div>
                </div>

                {/* Thumbnail strip below phone */}
                {project.images?.length > 1 && (
                  <div className="mt-4 flex justify-center gap-2">
                    {project.images.map((img, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => openImage(img, i)}
                        aria-label={`Screenshot ${i + 1}`}
                        className={`h-12 w-9 rounded-lg overflow-hidden border-2 transition ${
                          i === 0
                            ? "border-blue-500/60"
                            : "border-zinc-700 hover:border-zinc-500"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${project.title} screenshot ${i + 1}`}
                          className="h-full w-full object-cover object-top"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>

      </article>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            key="lightbox-overlay"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.96, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 12 }}
              transition={{ duration: 0.28 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                aria-label={`${project.title} image viewer`}
                tabIndex={-1}
                className="glass-card p-3"
              >
                {/* Close */}
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close dialog"
                  className="absolute right-4 top-4 z-10 rounded-full border border-zinc-700 bg-zinc-900/80 p-2 text-zinc-300 transition hover:border-blue-400 hover:text-white"
                >
                  <X size={16} />
                </button>

                {/* Image + nav */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={showPrev}
                    aria-label="Previous image"
                    className="flex-shrink-0 rounded-full border border-zinc-700 bg-zinc-900/80 p-2 text-zinc-300 transition hover:border-blue-400"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <div className="flex-1 min-w-0">
                    <AnimatePresence initial={false} custom={direction}>
                      <motion.div
                        key={selectedIndex}
                        custom={direction}
                        variants={{
                          enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
                          center: { x: 0, opacity: 1 },
                          exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
                        }}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.28 }}
                      >
                        <img
                          src={selectedImage ?? undefined}
                          alt={`${project.title} preview`}
                          className="max-h-[78vh] w-full rounded-2xl object-contain"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Next image"
                    className="flex-shrink-0 rounded-full border border-zinc-700 bg-zinc-900/80 p-2 text-zinc-300 transition hover:border-blue-400"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                {/* Dots */}
                <div className="mt-3 flex justify-center gap-1.5">
                  {project.images.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => { setDirection(i > selectedIndex ? 1 : -1); setSelectedIndex(i); setSelectedImage(project.images[i]); }}
                      className={`h-1.5 rounded-full transition-all ${
                        i === selectedIndex ? "w-5 bg-blue-400" : "w-1.5 bg-zinc-600"
                      }`}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default ProjectItem;