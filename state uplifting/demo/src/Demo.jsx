import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import User from './User';



function Demo(){
  console.log("in demo :");
  const[count,setCount]=useState(0);

  const handleCount=()=>{
    setCount(count+1)
  }

  return(
    <div style={{border:"2px solid black", padding:"200px"}}>
      <h1>{count}</h1>
      <button onClick={handleCount}>Click</button>
      <User count = {count}/>
    </div>
  )
  
}

export default Demo;
