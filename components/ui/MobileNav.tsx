import React, { useEffect, useState } from "react";
import MenuButton from "./MenuButton";
import {
  AnimatePresence,
  AnimationProps,
  animate,
  motion,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { MobilleNavLinks } from "./NavLinks";
import { useOutsideClick } from "@/hooks/useOutsideClick";

function MobileNav() {
  const [isToggled, setToggled] = useState(false);
  const outSideClickRef = useOutsideClick(() => setToggled(false));
  const animationVariants: AnimationProps["variants"] = {
    visible: {
      opacity: 1,
      height: "55%",
      width: "100%",
      clipPath: "circle(95% at 50% 0%)",
      transition: {
        duration: 0.5,
        ease: "circIn",
      },
    },
    hidden: {
      opacity: 0,
      height: "50%",
      width: "100%",
      clipPath: "circle(0% at 100% 0%)",
      transition: {
        duration: 0.5,
        ease: "circOut",
      },
    },
  };

  return (
    <>
      <button
        onClick={() => setToggled(!isToggled)}
        className="flex justify-center items-center cursor-pointer w-10 h-10 z-[51] relative"
      >
        <MenuButton isOpen={isToggled} />
      </button>
      <AnimatePresence>
        {isToggled && (
          <div
            className={cn(
              "fixed top-0 left-0 h-screen w-screen overflow-hidden"
            )}
          
          >
            <motion.div
              className="bg-primary"
              variants={animationVariants}
              initial="hidden"
              exit="hidden"
              animate={isToggled ? "visible" : "hidden"}
              ref={outSideClickRef}
            >
              <MobilleNavLinks
                isToggled={isToggled}
                onOptionClick={() => setToggled(false)}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileNav;
