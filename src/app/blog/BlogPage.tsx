import Tag from "@/component/Tag";
import { contents, MarkdownTag } from "@/markdown/content";

interface BlogPageProps {
  tagId: MarkdownTag;
}

function BLogPage({ tagId }: BlogPageProps) {
  return (
    <div className="flex flex-col md:flex-row gap-5 pt-10">
      <div className="w-full md:w-1/3 flex gap-2 flex-wrap h-fit">
        <Tag tagId={MarkdownTag.GO} title="Go" currentTagId={tagId} />
        <Tag title="Next.js" tagId={MarkdownTag.NEXT} currentTagId={tagId} />
        <Tag title="React" tagId={MarkdownTag.REACT} currentTagId={tagId} />
        <Tag title="Nest.js" tagId={MarkdownTag.NEST} currentTagId={tagId} />
        <Tag
          title="Algorythm"
          tagId={MarkdownTag.ALGORYTHM}
          currentTagId={tagId}
        />
        <Tag
          title="TypeScript"
          tagId={MarkdownTag.TYPESCRIPT}
          currentTagId={tagId}
        />
        <Tag title="Rust" tagId={MarkdownTag.RUST} currentTagId={tagId} />
        <Tag
          title="Software engineer"
          tagId={MarkdownTag.SOFTWARE_ENGINEER}
          currentTagId={tagId}
        />
        <Tag title="Other" tagId={MarkdownTag.OTHER} currentTagId={tagId} />
      </div>
      <div>
        {(contents[tagId] ?? contents[MarkdownTag.GO]).map((content) => (
          <div key={content.id}>
            <h2 className="text-2xl font-bold">{content.title}</h2>
            <p className="text-sm text-gray-500">{content.publishedAt}</p>
            <p className="mt-2">{content.desc}</p>
            <div className="my-5" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BLogPage;
