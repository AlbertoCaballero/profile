import Link from "next/link";
import { site } from "@/lib/content";

export default function HeaderComponent() {
    return (
        <nav>
            <Link href="/" className="nav-logo">
                {site.domain}
            </Link>
            <ul className="nav-links">
                <li><Link href="/#work">Work</Link></li>
                <li><Link href="/#writing">Writing</Link></li>
                <li><Link href="/#videos">Videos</Link></li>
                <li><Link href="/#about">About</Link></li>
                <li>
                    <a href={`mailto:${site.email}`} className="cta">
                        Get in touch
                    </a>
                </li>
            </ul>
        </nav>
    );
}
