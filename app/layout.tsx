import type { Metadata } from "next";
import { DM_Serif_Display, DM_Mono, Syne } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { site } from "@/lib/content";

const dmSerifDisplay = DM_Serif_Display({
    subsets: ["latin"],
    weight: ["400"], // DM Serif Display only has a normal and italic 400 weight
    style: ["normal", "italic"],
    variable: "--font-dm-serif-display",
});

const dmMono = DM_Mono({
    subsets: ["latin"],
    weight: ["300", "400"],
    variable: "--font-dm-mono",
});

const syne = Syne({
    subsets: ["latin"],
    weight: ["400", "700", "800"],
    variable: "--font-syne",
});

export const metadata: Metadata = {
    metadataBase: new URL(site.url),
    title: `${site.name} — Software engineer & builder`,
    description: "Software engineer & builder.",
    openGraph: {
        type: "website",
        url: site.url,
        siteName: site.domain,
        title: `${site.name} — Software engineer & builder`,
        description: "Software engineer & builder.",
        images: [
            {
                url: "/opengraph-image",
                width: 1200,
                height: 630,
                alt: `${site.name} — Software engineer & builder`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `${site.name} — Software engineer & builder`,
        description: "Software engineer & builder.",
        images: ["/opengraph-image"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${dmSerifDisplay.variable} ${dmMono.variable} ${syne.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}