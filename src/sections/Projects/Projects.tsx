import Container from "@/components/ui/Container";
import ProjectItem from "@/components/projects/ProjectItem";
import { projects } from "@/data/projects";
import Reveal from "@/components/common/Reveal";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-zinc-950 py-20 sm:py-24 lg:py-32"
    >
      <Container>

        <div className="mb-12 sm:mb-16 lg:mb-24">
          <Reveal>
            <h2 className="mt-2 text-4xl font-bold sm:text-5xl">
              Featured Projects
            </h2>

            <p className="mt-5 max-w-2xl text-sm text-zinc-400 sm:text-base">
              A selection of applications I've designed and developed using
              React Native, Node.js, PostgreSQL, and modern web technologies.
            </p>
          </Reveal>
        </div>

        <div className="space-y-16 sm:space-y-24 lg:space-y-32">

          {projects.map((project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}

export default Projects;