import React, { useEffect } from "react";
import MenuButton from "./MenuButton";
import { AnimationProps, animate, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import useDelayedToggle from "@/hooks/useDelayedToggle";

type Props = {};

function MobileNav({}: Props) {
  const { isOpen, toggleOpen, isRendered, isMounted } = useDelayedToggle();
  const animationVariants: AnimationProps["variants"] = {
    open: {
      opacity: 1,
      height: "50%",
      width: "100%",
      borderRadius: ["0% 80% 100% 80%", "0% 80% 80% 80%", "0% 0% 10% 10%"],
      transition: {
        duration: 0.3,
        ease: "circIn",
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      width: 0,
      borderRadius: ["0% 0% 10% 10%", "0% 80% 80% 80%", "0% 80% 100% 80%"],
      transition: {
        duration: 0.3,
        ease: "circOut",
      },
    },
  };
  const variant = isOpen ? "open" : "closed";
  console.log(isMounted, isRendered, isOpen);
  return (
    <>
      <button
        onClick={toggleOpen}
        className="flex justify-center items-center cursor-pointer w-10 h-10 z-[51] relative"
      >
        <MenuButton isOpen={isOpen} />
      </button>
      {isMounted && (
        <div
          className={cn("fixed top-0 left-0 h-screen w-screen overflow-hidden")}
        >
          <motion.div
            className="bg-primary"
            variants={animationVariants}
            initial="open"
            animate={variant}
          >
            Mobile navbar
          </motion.div>
        </div>
      )}
    </>
  );
}

export default MobileNav;
