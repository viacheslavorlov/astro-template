import { type VariantProps, cva } from "class-variance-authority";
import { type ReactNode, forwardRef } from "react";
import { cn } from "#/lib/utils";

export const headingVariants = cva("font-bold", {
  variants: {
    level: {
      h1: "text-4xl lg:text-5xl",
      h2: "text-3xl lg:text-4xl",
      h3: "text-2xl lg:text-3xl",
      h4: "text-xl lg:text-2xl",
      h5: "text-lg lg:text-xl",
      h6: "text-base lg:text-lg",
    },
    margin: {
      default: "mb-4 md:mb-8 lg:mb-12",
      small: "mb-2 md:mb-4 lg:mb-6",
      none: "mb-0",
    },
  },
  defaultVariants: {
    level: "h2",
    margin: "default",
  },
});

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  children: ReactNode;
}

export const H = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    { className, as: Component = "h2", level, margin, children, ...props },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ level, margin }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  },
);
H.displayName = "Heading";

export const paragraphVariants = cva("", {
  variants: {
    size: {
      default: "text-base",
      sm: "text-sm",
      lg: "text-lg",
      custom: "",
    },
    leading: {
      default: "leading-7",
      tight: "leading-tight",
      relaxed: "leading-relaxed",
      custom: "",
    },
    margin: {
      default: "mb-4",
      none: "mb-0",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
  },
  defaultVariants: {
    size: "default",
    leading: "default",
    margin: "none",
    align: "left",
  },
});

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {
  as?: "p" | "div" | "span";
}

export const P = forwardRef<HTMLParagraphElement, ParagraphProps>(
  (
    { className, as: Component = "p", size, leading, margin, align, ...props },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          paragraphVariants({
            size,
            leading,
            margin,
            align,
          }),
          className,
        )}
        {...props}
      />
    );
  },
);
P.displayName = "Paragraph";

// export const TextStroke = ({ children, className }: ParagraphProps) => {
//   return (
//     <P
//       size={"custom"}
//       leading={"custom"}
//       className={clsx("", classes.stroke, className)}
//     >
//       {children}
//     </P>
//   );
// };
