import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectItem from "@/components/projects/ProjectItem";
import { projects } from "@/data/projects";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="relative py-24 sm:py-32 lg:py-40">
      <Container size="wide">
        <div className="mb-16 sm:mb-24 lg:mb-32">
          <SectionHeading
            index="03"
            label={t("projects.label")}
            title={
              <>
                {t("projects.title")}{" "}
                <span className="text-gradient">{t("projects.titleHighlight")}</span>
              </>
            }
            description={t("projects.description")}
          />
        </div>

        <div className="space-y-32 lg:space-y-44">
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
    </section>
  );
}

export default Projects;
