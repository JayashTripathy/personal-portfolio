import { usePathname } from "next/navigation";
import React from "react";
import NavLinks, { navLinks } from "./NavLinks";
import { AnimationProps, animate, motion } from "framer-motion";

type Props = {};

function NavItem({}: Props) {
  const pathname = usePathname() as string;

  return (
    <>
      {navLinks[pathname] ? (
        <div className="hidden lg:block">
          <motion.div
            className="absolute border border-muted h-10 rounded-lg z-[-1]"
            initial={{
              opacity: 0,
              x: navLinks[pathname].x,
              y: navLinks[pathname].y,
            }}
            animate={{
              opacity: 1,
              x: navLinks[pathname].x,
              width: navLinks[pathname].w,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 30,
            }}
          />
        </div>
      ) : null}
      <NavLinks />
    </>
  );
}

export default NavItem;

