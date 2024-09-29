import type { HTMLAttributes } from "react";

export type NewsArticleProps = HTMLAttributes<HTMLDivElement> & {
  previewImage: string;
  title: string;
  time?: string;
  reference?: string;
  live?: boolean;
  link?: string;
  emphasis?: string;
  description?: string;
  video?: VideoResponseProps;
  group?: boolean;
  onClick?: () => void;
};

type VideoResponseProps = {
  duration: number;
  programTitle: string;
  source: string;
};
