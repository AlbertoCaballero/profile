"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/content";

const links = [
    { href: "/#work", label: "Work" },
    { href: "/#writing", label: "Writing" },
    { href: "/#videos", label: "Videos" },
    { href: "/#about", label: "About" },
];

export default function HeaderComponent() {
    const [open, setOpen] = useState(false);

    return (
        <nav>
            <Link
                href="/"
                className="nav-logo"
                onClick={() => setOpen(false)}
            >
                {site.domain}
            </Link>
            <ul className="nav-links">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href}>{link.label}</Link>
                    </li>
                ))}
                <li>
                    <a href={`mailto:${site.email}`} className="cta">
                        Get in touch
                    </a>
                </li>
            </ul>
            <button
                type="button"
                className={`nav-toggle${open ? " open" : ""}`}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((prev) => !prev)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            {open && (
                <div className="nav-mobile-panel">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href={`mailto:${site.email}`}
                        className="cta"
                        onClick={() => setOpen(false)}
                    >
                        Get in touch
                    </a>
                </div>
            )}
        </nav>
    );
}
