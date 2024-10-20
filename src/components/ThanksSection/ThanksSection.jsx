import React from 'react'
import MiniProjectCard from '../MiniProjectCard/MiniProjectCard'
import './ThanksSection.css'

// ORIGINAL THANKS SECTION
// export default function ThanksSection() {
//   return (
//     <div className='ht-section'>
//         <h3>Thanks for stopping by!</h3>
//         <div className='ht-body'>
//         <p>You’ve made it pretty far—you must want to chat! Shoot me an email or connect on LinkedIn to get in touch.</p>
//         </div>
//     </div>
//   )
// }

export default function ThanksSection(props) {

const {title1, tag1, miniThumb1, title2, tag2, miniThumb2, showWork} = props

  return (
    <div className='thanks-section-container'>
      <h3>Thanks for stopping by!</h3>
      {showWork && (
        <div className='conditional-container'>
          {/* <div className='line'></div> */}
          <div className='ht-section'>
            <p>While you're here, take a look at some of my other work.</p>
            <div className='mini-projects'>
              <MiniProjectCard
                title={title1}
                tag={tag1}
                miniThumb={miniThumb1}
              />
              <MiniProjectCard
                title={title2}
                tag={tag2}
                miniThumb={miniThumb2}
              />
            </div>
          </div>
          {/* <div className='line'></div> */}
        </div>
      )}
      <div className='ht-section'>
        {/* <h4>Reach out.</h4> */}
          <div className='ht-body'>
          <p>
            You’ve made it pretty far—you must want to chat! Shoot me an 
            <span 
                onClick={() => window.open('mailto:dstirlin@uwaterloo.ca')} 
                style={{ cursor: 'pointer', fontWeight: 'normal', fontFamily: 'PP Editorial New' }}
            >
                {' '}email{' '}
            </span> 
            or connect on 
            <span 
                onClick={() => window.open('https://www.linkedin.com/in/david-stirling-949816203/', '_blank')} 
                style={{ cursor: 'pointer', fontWeight: 'normal', fontFamily: 'PP Editorial New' }}
            >
                {' '}LinkedIn {' '}
            </span> 
            to get in touch.
          </p>
          </div>
      </div>

    </div>
  )
}
