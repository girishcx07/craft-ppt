export const slugify = (input: string): string => {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumerics with hyphen
    .replace(/^-+|-+$/g, "");    // remove leading/trailing hyphens
};