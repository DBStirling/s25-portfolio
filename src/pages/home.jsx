import React, { useEffect } from "react"; // Add useEffect
import { useNavigate, Link, useLocation } from "react-router-dom";

// import heroGradient from "../assets/Images/hero-gradient.png";
import CtaButton from "../components/CtaButton/CtaButton.jsx";
import ProjectCard from '../components/ProjectCard/ProjectCard.jsx'
import Divider from '../components/Divider/Divider.jsx'
import "../styles/style.css";
import DEthumbnail from '../assets/Images/de-thumb.png';
import DMthumbnail from '../assets/Images/dm-thumb.png';
import MFPthumbnail from '../assets/Images/mfp-thumb.png'
import FFthumbnail from '../assets/Images/flow-thumb-cs.png'
import STthumbnail from '../assets/Images/stamped-thumb-cs.png'

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
                {/* Hey, <em>I'm David</em> */}
                Hey, I'm David
              </h1>
              <div className="hero-body">
                <p>
                  <strong>I like to design, build, ship & repeat.</strong>
                </p>
                <p>As a System Design Engineering student @
                  <span 
                    onClick={() => window.open('https://uwaterloo.ca/engineering/', '_blank')} 
                    style={{ cursor: 'pointer', textDecoration: 'underline' }}
                    >
                    UWaterloo
                  </span>
                , I blend pragmatic engineering problem-solving with creative, empathetic design.
                </p>
                {/* <p>
                  If you're here for business, scroll to check out my featured work. But if you're looking to get to know me a bit better, take a look around!
                </p> */}
                <p>I'm looking for summer 2025 opportunities to get hands on with things that bring a little more joy to life. </p>
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
                title="Don Efficace"
                description="Designed a donation ecosystem for an effective altruism NPO, helping donors visualize their impact and donate with more diligence."
                tag="Product"
                destination="/donEfficace"
                imgSrc={DEthumbnail}
              />
              {/* <ProjectCard
                title="Stamped"
                description="Ideated a social experiences app to help small business owners cultivate a  following and create genuine connections with customers."
                tag="Exploration"
                destination ='/stamped'
                imgSrc={STthumbnail}
              /> */}
              <ProjectCard
                title="MyFitnessPal"
                description="Redesigned the industry-leading calorie counting app to better align with user needs."
                tag="Case Study"
                destination ='/myFitnessPal'
                imgSrc={MFPthumbnail}
              />
              <ProjectCard
                title="DietMe"
                description="Ideated a mobile app to help people with dietary restrictions and visual impairments confidently shop for groceries."
                tag="Exploration"
                destination ='/dietMe'
                imgSrc={DMthumbnail}
                // last='true'
              />
              <ProjectCard
                title="Flow Financial"
                description="Ideated a mobile app geared towards helping young adults find their footing in early personal finances and budgeting. "
                tag="Case Study"
                destination ='/flowFinancial'
                imgSrc={FFthumbnail}
              />
          <div className="end-work-prompt">
            See some non-work stuff in&nbsp;
            <Link 
              className="end-work-link"
              to={'/s25-portfolio/about'}
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