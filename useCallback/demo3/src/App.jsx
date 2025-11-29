import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Profile  from './Profile'
import About from './About'

function App() {
  const name="shubham";

  return (
   <div style={{border:"2px solid black" , padding:"10px"}}>
    <Profile name={name}/>
    <About name={name}/>
   </div>
  )
}

export default App
