import Image from "next/image";
import {
  IoDocumentTextOutline,
  IoMailOutline,
  IoCallOutline,
} from "react-icons/io5";

import LineButton from "@/component/LineButton";
import ExperienceCard from "@/component/ExperienceCard";

export default function Page() {
  return (
    <div className="mt-10">
      <div
        className="h-48 bg-amber-900 rounded-lg rounded-b-none bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg-profile.png')",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="relative mb-5">
        <Image
          src="/profile.jpeg"
          alt="Profile"
          height={125}
          width={125}
          className="rounded-full absolute -left-10 -top-20 translate-x-1/2 border-2 border-white"
        />
        <div className="bg-gray-100 dark:bg-[#202127] rounded-lg rounded-t-none p-3">
          <div className="h-12" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <div className="flex flex-col md:flex-row gap-2 md:gap-5">
              <div>
                <p className="text-lg font-semibold">Slil Puangpoom (Blink)</p>
                <p className="text-gray-500 text-md">Software Engineer</p>
              </div>
              <div className="flex flex-col gap-1 text-gray-500 text-sm">
                <div className="flex gap-2 items-center">
                  <IoMailOutline />
                  <a href="mailto:slil.puangpoom@gmail.com">
                    slil.puangpoom@gmail.com
                  </a>
                </div>
                <div className="flex gap-2 items-center">
                  <IoCallOutline />
                  <p>087-500-6783</p>
                </div>
                <LineButton />
              </div>
            </div>
            <button className="flex items-center text-sm font-semibold gap-2 px-5 py-2 bg-neutral-600 text-white rounded-full hover:opacity-90 hover:scale-105 transition duration-200 cursor-pointer">
              <IoDocumentTextOutline scale={20} />
              Download Resume
            </button>
          </div>
        </div>
      </div>

      <p className="text-lg">Experience</p>
      <div className="bg-gray-100 dark:bg-[#202127] rounded-lg p-3 mt-3 mb-5">
        <ExperienceCard
          title="Software Engineer"
          company="Dime! by Kiatnakin Phatra"
          logo="/dimebykkp-logo.jpeg"
          desc={[
            "Microservice development using Nest.js and TypeScript.",
            "Golang",
          ]}
          from="Oct 2023"
          to="Present"
          height={65}
          width={65}
        />
        <hr className="my-5 border-gray-300 dark:border-gray-700" />
        <ExperienceCard
          title="Senior Software Engineer"
          company="Ascend Group (Ascend Bit)"
          logo="/ascend-logo.jpg"
          desc={[]}
          from="Jul 2022"
          to="Oct 2023"
        />
        <hr className="my-5 border-gray-300 dark:border-gray-700" />
        <ExperienceCard
          title="Software Engineer"
          company="LSEG (London Stock Exchange Group)"
          logo="/lseg-logo.svg"
          desc={[]}
          from="Jul 2021"
          to="Jun 2022"
        />
        <hr className="my-5 border-gray-300 dark:border-gray-700" />
        <ExperienceCard
          title="Software Engineer"
          company="Hatari wireless"
          logo="/hatari-logo.png"
          desc={[]}
          from="Jul 2018"
          to="Jun 2021"
        />
      </div>

      <p className="text-lg">Education</p>
      <div className="bg-gray-100 dark:bg-[#202127] rounded-lg p-3 mt-3 mb-5">
        <div className="flex flex-col md:flex-row gap-2 md:gap-5">
          <div className="flex gap-2">
            <div className="w-20 flex items-center justify-center">
              <Image
                alt="chula"
                src="/chula-logo.png"
                height={40}
                width={40}
                className="rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm">Chulalongkorn University</p>
              <p className="text-gray-500 text-sm">
                Bachelor's degree: Industrial Engineering
              </p>
              <p className="text-gray-500 text-sm">Grade: 3.08</p>
              <p className="text-gray-500 text-sm">2013 - 2017</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-lg">Skills</p>
      <div className="bg-gray-100 dark:bg-[#202127] p-3 rounded-lg mt-3 mb-5 flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
          JavaScript
        </span>
        <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
          React
        </span>
        <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
          Node.js
        </span>
        <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
          Tailwind CSS
        </span>
        <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
          TypeScript
        </span>
      </div>
    </div>
  );
}
