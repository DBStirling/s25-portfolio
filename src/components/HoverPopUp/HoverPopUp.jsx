import React from 'react'
import './HoverPopUp.css'

export default function HoverPopUp(props) {

  const { msg, x, y } = props;
  const viewportWidth = window.innerWidth;
  const offset = 20; // Padding distance from the cursor

  const isNearRight = x + 400 > viewportWidth;
  const popUpLeftPosition = isNearRight ? x - 440 : x + 1;

  return (
    <div className='pop-up-container'
          style={{
            top: y + 1, // Add an offset to avoid overlapping the cursor
            left: popUpLeftPosition,
          }}>
      <p className='pop-up-text'>{msg}</p>
    </div>
  )
}
