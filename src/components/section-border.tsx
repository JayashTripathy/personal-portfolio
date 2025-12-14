type SectionBorderProps = {
  className?: string;
};

export default function SectionBorder({ className = "" }: SectionBorderProps) {
  return (
    <div
      className={`border-b border-dotted border-border ${className}`}
    />
  );
}
