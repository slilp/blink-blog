"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface JourneyCardProps {
  title: string;
  desc: string;
  image1: string;
  image2?: string;
  path: string;
}

function JourneyCard({ title, path, desc, image1, image2 }: JourneyCardProps) {
  const router = useRouter();

  const height = image2 ? 30 : 70;

  return (
    <div
      onClick={() => router.push(path)}
      className="rounded-2xl w-full cursor-pointer bg-gray-100 dark:bg-[#202127] border-2 border-transparent hover:border-neutral-300 dark:hover:border-neutral-500 transition duration-300"
    >
      <div className="p-5">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-between w-[100px] h-[85px] py-2 px-4 bg-gray-200 dark:bg-neutral-800 rounded-xl mt-2">
            <Image
              className="object-contain"
              src={image1}
              alt="logo"
              height={height}
              width={height}
            />
            {!!image2 && (
              <Image src={image2} alt="logo" height={height} width={height} />
            )}
          </div>
          <div className="flex-1 text-center">
            <p className="text-2xl font-bold"> {title}</p>
          </div>
        </div>
        <p className="text-lg pt-3"> {desc}</p>
      </div>
    </div>
  );
}

export default JourneyCard;
