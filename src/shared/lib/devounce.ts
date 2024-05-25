export function debounce(fn: Function, delay: number) {
  let timeoutID: NodeJS.Timeout | null = null;
  return function () {
    clearTimeout(timeoutID);
    let args = arguments;
    let context = this;
    timeoutID = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}
