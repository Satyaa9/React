import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import User from './User';



function Demo(){
  console.log("in demo :");
  const[count,setCount]=useState(0);
  const[user,setUser] = useState(100);

  const handleCount1=()=>{
    setCount(count+1)
  }

   const handleCount2=()=>{
    setUser(user+1)
  }

  return(
    <div style={{border:"2px solid black", padding:"200px"}}>
      <h1>Demo{count}</h1>
      <button onClick={handleCount2}>Demo</button>
      <User handleCount={handleCount1} count={count}/>
    </div>
  )
  
}

export default Demo;
