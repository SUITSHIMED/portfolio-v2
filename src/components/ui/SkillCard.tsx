interface SkillCardProps {
  title: string;
  skills: string[];
}

function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h3 className="mb-6 text-xl font-semibold">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-zinc-700 px-3 py-2 text-sm text-zinc-300 badge-animate"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;