import { projects, site } from "@/lib/content";
import SectionHeaderComponent from "@/components/section-header";

export default function WorkComponent() {
    return (
        <section className="section" id="work">
            <SectionHeaderComponent
                num="01"
                label="Selected work"
                actionText="All projects"
                actionHref={site.socials.github}
                external
            />
            <div className="projects-grid">
                {projects.map((project) => (
                    <a
                        key={project.title}
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card"
                    >
                        <div className="project-meta">
                            <span className="project-year">{project.year}</span>
                            <span className="project-type">{project.type}</span>
                        </div>
                        <h2 className="project-title">{project.title}</h2>
                        <p className="project-desc">{project.description}</p>
                        <div className="project-stack">
                            {project.stack.map((tech) => (
                                <span key={tech} className="stack-pill">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
