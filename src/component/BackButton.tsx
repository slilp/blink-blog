"use client";

import { useRouter } from "next/navigation";
import { FaAngleLeft } from "react-icons/fa";

function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="p-2 pr-4 flex items-center justify-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-full"
    >
      <FaAngleLeft size={20} />
      Back
    </button>
  );
}

export default BackButton;
