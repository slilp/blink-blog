export enum MarkdownTag {
  REACT = "react",
  NEXT = "next",
  NODE = "node",
  NEST = "nest",
  TYPESCRIPT = "typescript",
  GO = "go",
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

export const contents: Record<MarkdownTag, MarkdownContent[]> = {
  [MarkdownTag.REACT]: [
    {
      id: MarkdownTag.REACT + "1",
      title: "Understanding React Hooks",
      desc: "A deep dive into React Hooks and how they simplify state management.",
      publishedAt: "2023-01-15",
    },
    {
      id: MarkdownTag.REACT + "2",
      title: "React Performance Optimization",
      desc: "Tips and tricks to make your React applications faster.",
      publishedAt: "2023-03-10",
    },
  ],
  [MarkdownTag.NEXT]: [
    {
      id: MarkdownTag.NEXT + "1",
      title: "Getting Started with Next.js",
      desc: "A beginner's guide to building server-side rendered applications with Next.js.",
      publishedAt: "2023-02-20",
    },
  ],
  [MarkdownTag.TYPESCRIPT]: [
    {
      id: MarkdownTag.TYPESCRIPT + "1",
      title: "TypeScript Basics",
      desc: "An introduction to TypeScript and its benefits over JavaScript.",
      publishedAt: "2023-03-25",
    },
    {
      id: MarkdownTag.TYPESCRIPT + "2",
      title: "Advanced TypeScript Features",
      desc: "Exploring advanced features of TypeScript for better type safety.",
      publishedAt: "2023-04-15",
    },
  ],
  [MarkdownTag.NODE]: [
    {
      id: MarkdownTag.NODE + "1",
      title: "Building REST APIs with Node.js",
      desc: "Learn how to create robust REST APIs using Node.js and Express.",
      publishedAt: "2023-04-05",
    },
  ],
  [MarkdownTag.NEST]: [
    {
      id: MarkdownTag.NEST + "1",
      title: "Introduction to NestJS",
      desc: "An overview of NestJS and its powerful features for building scalable applications.",
      publishedAt: "2023-05-12",
    },
  ],
  [MarkdownTag.GO]: [
    {
      id: MarkdownTag.GO + "1",
      title: "Go Concurrency Patterns",
      desc: "Explore the power of goroutines and channels in Go.",
      publishedAt: "2023-06-18",
    },
  ],
  [MarkdownTag.SOFTWARE_ENGINEER]: [
    {
      id: MarkdownTag.SOFTWARE_ENGINEER + "1",
      title: "Becoming a Software Engineer",
      desc: "A roadmap to kickstart your career in software engineering.",
      publishedAt: "2023-07-22",
    },
  ],
  [MarkdownTag.RUST]: [
    {
      id: MarkdownTag.RUST + "1",
      title: "Rust for Beginners",
      desc: "An introduction to Rust programming language and its unique features.",
      publishedAt: "2023-08-30",
    },
  ],
  [MarkdownTag.OTHER]: [
    {
      id: MarkdownTag.OTHER + "1",
      title: "Tech Trends in 2023",
      desc: "A look at the emerging technologies shaping the future.",
      publishedAt: "2023-09-15",
    },
  ],
  [MarkdownTag.ALGORYTHM]: [
    {
      id: MarkdownTag.ALGORYTHM + "1",
      title: "Algorithm Design Patterns",
      desc: "Common design patterns for solving algorithmic problems.",
      publishedAt: "2023-10-01",
    },
  ],
};
