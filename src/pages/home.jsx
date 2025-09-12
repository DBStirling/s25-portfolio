import React, { useEffect } from "react"; // Add useEffect
import { useNavigate, Link, useLocation } from "react-router-dom";

import TypeIt from "typeit-react";
import ProjectCard from '../components/ProjectCard/ProjectCard.jsx'
import Divider from '../components/Divider/Divider.jsx'
import "../styles/style.css";
import DEthumbnail from '../assets/Images/de-thumb.png';
import DMthumbnail from '../assets/Images/dm-thumb.png';
import MFPthumbnail from '../assets/Images/mfp-thumb.png';
import FFthumbnail from '../assets/Images/ff-thumb.png';
import LIVthumbnail from '../assets/Images/liv-thumb.png';
import PERSONAthumbnail from '../assets/Images/pe-thumb.png';

export default function Home({scrollableRef} ) {

  const navigate = useNavigate();

    useEffect(() => {

      console.log('use effect running')

      const hero = document.getElementById('hero');
      const mainContent = document.querySelector('.my-work-container');
      const threshold = 10;

      // const preloadStyles = () => {
      //   if (hero && mainContent) {
      //     hero.style.transition = 'width 0.5s ease, height 0.5s ease, top 0.5s ease';
      //     mainContent.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
      //     // mainContent.style.opacity = '0'; // Start hidden until animation triggers
      //   }
      // };

      const resetHeroStyles = () => {
        hero.style.width = '100vw'; // Reset width
        hero.style.height = '100vh'; // Reset height
        hero.style.position = 'relative'; // Reset position
        mainContent.style.transform = 'translateX(0)'; // Reset translation
      }; 

      const shrinkHero = () => {
        hero.style.width = '40vw';
        // hero.style.maxWidth = '480px'
        hero.style.height = '100vh';
        hero.style.position = 'fixed';
        hero.style.top = '0';
        mainContent.style.transform = 'translateX(40vw)';
        mainContent.classList.add('visible'); // Add visible class to fade in
        console.log('hero should shrink')
      }

      const resetHero = () => {
        hero.style.width = '100vw';
        hero.style.height = '100vh';
        hero.style.position = 'relative';
        
        mainContent.style.transform = 'translateX(0)';
        mainContent.classList.remove('visible'); // Add visible class to fade in
      }
      

      const handleScroll = () => {

        if (window.innerWidth > 1024) {
        
          if (scrollableRef.current && scrollableRef.current.scrollTop > threshold) {

            const myWorkContainerBottom = mainContent.offsetTop + mainContent.offsetHeight;
            const scrollBottom = scrollableRef.current.scrollTop + scrollableRef.current.clientHeight;
      
            if (scrollBottom >= myWorkContainerBottom) {
              // hero.style.position = 'absolute'; // or 'relative' based on your layout
              // hero.style.top = `${myWorkContainerBottom - hero.offsetHeight}px`;
              console.log('hit bottom')
            } else {
              shrinkHero();
            }
          } else {
            resetHero();
          }
        } else {
          mainContent.classList.add('visible'); // Add visible class to fade in
          resetHeroStyles(); // Ensure styles are reset for smaller screens
        }
      };

      // const autoScrollToWork = () => {
      //   setTimeout(() => {
      //     mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
      //   }, 2000); // 2000ms = 2 seconds delay
      // };

      // preloadStyles()
    
      // autoScrollToWork(); // Call the function to trigger auto-scroll

      const scrollableElement = scrollableRef.current;
      if (scrollableElement) {
        scrollableElement.addEventListener('scroll', handleScroll);
      }
      window.addEventListener('resize', handleScroll);

  
      // Cleanup function to remove the event listener
      return () => {
        if (scrollableElement) {
          scrollableElement.removeEventListener('scroll', handleScroll);
        }
        window.removeEventListener('resize', handleScroll);
      };
    }, [scrollableRef]);

  return (
    <div className="device-container">
      <div className="main-content">
        <div className="intro-container" id="hero">
          <div className="intro-content">
            <div className="hero-content">
              <h1 className="hero-header">
                <TypeIt
                  options={{
                    strings: ["Hey, I'm David"],
                    speed: 45,
                    waitUntilVisible: true,
                    cursor: false, // Disable the blinking cursor
                  }}
                />
              </h1>
              <div className="hero-body">
                  <p>
                    <strong>I like to design, build, ship & repeat.</strong>
                  </p>
                  <p>As a Systems Design Engineering student @
                    <span className="link"
                      onClick={() => window.open('https://uwaterloo.ca/engineering/', '_blank')} 
                      style={{ cursor: 'pointer', textDecoration: 'underline' }}
                      >
                      UWaterloo
                    </span>
                  , I blend pragmatic engineering problem-solving with creative, empathetic design.
                  </p>
                  <p>I just wrapped up a Product Design internship @ 
                    <span className="link"
                      onClick={() => window.open('https://withpersona.com', '_blank')} 
                      style={{ cursor: 'pointer', textDecoration: 'underline' }}
                      >
                      Persona
                    </span>
                    {' '}and am currently serving as prez @
                    <span
                      className="link"
                      onClick={() =>
                        window.open(
                          "https://medium.com/uw-blueprint/blueprint-and-social-good-b117635607c3",
                          "_blank"
                        )
                      }
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      UW Blueprint
                    </span>
                    </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-work-container" id="work-section">
          <div className="my-work-content">
            <div className="my-work-header">
              <Divider
              title={'Projects & Case Studies'}/>
            </div>
            <div className="project-card-container">
              <ProjectCard
                title="Persona"
                description="Building Persona's Product-Led Growth (PLG) strategy with a Growth Design Toolkit"
                tag="Product"
                destination="/persona"
                imgSrc={PERSONAthumbnail}
              />
              <ProjectCard
                title="LIV"
                description="Designed a guided free trial experience for a leading Canadian prop-tech solution."
                tag="Product"
                destination="/liv"
                imgSrc={LIVthumbnail}
              />
              <ProjectCard
                title="Flow"
                description="Reimagining budgeting for students with a necessity-first mobile app."
                tag="Case Study"
                destination ='/flow'
                imgSrc={FFthumbnail}
              />
              <ProjectCard
                title="Don Efficace"
                description="Designed a donation ecosystem for an effective altruism NPO, helping donors visualize their impact and donate with more diligence."
                tag="Product"
                destination="/donEfficace"
                imgSrc={DEthumbnail}
              />
              {/* <ProjectCard
                title="MyFitnessPal"
                description="Redesigned the industry-leading calorie counting app to better align with user needs."
                tag="Case Study"
                destination ='/myFitnessPal'
                imgSrc={MFPthumbnail}
              /> */}
              {/* <ProjectCard
                title="DietMe"
                description="Ideated a mobile app to help people with dietary restrictions and visual impairments confidently shop for groceries."
                tag="Exploration"
                destination ='/dietMe'
                imgSrc={DMthumbnail}
              /> */}
          <div className="end-work-prompt">
            See some non-work stuff in&nbsp;
            <Link 
              className="end-work-link"
              to={'/about'}
            >{' '}about{' '}
            </Link>
            &nbsp;or&nbsp;
            <Link 
              className="end-work-link"
              to={'/extras'}
            >{' '}extras.{' '}
            </Link>
          </div>
            </div>
            {/* <div className="experience-header">
              <Divider
              title={'my experience'}/>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};