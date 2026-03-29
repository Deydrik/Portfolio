function About() {
    const skills = [
        { category: "Languages", items: ["Kotlin", "Java", "Python", "C++"] },
        { category: "Frameworks & Tools", items: ["Spring Boot", "Spring Security", "JavaFX", "RESTful APIs"] },
        { category: "Databases", items: ["Room", "MySQL"] },
        { category: "Other", items: ["Git", "Android Studio", "MVVM", "Retrofit", "OkHttp3"] },
    ];

    const timeline = [
        {
            year: "2025 – Present",
            title: "NavajoWaterGIS",
            subtitle: "Internship Project with Penn State University and the University of New Mexico",
            description: "Building an Android GIS mapping app for water well data management for the Navajo Nation.",
        },
        {
            year: "2025",
            title: "Associates of Computer Science",
            subtitle: "Bunker Hill Community College, Charlestown MA",
            description: "Relevant coursework including Advanced Java Programming.",
        },
        {
            year: "2025",
            title: "CuliNote",
            subtitle: "Capstone Project for Android Development Course",
            description: "Developed a full recipe and meal-tracking Android app with API integration and local database storage.",
        },
        {
            year: "2021 – Present",
            title: "Barista Trainer",
            subtitle: "Starbucks, Chelsea MA",
            description: "Training and mentoring new baristas, managing high-volume shifts, and leading team operations under pressure.",
        },
        {
            year: "2019",
            title: "Store Associate",
            subtitle: "Big Lots, Revere MA",
            description: "Managed inventory, backroom organization, and collaborated with a team on daily store operations.",
        },
    ];

    return (
        <section className="page">
            <div className="page-header">
                <p className="hero-label">ABOUT</p>
                <h1>Mario Smith-Pignone</h1>
                <p className="subtitle">
                    Computer Science graduate from Bunker Hill Community College with a
                    focus on Android development and clean architecture. I build
                    practical, real-world applications — from offline GIS mapping tools
                    to recipe tracking apps — with an emphasis on maintainable code and
                    thoughtful design.
                </p>

                <div className="about-links">
                    <a
                        href="https://github.com/Deydrik"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mario-s-588217117/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:pignone.mario@yahoo.com"
                        className="btn btn-outline"
                    >
                        Email Me
                    </a>
                </div>
            </div>

            <div className="about-body">
                {/* Skills */}
                <div className="about-section">
                    <h2 className="section-title">Skills</h2>
                    <div className="skills-grid">
                        {skills.map((group) => (
                            <div key={group.category} className="skill-group">
                                <h4 className="skill-category">{group.category}</h4>
                                <ul className="tech-list">
                                    {group.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Timeline */}
                <div className="about-section">
                    <h2 className="section-title">Experience & Education</h2>
                    <div className="timeline">
                        {timeline.map((entry, index) => (
                            <div key={index} className="timeline-entry">
                                <div className="timeline-year">{entry.year}</div>
                                <div className="timeline-content">
                                    <h4 className="timeline-title">{entry.title}</h4>
                                    <p className="timeline-subtitle">{entry.subtitle}</p>
                                    <p className="timeline-description">{entry.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;