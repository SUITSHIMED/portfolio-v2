import type { ReactNode } from "react";
import { useRef } from "react";

interface TiltProps {
  children: ReactNode;
  max?: number; // degrees
  perspective?: number;
  scale?: number;
  transition?: number; // ms
  className?: string;
}

export default function Tilt({
  children,
  max = 12,
  perspective = 800,
  scale = 1.03,
  transition = 300,
  className,
}: TiltProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const frame = useRef<number | null>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const px = x / rect.width - 0.5; // -0.5 .. 0.5
    const py = y / rect.height - 0.5;

    const rotY = px * max * -1;
    const rotX = py * max;

    const tx = px * (max / 4) * -1;
    const ty = py * (max / 4) * -1;

    const transform = `perspective(${perspective}px) rotateX(${rotX}deg) rotateY(${rotY}deg) translate3d(${tx}px, ${ty}px, 0) scale(${scale})`;

    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      if (!el) return;
      el.style.transform = transform;
    });
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      if (!el) return;
      el.style.transition = `transform ${transition}ms ease`;
      el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) translate3d(0,0,0) scale(1)`;
      window.setTimeout(() => {
        if (el) el.style.transition = "";
      }, transition);
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
    >
      {children}
    </div>
  );
}
