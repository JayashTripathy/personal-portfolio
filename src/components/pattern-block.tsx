"use client";
import clsx from "clsx";

type PatternType =
  | "diagonal-stripes"
  | "zigzag"
  | "chevron"
  | "dots"
  | "crosshatch"
  | "wavy"
  | "diamond"
  | "circuit"
  | "mesh"
  | "grid"
  | "checker"
  | "hex"
  | "noise"
  | "stairs"
  | "wave-lines"
  | "plus"
  | "triangles";

interface DiagonalPatternProps {
  side: "left" | "right";
  className?: string;
  pattern?: PatternType;
}

export const patternStyles: Record<PatternType, string> = {
  "diagonal-stripes":
    "repeating-linear-gradient(-45deg, transparent, transparent 2px, currentcolor 2px, currentcolor 3px, transparent 3px, transparent 6px)",
  zigzag:
    "repeating-linear-gradient(45deg, transparent, transparent 8px, currentcolor 8px, currentcolor 9px, transparent 9px, transparent 10px), repeating-linear-gradient(-45deg, transparent, transparent 8px, currentcolor 8px, currentcolor 9px, transparent 9px, transparent 10px)",
  chevron:
    "repeating-linear-gradient(45deg, transparent, transparent 10px, currentcolor 10px, currentcolor 11px, transparent 11px, transparent 20px)",
  dots: "radial-gradient(circle, currentcolor 1px, transparent 1px)",
  crosshatch:
    "repeating-linear-gradient(0deg, transparent, transparent 2px, currentcolor 2px, currentcolor 3px, transparent 3px, transparent 6px), repeating-linear-gradient(90deg, transparent, transparent 2px, currentcolor 2px, currentcolor 3px, transparent 3px, transparent 6px)",
  wavy: "repeating-linear-gradient(45deg, transparent, transparent 4px, currentcolor 4px, currentcolor 5px, transparent 5px, transparent 8px), repeating-linear-gradient(-45deg, transparent, transparent 4px, currentcolor 4px, currentcolor 5px, transparent 5px, transparent 8px)",
  diamond:
    "repeating-linear-gradient(45deg, transparent, transparent 6px, currentcolor 6px, currentcolor 7px, transparent 7px, transparent 12px), repeating-linear-gradient(-45deg, transparent, transparent 6px, currentcolor 6px, currentcolor 7px, transparent 7px, transparent 12px)",
  circuit:
    "repeating-linear-gradient(0deg, transparent, transparent 3px, currentcolor 3px, currentcolor 4px, transparent 4px, transparent 8px), repeating-linear-gradient(90deg, transparent, transparent 3px, currentcolor 3px, currentcolor 4px, transparent 4px, transparent 8px), repeating-linear-gradient(45deg, transparent, transparent 1px, currentcolor 1px, currentcolor 2px, transparent 2px, transparent 4px)",
  mesh: "repeating-linear-gradient(0deg, transparent, transparent 4px, currentcolor 4px, currentcolor 5px, transparent 5px, transparent 8px), repeating-linear-gradient(90deg, transparent, transparent 4px, currentcolor 4px, currentcolor 5px, transparent 5px, transparent 8px), repeating-linear-gradient(45deg, transparent, transparent 2px, currentcolor 2px, currentcolor 3px, transparent 3px, transparent 6px), repeating-linear-gradient(-45deg, transparent, transparent 2px, currentcolor 2px, currentcolor 3px, transparent 3px, transparent 6px)",
  grid: "repeating-linear-gradient(0deg, currentcolor 0 1px, transparent 1px 10px), repeating-linear-gradient(90deg, currentcolor 0 1px, transparent 1px 10px)",

  checker:
    "linear-gradient(45deg, currentcolor 25%, transparent 25%), linear-gradient(-45deg, currentcolor 25%, transparent 25%), linear-gradient(45deg, transparent 75%, currentcolor 75%), linear-gradient(-45deg, transparent 75%, currentcolor 75%)",
  hex: "repeating-linear-gradient(60deg, transparent, transparent 10px, currentcolor 10px, currentcolor 11px), repeating-linear-gradient(-60deg, transparent, transparent 10px, currentcolor 10px, currentcolor 11px)",
  noise:
    "repeating-radial-gradient(circle at 0 0, currentcolor 0 0.5px, transparent 0.5px 2px)",
  stairs:
    "repeating-linear-gradient(90deg, transparent, transparent 6px, currentcolor 6px, currentcolor 7px), repeating-linear-gradient(0deg, transparent, transparent 6px, currentcolor 6px, currentcolor 7px)",
  "wave-lines":
    "repeating-linear-gradient(90deg, transparent, transparent 6px, currentcolor 6px, currentcolor 7px, transparent 7px, transparent 14px)",

  plus: "repeating-linear-gradient(0deg, transparent, transparent 8px, currentcolor 8px, currentcolor 9px), repeating-linear-gradient(90deg, transparent, transparent 8px, currentcolor 8px, currentcolor 9px)",

  triangles:
    "linear-gradient(45deg, transparent 75%, currentcolor 75%), linear-gradient(-45deg, transparent 75%, currentcolor 75%)",
};

const patternSizes: Record<PatternType, string> = {
  "diagonal-stripes": "10px",
  zigzag: "10px",
  chevron: "20px",
  dots: "8px 8px",
  crosshatch: "6px 6px",
  wavy: "8px 8px",
  diamond: "12px 12px",
  circuit: "8px 8px",
  mesh: "8px 8px",
  grid: "10px 10px",
  checker: "16px 16px",
  hex: "12px 12px",
  noise: "6px 6px",
  stairs: "7px 7px",
  "wave-lines": "14px 14px",
  plus: "16px 16px",
  triangles: "20px 20px",
};

export default function PatternBlock({
  side,
  className = "",
  pattern = "diagonal-stripes",
}: DiagonalPatternProps) {
  const backgroundImage = patternStyles[pattern];
  const backgroundSize = patternSizes[pattern];

  return (
    <div
      className={clsx(
        "absolute top-0 w-15 h-full overflow-hidden sm:block hidden",
        side === "left" && "left-0",
        side === "right" && "right-0",
        className
      )}
    >
      <div
        className="absolute dark:opacity-[0.04] opacity-[0.06] inset-0 w-15 h-full border dark:border-white/30 border-black/20"
        style={{
          backgroundImage,
          backgroundSize,
        }}
      />
    </div>
  );
}
