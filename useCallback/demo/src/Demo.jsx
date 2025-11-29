import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import User from './User';
// import './App.css'

function Demo(){
  console.log("in Demo");
  const [count,setCount] = useState(0);
  const[price,setPrise]=useState(100);

  const handleClick =useCallback( ()=>{
    setPrise(price+10)
    console.log("clicked");
  },[price])
  
  return(
    <div style={{border:"2px solid black" , padding:"10px"}}>
      <h1>Demo compo...{count}</h1>
    
      <button onClick={()=> setCount(count+1)}>Click</button>
      <User handleClick={handleClick } price={price} count={count}/>
    </div>
  )
}

export default Demo;


