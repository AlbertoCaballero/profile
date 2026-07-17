export const site = {
    name: "Alberto Caballero",
    domain: "AlbertoCaballero.dev",
    url: "https://albertocaballero.dev",
    email: "hello@albertocaballero.dev",
    location: "Mexico City",
    socials: {
        github: "https://github.com/albertocaballero",
        linkedin: "https://www.linkedin.com/in/albertocaballero",
        twitter: "https://x.com/albertocaballero",
        youtube: "https://www.youtube.com/@albertocaballero",
    },
} as const;

export type Project = {
    year: string;
    type: string;
    title: string;
    description: string;
    stack: string[];
    href: string;
};

export const projects: Project[] = [
    {
        year: "2025",
        type: "Infrastructure",
        title: "Zero-downtime deploy pipeline",
        description:
            "Designed a blue-green deployment system on GCP Cloud Run with automated rollback and canary traffic splitting.",
        stack: ["GCP", "Cloud Run", "Terraform", "Go"],
        href: site.socials.github,
    },
    {
        year: "2024",
        type: "Web app",
        title: "Real-time analytics dashboard",
        description:
            "Event-driven data pipeline serving live metrics to 10k concurrent users with sub-100ms latency.",
        stack: ["Next.js", "Postgres", "Pub/Sub"],
        href: site.socials.github,
    },
    {
        year: "2024",
        type: "Open source",
        title: "MDX content engine",
        description:
            "Type-safe content pipeline with frontmatter validation, rehype plugins, and incremental builds.",
        stack: ["TypeScript", "MDX", "Zod"],
        href: site.socials.github,
    },
    {
        year: "2023",
        type: "API",
        title: "Edge-cached API gateway",
        description:
            "Request coalescing and stale-while-revalidate caching layer reducing origin load by 80%.",
        stack: ["Cloudflare Workers", "Hono", "Redis"],
        href: site.socials.github,
    },
];

export type Article = {
    slug: string;
    title: string;
    /** ISO date, e.g. "2026-04-14" */
    date: string;
    readTime: number;
    description: string;
};

export const articles: Article[] = [
    {
        slug: "deploy-nextjs-gcp",
        title: "How I deploy Next.js to GCP without Vercel",
        date: "2026-04-14",
        readTime: 8,
        description:
            "Containerize a Next.js app, push it to Cloud Run, and put a global CDN in front — no Vercel involved.",
    },
    {
        slug: "cdn-distribution-strategies",
        title: "CDN distribution strategies for server-rendered apps",
        date: "2026-03-22",
        readTime: 11,
        description:
            "Where to draw the line between static and dynamic, and how to cache server-rendered pages safely at the edge.",
    },
    {
        slug: "building-a-forum",
        title: "Building a forum without losing your mind",
        date: "2026-02-18",
        readTime: 6,
        description:
            "Threads, moderation, and notifications are where side projects go to die. Here is the scope that shipped.",
    },
    {
        slug: "typesafe-content-mdx-zod",
        title: "Type-safe content with MDX and Zod",
        date: "2026-01-30",
        readTime: 9,
        description:
            "Validate frontmatter at build time so a typo in a markdown file can never take down the site.",
    },
];

export function getArticle(slug: string): Article | undefined {
    return articles.find((article) => article.slug === slug);
}

export function formatDate(isoDate: string): string {
    return new Date(isoDate).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
        timeZone: "UTC",
    });
}

export type Video = {
    title: string;
    views: string;
    duration: string;
    href: string;
};

export const videos: Video[] = [
    {
        title: "Deploying Next.js to Cloud Run in 20 minutes",
        views: "32k views",
        duration: "21 min",
        href: site.socials.youtube,
    },
    {
        title: "GCP CDN + Load Balancer from scratch",
        views: "18k views",
        duration: "35 min",
        href: site.socials.youtube,
    },
    {
        title: "MDX content pipeline deep dive",
        views: "11k views",
        duration: "28 min",
        href: site.socials.youtube,
    },
];
