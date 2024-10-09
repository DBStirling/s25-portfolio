import React from 'react'
import './CtaButton.css'

export default function (props) {
    const { text } = props;

  return (
    <div className='cta-container'>
        <div className='cta-text'>
            {`${text}`}
        </div>
    </div>
  )
}
