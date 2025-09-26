import { type VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";
// React components
import { cn } from "#/lib/utils";

export const rowVariants = cva("flex", {
  variants: {
    direction: {
      row: "flex-row",
      column: "flex-col",
    },
    wrap: {
      true: "flex-wrap",
      false: "flex-nowrap",
    },
    justify: {
      start: "justify-start",
      end: "justify-end",
      center: "justify-center",
      between: "justify-between",
      around: "justify-around",
    },
    align: {
      start: "items-start",
      end: "items-end",
      center: "items-center",
      stretch: "items-stretch",
    },
    spacing: {
      0: "gap-0",
      1: "gap-1",
      2: "gap-2",
      3: "gap-3",
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
    direction: "row",
    wrap: false,
    justify: "start",
    align: "start",
    spacing: 4,
  },
});

interface RowProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof rowVariants> {
  as?: "div" | "section" | "article";
}

export const Row = forwardRef<HTMLDivElement, RowProps>(
  (
    {
      className,
      as: Component = "div",
      direction,
      justify,
      align,
      spacing,
      wrap,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          rowVariants({ direction, justify, align, spacing, wrap }),
          className,
        )}
        {...props}
      />
    );
  },
);
