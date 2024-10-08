import React, { useState } from 'react'
import ProjectTag from './ProjectTag'
import './ProjectCard.css'

export default function ProjectCard(props) {
  const props = ({title, description, tag, destination})

  const [ishovered, setIsHovered] = useState(false)

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
