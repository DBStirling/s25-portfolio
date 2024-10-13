import React, {useState} from "react";
import { Link } from "react-router-dom";
import ThanksSection from '../components/ThanksSection.jsx';
import collage from '../assets/Images/collage.png'
import "../styles/style.css";

export default function about() {

  const [msg, setMsg] = useState('')
  const [showMsg, setShowMsg] = useState(false)

  const handleMouseMove = (event) => {
    const div = event.target.getBoundingClientRect();
    const x = ((event.clientX - div.left) / div.width) * 100; // x in %
    const y = ((event.clientY - div.top) / div.height) * 100; // y in %

    // Defining hover regions
    if (x < 16 && y < 20 || (x >= 16 && x < 30 && y < 22)) {
      setMsg('A poster I made of one of my all-time favourite players. Dennis Rodman was known for his  rebounding and ability to do all of the little things needed for the team to win.')
      console.log(msg)
    }
  }


  return (
    <div className="device-container">
      <div className="page-content">
        <div className="collage-section">
          <div className="ht-section">
            <h3>More than just a guy in tech</h3>
            <p>Given that my design career started 
              with making collages during the pandemic 
              I think it’s a fitting way to introduce myself. 
              <b> Hover over the segments to get a little more 
              insight into the picture and myself.</b>
            </p>
          </div>
          <div className="collage-container"
            onMouseMove={handleMouseMove}
            // onMouseLeave={handleMouseLeave}
          >
            <img className="collage"  src={collage} alt="collage"/>
          </div>
        </div>
        <div className="ht-section">
          <h3>My tl;dr</h3>
          <div className="ht-body">
            <p>
            I’m a Systems Design Engineering student @UWaterloo who 
            <b> loves turning big ideas into things people can actually 
            use.</b> I’m currently designing tenant experiences @Unify and pitching 
            in on all fronts @UW Blueprint, working as a product manager 
            and software developer. 
            </p>
            <p>
            I’ve been solving problems through design for as long as I can 
            remember—founding a graphic design business during the 
            pandemic, working as a product designer for a non-profit, and 
            getting hands-on in engineering & shipping along the way.
            </p>
            <p>
            I blend pragmatic engineering with creative, empathetic design 
            to <b>give users and developers the best bang for their buck. </b>
            I make this possible through developing strong client 
            relationships, conducting extensive research, iterating through 
            countless wireframes (no, seriously) and collaborating 
            cross-functionally in the hopes of <b>building products that give 
            more than they take. </b>
            </p>
          </div>
        </div>
        <ThanksSection/>
      </div>
    </div>
  );
};
