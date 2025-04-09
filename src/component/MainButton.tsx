import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface MainButtonProps {
  title: string;
  icon: IconType;
  path: string;
}

function MainButton({ title, icon, path }: MainButtonProps) {
  return (
    <Link href={path}>
      <button className="flex items-center gap-2 px-4 py-3 bg-black dark:bg-gray-700 text-white rounded-lg hover:opacity-80 transition duration-100 cursor-pointer">
        {icon({ size: "20px" })}
        {title}
      </button>
    </Link>
  );
}

export default MainButton;
