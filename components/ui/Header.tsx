"use client";
import React from "react";
import HeaderAnimation from "../utils/HeaderAnimation";
import NavItem from "./NavItem";

type Props = {};

function Header({}: Props) {
  return (
    <HeaderAnimation>
      <nav className="w-10/12 lg:max-w-screen-md flex items-center  justify-between relative  py-8 sm: pb-8 bg-opacity-60 text-secondary-foreground gap-5 lg:gap-0 ">
        Jayash Tripathy
        <div>
          <NavItem />
        </div>
      </nav>
    </HeaderAnimation>
  );
}

export default Header;
