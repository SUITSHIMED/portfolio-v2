import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  duration?: number;
  blur?: boolean;
  once?: boolean;
  className?: string;
}

/**
 * Reveal — scroll-triggered entrance with fade + optional translate and blur.
 * Content lifts from the given offset. Cheap to use, never over-animated.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  x = 0,
  duration = 0.9,
  blur = false,
  once = true,
  className,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y,
        x,
        filter: blur ? "blur(8px)" : "blur(0px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once, margin: "-10% 0px" }}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
