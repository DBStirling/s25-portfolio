import React from 'react'
import ModalImage from "react-modal-image";
import ThanksSection from "../components/ThanksSection.jsx"
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

export default function extras() {
  return (
    <div className='device-container'>
      <div className='page-content'>
        <div className='ht-section'>
          <h3>My work <em>before product</em></h3>
          <p>I used to run a graphic design business 
            and worked in a handful of spaces, creating 
            basketball graphics, music covers and ultimately, 
            a looooot of basketball stuff! </p>
        </div>
        <div className='graphics-section'>
          <div className='graphics-column'>
            <div className='graphic'>
              <ModalImage
                small={rodmanCollage}
                large={rodmanCollage}
                alt="A Dennis Rodman collage that I made and ended up turning into a t-shirt + poster"
                hideDownload={true}
              />
            </div>
            <div className='graphic'>
              <ModalImage
                small={lebronFourthChip}
                large={lebronFourthChip}
                alt="LeCap graphic after his 2020 ring"
                hideDownload={true}
              />
            </div>
            <div className='graphic'>
              <ModalImage
                small={wilguensGp}
                large={wilguensGp}
                alt="Montreal's Marquee 2022 prospect's commitment to NBA Academy Latin America"
                hideDownload={true}
              />
            </div>
            <div className='graphic'>
              <ModalImage
                small={jordanCollage}
                large={jordanCollage}
                alt="Was feeling inspired after watching The Last Dance"
                hideDownload={true}
              />
            </div>
            <div className='graphic'>
              <ModalImage
                small={lillardNeon}
                large={lillardNeon}
                alt="Dame took such a 'bad shot' that I had to make a graphic about it"
                hideDownload={true}
              />
            </div>
            <div className='graphic'>
              <ModalImage
                small={russOkc}
                large={russOkc}
                alt="Carriacature I made of Mr. Thunder"
                hideDownload={true}
              />
            </div>
          </div>
          <div className='graphics-column'>
            <div className='graphic'>
              <ModalImage
                small={teriqueGhp}
                large={teriqueGhp}
                alt="One of my last pieces of client work: Terique's commitment to an NCAA D3 team"
                hideDownload={true}
              />
            </div>
            <div className='graphic'>
              <ModalImage
                small={teriqueUni}
                large={teriqueUni}
                alt="One of my first pieces of client work: Terique's commitment to George Harris Prep"
                hideDownload={true}
              />
            </div>
            <div className='graphic'>
              <ModalImage
                small={fvv}
                large={fvv}
                alt="Gotta love Freddy V"
                hideDownload={true}
              />
            </div>
            <div className='graphic'>
              <ModalImage
                small={lebronCollage}
                large={lebronCollage}
                alt="Some work I did for a sports quiz website!"
                hideDownload={true}
              />
            </div>
            <div className='graphic'>
              <ModalImage
                small={sprung}
                large={sprung}
                alt="Recreated Boondocks characters for a local artist (it's on Spotify, too!)"
                hideDownload={true}
              />
            </div>
            <div className='graphic'>
              <ModalImage
                small={paak}
                large={paak}
                alt="Played around with brush strokes in Photoshop to create an Anderson .Paak piece"
                hideDownload={true}
              />
            </div>
            <div className='graphic'>
              <ModalImage
                small={russRockets}
                large={russRockets}
                alt="Mr. Thunder got traded..."
                hideDownload={true}
              />
            </div>
          </div>
        </div>
        <ThanksSection/>
      </div>
    </div>
  )
}
