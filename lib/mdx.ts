import { compileMDX as compileMDXR } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings, {
  Options as AutolinkHeadingsOptions,
} from "rehype-autolink-headings";
import rehypeExternalLinks, {
  Options as ExternalLinksOptions,
} from "rehype-external-links";
import rehypePrettyCode, {
  Options as PrettyCodeOptions,
} from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

import Mermaid from "@/components/mermaid";

const prettyCodeOptions: PrettyCodeOptions = {
  theme: "github-light", //slack-ochin
  defaultLang: "plaintext",
};

const externalLinksOptions: ExternalLinksOptions = {
  target: "_blank",
  rel: ["noopener"],
};

const autolinkHeadingsOptions: AutolinkHeadingsOptions = {
  behavior: "wrap",
};

const mdxComponents = { Mermaid };

export function compileMDX({ source }: { source: string }) {
  return compileMDXR({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [[remarkGfm]],
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
