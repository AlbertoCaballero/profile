import { site } from "@/lib/content";

export default function FooterComponent() {
    return (
        <footer className="footer">
            <span className="footer-copy">
                © {new Date().getFullYear()} — {site.location}
            </span>
            <div className="footer-links">
                <a
                    href={site.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                <a
                    href={site.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
                <a
                    href={site.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Twitter/X
                </a>
                <a href="/rss.xml">RSS</a>
            </div>
        </footer>
    );
}
