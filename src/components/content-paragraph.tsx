"use client";

import clsx from "clsx";

interface ContentParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContentParagraph({
  children,
  className = "",
}: ContentParagraphProps) {
  return (
    <p
      className={clsx(
        "text-base leading-relaxed text-foreground/70 font-medium",
        className
      )}
      style={{ letterSpacing: "-0.02em" }}
    >
      {children}
    </p>
  );
}
