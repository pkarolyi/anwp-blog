import remarkGfm from "remark-gfm";
import remarkTOC from "remark-toc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import createMDX from "@next/mdx";

/** @type {import('remark-toc').Options} */
const TOCOptions = {
  maxDepth: 3,
};

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
  theme: "github-light", //slack-ochin
  defaultLang: "plaintext",
};

/** @type {import('rehype-external-links').Options} */
const externalLinksOptions = {
  target: "_blank",
  rel: ["noopener"],
};

/** @type {import('rehype-autolink-headings').Options} */
const autolinkHeadingsOptions = {
  behavior: "wrap",
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [[remarkGfm], [remarkTOC, TOCOptions]],
    rehypePlugins: [
      [rehypeSlug],
      [rehypeAutolinkHeadings, autolinkHeadingsOptions],
      [rehypePrettyCode, prettyCodeOptions],
      [rehypeExternalLinks, externalLinksOptions],
    ],
  },
});

export default withMDX(nextConfig);
