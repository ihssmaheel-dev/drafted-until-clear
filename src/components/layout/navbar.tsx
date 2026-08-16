"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Code2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <nav className="flex items-center justify-between border-b border-border py-5">
      <Link href="/" className="flex items-center gap-2 group outline-none">
        <div className="flex size-7 items-center justify-center rounded bg-foreground text-background font-mono font-bold text-[14px] transition-transform group-hover:scale-105">
          D
        </div>
        <span className="font-sans font-bold text-[17px] tracking-tight text-foreground">
          Drafted Until Clear
        </span>
      </Link>
      
      <div className="flex items-center gap-4">
        <Link href="#explore" className="text-[14px] font-medium text-text-muted hover:text-foreground transition-colors">
          Explore
        </Link>
        <Link href="#about" className="text-[14px] font-medium text-text-muted hover:text-foreground transition-colors">
          About
        </Link>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noreferrer"
          className="text-text-muted hover:text-foreground transition-colors ml-2 outline-none"
        >
          <Code2 className="size-5" />
        </a>
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex size-8 items-center justify-center rounded-md border border-border bg-secondary hover:bg-secondary/80 text-foreground transition-colors outline-none"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
        )}
      </div>
    </nav>
  );
}
