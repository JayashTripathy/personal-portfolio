import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

export const navLinks: {
  [key: string]: {
    name: string;
    x: number;
    y: number;
    w: string;
  };
} = {
  "/": {
    name: "Home",
    x: 1,
    y: -5,
    w: "65px",
  },
  "/about": {
    name: "about",
    x: 70,
    y: -5,

    w: "65px",
  },
  "/projects": {
    name: "projects",
    x: 135,
    y: -5,

    w: "85px",
  },
  "/blog": {
    name: "blog",
    x: 220,
    y: -5,
    w: "58px",
  },
};
function NavLinks({}: Props) {
    const pathname = usePathname() as string;
  return (
    <>
      {Object.entries(navLinks).map(([path, { name }]) => {
        return (
          <Link
            key={path}
            href={path}
            className={cn(
              "hidden lg:inline-block transtion ease text-secondary-foreground/30 hover:text-primary py-[2px] px-[10px]",
              path === pathname && "text-primary font-bold"
            )}
          >
            {name}
          </Link>
        );
      })}
    </>
  );
}

export default NavLinks;
