import Link from "next/link";
import { articles, formatDate } from "@/lib/content";
import SectionHeaderComponent from "@/components/section-header";

export default function WritingComponent() {
    return (
        <section className="section" id="writing">
            <SectionHeaderComponent
                num="02"
                label="Writing"
                actionText="All articles"
                actionHref="/writing"
            />
            <div className="articles-list">
                {articles.map((article, index) => (
                    <Link
                        key={article.slug}
                        href={`/writing/${article.slug}`}
                        className="article-row"
                    >
                        <span className="article-num">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="article-info">
                            <div className="article-title">{article.title}</div>
                            <div className="article-date">
                                {formatDate(article.date)} &nbsp;·&nbsp;{" "}
                                {article.readTime} min read
                            </div>
                        </div>
                        <span className="article-read">Read →</span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
