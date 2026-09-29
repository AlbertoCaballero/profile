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
        youtube: "https://www.youtube.com/@alberto.caballero",
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
        type: "Analytics",
        title: "Tag Tracer",
        description:
            "Automated marketing and analytics tag tracing tool. Captures network calls from a headless browser and validates them against configurable rules defined in Excel or YAML.",
        stack: ["Python"],
        href: "https://github.com/AlbertoCaballero/tag-tracer",
    },
    {
        year: "2026",
        type: "Android",
        title: "Kanji Time",
        description: "Android widget for kanji learning.",
        stack: ["Kotlin"],
        href: "https://github.com/AlbertoCaballero/kanji-time",
    },
    {
        year: "2020",
        type: "Open source",
        title: "JavaScript Algorithms",
        description:
            "A collection of simple JavaScript algorithms and concepts.",
        stack: ["TypeScript"],
        href: "https://github.com/AlbertoCaballero/javascript-algorithms",
    },
    {
        year: "2020",
        type: "Learning",
        title: "Rust Algorithms",
        description: "A simple project to try out Rust concepts and algorithms.",
        stack: ["Rust"],
        href: "https://github.com/AlbertoCaballero/rust-algorithms",
    },
];

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
