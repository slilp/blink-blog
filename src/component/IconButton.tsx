import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface IconButtonProps {
  label: string;
  icon: IconType;
  path: string;
}

function IconButton({ label, icon, path }: IconButtonProps) {
  return (
    <Link href={path} target="_blank">
      <button className="p-2 hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer rounded-full">
        {icon({ size: "25px" })}
      </button>
    </Link>
  );
}

export default IconButton;
