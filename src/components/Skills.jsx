
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaCode,
  FaServer
} from "react-icons/fa";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Creating responsive and interactive user interfaces.",
    skills: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React.js", icon: FaReact },
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "Tailwind CSS", icon: FaCode }
    ]
  },
  {
    title: "Backend Development",
    description: "Building server-side applications and REST APIs.",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: FaServer },
      { name: "REST API", icon: FaCode },
      { name: "PHP", icon: FaCode }
    ]
  },
  {
    title: "Database & Programming",
    description: "Working with databases and programming languages.",
    skills: [
      { name: "MongoDB", icon: FaDatabase },
      { name: "MySQL", icon: FaDatabase },
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava }
    ]
  },
  {
    title: "Tools & Technologies",
    description: "Tools I use during development and collaboration.",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: FaCode }
    ]
  }
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-wrapper">

        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">WHAT I WORK WITH</span>

          <h2>
            Technical <span>Skills</span>
          </h2>

          <p>
            Technologies and tools I use to build modern,
            responsive and user-friendly web applications.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.div
              className="skills-category-card"
              key={group.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{group.title}</h3>

              <p className="skills-category-description">
                {group.description}
              </p>

              <div className="skills-list">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div className="skill-item" key={skill.name}>
                      <Icon />
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
