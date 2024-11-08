"use client";
import React from "react";
import HeaderAnimation from "../utils/HeaderAnimation";
import NavItem from "./NavItem";
import MenuButton from "./MenuButton";
import MobileNav from "./MobileNav";
import Link from "next/link";

type Props = {};

function Header({ }: Props) {
  return (
    <HeaderAnimation>
      <nav className=" lg:max-w-screen-md w-full flex items-center  justify-between relative  md:py-8 py-4 px-4 sm:pb-8 bg-opacity-60 text-secondary-foreground gap-5 lg:gap-0  ">
        <Link href="/">
          Jayash Tripathy
        </Link>
        <div>
          <NavItem />
        </div>
        <div className="lg:hidden" >
          <MobileNav />
        </div>
      </nav>
    </HeaderAnimation>
  );
}

export default Header;
