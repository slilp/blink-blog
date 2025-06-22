import BackButton from "@/component/BackButton";
import ScrollToTopLayout from "@/component/ScrollToTop";
import { MarkdownTag, markdownTags } from "@/markdown/content";
import Image from "next/image";
import Link from "next/link";

interface MarkdownLayoutProp {
  title: string;
  desc: string;
  publishedAt: string;
  tag: MarkdownTag;
  children: React.ReactNode;
}

function MarkdownLayout({
  title,
  desc,
  publishedAt,
  tag,
  children,
}: MarkdownLayoutProp) {
  return (
    <div className="mt-5 md:mt-10">
      <ScrollToTopLayout>
        <BackButton />
        <div className="md:w-2/3 mx-auto">
          <div className="my-5 md:text-center">
            <p className="text-2xl font-semibold">{title}</p>
            <p className="text-lg text-gray-500">{desc}</p>
            <div className="flex gap-1 justify-between text-gray-500 text-sm mt-3 text-left">
              <div className="flex gap-2 items-center">
                <Image
                  alt="author"
                  src="/blink-author.jpg"
                  height={40}
                  width={40}
                  style={{ borderRadius: "100%" }}
                />
                <div>
                  <p>
                    <span className="font-semibold">Author:</span> Slil
                    Puangpoom
                  </p>
                  <p>
                    <span className="font-semibold">
                      Sentence & Grammar checker:{" "}
                    </span>
                    AI-powered
                  </p>
                  <span className="font-semibold">Published:</span>{" "}
                  {publishedAt}
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Link href={`/blog/tag/${tag}`}>
                  <button className="flex items-center border gap-2 px-4 py-2 text-md hover:opacity-85 rounded-full cursor-pointer transition duration-200">
                    {markdownTags[tag]}
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <hr className="my-5 border-gray-300 dark:border-gray-700" />
          <div className="md:flex justify-center">{children}</div>
        </div>
      </ScrollToTopLayout>
    </div>
  );
}

export default MarkdownLayout;
