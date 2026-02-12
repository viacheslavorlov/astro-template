import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeIcon() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const initialTheme = (() => {
      const localStorageTheme = localStorage?.getItem("theme") ?? "";
      if (["dark", "light"].includes(localStorageTheme)) {
        return localStorageTheme as Theme;
      }
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
      return "light";
    })();
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Sun /> : <Moon />}
    </button>
  );
}
