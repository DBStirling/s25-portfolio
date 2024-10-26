import React from 'react'
import './HoverPopUp.css'

export default function HoverPopUp(props) {

  const { msg, x, y } = props;
  const viewportWidth = window.innerWidth;
  const offset = 20; // Padding distance from the cursor

  let popUpLeftPosition
  let isNearRight

  if (viewportWidth >= 1000) {
    isNearRight = x + 400 > viewportWidth;
    popUpLeftPosition = isNearRight ? x - 440 : x + 1;
  } else {
    isNearRight = x + 200 > viewportWidth;
    popUpLeftPosition = isNearRight ? x - 240 : x + 1;
  }

  return (
    <div
      className='pop-up-container'
      style={
        window.innerWidth > 600
          ? {
              top: y + 1, // Add an offset to avoid overlapping the cursor
              left: popUpLeftPosition,
            }
          : {}
      }>
      <p className='pop-up-text'>{msg}</p>
    </div>
  )
}
