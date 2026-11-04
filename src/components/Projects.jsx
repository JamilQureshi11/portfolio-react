import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, FolderOpen } from "lucide-react";
import projects from "../data/projects";

function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "React", "Web", "Data"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">MY PORTFOLIO</span>
          <h2>Featured <span>Projects</span></h2>
          <p>Some of my practical development work.</p>
        </div>

        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={filter === category ? "filter-btn active" : "filter-btn"}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-image">
                  <FolderOpen size={55} strokeWidth={1.2} />
                  <span>{project.category}</span>
                </div>

                <div className="project-content">
                  <div className="project-top">
                    <span className="project-number">
                      PROJECT / 0{project.id}
                    </span>
                    {project.featured && (
                      <span className="featured-label">Featured</span>
                    )}
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tag-list">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo <ExternalLink size={16} />
                      </a>
                    )}

                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;