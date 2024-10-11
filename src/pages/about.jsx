import React from "react";
import { Link } from "react-router-dom";
import ThanksSection from '../components/ThanksSection.jsx';
import "../styles/style.css";

export default function about() {
  return (
    <div className="device-container">
      <div className="page-content">
        <div className="collage-section">
          <div className="ht-section">
            <h3>More than just a guy in tech</h3>
            <b>Given that my design career started 
              with making collages during the pandemic 
              I think it’s a fitting way to introduce myself. 
              <em> Hover over the segments to get a little more 
              insight into the picture and myself.</em>
            </b>
          </div>
          <div className="collage-container">
            {/* <img className="collage"  /> */}
          </div>
        </div>
        <div className="ht-section">
          <h3>My tl;dr</h3>
          <b>
          I’m a Systems Design Engineering student @UWaterloo who 
          <em>loves turning big ideas into things people can actually 
          use.</em> I’m currently designing tenant experiences @Unify and pitching 
          in on all fronts @UW Blueprint, working as a product manager 
          and software developer. 
          <br>
          </br>
          I’ve been solving problems through design for as long as I can 
          remember—founding a graphic design business during the 
          pandemic, working as a product designer for a non-profit, and 
          getting hands-on in engineering & shipping along the way.
          <br>
          </br>
          I blend pragmatic engineering with creative, empathetic design 
          to <em>give users and developers the best bang for their buck. </em>
          I make this possible through developing strong client 
          relationships, conducting extensive research, iterating through 
          countless wireframes (no, seriously) and collaborating 
          cross-functionally in the hopes of <em>building products that give 
          more than they take. </em>
          </b>
        </div>
        <ThanksSection/>
      </div>
    </div>
  );
};
