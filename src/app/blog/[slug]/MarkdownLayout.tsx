import BackButton from "@/component/BackButton";
import Image from "next/image";

interface MarkdownLayoutProp {
  title: string;
  desc: string;
  publishedAt: string;
  children: React.ReactNode;
}

function MarkdownLayout({
  title,
  desc,
  publishedAt,
  children,
}: MarkdownLayoutProp) {
  return (
    <div className="mt-5 md:mt-10">
      <BackButton />
      <div className="md:w-2/3 mx-auto">
        <div className="my-5 md:text-center">
          <p className="text-3xl font-semibold">{title}</p>
          <p className="text-xl text-gray-500">{desc}</p>
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
                  <span className="font-semibold">Author:</span> Slil Puangpoom
                </p>
                <p>
                  <span className="font-semibold">
                    Sentence & Grammar checker:{" "}
                  </span>
                  AI-powered
                </p>
              </div>
            </div>
            <p>
              <span className="font-semibold">Published:</span> {publishedAt}
            </p>
          </div>
        </div>
        <hr className="my-5 border-gray-300 dark:border-gray-700" />
        <div className="mx-auto">{children}</div>
      </div>
    </div>
  );
}

export default MarkdownLayout;
