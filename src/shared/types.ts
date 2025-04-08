export type Align = "left" | "right" | "center";
export type ElementAlign = "left" | "right" | "center";
export type Variant = "dark" | "light" | "medium";
export type Size = "small" | "big";
export type H = "xl" | "l" | "m";

export type MenuItem = {
  title: string;
  href: string;
  nested?: MenuItem[];
};

export type SeoProps = {
  title?: string;
  favicon?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogType?: string;
  image?: string;
  ogUrl?: string;
};
