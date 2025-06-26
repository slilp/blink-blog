export enum MarkdownTag {
  ALL = "all",
  GO = "golang",
  TYPESCRIPT = "typescript",
  SOFTWARE_DESIGN = "software-design",
  ALGORYTHM = "algorythm",
  SECURITY = "security",
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
  [MarkdownTag.SECURITY]: "Security",
  [MarkdownTag.OTHER]: "Whatever I Want",
};

const typescriptContents: MarkdownContent[] = [
  {
    id: "next-auth",
    title: "NextAuth.js",
    desc: "Authentication for Next.js",
    publishedAt: "2025-06-24",
    tag: MarkdownTag.TYPESCRIPT,
  },
  {
    id: "image-optimization",
    title: "Image optimization in web",
    desc: "Techniques for optimizing images on the web to improve performance, user experience, and SEO.",
    publishedAt: "2025-06-23",
    tag: MarkdownTag.TYPESCRIPT,
  },
  {
    id: "swiss-knife-typescript",
    title: "Swiss knife typescript",
    desc: "A comprehensive guide to essential TypeScript utilities you should know.",
    publishedAt: "2025-06-18",
    tag: MarkdownTag.TYPESCRIPT,
  },
];

const goContents: MarkdownContent[] = [
  {
    id: "go-rabbit-mq",
    title: "RabbitMQ in Go",
    desc: "A hands-on guide to using RabbitMQ with Go for message-based communication.",
    publishedAt: "2025-06-21",
    tag: MarkdownTag.GO,
  },
  {
    id: "goroutines-and-channels",
    title: "Are you having a hard time understanding Goroutines and Channels?",
    desc: "Goroutines and Channels are advanced concepts in Go. This article will help you understand them better (or not).",
    publishedAt: "2025-06-10",
    tag: MarkdownTag.GO,
  },
];

const softwareEngineerContents: MarkdownContent[] = [];

const otherContents: MarkdownContent[] = [
  {
    id: "postman-scripts",
    title: "Postman Scripts",
    desc: "How to use Postman pre/post script",
    publishedAt: "2025-06-15",
    tag: MarkdownTag.OTHER,
  },
];

const algorythmContents: MarkdownContent[] = [];

const databaseContents: MarkdownContent[] = [
  {
    id: "database-indexing",
    title: "Database indexing",
    desc: "Make your queries faster with indexing.",
    publishedAt: "2025-06-17",
    tag: MarkdownTag.DATABASE,
  },
];

const securityContents: MarkdownContent[] = [
  {
    id: "sql-injection",
    title: "SQL Injection",
    desc: "When hackers try to talk to your database",
    publishedAt: "2025-06-16",
    tag: MarkdownTag.SECURITY,
  },
];

export const allContents: MarkdownContent[] = [
  ...typescriptContents,
  ...goContents,
  ...softwareEngineerContents,
  ...otherContents,
  ...algorythmContents,
  ...databaseContents,
  ...securityContents,
];

export const contentMap: Record<MarkdownTag, MarkdownContent[]> = {
  [MarkdownTag.ALL]: allContents,
  [MarkdownTag.TYPESCRIPT]: typescriptContents,
  [MarkdownTag.GO]: goContents,
  [MarkdownTag.SOFTWARE_DESIGN]: softwareEngineerContents,
  [MarkdownTag.OTHER]: otherContents,
  [MarkdownTag.ALGORYTHM]: algorythmContents,
  [MarkdownTag.DATABASE]: databaseContents,
  [MarkdownTag.SECURITY]: securityContents,
};
