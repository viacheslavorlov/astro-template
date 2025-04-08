import { type VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "#/lib/utils";

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
      0: "p-0 md:p-0 lg:p-0",
      2: "p-2 md:p-4 lg:p-6",
      3: "p-3 md:p-5 lg:p-7",
      4: "p-4 md:p-6 lg:p-8",
      5: "p-5 md:p-7 lg:p-9",
      6: "p-6 md:p-8 lg:p-10",
      7: "p-7 md:p-9 lg:p-11",
      8: "p-8 md:p-10 lg:p-12",
      10: "p-10 md:p-12 lg:p-14",
      12: "p-12 md:p-14 lg:p-16",
    },
    gap: {
      0: "gap-0 md:gap-0 lg:gap-0",
      2: "gap-2 md:gap-4 lg:gap-6",
      4: "gap-4 md:gap-6 lg:gap-8",
      5: "gap-5 md:gap-7 lg:gap-9",
      6: "gap-6 md:gap-8 lg:gap-10",
      7: "gap-7 md:gap-9 lg:gap-11",
      8: "gap-8 md:gap-10 lg:gap-12",
      10: "gap-10 md:gap-12 lg:gap-14",
      12: "gap-12 md:gap-14 lg:gap-16",
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
