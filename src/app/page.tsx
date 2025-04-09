import MainButton from "@/component/MainButton";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";

export default function Home() {
  return (
    <div className="mt-5 md:md-10">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-500 via-amber-600 to-orange-700 bg-clip-text text-transparent leading-tight">
            My Journey
          </h2>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-500 via-amber-600 to-orange-700 bg-clip-text text-transparent leading-tight mb-3">
            & Experiences
          </h2>
          <p className="text-2xl font-semibold text-gray-600 dark:text-gray-400">
            in the world of programming and technology
          </p>
        </div>
        <div className="flex-1">dd</div>
      </div>
      <Link href="/profile">
        <button className="flex items-center font-semibold gap-2 px-5 py-2 bg-[#5672CD] text-white rounded-full hover:opacity-80 transition duration-100 cursor-pointer mt-5">
          <FaRegUser scale={20} />
          About Me
        </button>
      </Link>
      <p className="mt-10 text-xl font-semibold">
        Explore my journeys{" "}
        <span className="text-gray-600 dark:text-gray-400">
          and choose a topic that inspires you.
        </span>
      </p>
    </div>
  );
}
