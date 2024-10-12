import React from "react";
import { Link } from "react-router-dom";
import ModalImage from "react-modal-image";
import ThanksSection from '../components/ThanksSection.jsx';
import collage from '../assets/Images/collage.png'
import "../styles/style.css";

export default function about() {
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
          <div className="collage-container">
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
