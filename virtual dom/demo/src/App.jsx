import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App(){
  // console.log("in demo");
  // const[count,setCount] = useState(0);

  // return(
  //   <div style={{border:"2px solid blue" , padding :"200px"}}>
  //     <h1>{count}</h1>
  //     <button onClick={() =>setCount(count+1)}>Click</button>
  //   </div>
  // )

  const[count,setCount]= useState(0);

  const handkeCount = () =>{
    setCount(count+1);
  }

  return(
    <div style={{border:"2px solid red", padding:"200px"}}>
      <h1>{count}</h1>
      <button onClick={handkeCount}>Click</button>
    </div>
  )
}

export default App
