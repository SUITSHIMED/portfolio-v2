import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  size?: "default" | "wide" | "narrow";
  className?: string;
}

function Container({ children, size = "default", className = "" }: ContainerProps) {
  const widths: Record<string, string> = {
    default: "max-w-[72rem]",
    wide: "max-w-[88rem]",
    narrow: "max-w-[46rem]",
  };

  return (
    <div className={`mx-auto w-full ${widths[size]} px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export default Container;
