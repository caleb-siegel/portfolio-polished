import React, { useState, useEffect, useRef } from 'react';
import './header.css';

const Header = () => {
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");
    const menuRef = useRef(null);

    /* ========== Change Background Header =========== */
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header");
            if (window.scrollY >= 80) header.classList.add("scroll-header");
            else header.classList.remove("scroll-header");

            // Close menu when scrolling
            if (Toggle) {
                showMenu(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [Toggle]);

    /* ========== Handle Clicks Outside =========== */
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target) && Toggle) {
                showMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [Toggle]);

    const handleActiveNav = (e) => {
        setActiveNav(e.target.value);
        if (window.innerWidth < 768) {
            showMenu(false);
        }
    };

    return (
        <header className="header">
            <nav className="nav container">
                {Toggle ? "" : <a href="index.html" className="nav__logo">Caleb</a>}

                <div ref={menuRef} className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
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
                        
                        {/* <li className="nav__item">
                            <a href="#qualification" value="#qualification" onClick={(e) => handleActiveNav(e)} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-scenery nav__icon"></i> Qualifications
                            </a>
                        </li> */}

                        {/* <li className="nav__item">
                            <a href="#interests" value="#interests" onClick={(e) => handleActiveNav(e)} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-scenery nav__icon"></i> Interests
                            </a>
                        </li> */}

                        <li className="nav__item">
                            <a href="#contact" value="#contact" onClick={(e) => handleActiveNav(e)} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={() => showMenu(false)}></i>
                </div>

                {Toggle ? "" : 
                    <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                        <i className="uil uil-bars"></i>
                    </div>
                }
            </nav>
        </header>
    );
};

export default Header;