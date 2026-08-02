import Container from "@/components/ui/Container";
import ProjectItem from "@/components/projects/ProjectItem";
import { projects } from "@/data/projects";
import Reveal from "@/components/common/Reveal";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-28 lg:py-36"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-800/60 to-transparent" />

      <Container>
        {/* Header */}
        <Reveal>
          <div className="mb-16 sm:mb-20 lg:mb-28">
            <span className="section-label">{t("projects.label")}</span>
            
            <p className="mt-4 max-w-2xl text-base text-zinc-400">
              {t("projects.description")}
            </p>
          </div>
        </Reveal>

        <div className="space-y-24 sm:space-y-32 lg:space-y-40">
          {projects.map((project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
              index={index}
            />
          ))}
        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-800/60 to-transparent" />
    </section>
  );
}

export default Projects;