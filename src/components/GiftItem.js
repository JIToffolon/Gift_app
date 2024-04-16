import React from 'react'

export const GiftItem = ({title,url}) => {
  return (
    <div className='card animate__animated animate__backInLeft'>
        <img src={url} alt={title}/>
        <p>{title}</p>
    </div>
  )
}

