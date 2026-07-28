import Container from "@/components/ui/Container";
import ProjectItem from "@/components/projects/ProjectItem";
import { projects } from "@/data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-zinc-950 py-32"
    >
      <Container>

        <div className="mb-24">


          <h2 className="mt-2 text-5xl font-bold">
            Featured Projects
          </h2>

          <p className="mt-5 max-w-2xl text-zinc-400">
            A selection of applications I've designed and developed using
            React Native, Node.js, PostgreSQL, and modern web technologies.
          </p>

        </div>

        <div className="space-y-32">

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