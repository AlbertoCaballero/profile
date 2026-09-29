import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

/**
 * Reads article metadata from MDX frontmatter at build time.
 * Node-only module (uses `fs`): never import it from a Client Component.
 * Adding or editing an article only requires touching its `.mdx` file —
 * invalid frontmatter fails the build with the offending file path.
 */

const articlesDir = path.join(process.cwd(), "content", "articles");

const frontmatterSchema = z.object({
    title: z.string().min(1),
    /** ISO date, e.g. "2026-04-14" */
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "must be an ISO date (YYYY-MM-DD)"),
    readTime: z.number().int().min(1),
    description: z.string().min(1),
});

export type Article = {
    slug: string;
    title: string;
    date: string;
    readTime: number;
    description: string;
};

function loadArticle(file: string): Article {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(articlesDir, file), "utf8");
    const { data } = matter(raw);
    const result = frontmatterSchema.safeParse(data);

    if (!result.success) {
        const details = result.error.issues
            .map((issue) => `"${issue.path.join(".")}" ${issue.message}`)
            .join("; ");
        throw new Error(`Invalid frontmatter in content/articles/${file}: ${details}`);
    }

    return { slug, ...result.data };
}

export const articles: Article[] = fs
    .readdirSync(articlesDir)
    .filter((file) => file.endsWith(".mdx"))
    .map(loadArticle)
    .sort((a, b) => b.date.localeCompare(a.date));

export function getArticle(slug: string): Article | undefined {
    return articles.find((article) => article.slug === slug);
}