/**
 * Tiny classname joiner. Filters out falsy values so components can compose
 * conditional classes without pulling in an external dependency.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
