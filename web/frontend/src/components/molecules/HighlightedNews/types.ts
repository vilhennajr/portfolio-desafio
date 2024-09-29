import type { HTMLAttributes } from "react";

export type HighlightedNewsProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  description?: string;
  image?: string;
  link?: string;
  emphasis?: string;
};
