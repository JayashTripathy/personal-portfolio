import React from "react";
import { motion, Transition, SVGMotionProps } from "framer-motion";


interface Props extends SVGMotionProps<SVGElement> {
  isOpen?: boolean;
  color?: string;
  strokeWidth?: number;
  transition?: Transition;
  lineProps?: any;
}

function MenuButton({
  isOpen,
  width = 2,
  height = 2,
  color = "white",
  strokeWidth = 1,
  transition,
  lineProps = null,
}: Props) {
  const variant = isOpen ? "opened" : "closed";
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 2,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -2,
    },
  };
  lineProps = {
    stroke: color,
    strokeWidth: strokeWidth,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    exit: "closed",
    transition,
    ...lineProps,
  };
  const unitHeight = 1;
  const unitWidth = (unitHeight * (width as number)) / (height as number);
  return (
    <motion.svg
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow={`visible`}
      width={width}
      height={height}
      preserveAspectRatio={`none`}
    >
      <motion.line x1="0" y1="1" x2="10" y2="1" variants={top} {...lineProps} />

      <motion.line
        x1="0"
        y1="5"
        x2="10"
        y2="5"
        variants={bottom}
        {...lineProps}
      />
    </motion.svg>
  );
}

export default MenuButton;
