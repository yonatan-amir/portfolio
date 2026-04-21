"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type RevealLineProps = React.ComponentProps<"div"> & {
  onRevealDelta?: (delta: number) => void;
  lineOpacity?: number;
};

export function RevealLine({
  className,
  onRevealDelta,
  lineOpacity = 1,
  ...props
}: RevealLineProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const currentProgressRef = useRef(0);
  const targetProgressRef = useRef(0);
  const currentXRef = useRef(0.5);
  const targetXRef = useRef(0.5);
  const frameRef = useRef<number | null>(null);
  const lastRevealPushRef = useRef(0);

  const setPath = (progress: number, x: number) => {
    if (!pathRef.current) {
      return;
    }

    const width = pathRef.current.parentElement?.getBoundingClientRect().width ?? 620;
    const controlX = width * x;
    pathRef.current.setAttribute("d", `M0 100 Q${controlX} ${100 + progress}, ${width} 100`);
  };

  useEffect(() => {
    setPath(0, 0.5);

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const lerp = (x: number, y: number, amount: number) => x * (1 - amount) + y * amount;

  const tick = () => {
    currentProgressRef.current = lerp(currentProgressRef.current, targetProgressRef.current, 0.13);
    currentXRef.current = lerp(currentXRef.current, targetXRef.current, 0.14);

    setPath(currentProgressRef.current, currentXRef.current);

    const progressDiff = Math.abs(targetProgressRef.current - currentProgressRef.current);
    const xDiff = Math.abs(targetXRef.current - currentXRef.current);

    if (progressDiff > 0.12 || xDiff > 0.002) {
      frameRef.current = window.requestAnimationFrame(tick);
      return;
    }

    frameRef.current = null;
    setPath(targetProgressRef.current, targetXRef.current);
  };

  const startLoop = () => {
    if (frameRef.current) {
      return;
    }

    frameRef.current = window.requestAnimationFrame(tick);
  };

  return (
    <div
      className={cn("relative h-px w-full transition-opacity duration-300", className)}
      style={{ opacity: lineOpacity }}
      {...props}
    >
      <div
        onMouseMove={(event) => {
          if (!pathRef.current) {
            return;
          }

          const bounds = pathRef.current.getBoundingClientRect();
          targetXRef.current = Math.max(0.1, Math.min(0.9, (event.clientX - bounds.left) / bounds.width));
          targetProgressRef.current += event.movementY * 0.77;
          targetProgressRef.current = Math.max(-31, Math.min(31, targetProgressRef.current));

          const revealPush = Math.min(0.035, Math.abs(event.movementY) * 0.0025);
          if (revealPush > 0.001) {
            lastRevealPushRef.current = revealPush;
            onRevealDelta?.(revealPush);
          }

          startLoop();
        }}
        onMouseLeave={() => {
          targetProgressRef.current = 0;
          targetXRef.current = 0.5;
          startLoop();
        }}
        className="relative -top-3 z-10 h-8 w-full cursor-pointer hover:-top-16 hover:h-32"
      />

      <svg
        viewBox="0 0 620 200"
        fill="none"
        aria-hidden="true"
        className="absolute -top-14 h-28 w-full overflow-visible"
      >
        <path
          ref={pathRef}
          className="fill-none stroke-current"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
