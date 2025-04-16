"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface JourneyCardProps {
  title: string;
  desc: string;
  contents: string[];
  contentsInprogress: string[];
  image: string;
  imageSize: number;
  path: string;
}

function JourneyCard({
  title,
  path,
  contents,
  contentsInprogress,
  desc,
  image,
  imageSize,
}: JourneyCardProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(path)}
      className="p-5 relative rounded-2xl w-full md:w-1/3 min-h-80 cursor-pointer bg-gray-100 dark:bg-[#202127] border-2 border-transparent hover:border-neutral-300 dark:hover:border-neutral-500 transition duration-300"
    >
      <p className="text-lg"> {desc}</p>
      <div className="py-2 px-4 bg-gray-200 dark:bg-neutral-800 w-fit rounded-xl mt-2">
        <p className="text-3xl font-bold"> {title}</p>
      </div>
      <ul className="ml-10 mt-5 font-light">
        {contents.map((content, index) => (
          <li key={`content-title-${index}`} className="text-md">
            {content}
          </li>
        ))}
        {contentsInprogress.map((content, index) => (
          <li
            key={`content-inprogress-title-${index}`}
            className="text-md text-gray-500"
          >
            {content} {"   "}(In Progress)
          </li>
        ))}
      </ul>
      <Image
        className={`absolute right-2 bottom-10`}
        src={image}
        alt="logo"
        height={imageSize}
        width={imageSize}
      />
    </div>
  );
}

export default JourneyCard;
