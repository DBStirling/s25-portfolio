import React from 'react'
import ModalImage from "react-modal-image";
import ThanksSection from '../components/ThanksSection/ThanksSection.jsx'
import miniFlow from '../assets/Images/mini-flow-thumb-simple.png'
import miniLIV from '../assets/Images/mini-liv-thumb-simple.png'
import rodmanCollage from "../assets/Images/extras/rodman-collage.png"
import lebronFourthChip from "../assets/Images/extras/lebron-fourth-chip.png"
import wilguensGp from "../assets/Images/extras/wilguens-gp.png"
import jordanCollage from "../assets/Images/extras/mj-collage.jpg"
import lillardNeon from "../assets/Images/extras/lillard-neon.png"
import russOkc from "../assets/Images/extras/russ-okc.png"
import teriqueGhp from "../assets/Images/extras/terique-ghp.png"
import teriqueUni from "../assets/Images/extras/terique-uni.png"
import fvv from "../assets/Images/extras/fvv.png"
import lebronCollage from "../assets/Images/extras/lebron-collage.png"
import sprung from "../assets/Images/extras/sprung-kcwavy.png"
import paak from "../assets/Images/extras/paak.png"
import russRockets from "../assets/Images/extras/russ-rockets.png"
import sga from "../assets/Images/extras/SGAokc2.png"

export default function extras() {
  return (
    <div className='device-container'>
      <div className='page-content'>
        <div className='ht-section'>
          <h3>My work <em>before product</em></h3>
          <p>I used to run a graphic design business 
            and worked in a handful of spaces, creating 
            basketball graphics, music covers and ultimately, 
            a looooot more basketball stuff! </p>
        </div>
        <div className='graphics-section'>
          <div className='graphics-column'>
            <ModalImage
              className='graphic'
              small={rodmanCollage}
              large={rodmanCollage}
              alt="A Dennis Rodman collage that I made and ended up turning into a t-shirt + poster"
              hideDownload={true}
            />
            <ModalImage
              className='graphic'
              small={sga}
              large={sga}
              alt="my favourite player in the league at the moment, SGA"
              hideDownload={true}
            />
            <ModalImage
              className='graphic'
              small={lebronFourthChip}
              large={lebronFourthChip}
              alt="LeCap graphic after his 2020 ring"
              hideDownload={true}
            />
            <ModalImage
              className='graphic'
              small={wilguensGp}
              large={wilguensGp}
              alt="Montreal's Marquee 2022 prospect's commitment to NBA Academy Latin America"
              hideDownload={true}
            />
            <ModalImage
              className='graphic'
              small={jordanCollage}
              large={jordanCollage}
              alt="Was feeling inspired after watching The Last Dance"
              hideDownload={true}
            />
            <ModalImage
              className='graphic'
              small={lillardNeon}
              large={lillardNeon}
              alt="Dame took such a 'bad shot' that I had to make a graphic about it"
              hideDownload={true}
            />
            <ModalImage
              className='graphic'
              small={russOkc}
              large={russOkc}
              alt="Caricature I made of Mr. Thunder"
              hideDownload={true}
            />
          </div>
          <div className='graphics-column'>
            <ModalImage
              className='graphic'
              small={teriqueGhp}
              large={teriqueGhp}
              alt="One of my last pieces of client work: Terique's commitment to an NCAA D3 team"
              hideDownload={true}
            />
            <ModalImage
              className='graphic'
              small={teriqueUni}
              large={teriqueUni}
              alt="One of my first pieces of client work: Terique's commitment to George Harris Prep"
              hideDownload={true}
            />
            <ModalImage
              className='graphic'
              small={fvv}
              large={fvv}
              alt="Gotta love Freddy V"
              hideDownload={true}
            />
            <ModalImage
              className='graphic'
              small={lebronCollage}
              large={lebronCollage}
              alt="Some work I did for a sports quiz website!"
              hideDownload={true}
            />
            <ModalImage
              className='graphic'
              small={sprung}
              large={sprung}
              alt="Recreated Boondocks characters for a local artist (it's on Spotify, too!)"
              hideDownload={true}
            />
            <ModalImage
              className='graphic'
              small={paak}
              large={paak}
              alt="Played around with brush strokes in Photoshop to create an Anderson .Paak piece"
              hideDownload={true}
            />
            <ModalImage
              className='graphic'
              small={russRockets}
              large={russRockets}
              alt="Mr. Thunder got traded..."
              hideDownload={true}
            />
          </div>
        </div>
            <ThanksSection
                title1={'LIV'}
                tag1={'Product'}
                link1={'/liv'}
                miniThumb1={miniLIV}
                title2={'Flow'}
                tag2={'Case Study'}
                miniThumb2={miniFlow}
                link2={'/flow'}
                showWork={true}
            />
      </div>
    </div>
  )
}
