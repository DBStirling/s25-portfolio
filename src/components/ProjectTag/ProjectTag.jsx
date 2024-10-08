import React from 'react'
import './ProjectTag.css'

export default function ProjectTag(props) {
    props={tag}

    var tagClass
    if (tag == 'Product') tagClass='product'
    else if (tag == 'Exploration') tagClass='exploration'
    else if (tag == 'Case Study') tagClass='case-study'
    
  return (
    <div className='container'>
        <div className={`cicle ${tagClass}`}/>
        <div className='tag'>{tag}</div>
    </div>
  )
}
