import {
  Monitor, Smartphone, Server, Database, Wrench, Sparkles,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import type { SkillCategory, SkillLevel } from "@/data/skills";

/* ── Icon lookup ──────────────────────────────────────────── */
const ICONS: Record<string, LucideIcon> = {
  Monitor, Smartphone, Server, Database, Wrench, Sparkles,
};

/* ── Level label & color ──────────────────────────────────── */
const LEVEL_META: Record<SkillLevel, { label: string; dotClass: string }> = {
  advanced:     { label: "Advanced",     dotClass: "skill-level-dot--advanced" },
  intermediate: { label: "Intermediate", dotClass: "skill-level-dot--intermediate" },
  beginner:     { label: "Beginner",     dotClass: "skill-level-dot--beginner" },
};

interface SkillCardProps {
  category: SkillCategory;
  delay?: number;
}

function SkillCard({ category, delay = 0 }: SkillCardProps) {
  const Icon = ICONS[category.icon] ?? Monitor;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay }}
      className="glass-card p-6"
    >
      {/* Card header */}
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
          <Icon size={18} />
        </div>
        <h3 className="text-base font-semibold text-zinc-200">
          {category.title}
        </h3>
      </div>

      {/* Skill badges */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => {
          const { dotClass } = LEVEL_META[skill.level];
          return (
            <span
              key={skill.name}
              className="skill-badge"
              title={`${skill.level} level`}
            >
              <span className={`skill-level-dot ${dotClass}`} />
              {skill.name}
            </span>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-5 flex flex-wrap gap-3 border-t border-zinc-800/40 pt-4">
        {(["advanced", "intermediate", "beginner"] as SkillLevel[]).map((lvl) => {
          const { label, dotClass } = LEVEL_META[lvl];
          return (
            <span key={lvl} className="flex items-center gap-1.5 text-xs text-zinc-600">
              <span className={`skill-level-dot ${dotClass}`} />
              {label}
            </span>
          );
        })}
      </div>
    </motion.div>
  );
}

export default SkillCard;