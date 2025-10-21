import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * @typedef { import("clsx").ClassValue } ClassValue
 */

/**
 * Utility function for conditionally joining Tailwind CSS classes together.
 * It combines `clsx` for conditional class merging and `tailwind-merge` for resolving
 * Tailwind CSS conflicts (e.g., `p-4` and `p-6` will result in `p-6`).
 *
 * @param {ClassValue[]} inputs - An array of class values, which can be strings,
 *   objects, or arrays.
 * @returns {string} A single string containing merged and resolved Tailwind CSS classes.
 *
 * @example
 * // Basic usage
 * cn("p-4", "text-red-500"); // => "p-4 text-red-500"
 *
 * @example
 * // Conditional classes
 * cn("p-4", isActive && "bg-blue-500"); // => "p-4 bg-blue-500" (if isActive is true)
 *
 * @example
 * // Resolving conflicts
 * cn("p-4", "p-6"); // => "p-6"
 * cn("text-red-500", "text-blue-500"); // => "text-blue-500"
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
