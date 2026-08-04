import type { MouseEvent, ReactNode } from "react";
import { useState } from "react";
import Magnetic from "./Magnetic";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "subtle";
  size?: "sm" | "md" | "lg";
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
}

let rippleId = 0;

/**
 * Button — premium product button: magnetic pull, spring press, click ripple.
 */
function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  target,
  rel,
  ariaLabel,
}: ButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const spawnRipple = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = rippleId++;
    setRipples((prev) => [
      ...prev,
      { id, x: e.clientX - rect.left, y: e.clientY - rect.top },
    ]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 650);
  };

  const classes = [
    "btn",
    variant === "primary" ? "btn-primary" : variant === "ghost" ? "btn-ghost" : "btn-subtle",
    size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          className={`btn-ripple ${variant === "primary" ? "btn-ripple--dark" : ""}`}
          style={{ left: r.x, top: r.y, width: 24, height: 24 }}
        />
      ))}
    </>
  );

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    spawnRipple(e);
    onClick?.();
  };

  const commonProps = {
    className: classes,
    "aria-label": ariaLabel,
  };

  return (
    <Magnetic>
      {href ? (
        <a
          href={href}
          target={target}
          rel={rel}
          onClick={handleClick}
          {...commonProps}
        >
          {content}
        </a>
      ) : (
        <button type="button" onClick={handleClick} {...commonProps}>
          {content}
        </button>
      )}
    </Magnetic>
  );
}

export default Button;
