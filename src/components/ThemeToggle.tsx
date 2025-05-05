"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800 dark:bg-zinc-200 text-white dark:text-black hover:ring-2 ring-purple-500 transition-all duration-200"
    >
      {isDark ? (
        <>
          <SunIcon className="w-5 h-5" />
          <span>Light Mode</span>
        </>
      ) : (
        <>
          <MoonIcon className="w-5 h-5" />
          <span>Dark Mode</span>
        </>
      )}
    </button>
  );
}
