import { Moon, Sun } from "lucide-react";
import * as React from "react";

import { Button } from "#/components/shadcn/button";

const getThemePreference = () => {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export function ThemeSwitcher({ className }: { className?: string }) {
  const [theme, setTheme] = React.useState<"light" | "dark">();
  const tooggleTheme = () => {
    const isDark = getThemePreference() === "dark";
    if (isDark) {
      document.documentElement.classList.remove("dark");
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  React.useEffect(() => {
    const isDark = getThemePreference() === "dark";
    // document.documentElement.classList.toggle("dark", isDark);
    setTheme(isDark ? "dark" : "light");
  }, []);

  return (
    <Button
      onClick={tooggleTheme}
      variant="outline"
      size="icon"
      className="overflow-hidden"
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]  transition-all " />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
