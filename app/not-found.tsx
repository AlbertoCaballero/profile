import Link from "next/link";

export default function NotFound() {
    return (
        <div className="not-found">
            <div className="hero-index">
                <span className="section-num">!!</span> Lost
            </div>
            <div className="not-found-code">404</div>
            <p className="not-found-message">
                The page you are looking for does not exist or has been moved.
            </p>
            <Link href="/" className="section-action">
                Back home <span className="arrow">→</span>
            </Link>
        </div>
    );
}
