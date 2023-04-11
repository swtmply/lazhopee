"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeSwitchButton() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant={"ghost"}
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {theme === "dark" ? <Moon /> : <Sun />}
    </Button>
  );
}
