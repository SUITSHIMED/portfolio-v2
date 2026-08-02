import Container from "@/components/ui/Container";
import SkillCard from "@/components/ui/SkillCard";
import { skillCategories } from "@/data/skills";
import Reveal from "@/components/common/Reveal";
import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-28 lg:py-36"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-800/60 to-transparent" />

      <Container>
        {/* Header */}
        <Reveal>
          <div className="mb-14 sm:mb-18">
            <span className="section-label">{t("skills.label")}</span>
            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              {t("skills.title")}
            </h2>
            <p className="mt-4 max-w-xl text-base text-zinc-400">
              {t("skills.description")}
            </p>
          </div>
        </Reveal>

        {/* Skill cards grid */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              delay={index * 0.08}
            />
          ))}
        </div>

      </Container>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-800/60 to-transparent" />
    </section>
  );
}

export default Skills;