import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Caleb</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Portfolio</a>
                </li>

                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="http://www.linkedin.com/in/calebsiegel" className="footer__social-link" target="_blank">
                    <i class="bx bxl-linkedin"></i>
                </a>

                <a href="https://github.com/caleb-siegel" className="footer__social-link" target="_blank">
                    <i class="bx bxl-github"></i>
                </a>

                {/* <a href="https://www.facebook.com/caleb.siegel.5" className="footer__social-link" target="_blank">
                    <i class="bx bxl-facebook"></i>
                </a> */}

                {/* <a href="https://www.instagram.com/kbsiegel/" className="footer__social-link" target="_blank">
                    <i class="bx bxl-instagram"></i>
                </a> */}

                {/* <a href="https://medium.com/@caleb.siegel" className="home__social-social-link" target="_blank">
                    <i class="uil uil-medium-alt"></i>
                </a> */}

                {/* <a href="https://www.youtube.com/@calebsiegel1" className="footer__social-link" target="_blank">
                    <i class="bx bxl-youtube"></i>
                </a> */}
            </div>

            <span className="footer__copy">&#169; Caleb Siegel. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer