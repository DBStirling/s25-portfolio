import React from "react";
import { useNavigate } from "react-router-dom";
// import heroGradient from "../assets/Images/hero-gradient.png";
import CtaButton from "../components/CtaButton/CtaButton.jsx";
import ProjectCard from '../components/ProjectCard/ProjectCard.jsx'
import "../styles/style.css";

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

  return (
    <div className="device-container">
      {/* <NavBar/> */}
      <div className="main-content">
        <div className="intro-content">
          <div className="hero-content">
            <h1 className="hero-header">
              Hey, <em>I'm David</em>
            </h1>
            <div className="hero-body">
              <p>
                <strong>I thrive on turning bold ideas into effective solutions.</strong>
              </p>
              <p>
                As a System Design Engineering student @UWaterloo, I blend pragmatic engineering with creative, empathetic design. My expertise in product design, management, and development equips me to shape products at every stage of building.
              </p>
            </div>
          </div>
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
        <div className="my-work-container" id="work-section">
          <div className="my-work-header">
            <strong>My Work</strong> (hover for a preview)
          </div>
          <div className="project-card-container">
            <ProjectCard
              title="Don Efficace"
              description="Designed a donation ecosystem for an effective altruism NPO, helping donors visualize their impact and donate with more diligence."
              tag="Product"
              destination="/donEfficace"
              // preview=
            />
            <ProjectCard
              title="Flow Financial"
              description="Ideated a mobile app geared towards helping young adults find their footing in early personal finances and budgeting. "
              tag="Case Study"
            />
            <ProjectCard
              title="Stamped"
              description="Ideated a social experiences app to help small business owners cultivate a  following and create genuine connections with customers."
              tag="Exploration"
            />
            <ProjectCard
              title="MyFitnessPal"
              description="Redesigned the industry-leading calorie counting app to better align with user needs."
              tag="Case Study"
            />
            <ProjectCard
              title="DietMe"
              description="Ideated a mobile app to help people with dietary restrictions and visual impairments confidently shop for groceries."
              tag="Exploration"
            />
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

//   return (
//         <div className="device-container">
//           <NavBar/>
//           <div className="main-content">
//             <div className="intro-content">
//               <div className="hero-content">
//                 <div className="hero-header">
//                   Hey, I'm David
//                 </div>
//                 <div className="hero-body">
//                   <strong>I thrive on turning bold ideas into effective solutions.</strong>
//                   <br />
//                   As a System Design Engineering student @UWaterloo, I blend pragmatic engineering with creative, empathetic design. My expertise in product design, management, and development equips me to shape products at every stage of building.
//                 </div>
//               </div>
//               <div className="button-container">
//                 <button className="cta-button" 
//                         onClick={() => scrollToElement('work-section')}>
//                   Check Out My Work
//                 </button>
//                 <button className="cta-button"
//                         onClick={navigateToAbout}>
//                   Learn About Me
//                 </button>
//               </div>
//             </div>
//             <div className="my-work-container">
//               <div className="my-work-header">
//                 <strong>My Work</strong> (hover for a preview)
//               </div>
//               <div className="project-card-container">
//                 <ProjectCard
//                   title="Don Efficace"
//                   description="Designed a donation ecosystem for an effective altruism NPO, helping donors visualize their impact and donate with more diligence."
//                   tag="Product"
//                   destination="/donEfficace"
//                   // preview=
//                 />
//                 <ProjectCard
//                   title="Flow Financial"
//                   description="Ideated a mobile app geared towards helping young adults find their footing in early personal finances and budgeting. "
//                   tag="Case Study"
//                 />
//                 <ProjectCard
//                   title="Stamped"
//                   description="Ideated a social experiences app to help small business owners cultivate a  following and create genuine connections with customers."
//                   tag="Exploration"
//                 />
//                 <ProjectCard
//                   title="MyFitnessPal"
//                   description="Redesigned the industry-leading calorie counting app to better align with user needs."
//                   tag="Case Study"
//                 />
//                 <ProjectCard
//                   title="DietMe"
//                   description="Ideated a mobile app to help people with dietary restrictions and visual impairments confidently shop for groceries."
//                   tag="Exploration"
//                 />
//               </div>
//             </div>
//           </div>
//           <Footer/>
//         </div>
//   );
// };