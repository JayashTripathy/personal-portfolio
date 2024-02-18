import React, { useCallback, useEffect, useState } from "react";
import MenuButton from "./MenuButton";
import {
  AnimatePresence,
  AnimationProps,
  animate,
  motion,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { MobilleNavLinks } from "./NavLinks";

import { MoreVertical } from "lucide-react";

function MobileNav() {
  const [isToggled, setToggled] = useState(false);
  const animationVariants: AnimationProps["variants"] = {
    visible: {
      opacity: 1,
      height: "100%",
      width: "100%",

      transition: {
        duration: 0.2,
        ease: "circIn",
      },
    },
    hidden: {
      opacity: 0,
      height: "0%",
      width: "100%",

      transition: {
        duration: 0.2,
        ease: "circOut",
      },
    },
  };

  return (
    <div>
      <button
        onClick={() => setToggled(!isToggled)}
        className="flex justify-center items-center cursor-pointer w-10 h-10 z-[51] relative"
      >
        <MoreVertical />
      </button>
      <AnimatePresence>
        {isToggled && (
          <div
            className={cn(
              "fixed top-0 left-0 h-screen w-full overflow-hidden  "
            )}
          >
            <motion.div
              className=" backdrop-blur-2xl "
              variants={animationVariants}
              initial="hidden"
              exit="hidden"
              animate={isToggled ? "visible" : "hidden"}
              key="mobile-nav"
            >
              <MobilleNavLinks
                isToggled={isToggled}
                onOptionClick={() => setToggled(false)}
              />
         
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileNav;
