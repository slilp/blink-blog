import JourneyCard from "@/component/JourneyCard";
import { MarkdownTag } from "@/markdown/content";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";

export default function Home() {
  const getRandomTag = () => {
    const tags = Object.values(MarkdownTag).filter(
      (tag) =>
        tag !== MarkdownTag.GO &&
        tag !== MarkdownTag.NEXT &&
        tag !== MarkdownTag.NODE
    );
    return tags[Math.floor(Math.random() * tags.length)];
  };

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
          title="Go"
          desc="Build simple, secure, scalable"
          image="/golang-icon.png"
          path="/blog/tag/golang"
        />
        <JourneyCard
          title="Next.js"
          desc="The React Framework for the Web"
          image="/react-logo.png"
          path="/blog/tag/next"
        />
        <JourneyCard
          title="NestJS"
          desc="A progressive Node.js framework"
          image="/nestjs-logo.svg"
          path="/blog/tag/node"
        />
        <JourneyCard
          title="Random"
          desc="Random topic to explore!"
          image="/chill-guy.png"
          path={`/blog/tag/${getRandomTag()}`}
        />
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
