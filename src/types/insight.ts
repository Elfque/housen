export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export type ContentBlock =
  | {
      type: "heading";
      value: string;
    }
  | {
      type: "paragraph";
      value: string;
    }
  | {
      type: "image";
      value: string;
    };

export interface Insight {
  slug: string;
  title: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  author: Author;
  content: ContentBlock[];
}
