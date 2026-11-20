
import { useState } from "react";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Education", link: "#education" },
    { name: "Contact", link: "#contact" }
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="portfolio-navbar">
      <div className="navbar-container">

        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <FaCode />
          <span>Raziah<span className="logo-dot">.</span></span>
        </a>

        <button
          className="navbar-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="portfolio-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <nav
  id="portfolio-navigation"
  className={`navbar-menu ${menuOpen ? "active" : ""}`}
></nav>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="navbar-link"
              onClick={closeMenu}
            >
              {item.name}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
