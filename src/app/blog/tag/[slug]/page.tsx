import BLogPage from "../../BlogPage";
import { MarkdownTag } from "@/markdown/content";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return Object.values(MarkdownTag).map((tag) => ({
    slug: tag,
  }));
}

export default async function Page({ params }: { params: Params }) {
  const resolvedParams = await params;
  const tagId = resolvedParams.slug;

  const tagEnum = Object.values(MarkdownTag).includes(tagId as MarkdownTag)
    ? (tagId as MarkdownTag)
    : MarkdownTag.ALL;

  return <BLogPage tagId={tagEnum} />;
}
