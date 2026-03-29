function ProjectCard({ title, description, tech, github }) {
    return (
        <div className="project-card">
            <div className="project-card-header">
                <h3>{title}</h3>
                {github && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                    >
                        GitHub →
                    </a>
                )}
            </div>
            <p>{description}</p>
            <ul className="tech-list">
                {tech.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProjectCard;