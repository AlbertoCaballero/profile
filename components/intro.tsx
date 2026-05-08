import "../app/globals.css";

export default function IntroComponent({}) {
    return (
        <div className="hero">
            <div>
                <div className="hero-index">
                    <span className="section-num">00</span> Introduction
                </div>
                <h1 className="hero-headline">
                    Software
                    <br />
                    <em>engineer</em>
                    <br />
                    &amp; builder.
                </h1>
            </div>
            <div className="hero-right">
                <p className="hero-bio">
                    Nearly a decade crafting systems, interfaces, and tools that
                    scale. Based in Mexico City. I write about architecture,
                    performance, and the craft of shipping things.
                </p>
                <div className="hero-tags">
                    <span className="tag">Next.js</span>
                    <span className="tag">GCP</span>
                    <span className="tag">TypeScript</span>
                    <span className="tag">Systems</span>
                    <span className="tag">Open source</span>
                </div>
                <div className="availability">
                    <span className="status-dot"></span>
                    Open to select projects
                </div>
            </div>
        </div>
    );
}
