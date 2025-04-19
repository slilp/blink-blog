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

  const Content = (await import(`@/markdown/${contentInfo.id}.mdx`)).default;

  return (
    <MarkdownLayout
      title={contentInfo?.title}
      publishedAt={contentInfo?.publishedAt}
      desc={contentInfo?.desc}
    >
      <div className="prose dark:prose-invert">
        <Content />
      </div>
    </MarkdownLayout>
  );
}
