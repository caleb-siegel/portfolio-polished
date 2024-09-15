import React, { useState } from 'react'
import './header.css';

const Header = () => {
    /* ========== Change Background Header =========== */
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        // when the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header tag
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });
    /* ========== Toggle Menu =========== */  
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    const handleActiveNav = (e) => {
        setActiveNav(e.target.value);
        if (window.innerWidth < 768) {
            showMenu(!Toggle);
        }
    };
    
    return (
        <header className="header">
            <nav className="nav container">
                {Toggle ? "" : <a href="index.html" className="nav__logo">Caleb</a>}

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" value="#home" onClick={(e) => handleActiveNav(e)} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" value="#about" onClick={(e) => handleActiveNav(e)} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" value="#skills" onClick={(e) => handleActiveNav(e)} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" value="#portfolio" onClick={(e) => handleActiveNav(e)} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-scenery nav__icon"></i> Portfolio
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" value="#contact" onClick={(e) => handleActiveNav(e)} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                {Toggle ? "" : 
                    <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                        <i class="uil uil-bars"></i>
                    </div>
                }
            </nav>
        </header>
    )
}

export default Header