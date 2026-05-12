/** Local assets under /public/images — paths are URL-safe */
function img(name: string) {
  return `/images/${encodeURIComponent(name)}`;
}

export const IMAGES = {
  formalPortrait: img("Rafiq Formal.jpeg"),
} as const;
