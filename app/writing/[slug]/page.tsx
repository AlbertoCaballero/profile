import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, formatDate, getArticle, site } from "@/lib/content";

export function generateStaticParams() {
    return articles.map((article) => ({ slug: article.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const article = getArticle(slug);

    if (!article) {
        return {};
    }

    return {
        title: `${article.title} — ${site.name}`,
        description: article.description,
    };
}

export default async function ArticlePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const article = getArticle(slug);

    if (!article) {
        notFound();
    }

    const { default: Content } = await import(
        `@/content/articles/${article.slug}.mdx`
    );

    return (
        <>
            <div className="article-hero">
                <div className="hero-index">
                    <span className="section-num">02</span> Writing
                </div>
                <h1 className="article-hero-title">{article.title}</h1>
                <div className="article-hero-meta">
                    {formatDate(article.date)} &nbsp;·&nbsp; {article.readTime}{" "}
                    min read
                </div>
            </div>
            <article className="article-body">
                <Content />
            </article>
        </>
    );
}
