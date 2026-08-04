import Marquee from "@/components/ui/Marquee";

const items = [
  "React",
  "TypeScript",
  "React Native",
  "Expo",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Tailwind CSS",
  "Docker",
  "Git",
  "Figma",
  "Gemini AI",
];

function TechMarquee() {
  return (
    <section
      className="relative border-y border-line py-6 sm:py-7"
      aria-hidden="true"
    >
      <Marquee
        items={items}
        duration={38}
        itemClassName="font-mono text-sm uppercase tracking-[0.25em] text-faint"
      />
    </section>
  );
}

export default TechMarquee;
