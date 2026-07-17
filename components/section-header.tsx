import Link from "next/link";

type SectionHeaderProps = {
    num: string;
    label: string;
    actionText: string;
    actionHref: string;
    /** Render the action as an external link (new tab) instead of a Next.js Link. */
    external?: boolean;
};

export default function SectionHeaderComponent({
    num,
    label,
    actionText,
    actionHref,
    external = false,
}: SectionHeaderProps) {
    const action = external ? (
        <a
            href={actionHref}
            target="_blank"
            rel="noopener noreferrer"
            className="section-action"
        >
            {actionText} <span className="arrow">→</span>
        </a>
    ) : (
        <Link href={actionHref} className="section-action">
            {actionText} <span className="arrow">→</span>
        </Link>
    );

    return (
        <div className="section-header">
            <span className="section-label">
                <span className="section-num">{num}</span> {label}
            </span>
            {action}
        </div>
    );
}
