
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane
} from "react-icons/fa";

function Contact() {
  const email = "sultanahraziah@gmail.com";

  return (
    <section className="contact-section" id="contact">

      <div className="contact-wrapper">

        {/* Left Content */}
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="contact-label">
            <FaPaperPlane />
            <span>Let's Connect</span>
          </div>

          <h2 className="contact-heading">
            Get In <span>Touch</span>
          </h2>

          <p className="contact-description">
            I'm excited to explore opportunities and connect
            with people working in technology. Let's create
            something amazing together!
          </p>

          <div className="contact-line"></div>

          {/* Email Card */}
          <a
            href={`mailto:${email}`}
            className="contact-card"
          >
            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <div>
              <h3>Email</h3>
              <p>{email}</p>
            </div>
          </a>

          {/* Location Card */}
          <div className="contact-card">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3>Location</h3>
              <p>Nayagarh, Odisha, India</p>
            </div>
          </div>

          {/* Contact Button */}
          <a
            href={`mailto:${email}?subject=Portfolio%20Enquiry`}
            className="contact-button"
          >
            Say Hello
            <FaPaperPlane />
          </a>

        </motion.div>

        {/* Right Illustration */}
        <motion.div
          className="contact-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <div className="contact-orbit orbit-one"></div>
          <div className="contact-orbit orbit-two"></div>

          <div className="floating-icon floating-phone">
            <span>☎</span>
          </div>

          <div className="floating-icon floating-location">
            <FaMapMarkerAlt />
          </div>

          <div className="contact-envelope">
            <div className="envelope-top">
              @
            </div>
            <div className="envelope-body">
              <FaEnvelope />
            </div>
          </div>

          <div className="contact-glow"></div>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;
