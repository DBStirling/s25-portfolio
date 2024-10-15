import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import ProjectTag from '../ProjectTag/ProjectTag.jsx'
import './ProjectCard.css'

export default function ProjectCard(props) {
  const { title, description, tag, destination, imgSrc, last } = props;

  const [isHovered, setIsHovered] = useState(false)

  const cardContainer = document.querySelector('.card-container');


  return (
    <div className='see-more-container'>
      <div className='card-container'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
        <div className='card-contents'>
        <div className='card-header'>
          <div className='title'>
            <Link
              className='card-header'
              to='/myFitnessPal'
            >{title}</Link>
          </div>
          <div className='project-tag'>
          <ProjectTag 
            tag={tag}
          />
          </div>
        </div>
        <p className='description'>
          {description}
        </p>
        </div>
        <img src={imgSrc} alt={`${title} Thumbnail`}/>
        {last 
        && <div className="end-work-prompt">
              That's all! See more in&nbsp;<Link to="/about" className="end-work-link">About</Link>&nbsp;or&nbsp;<Link to='/extras' className="end-work-link">Extras</Link>.
            </div>}
      </div>
    </div>
  )
}
