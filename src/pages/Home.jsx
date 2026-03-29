import { Link } from "react-router-dom";

function Home() {
    return (
        <section className="home">
            <div className="hero">
                <p className="hero-label">PORTFOLIO</p>
                <h1 data-text="Hi, I'm Mario.">Hi, I'm Mario.</h1>
                <p className="subtitle">
                    I build modern mobile and web applications with clean architecture, and real solutions.
                </p>
                <div className="cta">
                    <Link to="/projects" className="btn">View My Work</Link>
                </div>
            </div>

            <div className="features">
                <div className="feature">
                    <span className="feature-number">01</span>
                    <h3>Mobile Development</h3>
                    <p>Kotlin-based apps with clean architecture and offline-first design.</p>
                </div>
                <div className="feature">
                    <span className="feature-number">02</span>
                    <h3>API Integration</h3>
                    <p>Experience working with RESTful APIs, data parsing, and caching.</p>
                </div>
                <div className="feature">
                    <span className="feature-number">03</span>
                    <h3>Problem Solving</h3>
                    <p>Focused on readable, maintainable solutions to real-world problems.</p>
                </div>
            </div>
        </section>
    );
}

export default Home;