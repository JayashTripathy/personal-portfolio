import React, { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLHeadingElement> {
  title: string;
}

function SectionTitle({ title, ...props }: Props) {
  return (
    <h4
      className="scroll-m-20 text-xl font-semibold tracking-tight "
      {...props}
    >
      {title}
    </h4>
  );
}

export default SectionTitle;
