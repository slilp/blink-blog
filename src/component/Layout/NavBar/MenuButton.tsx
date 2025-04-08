"use client";

import { useRouter } from "next/navigation";

interface MenuButtonProps {
  title: string;
  path: string;
  callback?: () => void;
}

function MenuButton({ title, path, callback }: MenuButtonProps) {
  const router = useRouter();

  return (
    <button
      className="hover:text-gray-500 dark:hover:text-gray-300 text-md cursor-pointer font-semibold"
      onClick={() => {
        router.push(path);
        callback && callback();
      }}
    >
      {title}
    </button>
  );
}

export default MenuButton;
