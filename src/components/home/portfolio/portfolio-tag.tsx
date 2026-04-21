import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-3 py-1 text-[0.73rem] leading-none tracking-[0.04em] text-[var(--color-muted)] shadow-[0_1px_0_rgba(255,255,255,0.35)_inset]">
      {children}
    </span>
  );
}
