import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/resume'>Resume</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;