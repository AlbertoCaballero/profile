import IntroComponent from "@/components/intro";
import WorkComponent from "@/components/work";
import WritingComponent from "@/components/writing";
import VideosComponent from "@/components/videos";

export default function Home() {
    return (
        <>
            <IntroComponent />
            <WorkComponent />
            <WritingComponent />
            <VideosComponent />
        </>
    );
}
