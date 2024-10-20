import React from 'react'
import './MiniProjectCard.css'
import ProjectTag from '../ProjectTag/ProjectTag'

export default function MiniProjectCard() {

const [title, tag, thumb] = props

    return (
        <div className='mini-project-container'>
            <img className='thumbnail' src={thumb}/>
            <div className='mini-content'>
                <h5>{title}</h5>
                <ProjectTag tag={tag}/>
            </div>
        </div>
    )
}
