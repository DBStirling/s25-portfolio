import React, { useState } from 'react'
import ProjectTag from '../ProjectTag/ProjectTag.jsx'
import './ProjectCard.css'

export default function ProjectCard(props) {
  const { title, description, tag, destination } = props;

  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className='container'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
      <div className='header'>
        <div className='title'>
          {title}
        </div>
        <ProjectTag 
          tag={tag}
        />
      </div>
      {isHovered && (
        <div className='body'>
          {description}
        </div>
      )}
    </div>
  )
}
