import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: 'https' as const,
        hostname: '**',
      },
      {
        protocol: 'http' as const,
        hostname: '**',
      },
    ],
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
