import ProjectCard from "../components/ProjectCard";

function Projects() {
    return (
        <section className="page">
            <div className="page-header">
                <p className="hero-label">WORK</p>
                <h1>Projects</h1>
                <p className="subtitle">
                    A collection of things I've built. Focused on real problems,
                    clean architecture, and practical solutions.
                </p>
            </div>

            <div className="projects-grid">
                <ProjectCard
                    title="NavajoWaterGIS"
                    description="An internship project: an Android application to map and manage water well data for field technicians serving the Navajo Nation. Built with offline-first design using Room, MVVM architecture, and Retrofit for remote data syncing."
                    tech={["Kotlin", "Android Studio", "MVVM", "Room", "Retrofit", "Google Maps API"]}
                    github="https://github.com/Deydrik/NavajoWaterGIS"
                />

                <ProjectCard
                    title="CuliNote"
                    description="A capstone project: a recipe and meal-tracking Android app that integrates the Spoonacular API to fetch and display recipe data, with Room database for storing saved meals and expiration tracking."
                    tech={["Kotlin", "Android Studio", "Room", "Retrofit", "OkHttp3", "Spoonacular API"]}
                    github="https://github.com/Deydrik/CuliNote"
                />
            </div>
        </section>
    );
}

export default Projects;