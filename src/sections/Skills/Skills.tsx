import Container from "@/components/ui/Container";
import SkillCard from "@/components/ui/SkillCard";
import { skillCategories } from "@/data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-zinc-950 py-32"
    >
      <Container>

        <div className="mb-16">
          <h2 className="text-5xl font-bold">
            Skills
          </h2>

          <p className="mt-4 text-zinc-400">
            Technologies and tools I use to build applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {skillCategories.map((category) => (
            <SkillCard
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}

export default Skills;