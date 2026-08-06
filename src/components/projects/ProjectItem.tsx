import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { Project } from "@/types/project";
import Button from "@/components/ui/Button";
import PhoneMockup from "@/components/ui/PhoneMockup";
import BrowserMockup from "@/components/ui/BrowserMockup";
import { EASE } from "@/lib/motion";

interface ProjectItemProps {
  project: Project;
  reverse?: boolean;
  index: number;
}

function ProjectItem({ project, reverse = false, index }: ProjectItemProps) {
  const { t } = useTranslation();
  const isBrowser = project.slug === "portfolio";
  const content = {
    title: t(`projects.list.${project.slug}.title`),
    category: t(`projects.list.${project.slug}.category`),
    role: t(`projects.list.${project.slug}.role`),
    description: t(`projects.list.${project.slug}.description`),
    features: t(`projects.list.${project.slug}.features`, {
      returnObjects: true,
    }) as unknown as string[],
  };
  const difficultyLabel = t(`projects.difficulty.${project.difficulty}`);
  const [imageIndex, setImageIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const images = project.images.length > 0 ? project.images : [];
  const number = String(index + 1).padStart(2, "0");

  const next = () => setImageIndex((i) => (i + 1) % (images.length || 1));
  const prev = () =>
    setImageIndex((i) => (i - 1 + (images.length || 1)) % (images.length || 1));

  /* Lightbox keyboard + focus */
  useEffect(() => {
    if (!lightbox) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const container = modalRef.current;
      if (!container) return;
      const focusable = Array.from(
        container.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => el.offsetParent !== null);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    document.addEventListener("keydown", trap);
    window.setTimeout(() => closeRef.current?.focus(), 0);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("keydown", trap);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox]);

  const currentImage = images[Math.min(imageIndex, images.length - 1)];

  const device = isBrowser ? (
    <BrowserMockup
      src={currentImage ?? ""}
      alt={`${content.title} screenshot`}
      url={project.slug === "portfolio" ? "mohamedalkhrouf.dev" : `${project.slug}.app`}
    />
  ) : (
    <PhoneMockup src={currentImage ?? ""} alt={`${content.title} screenshot`} />
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.9, ease: EASE }}
      className="relative grid items-center gap-12 lg:grid-cols-12 lg:gap-8"
    >
      {/* Ghost index */}
      <span
        aria-hidden="true"
        className={`outline-text pointer-events-none absolute top-0 z-0 select-none text-[10rem] leading-none opacity-[0.14] sm:text-[14rem] lg:text-[17rem] ${
          reverse ? "right-0 lg:-right-8" : "left-0 lg:-left-8"
        }`}
      >
        {number}
      </span>

      {/* ── Text block ── */}
      <div
        className={`relative z-10 flex flex-col lg:col-span-5 ${
          reverse ? "lg:order-2 lg:col-start-7" : "lg:col-start-1"
        }`}
      >
        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-frost">
            {content.category}
          </span>
          <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
            {project.year}
          </span>
        </div>

        <h3 className="mt-5 text-3xl font-semibold tracking-tight text-text sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]">
          {content.title}
        </h3>

        <p className="lede mt-5 max-w-md text-pretty">{content.description}</p>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <span className="font-mono text-xs text-faint">
            {t("projects.role")} — <span className="text-muted">{content.role}</span>
          </span>
          <span className="flex items-center gap-2 font-mono text-xs text-faint">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                project.status === "completed" ? "bg-frost" : "bg-violet"
              }`}
            />
            {difficultyLabel}
          </span>
        </div>

        {/* Features */}
        <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {content.features.slice(0, 4).map((feature) => (
            <li key={feature} className="flex items-center gap-2.5 text-sm text-muted">
              <Check size={13} className="shrink-0 text-frost" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Tech */}
        <div className="mt-7 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-9 flex flex-wrap items-center gap-3">
          {project.github && (
            <Button
              href={project.github}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              size="sm"
            >
              {t("projects.github")}
              <ArrowUpRight />
            </Button>
          )}
          {project.live && (
            <Button
              href={project.live}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              size="sm"
            >
              {t("projects.liveDemo")}
              <ArrowUpRight />
            </Button>
          )}
          <a
            href={`/projects/${project.slug}`}
            className="link-sweep text-sm font-medium text-text"
          >
            {t("projects.viewDetails")}
          </a>
        </div>
      </div>

      {/* ── Device ── */}
      <div
        className={`relative z-10 lg:col-span-6 ${
          reverse ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"
        }`}
      >
        <div
          className={`group relative cursor-zoom-in ${
            isBrowser ? "lg:-mt-10" : "mx-auto w-[15.5rem] sm:w-[17rem]"
          }`}
          onClick={() => images.length > 0 && setLightbox(true)}
          role="button"
          tabIndex={0}
          aria-label={`View ${content.title} screenshots`}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              if (images.length > 0) setLightbox(true);
            }
          }}
        >
          <div className="overflow-hidden rounded-2xl transition-transform duration-500 [transform:perspective(1200px)] group-hover:[transform:perspective(1200px)_translateY(-6px)]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={imageIndex}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                {device}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Hover veil */}
          <div className="pointer-events-none absolute inset-0 flex items-end justify-center rounded-2xl bg-gradient-to-t from-ink/80 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-text">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
              </svg>
              {t("projects.openPreview")}
            </span>
          </div>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="mt-5 flex justify-center gap-2.5 lg:justify-start">
            {images.map((img, i) => (
              <button
                key={img}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setImageIndex(i);
                }}
                aria-label={`Screenshot ${i + 1} of ${images.length}`}
                className={`h-16 w-11 overflow-hidden rounded-lg border transition-all duration-300 ${
                  i === imageIndex
                    ? "border-frost/60 shadow-[0_0_0_1px_rgb(163_171_242/0.2)]"
                    : "border-line opacity-50 hover:opacity-90"
                }`}
              >
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && images.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-xl sm:p-8"
            onClick={() => setLightbox(false)}
          >
            <motion.div
              initial={{ scale: 0.96, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 12 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                aria-label={`${content.title} image viewer`}
                className="card overflow-hidden p-2"
              >
                <div className="relative flex items-center justify-between border-b border-line px-3 py-2.5">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                    {content.title}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-faint">
                      {imageIndex + 1} / {images.length}
                    </span>
                    <button
                      ref={closeRef}
                      type="button"
                      onClick={() => setLightbox(false)}
                      aria-label="Close dialog"
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-text"
                    >
                      <X size={14} />
                    </button>
                  </div>
                </div>

                <div className="relative flex items-center">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous image"
                    className="absolute left-2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-ink/60 text-muted backdrop-blur transition-colors hover:text-text"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  <img
                    src={currentImage}
                    alt={`${content.title} screenshot ${imageIndex + 1}`}
                    className="max-h-[74vh] w-full rounded-lg object-contain"
                  />

                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next image"
                    className="absolute right-2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-ink/60 text-muted backdrop-blur transition-colors hover:text-text"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default ProjectItem;
