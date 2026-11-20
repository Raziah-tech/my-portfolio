
import { motion } from "framer-motion";
import { ExternalLink, ShoppingBag } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "MERN E-commerce Website",
    category: "Full Stack Web Development",
    description:
      "A full-stack online shopping application featuring product browsing, user authentication, product details, shopping cart, wishlist and checkout functionality.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    icon: ShoppingBag,
    github: "https://github.com/YOUR_USERNAME/YOUR_REPOSITORY",
    live: ""
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-wrapper">

        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">MY RECENT WORK</span>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p>
            Some of the practical work I have developed.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                className="project-card"
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="project-visual">
                  <Icon size={65} />
                  <span>FULL STACK PROJECT</span>
                </div>

                <div className="project-info">
                  <small>{project.category}</small>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="skill-tags">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub size={18} />
                        GitHub
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
