import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
    options: {
        // Strips YAML frontmatter (parsed separately in lib/articles.ts) so
        // it is not rendered as an <hr> in article bodies.
        remarkPlugins: ["remark-frontmatter"],
    },
});

export default withMDX(nextConfig);
