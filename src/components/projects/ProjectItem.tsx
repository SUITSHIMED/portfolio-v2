import { useEffect, useState } from "react";
import { Code2, ExternalLink, CheckCircle2, X, ChevronLeft, ChevronRight } from "lucide-react";
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
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, selectedIndex, project.images]);

  const openImage = (image: string, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const showNextImage = () => {
    const nextIndex = (selectedIndex + 1) % project.images.length;
    setSelectedIndex(nextIndex);
    setSelectedImage(project.images[nextIndex]);
  };

  const showPrevImage = () => {
    const prevIndex = (selectedIndex - 1 + project.images.length) % project.images.length;
    setSelectedIndex(prevIndex);
    setSelectedImage(project.images[prevIndex]);
  };

  return (
    <article
      className={`
        grid items-center gap-16
        lg:grid-cols-2
        ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
      `}
    >
      {/* LEFT SIDE */}
      <div>

        <p className="text-blue-400 text-sm uppercase tracking-widest">
          {project.category}
        </p>

        <h3 className="mt-3 text-4xl font-bold">
          {project.title}
        </h3>

        <p className="mt-6 leading-8 text-zinc-400">
          {project.description}
        </p>
        <div className="mt-8 space-y-3">
  {project.features.map((feature) => (
    <div
      key={feature}
      className="flex items-center gap-3"
    >
      <CheckCircle2
        size={18}
        className="text-blue-400"
      />

      <span className="text-zinc-300">
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
<div className="mt-10 flex flex-wrap gap-4">
  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      className="
        flex items-center gap-2
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
        flex items-center gap-2
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
      <div className="flex gap-3 overflow-x-hidden pb-2">
        {project.images.map((image, index) => (
          <button
            key={`${project.id}-${image}-${index}`}
            type="button"
            onClick={() => openImage(image, index)}
            className="group relative min-w-[10.5rem] flex-1 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 text-left"
          >
            <img
              src={image}
              alt={`${project.title} screenshot ${index + 1}`}
              loading="lazy"
              className="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
            />
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

{selectedImage && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
    onClick={() => setSelectedImage(null)}
  >
    <div
      className="relative w-full max-w-5xl rounded-3xl border border-zinc-800 bg-zinc-950 p-3 shadow-2xl"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        type="button"
        onClick={() => setSelectedImage(null)}
        className="absolute right-4 top-4 z-10 rounded-full border border-zinc-700 bg-zinc-900/80 p-2 text-zinc-200 transition hover:border-blue-400 hover:text-white"
      >
        <X size={18} />
      </button>

      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={showPrevImage}
          className="mr-3 rounded-full border border-zinc-700 bg-zinc-900/80 p-2 text-zinc-200 transition hover:border-blue-400 hover:text-white"
        >
          <ChevronLeft size={20} />
        </button>

        <img
          src={selectedImage}
          alt={`${project.title} preview`}
          className="max-h-[78vh] w-full rounded-2xl object-contain"
        />

        <button
          type="button"
          onClick={showNextImage}
          className="ml-3 rounded-full border border-zinc-700 bg-zinc-900/80 p-2 text-zinc-200 transition hover:border-blue-400 hover:text-white"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  </div>
)}
    </article>
  );
}

export default ProjectItem;