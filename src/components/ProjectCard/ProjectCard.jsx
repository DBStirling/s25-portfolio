import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import ProjectTag from '../ProjectTag/ProjectTag.jsx'
import './ProjectCard.css'

export default function ProjectCard(props) {
  const { title, description, tag, destination, imgSrc } = props;

  const [isHovered, setIsHovered] = useState(false)

  const cardContainer = document.querySelector('.card-container');


  return (
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
        <ProjectTag 
          tag={tag}
        />
      </div>
      <div className='body'>
        {description}
      </div>
      </div>
      <img src={imgSrc} alt={`${title} Thumbnail`}/>
    </div>
  )
}
