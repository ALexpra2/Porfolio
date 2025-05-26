import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
        <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Proyectos</Link></li>
        <li><Link to="/resume" onClick={() => setMenuOpen(false)}>Currículum</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
