export enum MarkdownTag {
  ALL = "all",
  GO = "golang",
  TYPESCRIPT = "typescript",
  SOFTWARE_DESIGN = "software-design",
  ALGORYTHM = "algorythm",
  SECURITY = "security",
  DATABASE = "database",
  DEVOPS = "devops",
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
  [MarkdownTag.DEVOPS]: "DevOps",
  [MarkdownTag.OTHER]: "Whatever I Want",
};

const typescriptContents: MarkdownContent[] = [
  {
    id: "react-hook-form",
    title: "React Hook Form",
    desc: "When you handle forms in React, you should know about React Hook Form.",
    publishedAt: "2025-07-05",
    tag: MarkdownTag.TYPESCRIPT,
  },
  {
    id: "vitest",
    title: "Next.js unit testing with Vitest",
    desc: "A guide to unit testing Next.js applications using Vitest.",
    publishedAt: "2025-06-24",
    tag: MarkdownTag.TYPESCRIPT,
  },
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
    id: "go-panic",
    title: "panic and recover",
    desc: "Error handling patterns in Go.",
    publishedAt: "2025-11-06",
    tag: MarkdownTag.GO,
  },
  {
    id: "go-grpc",
    title: "gRPC in Go",
    desc: "A high-performance RPC framework.",
    publishedAt: "2025-07-14",
    tag: MarkdownTag.GO,
  },
  {
    id: "go-websocket",
    title: "POC : WebSocket in Go with Chat app example",
    desc: "A proof of concept for using WebSocket in Go, demonstrated with a simple chat application.",
    publishedAt: "2025-07-14",
    tag: MarkdownTag.GO,
  },
  {
    id: "go-mock",
    title: "Mocking in Go with GoMock",
    desc: "GoMock is a mocking framework for the Go programming language.",
    publishedAt: "2025-06-30",
    tag: MarkdownTag.GO,
  },
  {
    id: "go-migration",
    title: "Go DB migration",
    desc: "Managing database schema in Go projects.",
    publishedAt: "2025-06-28",
    tag: MarkdownTag.GO,
  },
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
  {
    id: "logging",
    title: "Logging in Distributed Systems",
    desc: "Effective logging strategies with ELK stack for distributed systems using Go.",
    publishedAt: "2025-10-02",
    tag: MarkdownTag.GO,
  },
];

const softwareEngineerContents: MarkdownContent[] = [
  {
    id: "k6",
    title: "K6 for load testing",
    desc: "Load testing made easy with K6 and beautiful dashboard on Grafana.",
    publishedAt: "2025-12-07",
    tag: MarkdownTag.SOFTWARE_DESIGN,
  },
  {
    id: "nginx",
    title: "Nginx functionalities",
    desc: "Functionalities of Nginx you should know.",
    publishedAt: "2025-11-01",
    tag: MarkdownTag.SOFTWARE_DESIGN,
  },
  {
    id: "prometheus",
    title: "Metric monitoring with Prometheus and Grafana",
    desc: "How to sending metrics from your application to Prometheus and visualize them with Grafana.",
    publishedAt: "2025-10-30",
    tag: MarkdownTag.SOFTWARE_DESIGN,
  },
  {
    id: "kafka",
    title: "Play with Kafka - Part 1: Single",
    desc: "The fundamental concepts of Kafka you should know.",
    publishedAt: "2025-10-15",
    tag: MarkdownTag.SOFTWARE_DESIGN,
  },
  {
    id: "kafka-2",
    title: "Play with Kafka - Part 2: Cluster",
    desc: "The fundamental concepts of Kafka you should know.",
    publishedAt: "2025-10-16",
    tag: MarkdownTag.SOFTWARE_DESIGN,
  },
  {
    id: "design-diagram-tools",
    title: "Design Diagrams tools for software engineers",
    desc: "A collection of tools that can help software engineers in your daily work.",
    publishedAt: "2025-07-01",
    tag: MarkdownTag.SOFTWARE_DESIGN,
  },
  {
    id: "solid-principles",
    title: "SOLID principles",
    desc: "Briefly explain SOLID principles in software design.",
    publishedAt: "2025-08-10",
    tag: MarkdownTag.SOFTWARE_DESIGN,
  },
];

const otherContents: MarkdownContent[] = [
  {
    id: "vscode-tricks",
    title: "VSCode Productivity Tricks",
    desc: "Tips and tricks to enhance your productivity in Visual Studio Code.",
    publishedAt: "2025-10-24",
    tag: MarkdownTag.OTHER,
  },
  {
    id: "git-cherrypick",
    title: "Git cherry pick",
    desc: "What happens when you accidentally create a branch from the wrong initial branch?",
    publishedAt: "2025-08-21",
    tag: MarkdownTag.OTHER,
  },
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
    id: "db-batch",
    title: "Database batch operations",
    desc: "Improve performance with batch operations.",
    publishedAt: "2025-12-28",
    tag: MarkdownTag.DATABASE,
  },
  {
    id: "db-bulk",
    title: "Database bulk operations",
    desc: "What you should be aware of when performing bulk operations.",
    publishedAt: "2026-01-19",
    tag: MarkdownTag.DATABASE,
  },
  {
    id: "database-indexing",
    title: "Database indexing",
    desc: "Make your queries faster with indexing.",
    publishedAt: "2025-06-17",
    tag: MarkdownTag.DATABASE,
  },
  {
    id: "db-pagination",
    title: "Pagination Queries",
    desc: "Query techniques for pagination",
    publishedAt: "2025-12-27",
    tag: MarkdownTag.DATABASE,
  },
];

const securityContents: MarkdownContent[] = [
  {
    id: "cryptography",
    title: "Cryptography concepts",
    desc: "An overview of 4 cryptography concepts you should know.",
    publishedAt: "2025-08-09",
    tag: MarkdownTag.SECURITY,
  },
  {
    id: "sql-injection",
    title: "SQL Injection",
    desc: "When hackers try to talk to your database",
    publishedAt: "2025-06-16",
    tag: MarkdownTag.SECURITY,
  },
];

const devopsContents: MarkdownContent[] = [
  {
    id: "argocd",
    title: "Kubernetes - Part 3: Go production with ArgoCD",
    desc: "Production your kubernetes deployment with GitOps using ArgoCD.",
    publishedAt: "2025-12-22",
    tag: MarkdownTag.DEVOPS,
  },
  {
    id: "kube-secret",
    title: "Secrets management in Kubernetes with HashiCorp Vault",
    desc: "Using HashiCorp Vault to manage secrets in a Kubernetes environment.",
    publishedAt: "2025-12-08",
    tag: MarkdownTag.DEVOPS,
  },
  {
    id: "kustomize",
    title: "Kubernetes - Part 2: YAML files and Kustomize",
    desc: "Deploying applications to Kubernetes using YAML files and Kustomize for configuration management.",
    publishedAt: "2025-12-04",
    tag: MarkdownTag.DEVOPS,
  },
  {
    id: "kong",
    title: "KONG API Gateway with lua custom plugin",
    desc: "KONG in kubernates cluster",
    publishedAt: "2025-12-01",
    tag: MarkdownTag.DEVOPS,
  },
  {
    id: "aws-network",
    title: "AWS 101 networking components ",
    desc: "Learn the networking components in AWS (VPC, Subnets, Route Tables, Internet Gateway, Security Groups)",
    publishedAt: "2025-11-15",
    tag: MarkdownTag.DEVOPS,
  },
  {
    id: "kubernetes-core",
    title: "Kubernetes - Part 1: Core Concepts And Commands",
    desc: "the core concepts of Kubernetes and some basic commands to get you started.",
    publishedAt: "2025-11-16",
    tag: MarkdownTag.DEVOPS,
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
  ...devopsContents,
];

export const contentMap: Record<MarkdownTag, MarkdownContent[]> = {
  [MarkdownTag.ALL]: allContents,
  [MarkdownTag.TYPESCRIPT]: typescriptContents,
  [MarkdownTag.GO]: goContents,
  [MarkdownTag.SOFTWARE_DESIGN]: softwareEngineerContents,
  [MarkdownTag.DEVOPS]: devopsContents,
  [MarkdownTag.OTHER]: otherContents,
  [MarkdownTag.ALGORYTHM]: algorythmContents,
  [MarkdownTag.DATABASE]: databaseContents,
  [MarkdownTag.SECURITY]: securityContents,
};
