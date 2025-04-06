import { cn } from "#/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

export const colVariants = cva("flex flex-col", {
  variants: {
    span: {
      none: "",
      auto: "flex-grow",
      1: "w-full md:w-1/12",
      2: "w-full md:w-2/12",
      3: "w-full md:w-3/12",
      4: "w-full md:w-4/12",
      5: "w-full md:w-5/12",
      6: "w-full md:w-6/12",
      7: "w-full md:w-7/12",
      8: "w-full md:w-8/12",
      9: "w-full md:w-9/12",
      10: "w-full md:w-10/12",
      11: "w-full md:w-11/12",
      full: "w-full",
    },
    adaptive: {
      none: "",
      md: "md:flex-row",
      lg: "lg:flex-row",
    },
    padding: {
      0: "p-0",
      2: "p-2",
      4: "p-4",
      8: "p-8",
    },
    gap: {
      0: "gap-0",
      2: "gap-2",
      4: "gap-4",
      5: "gap-5",
      6: "gap-6",
      7: "gap-7",
      8: "gap-8",
      9: "gap-9",
      10: "gap-10",
      11: "gap-11",
      12: "gap-12",
    },
  },
  defaultVariants: {
    span: "auto",
    padding: 4,
    gap: 4,
    adaptive: "none",
  },
});

interface ColProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof colVariants> {
  as?: "div" | "section" | "article";
}

export const Col = forwardRef<HTMLDivElement, ColProps>(
  (
    { className, as: Component = "div", span, adaptive, padding, ...props },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(colVariants({ span, adaptive, padding }), className)}
        {...props}
      />
    );
  },
);
