import { useEffect, useState } from "react";

export function useScrollDirection(threshold = 16) {
  const [direction, setDirection] = useState<"up" | "down" | null>(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY;

      if (Math.abs(delta) > threshold) {
        setDirection(delta < 0 ? "up" : "down");
        lastY = currentY;
      }
      setY(currentY);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { direction, y };
}
