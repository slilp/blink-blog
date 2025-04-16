export enum MarkdownTag {
  ALL = "all",
  REACT = "react",
  NEXT = "next",
  NODE = "node",
  NEST = "nest",
  TYPESCRIPT = "typescript",
  GO = "golang",
  SOFTWARE_ENGINEER = "software-engineer",
  RUST = "rust",
  ALGORYTHM = "algorythm",
  OTHER = "other",
}

interface MarkdownContent {
  id: string;
  title: string;
  desc: string;
  publishedAt: string;
}

export const markdownTags: Record<MarkdownTag, string> = {
  [MarkdownTag.ALL]: "All",
  [MarkdownTag.REACT]: "React",
  [MarkdownTag.NEXT]: "Next.js",
  [MarkdownTag.NODE]: "Node.js",
  [MarkdownTag.NEST]: "Nest.js",
  [MarkdownTag.TYPESCRIPT]: "TypeScript",
  [MarkdownTag.GO]: "Golang",
  [MarkdownTag.SOFTWARE_ENGINEER]: "Software Engineer",
  [MarkdownTag.RUST]: "Rust",
  [MarkdownTag.ALGORYTHM]: "Algorythm",
  [MarkdownTag.OTHER]: "Other",
};

const reactContents: MarkdownContent[] = [];

const nextContents: MarkdownContent[] = [
  {
    id: "next-ready-to-production-web-application",
    title: "Next.js : Ready to production web application",
    desc: "Boilerplate pattern for creating web application in Next.js.",
    publishedAt: "2025-04-14",
  },
];

const typescriptContents: MarkdownContent[] = [];

const nodeContents: MarkdownContent[] = [];

const nestContents: MarkdownContent[] = [
  {
    id: "nest-ready-to-production-service-api",
    title: "Nest.js : Ready to production service API",
    desc: "Boilerplate pattern for creating service API in Nest.js.",
    publishedAt: "2025-04-14",
  },
];

const goContents: MarkdownContent[] = [
  {
    id: "golang-ready-to-production-service-api",
    title: "Go : Ready to production service API",
    desc: "Boilerplate pattern for creating service API in Go.",
    publishedAt: "2025-04-15",
  },
];

const softwareEngineerContents: MarkdownContent[] = [];

const rustContents: MarkdownContent[] = [];

const otherContents: MarkdownContent[] = [];

const algorythmContents: MarkdownContent[] = [];

export const allContents: MarkdownContent[] = [
  ...reactContents,
  ...nextContents,
  ...typescriptContents,
  ...nodeContents,
  ...nestContents,
  ...goContents,
  ...softwareEngineerContents,
  ...rustContents,
  ...otherContents,
  ...algorythmContents,
];

export const contentMap: Record<MarkdownTag, MarkdownContent[]> = {
  [MarkdownTag.ALL]: allContents,
  [MarkdownTag.REACT]: reactContents,
  [MarkdownTag.NEXT]: nextContents,
  [MarkdownTag.TYPESCRIPT]: typescriptContents,
  [MarkdownTag.NODE]: nodeContents,
  [MarkdownTag.NEST]: nestContents,
  [MarkdownTag.GO]: goContents,
  [MarkdownTag.SOFTWARE_ENGINEER]: softwareEngineerContents,
  [MarkdownTag.RUST]: rustContents,
  [MarkdownTag.OTHER]: otherContents,
  [MarkdownTag.ALGORYTHM]: algorythmContents,
};
