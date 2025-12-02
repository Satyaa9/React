import React from 'react'

function Card({handleClick}) {
  return (
    <div style={{border:"2px solid black" , padding:"10px"}}>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Card
