import { cn } from "#/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  yPadding?: string;
  className?: string;
  as?: "section" | "div" | "header" | "footer";
  id?: string;
}

export const Section = ({
  id,
  children,
  yPadding = "py-8 md:py-12 lg:py-16",
  className = "",
  as: Component = "section",
}: SectionProps) => {
  return (
    <Component id={id} className={cn(`w-full ${yPadding} ${className}`)}>
      {children}
    </Component>
  );
};
