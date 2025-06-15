import { notFound } from "next/navigation";
import MarkdownLayout from "./MarkdownLayout";
import { allContents } from "@/markdown/content";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return allContents.map((content) => ({
    slug: content.id,
  }));
}

export default async function Page({ params }: { params: Params }) {
  const resolvedParams = await params;
  const contentId = resolvedParams.slug;
  const contentInfo = allContents.find((content) => content.id === contentId);

  if (!contentInfo) {
    notFound();
  }

  let Content;
  try {
    Content = (await import(`@/markdown/${contentInfo.id}.mdx`)).default;
  } catch (error) {
    console.error(`Failed to load content for ${contentInfo.id}:`, error);
    notFound();
  }

  return (
    <MarkdownLayout
      title={contentInfo.title}
      publishedAt={contentInfo.publishedAt}
      desc={contentInfo.desc}
      tag={contentInfo.tag}
    >
      <div className="prose dark:prose-invert">
        <Content />
      </div>
    </MarkdownLayout>
  );
}
