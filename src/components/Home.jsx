
import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowDown,
} from "react-icons/fa";

const Home = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-greeting">Hello, I'm</span>

          <h1>
            Raziah <span>Sultanah</span>
          </h1>

          <h2>Full Stack Web Developer</h2>

          <p className="hero-description">
            I am an MCA student and aspiring Full Stack Developer
            passionate about creating responsive, user-friendly,
            and modern web applications. I enjoy learning new
            technologies and building real-world projects.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="hero-hire-btn">
              Hire Me
            </a>

            <a
              href="/resume.pdf"
              className="hero-cv-btn"
              download="Raziah_Sultanah_CV.pdf"
            >
              <FaDownload />
              <span>Download CV</span>
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/YOUR_USERNAME/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:your-email@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image-area"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <div className="hero-image-frame">
            <img
              src="/profile.png"
              alt="Raziah Sultanah"
            />
          </div>

          <div className="hero-image-caption">
            <span className="online-dot"></span>
            Open to Opportunities
          </div>
        </motion.div>

      </div>

      <a href="#about" className="hero-scroll">
        Scroll Down <FaArrowDown />
      </a>
    </section>
  );
};

export default Home;
