"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type WavePathProps = React.ComponentProps<"div">;

const BASE_PATH =
  "M8 106C66 42 119 42 159 74C194 102 219 124 256 122C298 119 320 80 359 59C410 31 468 42 515 75C546 97 574 108 612 101";
const ACCENT_ONE = "M425 57C431 39 444 25 462 19";
const ACCENT_TWO = "M467 16C456 10 445 8 434 9";

export function WavePath({ className, ...props }: WavePathProps) {
  const mainPathRef = useRef<SVGPathElement>(null);
  const accentOneRef = useRef<SVGPathElement>(null);
  const accentTwoRef = useRef<SVGPathElement>(null);
  const currentProgressRef = useRef(0);
  const targetProgressRef = useRef(0);
  const currentXRef = useRef(0.2);
  const targetXRef = useRef(0.2);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const mainLength = mainPathRef.current?.getTotalLength() ?? 0;
    const accentOneLength = accentOneRef.current?.getTotalLength() ?? 0;
    const accentTwoLength = accentTwoRef.current?.getTotalLength() ?? 0;

    if (mainPathRef.current) {
      mainPathRef.current.style.strokeDasharray = `${mainLength}`;
      mainPathRef.current.style.strokeDashoffset = `${mainLength}`;
      mainPathRef.current.style.opacity = "0";
    }

    if (accentOneRef.current) {
      accentOneRef.current.style.strokeDasharray = `${accentOneLength}`;
      accentOneRef.current.style.strokeDashoffset = `${accentOneLength}`;
      accentOneRef.current.style.opacity = "0";
    }

    if (accentTwoRef.current) {
      accentTwoRef.current.style.strokeDasharray = `${accentTwoLength}`;
      accentTwoRef.current.style.strokeDashoffset = `${accentTwoLength}`;
      accentTwoRef.current.style.opacity = "0";
    }

    const drawMain = window.setTimeout(() => {
      if (mainPathRef.current) {
        mainPathRef.current.style.transition =
          "stroke-dashoffset 1.8s ease-in-out, opacity 0.35s ease-out";
        mainPathRef.current.style.strokeDashoffset = "0";
        mainPathRef.current.style.opacity = "1";
      }
    }, 50);

    const drawAccentOne = window.setTimeout(() => {
      if (accentOneRef.current) {
        accentOneRef.current.style.transition =
          "stroke-dashoffset 0.7s ease-in-out, opacity 0.25s ease-out";
        accentOneRef.current.style.strokeDashoffset = "0";
        accentOneRef.current.style.opacity = "1";
      }
    }, 1150);

    const drawAccentTwo = window.setTimeout(() => {
      if (accentTwoRef.current) {
        accentTwoRef.current.style.transition =
          "stroke-dashoffset 0.55s ease-in-out, opacity 0.25s ease-out";
        accentTwoRef.current.style.strokeDashoffset = "0";
        accentTwoRef.current.style.opacity = "1";
      }
    }, 1450);

    return () => {
      window.clearTimeout(drawMain);
      window.clearTimeout(drawAccentOne);
      window.clearTimeout(drawAccentTwo);

      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const updatePath = (progress: number, x: number) => {
    if (!mainPathRef.current) {
      return;
    }

    const clampedX = Math.max(0.1, Math.min(0.9, x));
    const verticalShift = progress * 0.55;
    const firstControlX = 66 + (clampedX - 0.2) * 120;
    const secondControlX = 194 + (clampedX - 0.2) * 110;
    const thirdControlX = 410 + (clampedX - 0.2) * 90;
    const fourthControlX = 546 + (clampedX - 0.2) * 70;

    mainPathRef.current.setAttribute(
      "d",
      `M8 106C${firstControlX.toFixed(2)} ${(42 + verticalShift).toFixed(2)} 119 ${(42 + verticalShift * 0.6).toFixed(2)} 159 ${(74 + verticalShift * 0.65).toFixed(2)}C${secondControlX.toFixed(2)} ${(102 + verticalShift).toFixed(2)} 219 ${(124 + verticalShift * 0.35).toFixed(2)} 256 ${(122 + verticalShift * 0.25).toFixed(2)}C298 ${(119 - verticalShift * 0.2).toFixed(2)} 320 ${(80 - verticalShift * 0.65).toFixed(2)} 359 ${(59 - verticalShift).toFixed(2)}C${thirdControlX.toFixed(2)} ${(31 - verticalShift * 0.35).toFixed(2)} 468 ${(42 + verticalShift * 0.2).toFixed(2)} 515 ${(75 + verticalShift * 0.55).toFixed(2)}C${fourthControlX.toFixed(2)} ${(97 + verticalShift * 0.7).toFixed(2)} 574 ${(108 + verticalShift * 0.45).toFixed(2)} 612 ${(101 + verticalShift * 0.15).toFixed(2)}`,
    );
  };

  const lerp = (x: number, y: number, amount: number) => x * (1 - amount) + y * amount;

  const tick = () => {
    currentProgressRef.current = lerp(currentProgressRef.current, targetProgressRef.current, 0.12);
    currentXRef.current = lerp(currentXRef.current, targetXRef.current, 0.14);

    updatePath(currentProgressRef.current, currentXRef.current);

    const progressDiff = Math.abs(targetProgressRef.current - currentProgressRef.current);
    const xDiff = Math.abs(targetXRef.current - currentXRef.current);

    if (progressDiff > 0.1 || xDiff > 0.002) {
      frameRef.current = window.requestAnimationFrame(tick);
      return;
    }

    frameRef.current = null;
    updatePath(targetProgressRef.current, targetXRef.current);
  };

  const startAnimationLoop = () => {
    if (frameRef.current) {
      return;
    }

    frameRef.current = window.requestAnimationFrame(tick);
  };

  return (
    <div className={cn("relative h-px w-[70vw] max-w-[34rem]", className)} {...props}>
      <div
        onMouseEnter={() => {
          if (frameRef.current) {
            window.cancelAnimationFrame(frameRef.current);
          }
          frameRef.current = null;
        }}
        onMouseMove={(event) => {
          if (!mainPathRef.current) {
            return;
          }

          const bounds = mainPathRef.current.getBoundingClientRect();
          targetXRef.current = Math.max(0.1, Math.min(0.9, (event.clientX - bounds.left) / bounds.width));
          targetProgressRef.current += event.movementY * 0.85;
          targetProgressRef.current = Math.max(-38, Math.min(38, targetProgressRef.current));
          startAnimationLoop();
        }}
        onMouseLeave={() => {
          targetProgressRef.current = 0;
          targetXRef.current = 0.2;
          startAnimationLoop();
        }}
        className="relative -top-5 z-10 h-10 w-full hover:-top-[150px] hover:h-[300px]"
      />

      <svg
        viewBox="0 0 620 150"
        fill="none"
        aria-hidden="true"
        className="absolute -top-[100px] h-[300px] w-full overflow-visible"
      >
        <path
          ref={mainPathRef}
          d={BASE_PATH}
          className="fill-none stroke-current"
          strokeWidth="2.25"
          strokeLinecap="round"
        />
        <path
          ref={accentOneRef}
          d={ACCENT_ONE}
          className="fill-none stroke-current"
          strokeWidth="2.25"
          strokeLinecap="round"
        />
        <path
          ref={accentTwoRef}
          d={ACCENT_TWO}
          className="fill-none stroke-current"
          strokeWidth="2.25"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
