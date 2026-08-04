import type { ReactNode } from "react";

interface MarqueeProps {
  items: ReactNode[];
  duration?: number;
  className?: string;
  itemClassName?: string;
}

/**
 * Marquee — infinite horizontal ticker. Two identical tracks are
 * duplicated to create a seamless loop via the CSS `marquee` animation.
 */
function Marquee({
  items,
  duration = 36,
  className = "",
  itemClassName = "",
}: MarqueeProps) {
  const track = (
    <div className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className={itemClassName}>{item}</span>
          <span
            className="mx-6 text-faint md:mx-10"
            aria-hidden="true"
          >
            /
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`marquee ${className}`} aria-hidden="true">
      <div
        className="marquee-track"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {track}
        {track}
      </div>
    </div>
  );
}

export default Marquee;
