
import { FaCode, FaHeart, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="modern-footer">

      <div className="footer-content">

        <div className="footer-brand">
          <FaCode />
          <span>Raziah</span>
        </div>

        <p>
          Designed and developed by
          <span> Raziah Sultanah.</span>
        </p>

        <p className="footer-copyright">
          © {new Date().getFullYear()} All Rights Reserved.
          Made with <FaHeart className="footer-heart" />
        </p>

        <a
          href="#home"
          className="back-to-top"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </a>

      </div>

    </footer>
  );
}

export default Footer;
