"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Monitor, Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/theme/theme-provider";
import { cn } from "@/lib/utils";

const themeOrder = ["system", "light", "dark"] as const;

const themeIcons = {
  light: Sun,
  dark: Moon,
  system: Monitor,
} as const;

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const Icon = themeIcons[theme];
  const label = theme === "system" ? "System" : theme === "light" ? "Light" : "Dark";

  const handleClick = () => {
    const nextTheme = themeOrder[(themeOrder.indexOf(theme) + 1) % themeOrder.length];
    setTheme(nextTheme);
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      aria-label={`Theme: ${label}`}
      title={`Theme: ${label}`}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-strong)] text-[var(--color-muted)] shadow-[0_10px_35px_rgba(34,29,25,0.05)] backdrop-blur-[10px] transition hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:text-[var(--color-ink)]",
        className,
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={theme}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 180, opacity: 0 }}
          transition={{ duration: 0.28 }}
          className="inline-flex"
        >
          <Icon className="h-4 w-4" />
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
