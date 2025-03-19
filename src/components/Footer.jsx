import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2025 Alejandro Prados - Desarrollador Full Stack</p>
        
        <div className="footer-links">
          <a href="https://github.com/ALexpra2" target="_blank" >
            <img src="https://img.shields.io/badge/GitHub-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/alejandro-prados-haro-6a87578a" target="_blank">
            <img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
          </a>
          <a href="mailto:alexpra2@gmail.com">
            <img src="https://img.shields.io/badge/Email-%23D14836.svg?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
          </a>
        </div>

        <p>📍 Ubicación: Granada, España</p>
      </div>
    </footer>
  );
}

export default Footer;
