"use client";

import { useLayoutEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const LINE_HEIGHT = 1.375;

type FitTwoLineTextProps = {
  children: React.ReactNode;
  className?: string;
  maxFontSize?: number;
  smMaxFontSize?: number;
  minFontSize?: number;
};

export function FitTwoLineText({
  children,
  className,
  maxFontSize = 18,
  smMaxFontSize = 20,
  minFontSize = 11,
}: FitTwoLineTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    const fit = () => {
      const isSm = window.matchMedia("(min-width: 640px)").matches;
      const maxSize = isSm ? smMaxFontSize : maxFontSize;
      let size = maxSize;

      text.style.lineHeight = String(LINE_HEIGHT);

      while (size >= minFontSize) {
        text.style.fontSize = `${size}px`;
        const maxHeight = size * LINE_HEIGHT * 2 + 1;

        if (text.scrollHeight <= maxHeight) {
          break;
        }

        size -= 0.5;
      }

      text.style.fontSize = `${Math.max(size, minFontSize)}px`;
    };

    fit();

    const observer = new ResizeObserver(fit);
    observer.observe(container);

    return () => observer.disconnect();
  }, [children, maxFontSize, smMaxFontSize, minFontSize]);

  return (
    <div ref={containerRef} className="w-full">
      <p ref={textRef} className={cn("font-bold italic text-white", className)}>
        {children}
      </p>
    </div>
  );
}
