export const textAdapt = (text: string, length: number, dots: boolean) => {
  if (!text) return "";
  return text.length > length
    ? `${text.slice(0, length)}${dots ? "..." : ""}`
    : text.slice(0, length);
};
