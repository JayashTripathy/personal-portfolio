"use client";
import { AnimationProps, motion } from "framer-motion";
type Props = {
  children: React.ReactNode;
};

const animation = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

function AnimateSlideDown({ children }: Props) {
  return (
    <motion.div
      className="w-full"
      initial={animation.hidden}
      animate={animation.visible}
      transition={{
        delay: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
}

export default AnimateSlideDown;
