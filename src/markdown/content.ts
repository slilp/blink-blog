export enum MarkdownTag {
  ALL = "all",
  GO = "golang",
  NEXT = "next",
  NODE = "node",
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
}

export const markdownTags: Record<MarkdownTag, string> = {
  [MarkdownTag.ALL]: "All",
  [MarkdownTag.NEXT]: "React/Next.js",
  [MarkdownTag.NODE]: "Node.js/Nest.js",
  [MarkdownTag.TYPESCRIPT]: "Javascript/TypeScript",
  [MarkdownTag.GO]: "Golang",
  [MarkdownTag.SOFTWARE_DESIGN]: "Software Design",
  [MarkdownTag.ALGORYTHM]: "DSA",
  [MarkdownTag.DATABASE]: "Database",
  [MarkdownTag.OTHER]: "Other",
};

const nextContents: MarkdownContent[] = [
  {
    id: "react-unit-test",
    title: "Vitest React",
    desc: "Unit test for React component with Vitest",
    publishedAt: "2025-04-08",
  },
];

const typescriptContents: MarkdownContent[] = [
  {
    id: "typescript-daily",
    title: "Most use TypeScript you should know",
    desc: "A collection of TypeScript tips and tricks that can help you in your daily work.",
    publishedAt: "2025-04-09",
  },
];

const nodeContents: MarkdownContent[] = [];

const goContents: MarkdownContent[] = [
  {
    id: "goroutines-and-channels",
    title: "Are you having a hard time understanding Goroutines and Channels?",
    desc: "Goroutines and Channels are advanced concepts in Go. This article will help you understand them better (or not 😥).",
    publishedAt: "2025-04-14",
  },
];

const softwareEngineerContents: MarkdownContent[] = [
  {
    id: "uml-visual-code",
    title: "Let`s design your software with PlantUML in visual code",
    desc: "PlantUML is a highly versatile tool that facilitates the rapid and straightforward creation of a wide array of diagrams.",
    publishedAt: "2025-02-15",
  },
];

const otherContents: MarkdownContent[] = [];

const algorythmContents: MarkdownContent[] = [
  {
    id: "how-to-practice-dsa",
    title: "Why DSA is so hard ?",
    desc: "I am not good in solving DSA problems, If you are like me, this article is for you.",
    publishedAt: "2025-03-10",
  },
];

const databaseContents: MarkdownContent[] = [
  {
    id: "database-management-tools",
    title: "Database management tools in practice",
    desc: "My recommendation for database management tools.",
    publishedAt: "2025-04-09",
  },
];

export const allContents: MarkdownContent[] = [
  ...nextContents,
  ...typescriptContents,
  ...nodeContents,
  ...goContents,
  ...softwareEngineerContents,
  ...otherContents,
  ...algorythmContents,
  ...databaseContents,
];

export const contentMap: Record<MarkdownTag, MarkdownContent[]> = {
  [MarkdownTag.ALL]: allContents,
  [MarkdownTag.NEXT]: nextContents,
  [MarkdownTag.TYPESCRIPT]: typescriptContents,
  [MarkdownTag.NODE]: nodeContents,
  [MarkdownTag.GO]: goContents,
  [MarkdownTag.SOFTWARE_DESIGN]: softwareEngineerContents,
  [MarkdownTag.OTHER]: otherContents,
  [MarkdownTag.ALGORYTHM]: algorythmContents,
  [MarkdownTag.DATABASE]: databaseContents,
};
