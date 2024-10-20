import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MiniProjectCard.css'
import ProjectTag from '../ProjectTag/ProjectTag'

export default function MiniProjectCard(props) {

const {title, tag, miniThumb, link} = props
const [isHovered, setIsHovered] = useState(false);


    return (
        <Link
        to={link}
        className='card-container'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ textDecoration: 'none', color: 'inherit' }} // Keeps text styles consistent
        >
        <div className='mini-project-container'>
            <img className='thumbnail' src={miniThumb}/>
            <div className='mini-content'>
                <h5>{title}</h5>
                <ProjectTag tag={tag}/>
            </div>
        </div>
        </Link>
    )
}
