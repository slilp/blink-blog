import JourneyCard from "@/component/JourneyCard";
import RandomTopicCard from "@/component/RandomTopicCard";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";

export default function Home() {
  return (
    <div className="mt-5 md:md-10">
      <div className="flex flex-col gap-1 justify-center items-center py-10">
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-500 via-amber-600 to-orange-700 bg-clip-text text-transparent leading-tight">
          My Journey
        </h2>
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-500 via-amber-600 to-orange-700 bg-clip-text text-transparent leading-tight mb-3">
          & Experiences
        </h2>
        <p className="text-2xl font-semibold text-gray-600 dark:text-gray-400">
          in the world of programming and technology
        </p>
        <Link href="/profile">
          <button className="flex items-center font-semibold gap-2 px-5 py-2 bg-red-400 text-white rounded-full hover:opacity-90 hover:scale-105 transition duration-200 cursor-pointer mt-5">
            <FaRegUser scale={20} />
            About Me
          </button>
        </Link>
      </div>

      <p className="mt-10 text-xl font-semibold">
        Explore my journeys{" "}
        <span className="text-gray-600 dark:text-gray-400">
          and choose a topic that inspires you.
        </span>
      </p>
      <div className="mt-5 flex flex-col justify-between md:flex-row gap-5">
        <JourneyCard
          title="JavaScript & TypeScript"
          desc=""
          image1="/react-logo.png"
          image2="/nestjs-logo.svg"
          path="/blog/tag/typescript"
        />
        <JourneyCard
          title="Go :"
          desc="Build simple, secure, scalable"
          image1="/golang-icon.png"
          path="/blog/tag/golang"
        />
        <RandomTopicCard />
      </div>
      <Link href="/blog">
        <button className="flex mx-auto font-semibold px-5 py-2 border-1 border-red-400 rounded-full hover:opacity-90 hover:scale-105 transition duration-200 cursor-pointer mt-5">
          View All Blogs
        </button>
      </Link>
      <div className="my-10" />
    </div>
  );
}
