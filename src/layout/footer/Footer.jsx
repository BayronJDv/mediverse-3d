import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div class="footer-left">
            <h3>Mediverso-3d</h3>
            <p class="copyright">&copy; 2025 Mediverso-3d</p>
        </div>
        <div class="footer-middle">
            <h3>Enfermedades</h3>
            <a href="#">Cancer</a>
            <a href="#">Cirrosis</a>
            <a href="#">Hígado graso</a>
            <a href="#">Hepatitis</a>
        </div>
        <div class="footer-middle">
            <h3>Información</h3>
            <a href="#">Home</a>
            <a href="#">Sobre Nosotros</a>
        </div>
        <div class="footer-right">
            <h3>Pruebas</h3>
            <a href="#">Quiz</a>
        </div>
    </footer>
  )
}

export default Footer