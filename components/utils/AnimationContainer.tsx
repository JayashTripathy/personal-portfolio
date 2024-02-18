"use client";
import { AnimationContainerProps } from "@/types";
import { motion } from "framer-motion";

const AnimationContainer = ({
  children,
  customClassName,
  customDelay = 0.3,
}: AnimationContainerProps) => {
  return (
    <motion.div
      className={customClassName}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: customDelay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationContainer;
