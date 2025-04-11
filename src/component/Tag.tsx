import { MarkdownTag } from "@/markdown/content";
import Link from "next/link";
import React from "react";

interface TagProps {
  tagId: MarkdownTag;
  currentTagId: MarkdownTag;
  title: string;
}

function Tag({ tagId, currentTagId, title }: TagProps) {
  const isSelected = tagId === currentTagId;
  const style = `flex items-center gap-2 px-4 py-2 ${
    isSelected ? "bg-gray-300" : "bg-gray-100"
  } dark:bg-neutral-600 ${
    isSelected && "dark:bg-neutral-800"
  } hover:opacity-85 rounded-full cursor-pointer transition duration-200`;

  return (
    <Link href={`/blog/tag/${tagId}`}>
      <button className={style}>{title}</button>
    </Link>
  );
}

export default Tag;
