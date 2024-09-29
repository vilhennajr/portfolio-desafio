import type { HTMLAttributes } from "react";

export type GroupNewsProps = HTMLAttributes<HTMLDivElement> & {
  header: string;
  footer: string;
  onClick: () => void;
  firstProp: NewsArticleProps;
  secondProp: NewsArticleProps;
  thirdProp: NewsArticleProps;
};

type NewsArticleProps = {
  title: string;
  image: string;
  url: string;
};
