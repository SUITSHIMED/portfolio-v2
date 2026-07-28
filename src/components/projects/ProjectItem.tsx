import { Code2, ExternalLink, CheckCircle2 } from "lucide-react";
import type { Project } from "@/types/project";

interface ProjectItemProps {
  project: Project;
  reverse?: boolean;
}

function ProjectItem({
  project,
  reverse = false,
}: ProjectItemProps) {
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
  <div className="w-full max-w-xl space-y-4">
    {project.images?.length > 0 ? (
      project.images.map((image, index) => (
        <img
          key={`${project.id}-${image}-${index}`}
          src={image}
          alt={`${project.title} screenshot ${index + 1}`}
          loading="lazy"
          className="w-full rounded-2xl border border-zinc-800 object-cover shadow-2xl shadow-black/30"
        />
      ))
    ) : (
      <div className="rounded-2xl border border-dashed border-zinc-700 p-10 text-center text-zinc-500">
        No preview available
      </div>
    )}
  </div>
</div>
    </article>
  );
}

export default ProjectItem;