import { notFound } from "next/navigation";
import Welcome from "@/markdown/test.mdx";
import MarkdownLayout from "./MarkdownLayout";
import { contentList } from "@/markdown/content";

type Params = Promise<{ slug: string }>;

export default async function Page({ params }: { params: Params }) {
  const resolvedParams = await params;
  const contentId = resolvedParams.slug;
  const contentInfo = contentList.find((content) => content.id === contentId);

  if (!contentInfo) {
    notFound();
  }

  return (
    <MarkdownLayout
      title={contentInfo?.title}
      publishedAt={contentInfo?.publishedAt}
      desc={contentInfo?.desc}
    >
      <Welcome />
    </MarkdownLayout>
  );
}
