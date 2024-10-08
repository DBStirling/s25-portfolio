import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-header'>
            Hey! Let's Work.
        </div>
        <div className='footer-content'>
            <div className='footer-body'>
                <div className='footer-element-header'>NAVIGATE</div>
                <Link
                    className='footer-element'
                    to="/"
                >Work</Link>
                <Link
                    className='footer-element'
                    to="/about"
                >About</Link>
                <Link
                    className='footer-element'
                    to="/extras"
                >Extras</Link>
                <a 
                    href="/path-to-your-resume.pdf" 
                    className='nav-link'
                    target="_blank" 
                    rel="noopener noreferrer"
                >Resume</a>
            </div>
            <div className='footer-body'>
                <div className='footer-element-header'>CONNECT</div>
                <Link
                    className='footer-element'
                    to="/"
                >Email</Link>
                <Link
                    className='footer-element'
                    to="/about"
                >linkedIn</Link>
            </div>
        </div>
    </div>
  )
}
