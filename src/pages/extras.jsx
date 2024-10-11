import React from 'react'
import rodmanCollage from "../assets/Images/extras/rodman-collage.png"
import lebronFourthChip from "../assets/Images/extras/lebron-fourth-chip.png"
import wilguensGp from "../assets/Images/extras/wilguens-gp.PNG"
import jordanCollage from "../assets/Images/extras/mj-collage.png"
import lillardNeon from "../assets/Images/extras/lillard-neon.png"
import russOkc from "../assets/Images/extras/russ-okc.png"

export default function extras() {
  return (
    <div className='device-container'>
      <div className='page-content'>
        <div className='ht-section'>
          <h3>My work <em>before product</em></h3>
          <b>I used to run a graphic design business 
            and worked in a handful of spaces, creating 
            basketball graphics, music covers and ultimately, 
            a lot of basketball stuff! </b>
        </div>
        <div className='graphics-section'>
          <div className='graphics-column'>
            <img className='graphic' src='../assets/Images/extras/rodman-collage.png'/>
          </div>

        </div>
      </div>

    </div>
  )
}
