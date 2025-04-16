import Tag from "@/component/Tag";
import { contentMap, markdownTags, MarkdownTag } from "@/markdown/content";
import Link from "next/link";

interface BlogPageProps {
  tagId: MarkdownTag;
}

function BLogPage({ tagId }: BlogPageProps) {
  return (
    <div className="flex flex-col md:flex-row gap-5 pt-10">
      <div className="w-full md:w-1/3 flex gap-2 flex-wrap h-fit md:sticky top-20">
        {Object.values(MarkdownTag).map((tag, index) => (
          <Tag
            key={`tag-${index}`}
            tagId={tag}
            title={markdownTags[tag]}
            currentTagId={tagId}
          />
        ))}
      </div>
      <div className="flex-1/4">
        {(contentMap[tagId] ?? contentMap[MarkdownTag.ALL])
          .sort(
            (a, b) =>
              new Date(b.publishedAt).getTime() -
              new Date(a.publishedAt).getTime()
          )
          .map((content, index) => (
            <Link key={`content-${index}`} href={`/blog/${content.id}`}>
              <div className="cursor-pointer hover:opacity-80 transition duration-200">
                <h2 className="text-lg font-bold">{content.title}</h2>
                <span className="text-sm text-gray-500">
                  {content.publishedAt}
                </span>
                <p className="mt-2 text-md text-gray-500">{content.desc}</p>
                <hr className="my-5 border-gray-300 dark:border-gray-700" />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default BLogPage;
