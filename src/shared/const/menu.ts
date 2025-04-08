import type { MenuItem } from "../types";

export const menuItems: MenuItem[] = [
  {
    title: "Главная",
    href: "/",
  },
  {
    title: "Компоненты",
    href: "/components",
    nested: [
      {
        title: "react components",
        href: "/components/react",
      },
      {
        title: "astro components",
        href: "/components/astro",
      },
    ],
  },
  // {
  //   title: "Контакты",
  //   href: "/contacts",
  // },
];
