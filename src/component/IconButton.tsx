import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface IconButtonProps {
  icon: IconType;
  path: string;
  size?: number;
}

function IconButton({ icon, path, size = 25 }: IconButtonProps) {
  return (
    <Link href={path} target="_blank">
      <button className="p-2 hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer rounded-full">
        {icon({ size: `${size}px` })}
      </button>
    </Link>
  );
}

export default IconButton;
