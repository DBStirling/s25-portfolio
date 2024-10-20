import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Footer.css'
import { IoIosArrowUp } from "react-icons/io";


export default function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scroll effect
        });
    }

    // const handleLinkedin = () => {
    //     window.location.href = 'www.linkedin.com/in/davidbstirling'
    // }

  return (
    <div className='img-container'>
        <div className='container'>
            <div className='header'>
                David Stirling
            </div>
            <div className='content'>
                <div className='body'>
                <div className='element caps'>CONNECT</div>
                    <Link
                        className='element'
                        to="mailto:dstirlin@uwaterloo.ca"
                    >Email</Link>
                    <a
                        className='element'                        
                        href="https://www.linkedin.com/in/david-stirling-949816203/" target="_blank" rel="noopener noreferrer" 
                    >LinkedIn</a>
                    <a 
                        href="/path-to-your-resume.pdf" 
                        className='element'
                        target="_blank" 
                        rel="noopener noreferrer"
                    >Resume</a>
                </div>
                <div className='body'>
                    <div className='element caps'>NAVIGATE</div>
                    <Link
                        className='element'
                        to="/"
                    >Work</Link>
                    <Link
                        className='element'
                        to="/about"
                    >About</Link>
                    <Link
                        className='element'
                        to="/extras"
                    >Extras</Link>
                </div>
                <div className='reset-scroll-container'>
                    <div className='reset-scroll-content'>
                    <div className='reset-scroll-body'>Back To Top</div>
                    <IoIosArrowUp color='#121212' width='16px' height='16px'
                                onClick={scrollToTop}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
