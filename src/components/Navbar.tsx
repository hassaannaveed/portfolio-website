import React, { useState } from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="navbar">
      <div className="logo">
          <a href="#"><img src="/public/logo.png" alt="Logo" /></a>
      </div>

      <div className="nav-container">
        <nav className="nav-desktop">
          <a href="#">Home</a>
          <div className="divider" />
          <a href="#projects">Projects</a>
          <div className="divider" />
          <a href="#contact">Contact</a>
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            <a href="#about" onClick={toggleMenu}>Home</a>
            <a href="#projects" onClick={toggleMenu}>Projects</a>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;