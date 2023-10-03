import React from 'react'

const Cards = ({heading,card1,para}) => {
  return (
    
    <div>
            <img src={card1} alt="" />
            <h4>{heading}</h4>
           <p>{para}</p>
        </div>
  )
}

export default Cards