import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    const location = useLocation(); // Get the current path

    return (
        <div className='nav-bar-container'>
            <nav className="nav-bar">
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
                            className={`nav-link ${location.pathname === '/projects' ? 'nav-link-active' : ''}`}
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
