import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css'
import closeIcon from '../../assets/close-icon.svg'
import hamburgerIcon from '../../assets/hamburger-icon.svg'

const NavBar = () => {
    const location = useLocation(); // Get the current path

    const [menuState, setMenuState] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

    const handleMenu = () => {
        const navElements = document.querySelector('.nav-elements');
        setMenuState(!menuState); 
        if (window.innerWidth < 600)
        {
            if (menuState === true) {
                navElements.style.display = 'none'; // Reset width
                console.log('none set manually')
            } 
            else { 
                navElements.style.display = 'flex' 
            };
            console.log('flex set manually')
        }
    }

    return (
        <div className='nav-bar-container'>
            <nav className="nav-bar">
                <div className='menu-button'
                    onClick={handleMenu}>
                    <img 
                    src={menuState ? closeIcon : hamburgerIcon} 
                    alt={menuState ? "Close menu" : "Open menu"}
                    />
                </div>
                <ul className="nav-elements">
                    <li className="nav-element">
                        <Link
                            to="/"
                            className={`nav-link ${location.pathname === '/' ? 'nav-link-active' : ''}`}
                        >Work</Link>
                    </li>
                    <li className="nav-element">
                        <Link
                            to="/about"
                            className={`nav-link ${location.pathname === '/about' ? 'nav-link-active' : ''}`}
                        >About</Link>
                    </li>
                    <li className="nav-element">
                        <Link
                            to="/extras"
                            className={`nav-link ${location.pathname === '/extras' ? 'nav-link-active' : ''}`}
                        >Extras</Link>
                    </li>
                    <li className="nav-element">
                    <a 
                        href="/path-to-your-resume.pdf" 
                        className='nav-link'
                        target="_blank" 
                        rel="noopener noreferrer"
                    >Resume</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
