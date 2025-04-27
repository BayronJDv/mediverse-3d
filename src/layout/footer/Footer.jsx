import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src="/Logo.svg" alt="Logo" className="logo" />
        <h3>Mediverso-3d</h3>
        <p className="copyright">&copy; 2025 Mediverso-3d todos los derechos reservados</p>
      </div>
      <div className="footer-middle">
        <h3>Learn Diseases</h3>
        <NavLink to="/Learn/CancerHigado">Cancer</NavLink>
        <NavLink to="/Learn/Cirrocis">Cirrocis</NavLink>
        <NavLink to="/Learn/Hepatitis">Hepatitis</NavLink>
        <NavLink to="/Learn/HigadoGraso">Hígado graso</NavLink>
      </div>
      <div className="footer-middle">
        <h3>Information</h3>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/sobre-nosotros">Abput</NavLink>
      </div>
      <div className="footer-right">
        <h3>Tests</h3>
        <NavLink to="/quiz">Quiz</NavLink>
      </div>
    </footer>
  );
};

export default Footer;