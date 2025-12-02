import React from 'react'

function Hero({color}) {
  return (
    <div style={{border:"2px solid black" ,padding:"10px", backgroundColor:color}}>
      {color}
    </div>
  )
}

export default Hero
