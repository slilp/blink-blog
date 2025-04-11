import BLogPage from "../../BlogPage";
import { MarkdownTag } from "@/markdown/content";

export default function Page({ params }: { params: { slug: string } }) {
  const tagId = params.slug;

  const tagEnum = Object.values(MarkdownTag).includes(tagId as MarkdownTag)
    ? (tagId as MarkdownTag)
    : MarkdownTag.GO;

  return <BLogPage tagId={tagEnum} />;
}
