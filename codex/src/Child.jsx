import React from 'react'

function Child({handleClick,price}) {
    console.log("in child");
    
  return (
    <div style={{border:"2px solid black" , padding:"10px"}}>
      <h1>Child Component{price}</h1>
      <button onClick={handleClick}>Child btn</button>
    </div>
  )
}

export default React.memo(Child)
