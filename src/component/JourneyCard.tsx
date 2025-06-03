"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface JourneyCardProps {
  title: string;
  desc: string;
  image: string;
  path: string;
}

function JourneyCard({ title, path, desc, image }: JourneyCardProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(path)}
      className="rounded-2xl w-full cursor-pointer bg-gray-100 dark:bg-[#202127] border-2 border-transparent hover:border-neutral-300 dark:hover:border-neutral-500 transition duration-300"
    >
      <div className="p-5">
        <div className="flex justify-between items-center">
          <div className="py-2 px-4 bg-gray-200 dark:bg-neutral-800 w-fit rounded-xl mt-2">
            <Image src={image} alt="logo" height={70} width={70} />
          </div>
          <p className="text-3xl font-bold"> {title}</p>
        </div>
        <p className="text-lg pt-3"> {desc}</p>
      </div>
    </div>
  );
}

export default JourneyCard;
