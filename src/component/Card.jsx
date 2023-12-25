//! 1. Create a new React component named ProductCard

import React from 'react'
import  '../card.css'

function Card({product}) {

  return (
    
     <div className='abul'>
      <img src={`/${product.id}.jpg`} alt="" className='image' />
    <h1 className='name'>{product.name}</h1>
    <h2 className='price'>{product.price}</h2>
    <p>{product.description}</p>
   </div>
  )
}

export default Card
