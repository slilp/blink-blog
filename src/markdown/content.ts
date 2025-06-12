export enum MarkdownTag {
  ALL = "all",
  GO = "golang",
  TYPESCRIPT = "typescript",
  SOFTWARE_DESIGN = "software-design",
  ALGORYTHM = "algorythm",
  DATABASE = "database",
  OTHER = "other",
}

interface MarkdownContent {
  id: string;
  title: string;
  desc: string;
  publishedAt: string;
  tag: MarkdownTag;
}

export const markdownTags: Record<MarkdownTag, string> = {
  [MarkdownTag.ALL]: "All",
  [MarkdownTag.TYPESCRIPT]: "Javascript/TypeScript",
  [MarkdownTag.GO]: "Golang",
  [MarkdownTag.SOFTWARE_DESIGN]: "Software Design",
  [MarkdownTag.ALGORYTHM]: "DSA",
  [MarkdownTag.DATABASE]: "Database",
  [MarkdownTag.OTHER]: "Whatever I Want",
};

const typescriptContents: MarkdownContent[] = [];

const goContents: MarkdownContent[] = [
  {
    id: "goroutines-and-channels",
    title: "Are you having a hard time understanding Goroutines and Channels?",
    desc: "Goroutines and Channels are advanced concepts in Go. This article will help you understand them better (or not 😥).",
    publishedAt: "2025-04-14",
    tag: MarkdownTag.GO,
  },
];

const softwareEngineerContents: MarkdownContent[] = [];

const otherContents: MarkdownContent[] = [];

const algorythmContents: MarkdownContent[] = [];

const databaseContents: MarkdownContent[] = [];

export const allContents: MarkdownContent[] = [
  ...typescriptContents,
  ...goContents,
  ...softwareEngineerContents,
  ...otherContents,
  ...algorythmContents,
  ...databaseContents,
];

export const contentMap: Record<MarkdownTag, MarkdownContent[]> = {
  [MarkdownTag.ALL]: allContents,
  [MarkdownTag.TYPESCRIPT]: typescriptContents,
  [MarkdownTag.GO]: goContents,
  [MarkdownTag.SOFTWARE_DESIGN]: softwareEngineerContents,
  [MarkdownTag.OTHER]: otherContents,
  [MarkdownTag.ALGORYTHM]: algorythmContents,
  [MarkdownTag.DATABASE]: databaseContents,
};
