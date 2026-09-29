import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

// Image metadata
export const alt = `${site.name} — Software engineer & builder`;
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

// Image generation
export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background: "#0a0a09",
                    color: "#e8e4dc",
                    padding: 80,
                }}
            >
                <div
                    style={{
                        display: "flex",
                        fontSize: 32,
                        letterSpacing: 8,
                        textTransform: "uppercase",
                        color: "rgba(232, 228, 220, 0.6)",
                    }}
                >
                    {site.domain}
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                        style={{
                            display: "flex",
                            fontSize: 88,
                            lineHeight: 1.05,
                            fontWeight: 700,
                        }}
                    >
                        Software <span style={{ color: "#4a9e6a" }}>engineer</span>
                        &amp; builder.
                    </div>
                    <div
                        style={{
                            display: "flex",
                            marginTop: 36,
                            fontSize: 28,
                            color: "rgba(232, 228, 220, 0.6)",
                        }}
                    >
                        {site.location} — architecture, performance, and the craft
                        of shipping things.
                    </div>
                </div>
            </div>
        ),
        { ...size }
    );
}