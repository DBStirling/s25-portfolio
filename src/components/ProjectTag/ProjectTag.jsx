import React from 'react'
import './ProjectTag.css'

export default function ProjectTag(props) {
    const { tag, destination } = props;

    var tagClass
    if (tag == 'Product') tagClass='product'
    else if (tag == 'Exploration') tagClass='exploration'
    else if (tag == 'Case Study') tagClass='case-study'

  return (
    <div className='tag-container'>
        <div className={`cicle ${tagClass}`}/>
        <div className='tag'>{tag}</div>
    </div>
  )
}
