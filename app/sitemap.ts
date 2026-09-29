import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: site.url,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${site.url}/writing`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.8,
        },
    ];

    const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
        url: `${site.url}/writing/${article.slug}`,
        lastModified: new Date(article.date),
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [...staticRoutes, ...articleRoutes];
}