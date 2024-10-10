import React, { useEffect } from "react"; // Add useEffect
import { useNavigate } from "react-router-dom";
// import heroGradient from "../assets/Images/hero-gradient.png";
import CtaButton from "../components/CtaButton/CtaButton.jsx";
import ProjectCard from '../components/ProjectCard/ProjectCard.jsx'
import "../styles/style.css";
import DEthumbnail from '../assets/Images/DEthumbnail1.png';
import DMthumbnail from '../assets/Images/diet-me-thumbnail.png';
import MFPthumbnail from '../assets/Images/thumbnail2.png'

export default function Home() {

    const navigate = useNavigate();

    const navigateToAbout = () => {
      navigate('/about');
    };
  
    const scrollToElement = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    useEffect(() => {
      const handleScroll = () => {
        const hero = document.getElementById('hero');
        const mainContent = document.querySelector('.my-work-container');
        const threshold = 20;
  
        if (window.scrollY > threshold) {
          const myWorkContainerBottom = mainContent.offsetTop + mainContent.offsetHeight;
          const scrollBottom = window.scrollY + window.innerHeight;
    
          if (scrollBottom >= myWorkContainerBottom) {
            // Reset hero position when reaching the bottom of the main content
            hero.style.position = 'absolute'; // or 'relative' based on your layout
            hero.style.top = `${myWorkContainerBottom - hero.offsetHeight}px`; // Position it above the footer or bottom
          } else {

            hero.style.width = '40vw';
            hero.style.height = '100vh';
            hero.style.position = 'fixed';
            hero.style.top = '0';
            mainContent.style.transform = 'translateX(40vw)';
            mainContent.classList.add('visible'); // Add visible class to fade in
          }
        } else {
          hero.style.width = '100vw';
          hero.style.height = '100vh';
          hero.style.position = 'relative';
          mainContent.style.transform = 'translateX(0)';
          mainContent.classList.remove('visible'); // Add visible class to fade in

        }
      };
  
      window.addEventListener('scroll', handleScroll);
      
      // Cleanup function to remove the event listener
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); // Run once on mount


  // window.addEventListener('scroll', () => {
  //   const hero = document.getElementById('hero'); // Intro-content section
  //   const mainContent = document.querySelector('.my-work-container'); // Main content section
    
  //   // Adjust the threshold based on when you want the transition to happen
  //   const threshold = 20;
  
  //   if (window.scrollY > threshold) {
  //     // Shrink the intro-content section when scrolled past the threshold
  //     hero.style.width = '40vw';
  //     hero.style.height = 'auto';
  //     hero.style.position = 'fixed';
  //     hero.style.top = '0';
      
  //     // Shift the main content up beside the intro-content
  //     mainContent.style.transform = 'translateX(40vw)';
  //   } else {
  //     // Reset to the original state when scrolled back up
  //     hero.style.width = '100vw';
  //     hero.style.height = '100vh';
  //     hero.style.position = 'relative';
  //     mainContent.style.transform = 'translateX(0)';
  //   }
  // });


  return (
    <div className="device-container">
      {/* <NavBar/> */}
      <div className="main-content">
        <div className="intro-container" id="hero">
          <div className="intro-content">
            <div className="hero-content">
              <h1 className="hero-header">
                {/* Hey, <em>I'm David</em> */}
                Hey, I'm David
              </h1>
              <div className="hero-body">
                <p>
                  <strong>I like to build, ship & learn.</strong>
                </p>
                {/* <p>
                  As a System Design Engineering student @UWaterloo, I blend pragmatic engineering with creative, empathetic design. I shape products at every stage of their development with my experience in product design, management, and code.
                </p> */}
                <p>
                  Take a look around to get to know me a bit better or scroll to see my featured work.
                </p>
                {/* <p>
                  If you're here for business, scroll to check out my featured work. But if you're looking to get to know me a bit better, take a look around!
                </p> */}
                <p>I'm looking for summer 2025 opportunities to get hands on with things that make life a little easier. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-work-container" id="work-section">
          <div className="my-work-content">
            <div className="my-work-header">
              My Work
            </div>
            <div className="project-card-container">
              <ProjectCard
                title="Don Efficace"
                description="Designed a donation ecosystem for an effective altruism NPO, helping donors visualize their impact and donate with more diligence."
                tag="Product"
                destination="/donEfficace"
                // imgSrc='../assets/images/DEthumbnail1.png'
                imgSrc={DEthumbnail}
              />
              <ProjectCard
                title="Flow Financial"
                description="Ideated a mobile app geared towards helping young adults find their footing in early personal finances and budgeting. "
                tag="Case Study"
                imgSrc={MFPthumbnail}
              />
              <ProjectCard
                title="Stamped"
                description="Ideated a social experiences app to help small business owners cultivate a  following and create genuine connections with customers."
                tag="Exploration"
                imgSrc={MFPthumbnail}
              />
              <ProjectCard
                title="MyFitnessPal"
                description="Redesigned the industry-leading calorie counting app to better align with user needs."
                tag="Case Study"
                imgSrc={MFPthumbnail}
              />
              <ProjectCard
                title="DietMe"
                description="Ideated a mobile app to help people with dietary restrictions and visual impairments confidently shop for groceries."
                tag="Exploration"
                imgSrc={DMthumbnail}
              />
                        <div className="button-container">
              <CtaButton className="cta-button" 
                  onClick={() => scrollToElement('work-section')}
                  text='Check Out My Work'
              />
              <CtaButton
                  onClick={navigateToAbout}
                  text = 'Learn about Me'
              />
          </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};