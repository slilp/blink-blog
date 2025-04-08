"use client";

import { useState } from "react";
import Image from "next/image";

import ThemeButton from "./ThemeButton";
import MenuButton from "./MenuButton";
import MenuBarButton from "./MenuBarButton";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#FFFEFC] dark:bg-[#1b1b1f] md:border-b-1 border-gray-200 dark:border-gray-700">
      <div className="container mx-auto flex items-center justify-between p-2">
        <div className="flex gap-2 text-lg font-bold">
          <Image src="/bitcoin.png" width={30} height={12} alt="logo" />
          Blink Blog
        </div>
        <ul className="hidden md:flex space-x-4 items-center">
          <li>
            <MenuButton path="" title="Home" />
          </li>
          <li>
            <MenuButton path="/blog" title="Blog" />
          </li>
          <li>
            <MenuButton path="/contact" title="Contact" />
          </li>
          <li>
            <ThemeButton />
          </li>
        </ul>
        <ul className="md:hidden flex items-center space-x-2 ">
          <li>
            <ThemeButton />
          </li>
          <li>
            <MenuBarButton
              onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
            />
          </li>
        </ul>
      </div>
      <div
        className={`md:hidden transition-all duration-200 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4"
        } overflow-hidden`}
      >
        <ul className="flex flex-col space-y-4 items-center bg-[#FFFEFC] dark:bg-[#1b1b1f] mb-4">
          <li>
            <MenuButton
              path=""
              title="Home"
              callback={() => setIsMenuOpen(false)}
            />
          </li>
          <li>
            <MenuButton
              path="/blog"
              title="Blog"
              callback={() => setIsMenuOpen(false)}
            />
          </li>
          <li>
            <MenuButton
              path="/contact"
              title="Contact"
              callback={() => setIsMenuOpen(false)}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
