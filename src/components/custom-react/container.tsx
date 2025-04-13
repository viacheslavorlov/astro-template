import { cn } from "#/lib/utils";
import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  xPadding?: string;
  className?: string;
}

export const Container = ({
  children,
  maxWidth = "xl",
  xPadding = "px-4 sm:px-6 lg:px-8",
  className = "",
}: ContainerProps) => {
  const maxWidthClasses = {
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-7xl",
    "2xl": "max-w-8xl",
    full: "max-w-full",
  };

  return (
    <div
      className={cn("mx-auto", maxWidthClasses[maxWidth], xPadding, className)}
    >
      {children}
    </div>
  );
};
