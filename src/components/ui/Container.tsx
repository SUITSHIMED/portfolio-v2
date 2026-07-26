import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      {children}
    </div>
  );
}

export default Container;