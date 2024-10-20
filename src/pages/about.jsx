import React, {useState} from "react";
import { Link } from "react-router-dom";
import ThanksSection from '../components/ThanksSection/ThanksSection.jsx';
import collage from '../assets/Images/collage.png'
import HoverPopUp from '../components/HoverPopUp/HoverPopUp.jsx'
import "../styles/style.css";

export default function about() {

  const [msg, setMsg] = useState('')
  const [showMsg, setShowMsg] = useState(false)

  const handleMouseMove = (event) => {
    const div = event.target.getBoundingClientRect();
    const x = ((event.clientX - div.left) / div.width) * 100; // x in %
    const y = ((event.clientY - div.top) / div.height) * 100; // y in %

    // Defining hover regions
    if (x < 16 && y < 16 || (x >= 16 && x < 30 && y < 24)) {
      setMsg("A Dennis Rodman poster I made. He's known for his eccentric personality and his god-given knack for doing all of the little jobs on the court that never get credit.")
    }
    else if (x >= 30 && x < 43 && y < 24 || (x >= 43 && x < 54 && y < 13)) {
      setMsg('A warm welcome billboard. How many other designers have one of those?')
    }
    else if (x >= 43 && x < 50 && y >= 13 && y < 24 || (x >= 34 && x < 60 && y >= 24 && y < 42) || (x >= 60 && x < 71 && y >= 32 && y < 47) || (x >= 71 && x < 79 && y >= 32 && y < 40)) {
      setMsg('Some shots from my time in Edinburgh... If you can’t tell by now, I’m half Scott & half Venezuelan!')
    }
    else if (x < 16 && y >= 16 && y < 24) {
      setMsg('Life is simple. Death, taxes and me getting pho.')
    }
    else if (x < 34 && y >= 24 && y < 47) {
      setMsg("Lianne La Havas’ self-titled is my go-to comfort album. It's among Care For Me and Ugh, Those Feels Again as my 3 favourite albums.")
    }
    else if (x < 23 && y >= 47 && y < 72) {
      setMsg('A pic from when I went to see JID & Smino live @ History. Great energy. Two of my fav artists. ')
    }
    else if (x < 30 && y >= 72) {
      setMsg("Shoutout to my first Blueprint design team: Shaahana, Jackie, Sunny & Hilary!")
    }
    else if (x >= 30 && y >= 72) {
      setMsg('UW Blueprint is a collective of students @UW building tech for social good! We work with NPO’s and enable them with custom tech.')
    }
    else if (x >= 23 && x < 62 && y >= 62 && y < 72 || (x >= 23 && x < 42 && y >= 47 && y < 62)) {
      setMsg('I love to read on my commute. I mainly dive into non-fiction business, philosophy & memoirs. My top picks: The Psychology of Money, Shoe Dog & Poverty, by America.')
    }
    else if (x >= 34 && x < 60 && y >= 42 && y < 47 || (x >= 42 && x < 67 && y >= 47 && y < 62)) {
      setMsg('I’ve been a Raptors fan since 2016 but I really love any team or player with grit and hustle.')
    }
    else if (x >= 62 && y >= 62 && y < 72 || (x >= 67 && y >= 47 && y < 62) || (x >= 71 && y >= 40 && y < 47)) {
      setMsg('Soldering a few resistors. I’m a soon-to-be engineer after all!')
    }
    else if (x >= 79 && y >= 24 && y < 40) {
      setMsg('My Mom’s catering company, Latin Basket has a cult following among Venezuelan Mississaugans and I’ve been selling/doing cash for her at Latin events since I was 10!')
    }
    else if (x >= 60 && x < 79 && y >= 24 && y < 32 || (x >= 50 && y >= 13 && y < 24)) {
      setMsg('@MississaugaLatinFest with the crew! You could find me at the front of the booth, selling empanadas and tequenos, with recreational Spanish, at best. I’ve learned to adapt and communicate in a fast-paced environments.')
    }
    else if (x >= 54 & y < 13) {
      setMsg('A nice street view taken in Milngavie, Scotland.')
    }
    else setMsg('')

    setShowMsg(msg !== '');
  }

  const handleMouseLeave = () => {
    setShowMsg(false);
  };

  
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleCursorPosition = (event) => {
    setCursorPosition({
      x: event.pageX,
      y: event.pageY,
    });
  };


  return (
    <div className="device-container">
      <div className="page-content">
        <div className="collage-section">
          <div className="ht-section">
            <h3>More than just a guy in tech</h3>
            <p>Given that my design career started 
              with making collages during the pandemic, 
              I think it’s a fitting way to introduce myself. 
              <b> Hover over the cut-outs to get a little more 
              insight into the picture and myself.</b>
            </p>
          </div>
          <div className="collage-container"
            onMouseMove={(event) => {
              handleMouseMove(event);
              handleCursorPosition(event);
            }}
            onMouseLeave={handleMouseLeave}
          >
            <img className="collage"  src={collage} alt="collage"/>
          </div>
          {showMsg && (
            <HoverPopUp
              x={cursorPosition.x}
              y={cursorPosition.y}
              msg={msg}
          />)}
          {/* <HoverPopUp
          x={cursorPosition.x}
          y={cursorPosition.y}
          msg={msg}
          /> */}
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
