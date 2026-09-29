import { site, videos } from "@/lib/content";
import SectionHeader from "@/components/section-header";

export default function Videos() {
    return (
        <section className="section" id="videos">
            <SectionHeader
                num="03"
                label="Videos"
                actionText="All videos"
                actionHref={site.socials.youtube}
                external
            />
            <div className="videos-row">
                {videos.map((video) => (
                    <a
                        key={video.title}
                        href={video.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="video-card"
                    >
                        <div className="video-thumb">
                            <div className="play-btn">
                                <div className="play-triangle"></div>
                            </div>
                        </div>
                        <div className="video-title">{video.title}</div>
                        <div className="video-meta">
                            {video.views} &nbsp;·&nbsp; {video.duration}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
