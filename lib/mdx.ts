import { compileMDX as compileMDXR } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkTOC from "remark-toc";

import Mermaid from "@/components/mermaid";

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

const mdxComponents = { Mermaid };

export function compileMDX({ source }: { source: string }) {
  return compileMDXR({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [[remarkGfm], [remarkTOC, TOCOptions]],
        rehypePlugins: [
          [rehypeSlug],
          [rehypeAutolinkHeadings, autolinkHeadingsOptions],
          [rehypePrettyCode, prettyCodeOptions],
          [rehypeExternalLinks, externalLinksOptions],
        ],
      },
    },
    components: mdxComponents,
  });
}
