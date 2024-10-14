import React from 'react'
import './HoverPopUp.css'

export default function HoverPopUp(props) {

  const { msg, x, y } = props;

  return (
    <div className='pop-up-container'
          style={{
            top: y + 1, // Add an offset to avoid overlapping the cursor
            left: x + 1,}}>
      <p>{msg}</p>
    </div>
  )
}
