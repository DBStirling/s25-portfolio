import React from 'react'
import "./Divider.css"

export default function Divider(props) {

    const { title } = props

  return (
    <div className='divider-container'>
        <div className='divider-line'/>
        <div className='divider-text'>
        {title}
        </div>
        <div className='divider-line'/>
    </div>
  )
}
