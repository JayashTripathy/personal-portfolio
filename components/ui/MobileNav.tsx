import React, { useEffect } from "react";
import MenuButton from "./MenuButton";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import useDelayedToggle from "@/hooks/useDelayedToggle";

type Props = {};

function MobileNav({}: Props) {
  const { isOpen, toggleOpen, isRendered, isMounted } = useDelayedToggle();
  const animationVariants = {
    open: {
      x: 0,
      opacity: 1,

      transition: {
        x: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        x: { stiffness: 1000 },
      },
    },
  };
  const variant = isOpen ? "open" : "closed";

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
            className=" bg-primary h-full w-full  "
            variants={animationVariants}
            initial="closed"
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
