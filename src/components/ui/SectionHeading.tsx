import type { ReactNode } from "react";
import Reveal from "@/components/common/Reveal";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

/**
 * SectionHeading — consistent editorial header used across sections.
 * Asymmetric: mono index + hairline on one line, oversized title below.
 */
function SectionHeading({
  index,
  label,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal>
      <div className={className}>
        <div
          className={`flex items-center gap-4 ${
            centered ? "justify-center" : "justify-start"
          }`}
        >
          <span className="mono-label">{index}</span>
          <span className="h-px w-10 bg-line-strong" aria-hidden="true" />
          <span className="mono-label">{label}</span>
        </div>

        <h2
          className={`h-display mt-6 text-balance ${
            centered ? "mx-auto text-center" : ""
          }`}
        >
          {title}
        </h2>

        {description && (
          <p
            className={`lede mt-6 text-pretty max-w-xl ${
              centered ? "mx-auto text-center" : ""
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}

export default SectionHeading;
