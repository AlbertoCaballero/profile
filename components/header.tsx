import "../app/globals.css";

export default function HeaderComponent({}) {
    return (
        <nav>
            <a href="home" className="nav-logo">AlbertoCaballero.dev</a>
            <ul className="nav-links">
                <li><a href="work">Work</a></li>
                <li><a href="writting">Writing</a></li>
                <li><a href="videos">Videos</a></li>
                <li><a href="about">About</a></li>
                <li><a href="contact" className="cta">Get in touch</a></li>
            </ul>
        </nav>
    );
}
