"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../ThemeProvider";
import { Button } from "./Button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full text-charcoal">
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-10 h-10 rounded-full hover:bg-gold/10 text-charcoal transition-colors relative"
    >
      {isDark ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-gold" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] text-charcoal" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
