import { useMemo } from "react";

type Condition<Value = unknown> = Value | false | null | undefined | 0 | "";

type Props<V> = React.PropsWithoutRef<{
  condition: Condition<V>;
  children: React.ReactNode | ((value: V) => React.ReactNode);
  fallback?: React.ReactNode;
}>;

export function If<V = unknown>({ condition, children, fallback }: Props<V>) {
  return useMemo(() => {
    if (condition) {
      if (typeof children === "function") {
        return <>{children(condition)}</>;
      }

      return <>{children}</>;
    }

    if (fallback) return <>{fallback}</>;

    return null;
  }, [condition, fallback, children]);
}
