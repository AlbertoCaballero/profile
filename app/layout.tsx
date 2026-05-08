import type { Metadata } from "next";
import { DM_Serif_Display, DM_Mono, Syne } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/header";
import IntroComponent from "@/components/intro";

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
    title: "AlbertoCaballero",
    description: "Software engineer & builder.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <HeaderComponent />
            <html
                lang="en"
                className={`${dmSerifDisplay.variable} ${dmMono.variable} ${syne.variable} h-full antialiased`}
            >
                <body className="min-h-full flex flex-col">
                    <IntroComponent></IntroComponent>
                    {children}
                </body>
            </html>
        </>
    );
}
