import React from 'react'
import './CtaButton.css'

export default function (props) {
    const { text, clickFunctio } = props;

  return (
    <div className='cta-container' onClick={clickFunctio}>
        <div className='cta-text'>
            {`${text}`}
        </div>
    </div>
  )
}
