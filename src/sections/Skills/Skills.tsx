import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Server,
  Database,
  Wrench,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories, type SkillCategory } from "@/data/skills";
import { EASE } from "@/lib/motion";

const ICONS: Record<string, LucideIcon> = {
  Monitor,
  Smartphone,
  Server,
  Database,
  Wrench,
  Sparkles,
};

function SkillRow({ category, index }: { category: SkillCategory; index: number }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(index === 0);
  const Icon = ICONS[category.icon] ?? Monitor;

  return (
    <div className="border-t border-line last:border-b">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 py-6 text-left sm:gap-6 sm:py-7"
      >
        <span className="font-mono text-xs text-faint transition-colors duration-300 group-hover:text-frost">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="flex items-center gap-4 sm:gap-5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors duration-300 group-hover:border-frost/40 group-hover:text-frost">
            <Icon size={16} />
          </span>
          <span className="text-xl font-medium tracking-tight text-text transition-colors duration-300 sm:text-2xl">
            {t(`skills.categories.${category.key}`)}
          </span>
        </span>

        <span className="flex items-center gap-4">
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.16em] text-faint sm:block">
            {category.skills.length} {t("skills.tools")}
          </span>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-muted transition-colors group-hover:text-text"
          >
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M5.5 1v9M1 5.5h9" stroke="currentColor" strokeWidth="1.1" />
            </svg>
          </motion.span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="pb-7 pl-8 sm:pl-16">
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.35, ease: EASE, delay: 0.05 * i }}
                    className="tag"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="relative py-24 sm:py-32 lg:py-40">
      <Container size="wide">
        <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-4">
            <SectionHeading
              index="02"
              label={t("skills.label")}
              title={t("skills.title")}
              description={t("skills.description")}
            />
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {skillCategories.map((category, i) => (
              <SkillRow key={category.key} category={category} index={i} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Skills;
