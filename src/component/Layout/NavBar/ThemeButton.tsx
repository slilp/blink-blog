"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

function ThemeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-full"
    >
      <Image
        alt="dark-mode"
        src={theme === "dark" ? "/light-mode.png" : "/dark-mode.png"}
        height={20}
        width={20}
      />
    </button>
  );
}

export default ThemeButton;
