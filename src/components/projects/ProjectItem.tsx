import { useEffect, useRef, useState } from "react";
import { Code2, ExternalLink, CheckCircle2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "@/components/common/Tilt";
import type { Project } from "@/types/project";

interface ProjectItemProps {
  project: Project;
  reverse?: boolean;
}

function ProjectItem({
  project,
  reverse = false,
}: ProjectItemProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState<number>(0);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      } else if (event.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev + 1) % project.images.length);
        setSelectedImage(project.images[(selectedIndex + 1) % project.images.length]);
      } else if (event.key === "ArrowLeft") {
        const nextIndex = (selectedIndex - 1 + project.images.length) % project.images.length;
        setSelectedIndex(nextIndex);
        setSelectedImage(project.images[nextIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // prevent background scroll and manage focus
    previousActiveElement.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";

    // focus close button when modal opens
    setTimeout(() => closeButtonRef.current?.focus(), 0);

    // focus trap
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
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", trapFocus);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keydown", trapFocus);
      document.body.style.overflow = "";
      previousActiveElement.current?.focus();
    };
  }, [selectedImage, selectedIndex, project.images]);

  const openImage = (image: string, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const showNextImage = () => {
    const nextIndex = (selectedIndex + 1) % project.images.length;
    setDirection(1);
    setSelectedIndex(nextIndex);
    setSelectedImage(project.images[nextIndex]);
  };

  const showPrevImage = () => {
    const prevIndex = (selectedIndex - 1 + project.images.length) % project.images.length;
    setDirection(-1);
    setSelectedIndex(prevIndex);
    setSelectedImage(project.images[prevIndex]);
  };

  return (
    <motion.div
      initial={{ y: 28, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      whileHover={{ scale: 1.01 }}
    >
      <article
        className={`
          grid items-center gap-8
          lg:grid-cols-2 lg:gap-16
          ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
        `}
      >
      {/* LEFT SIDE */}
      <div>

        <p className="text-blue-400 text-sm uppercase tracking-widest">
          {project.category}
        </p>

        <h3 className="mt-3 text-3xl font-bold sm:text-4xl">
          {project.title}
        </h3>

        <p className="mt-6 text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
          {project.description}
        </p>
        <div className="mt-8 space-y-3">
  {project.features.map((feature) => (
    <div
      key={feature}
      className="flex items-start gap-3"
    >
      <CheckCircle2
        size={18}
        className="text-blue-400"
      />

      <span className="text-sm text-zinc-300 sm:text-base">
        {feature}
      </span>
    </div>
  ))}
</div>
<div className="mt-8 flex flex-wrap gap-3">
  {project.technologies.map((tech) => (
    <span
      key={tech}
      className="
        rounded-full
        border border-zinc-700
        bg-zinc-900
        px-4
        py-2
        text-sm
        text-zinc-300
      "
    >
      {tech}
    </span>
  ))}
</div>
<div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      className="
        flex items-center justify-center gap-2
        rounded-lg
        bg-white
        px-5
        py-3
        text-black
        transition
        hover:opacity-90
      "
    >
      <Code2 size={18} />
      GitHub
    </a>
  )}

  {project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noreferrer"
      className="
        flex items-center justify-center gap-2
        rounded-lg
        border
        border-zinc-700
        px-5
        py-3
        transition
        hover:border-blue-400
      "
    >
      <ExternalLink size={18} />
      Live Demo
    </a>
  )}
</div>
</div>
<div className="flex justify-center">
  <div className="w-full max-w-[36rem] rounded-3xl border border-zinc-800/80 bg-zinc-900/70 p-3 shadow-[0_0_40px_rgba(0,0,0,0.25)]">
    {project.images?.length > 0 ? (
      <div className="grid gap-3 pb-2 sm:grid-cols-2 lg:grid-cols-1">
        {project.images.map((image, index) => (
          <button
            key={`${project.id}-${image}-${index}`}
            type="button"
            onClick={() => openImage(image, index)}
            className="group relative min-w-0 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 text-left"
          >
            <Tilt className="block w-full h-44">
              <img
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                loading="lazy"
                className="h-44 w-full object-cover"
              />
            </Tilt>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
          </button>
        ))}
      </div>
    ) : (
      <div className="rounded-2xl border border-dashed border-zinc-700 p-10 text-center text-zinc-500">
        No preview available
      </div>
    )}
  </div>
</div>

<AnimatePresence>
  {selectedImage && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      key="lightbox-overlay"
    >
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
        <motion.div
          initial={{ scale: 0.96, y: 12 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.96, y: 12 }}
          transition={{ duration: 0.28 }}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} image viewer`}
            tabIndex={-1}
            className="relative w-full max-w-5xl rounded-3xl border border-zinc-800 bg-zinc-950 p-3 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close dialog"
              className="absolute right-4 top-4 z-10 rounded-full border border-zinc-700 bg-zinc-900/80 p-2 text-zinc-200 transition hover:border-blue-400 hover:text-white"
            >
              <X size={18} />
            </button>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.22, delay: 0.06 }}
            >
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                type="button"
                onClick={showPrevImage}
                aria-label="Previous image"
                className="rounded-full border border-zinc-700 bg-zinc-900/80 p-2 text-zinc-200 transition hover:border-blue-400 hover:text-white"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="w-full">
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
                    <div className="w-full">
                      <img
                        src={selectedImage ?? undefined}
                        alt={`${project.title} preview`}
                        className="max-h-[78vh] w-full rounded-2xl object-contain"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <button
                 type="button"
                 onClick={showNextImage}
                 aria-label="Next image"
                 className="rounded-full border border-zinc-700 bg-zinc-900/80 p-2 text-zinc-200 transition hover:border-blue-400 hover:text-white"
              >
                <ChevronRight size={20} />
              </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
      </article>
    </motion.div>
  );
}

export default ProjectItem;