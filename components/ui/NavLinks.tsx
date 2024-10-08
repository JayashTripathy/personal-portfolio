import { cn } from "@/lib/utils";
import { AnimationProps, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import { Home, Newspaper, StickyNote, X } from "lucide-react";

type Props = {};

export const navLinks: {
  [key: string]: {
    name: string;
    x: number;
    y: number;
    w: string;
    icon: React.ReactNode;
  };
} = {
  "/": {
    name: "Home",
    x: 2,
    y: -5,
    w: "40px",
    icon: <Home />,
  },
  "/notes": {
    name: "Notes",
    x: 45,
    y: -5,
    w: "40px",
    icon: <StickyNote />,
  },
  "/blog": {
    name: "blog",
    x: 90,
    y: -5,
    w: "40px",

    icon: <Newspaper />,
  },
};
function NavLinks({}: Props) {
  const pathname = usePathname() as string;
  return (
    <>
      {Object.entries(navLinks).map(([path, { name, icon }]) => {
        return (
          <Link
            key={path}
            href={path}
            className={cn(
              "hidden lg:inline-block transtion ease text-secondary-foreground/30 hover:text-primary py-[2px] px-[10px]",
              path === pathname && "text-primary font-bold"
            )}
          >
            {icon}
          </Link>
        );
      })}
    </>
  );
}

export default NavLinks;

export const MobilleNavLinks = ({
  isToggled,
  onOptionClick,
}: {
  isToggled: boolean;
  onOptionClick?: () => void;
}) => {
  const router = useRouter();
  const pathname = usePathname() as string;

  const navList: AnimationProps["variants"] = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const navItem: AnimationProps["variants"] = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  };

  return (
    <div className="flex  justify-center items-center h-full   ">
      <motion.ul
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={navList}
        className=" font-bold grid  gap-3 "
      >
        {Object.entries(navLinks).map((item, i) => (
          <motion.li key={i} variants={navItem}>
            <Button
              className={cn(
                " w-full rounded-full text-2xl font-bold p-5",
                item[0] === pathname && "bg-secondary text-secondary-foreground"
              )}
              variant={"ghost"}
              onClick={() => {
                onOptionClick?.();
                router.push(item[0]);
              }}
            >
              {item[1]["name"]}
            </Button>
          </motion.li>
        ))}
        <br />
        <motion.li variants={navItem} className="">
          <Button
            className="flex h-18 rounded-full aspect-square mx-auto"
            variant={"secondary"}
            onClick={() => {
              onOptionClick?.();
            }}
          >
            <X />
          </Button>
        </motion.li>
      </motion.ul>
    </div>
  );
};
