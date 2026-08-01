import Container from "@/components/ui/Container";
import SkillCard from "@/components/ui/SkillCard";
import { skillCategories } from "@/data/skills";
import Reveal from "@/components/common/Reveal";
import { techStack } from "@/data/techStack";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-zinc-950 py-20 sm:py-24 lg:py-32"
    >
      <Container>

        <div className="mb-12 sm:mb-16">
          <h2 className="text-4xl font-bold sm:text-5xl">
            Skills
          </h2>

          <p className="mt-4 text-zinc-400">
            Technologies and tools I use to build applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 grid gap-8 md:grid-cols-2">
            {skillCategories.map((category) => (
              <Reveal key={category.title}>
                <SkillCard title={category.title} skills={category.skills} />
              </Reveal>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <Reveal>
              <div className="w-full max-w-xs text-center">
                <h3 className="text-lg font-semibold">Tech Stack</h3>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-sm text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

      </Container>
    </section>
  );
}

export default Skills;