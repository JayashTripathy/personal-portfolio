type SectionBorderProps = {
  className?: string;
};

export default function SectionBorder({ className = "" }: SectionBorderProps) {
  return (
    <div
      className={`border-b border-dashed border-dashed-2 border-border ${className}`}
    />
  );
}
