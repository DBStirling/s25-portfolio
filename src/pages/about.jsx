import React from "react";
import { Link } from "react-router-dom";
import heroGradient from "../assets/Images/hero-gradient.png";
import NavBar from "../components/NavBar/NavBar";
import "../styles/style.css";

export default function about() {
  return (
    <div className="finished-about-page">
      <div className="overlap-group">
        {/* <img className="hero-gradient" alt="Hero gradient" src={heroGradient} /> */}
        <div className="device-container">
          <NavBar/>
          <div className="main-content">
            <div className="collage-section">
              <div className="div-2">
                <div className="div-wrapper-2">
                  <p className="text-wrapper-3">More than just a guy in tech</p>
                </div>
                <p className="p">
                  <span className="span">
                    Given that my design career started with making collages during the pandemic I think it’s a fitting
                    way to introduce myself.{" "}
                  </span>
                  <span className="text-wrapper-4">
                    Hover over the segments to get a little more insight into the picture and myself.
                  </span>
                </p>
              </div>
              <div className="collage-container" />
            </div>
            <div className="tldr-section">
              <div className="div-wrapper-2">
                <div className="text-wrapper-3">My tl;dr</div>
              </div>
              <div className="flexcontainer">
                <p className="p">
                  <span className="span">I’m a Systems Design Engineering student </span>
                  <span className="text-wrapper-5">@UWaterloo</span>
                  <span className="span"> who loves </span>
                  <span className="text-wrapper-4">turning big ideas into things people can actually use. </span>
                  <span className="span">I’m currently designing tenant experiences </span>
                  <span className="text-wrapper-5">@Unify</span>
                  <span className="span"> and pitching in on all fronts </span>
                  <span className="text-wrapper-5">@UW Blueprint</span>
                  <span className="span">
                    , working as a product manager and software developer. <br />
                  </span>
                </p>
                <p className="p">
                  <span className="span">
                    I’ve been solving problems through design for as long as I can remember—founding a graphic design
                    business during the pandemic, working as a product designer for a non-profit, and getting hands-on
                    in engineering &amp; shipping along the way.
                    <br />
                  </span>
                </p>
                <p className="p">
                  <span className="span">
                    I thrive on building strong user relationships, narrowing down on their needs and determining the
                    features that will{" "}
                  </span>
                  <span className="text-wrapper-4">give users and developers with the best bang for their buck</span>
                  <span className="span">
                    . I make this possible with extensive research, design iterations and cross-functional collaboration
                    to define constraints and opportunities in the hopes of{" "}
                  </span>
                  <span className="text-wrapper-4">building products that give more than they take. </span>
                </p>
              </div>
            </div>
            <div className="thanks-section">
              <div className="div-2">
                <div className="text-wrapper-6">Thanks for stopping by!</div>
                <div className="flexcontainer">
                  <p className="p">
                    <span className="span">
                      You’ve made it pretty far—you must want to chat! <br />
                    </span>
                  </p>
                  <p className="text">
                    <span className="span">Hit me up on </span>
                    <span className="text-wrapper-5">LinkedIn</span>
                    <span className="span"> or shoot me an </span>
                    <span className="text-wrapper-5">email</span>
                    <span className="span"> to get in touch.</span>
                  </p>
                </div>
              </div>
              <div className="buttons-container">
                <div className="cta-button">
                  <div className="text-wrapper-7">Check Out My Work</div>
                </div>
                <div className="cta-button-2">
                  <div className="text-wrapper-7">My Work Before Product</div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}