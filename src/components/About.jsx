
import { motion } from "framer-motion";
import {
  FaUser,
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaRocket
} from "react-icons/fa";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-wrapper">

        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">GET TO KNOW ME</span>
          <h2>About <span>Me</span></h2>
          <p>Discover my journey, education and passion for technology.</p>
        </motion.div>

        <div className="about-layout">

          {/* Profile introduction */}
          <motion.div
            className="about-main-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-icon">
              <FaUser />
            </div>

            <h3>I'm Raziah Sultanah</h3>

            <p>
              I am currently pursuing my Master of Computer
              Applications (MCA) at Gandhi Engineering College,
              Bhubaneswar. I completed my B.Sc. in Information
              Technology Management from Utkal University.
            </p>

            <p>
              I have developed a strong interest in full stack
              web development and enjoy working with modern
              technologies to create responsive and user-friendly
              web applications.
            </p>

            <p>
              My goal is to begin my professional journey as a
              software developer, contribute to real-world
              projects, and continuously improve my technical skills.
            </p>

            <div className="about-highlights">
              <div className="about-highlight">
                <FaCode />
                <span>Full Stack Development</span>
              </div>

              <div className="about-highlight">
                <FaGraduationCap />
                <span>MCA Student</span>
              </div>

              <div className="about-highlight">
                <FaLaptopCode />
                <span>Project-Based Learning</span>
              </div>
            </div>
          </motion.div>

          {/* Education and interests */}
          <motion.div
            className="about-side"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-info-card">
              <div className="about-info-icon">
                <FaGraduationCap />
              </div>
              <div>
                <span>EDUCATION</span>
                <h4>Master of Computer Applications</h4>
                <p>Gandhi Engineering College, Bhubaneswar</p>
              </div>
            </div>

            <div className="about-info-card">
              <div className="about-info-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <span>LOCATION</span>
                <h4>Nayagarh, Odisha</h4>
                <p>India</p>
              </div>
            </div>

            <div className="about-info-card">
              <div className="about-info-icon">
                <FaRocket />
              </div>
              <div>
                <span>CAREER INTEREST</span>
                <h4>Software Developer</h4>
                <p>Building modern web applications</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;
