// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timeoutID: NodeJS.Timeout | null = null;
  return function (...args: Parameters<T>) {
    clearTimeout(timeoutID as NodeJS.Timeout); // cast to NodeJS.Timeout to satisfy the compiler because the value can be null
    timeoutID = setTimeout(() => {
      // @ts-ignore
      fn.apply(this, args);
    }, delay);
  };
}
